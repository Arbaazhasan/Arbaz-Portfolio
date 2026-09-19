import nodemailer from 'nodemailer';

export interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  reason?: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
  isMock?: boolean;
}

export async function sendContactEmail(data: EmailPayload): Promise<SendEmailResult> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const destinationEmail = process.env.CONTACT_EMAIL || 'arbaazhasan.ah@gmail.com';

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const formattedHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f7; margin: 0; padding: 24px; color: #1d1d1f; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06); border: 1px solid #e5e5ea; }
          .header { background: linear-gradient(135deg, #09090b 0%, #1e1b4b 100%); color: #ffffff; padding: 28px 32px; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: #a1a1aa; }
          .content { padding: 32px; }
          .field-group { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #86868b; font-weight: 600; margin-bottom: 4px; }
          .value { font-size: 15px; color: #1d1d1f; line-height: 1.5; }
          .message-box { background: #fbfbfd; border: 1px solid #e5e5ea; border-radius: 12px; padding: 20px; font-size: 15px; line-height: 1.6; color: #1d1d1f; white-space: pre-wrap; }
          .footer { padding: 20px 32px; background: #f5f5f7; border-top: 1px solid #e5e5ea; font-size: 12px; color: #86868b; text-align: center; }
          .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; background: #e0e7ff; color: #3730a3; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Message</h1>
            <p>Sent from Arbaz Hasan's Personal Portfolio Website</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">Sender Name</div>
              <div class="value"><strong>${escapeHtml(data.name)}</strong></div>
            </div>

            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>

            ${data.company ? `
            <div class="field-group">
              <div class="label">Organization / Company</div>
              <div class="value">${escapeHtml(data.company)}</div>
            </div>
            ` : ''}

            ${data.reason ? `
            <div class="field-group">
              <div class="label">Inquiry Reason</div>
              <div class="value"><span class="badge">${escapeHtml(data.reason)}</span></div>
            </div>
            ` : ''}

            <div class="field-group">
              <div class="label">Subject</div>
              <div class="value">${escapeHtml(data.subject)}</div>
            </div>

            <div class="field-group">
              <div class="label">Message Content</div>
              <div class="message-box">${escapeHtml(data.message)}</div>
            </div>

            <div class="field-group" style="margin-bottom: 0;">
              <div class="label">Received At (IST)</div>
              <div class="value" style="font-size: 13px; color: #6e6e73;">${timestamp}</div>
            </div>
          </div>
          <div class="footer">
            Direct reply will reach <strong>${escapeHtml(data.email)}</strong>
          </div>
        </div>
      </body>
    </html>
  `;

  // Check if real SMTP credentials exist
  if (!host || !user || !pass) {
    console.log('\n================ [CONTACT SUBMISSION PREVIEW (TEST MODE)] ================');
    console.log(`To: ${destinationEmail}`);
    console.log(`From: "${data.name}" <${data.email}>`);
    console.log(`Subject: [Portfolio Contact] ${data.subject}`);
    if (data.company) console.log(`Company: ${data.company}`);
    if (data.reason) console.log(`Reason: ${data.reason}`);
    console.log(`Message:\n${data.message}`);
    console.log('=========================================================================\n');
    console.log('ℹ️ SMTP credentials are not yet configured in server/.env.');
    console.log('ℹ️ Email was logged successfully to server console. To enable live dispatch, set SMTP_HOST, SMTP_USER, and SMTP_PASS.\n');

    return {
      success: true,
      message: 'Message received and recorded in local test mode. (Configure SMTP in .env for live email delivery)',
      isMock: true,
    };
  }

  // Create real Nodemailer transport
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `"${data.name} via Portfolio" <${user}>`,
    to: destinationEmail,
    replyTo: data.email,
    subject: `[Portfolio Inquiry] ${data.subject}`,
    text: `From: ${data.name} (${data.email})\nCompany: ${data.company || 'N/A'}\nReason: ${data.reason || 'N/A'}\n\nMessage:\n${data.message}\n\nReceived: ${timestamp}`,
    html: formattedHtml,
  };

  await transporter.sendMail(mailOptions);

  return {
    success: true,
    message: 'Message sent successfully. I will get back to you shortly!',
    isMock: false,
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
