import { Router, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import validator from 'validator';
import { sendContactEmail } from '../services/mailer.js';

export const contactRouter = Router();

// Rate limiter: Max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many contact requests from this IP. Please try again after 15 minutes.',
  },
});

contactRouter.post('/', contactLimiter, async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      email,
      subject,
      message,
      company,
      reason,
      company_fax, // Honeypot field 1
      website_trap, // Honeypot field 2
      submission_time, // Time-based bot detection
    } = req.body;

    // 1. Bot Honeypot Check: If honeypot fields are filled, pretend success to deceive bot
    if (company_fax || website_trap) {
      console.warn('⚠️ Bot detected via honeypot trap. Silently dropping payload.');
      res.status(200).json({
        success: true,
        message: 'Message received successfully.',
      });
      return;
    }

    // 2. Minimum form fill time check (bots usually submit in under 1 second)
    if (submission_time && Date.now() - Number(submission_time) < 1000) {
      console.warn('⚠️ Bot detected: submission too fast (< 1s). Silently dropping payload.');
      res.status(200).json({
        success: true,
        message: 'Message received successfully.',
      });
      return;
    }

    // 3. Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || validator.isEmpty(name.trim())) {
      errors.name = 'Full name is required.';
    } else if (name.trim().length < 2 || name.trim().length > 100) {
      errors.name = 'Name must be between 2 and 100 characters.';
    }

    if (!email || typeof email !== 'string' || validator.isEmpty(email.trim())) {
      errors.email = 'Email address is required.';
    } else if (!validator.isEmail(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!subject || typeof subject !== 'string' || validator.isEmpty(subject.trim())) {
      errors.subject = 'Subject is required.';
    } else if (subject.trim().length < 3 || subject.trim().length > 200) {
      errors.subject = 'Subject must be between 3 and 200 characters.';
    }

    if (!message || typeof message !== 'string' || validator.isEmpty(message.trim())) {
      errors.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    } else if (message.trim().length > 5000) {
      errors.message = 'Message cannot exceed 5000 characters.';
    }

    if (company && typeof company === 'string' && company.trim().length > 100) {
      errors.company = 'Company name cannot exceed 100 characters.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        error: 'Validation failed. Please check the form fields.',
        details: errors,
      });
      return;
    }

    // 4. Sanitize inputs
    const sanitizedPayload = {
      name: validator.escape(name.trim()),
      email: validator.normalizeEmail(email.trim()) || email.trim(),
      subject: validator.escape(subject.trim()),
      message: message.trim(), // Kept with line breaks, escaped in mailer
      company: company ? validator.escape(company.trim()) : undefined,
      reason: reason ? validator.escape(String(reason).trim()) : undefined,
    };

    // 5. Send via Mailer service
    const result = await sendContactEmail(sanitizedPayload);

    res.status(200).json({
      success: true,
      message: result.message,
      isMock: result.isMock,
    });
  } catch (error: any) {
    console.error('Contact handler error:', error?.message || error);
    res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while sending your message. Please try again or reach out directly at arbaazhasan.ah@gmail.com.',
    });
  }
});
