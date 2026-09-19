import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    reason: 'Full-Time Opportunity',
    subject: '',
    message: '',
    company_fax: '', // honeypot
    website_trap: '', // honeypot
  });

  const [formLoadTimestamp] = useState<number>(() => Date.now());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    isMock?: boolean;
  }>({ type: 'idle', message: '' });

  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const contactEmail = 'arbaazhasan.ah@gmail.com';

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: 'idle', message: '' });

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        submission_time: formLoadTimestamp,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.',
          isMock: data.isMock,
        });
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          company: '',
          reason: 'Full-Time Opportunity',
          subject: '',
          message: '',
          company_fax: '',
          website_trap: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message:
            data.error ||
            'Failed to dispatch message. Please try again or email directly at arbaazhasan.ah@gmail.com.',
        });
      }
    } catch (err: any) {
      setSubmitStatus({
        type: 'error',
        message:
          'Network connection error. Please ensure backend server is active, or reach out directly at arbaazhasan.ah@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden w-full max-w-full">
      {/* Background illumination */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 border border-black/5 dark:border-white/10">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you have an engineering opportunity, a distributed systems challenge, or want to discuss
            collaborative projects, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  DIRECT CHANNELS
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Arbaz Hasan
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Full-Stack Software Engineer • Distributed Systems Specialist
                </p>
              </div>

              {/* Direct Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 truncate block"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-xl glass-panel-subtle text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Professional Social Profiles */}
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/arbazah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-panel-subtle border border-black/5 dark:border-white/10 flex items-center justify-between group hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        LinkedIn
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        linkedin.com/in/arbazah
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono group-hover:translate-x-1 transition-transform">
                    Connect →
                  </span>
                </a>

                <a
                  href="https://github.com/Arbaazhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-panel-subtle border border-black/5 dark:border-white/10 flex items-center justify-between group hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        GitHub
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        github.com/Arbaazhasan
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </a>
              </div>

              {/* Response Time Pledge */}
              <div className="p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Prompt responses guaranteed within 24 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Glassmorphic Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-black/10 dark:border-white/10 shadow-xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                All inquiries are delivered directly to my personal inbox with reply-to routing.
              </p>

              {/* Status Alert Banner */}
              {submitStatus.type !== 'idle' && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm flex items-start gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-semibold block mb-0.5">
                      {submitStatus.type === 'success' ? 'Transmission Successful' : 'Submission Alert'}
                    </span>
                    <p>{submitStatus.message}</p>
                    {submitStatus.isMock && (
                      <span className="text-[11px] opacity-80 mt-1 block">
                        (Development notice: Recorded in local server console. Enter SMTP credentials in server/.env for live dispatch.)
                      </span>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot Fields (Hidden to real humans, traps bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_fax">Leave this field blank</label>
                  <input
                    type="text"
                    id="company_fax"
                    name="company_fax"
                    value={formData.company_fax}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    id="website_trap"
                    name="website_trap"
                    value={formData.website_trap}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border ${
                        errors.name ? 'border-rose-500' : 'border-black/10 dark:border-white/10'
                      } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border ${
                        errors.email ? 'border-rose-500' : 'border-black/10 dark:border-white/10'
                      } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company & Reason Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Organization / Company <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Systems"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Reason for Contact
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    >
                      <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                      <option value="Contract / Consulting">Contract / Consulting</option>
                      <option value="Technical Collaboration">Technical Collaboration</option>
                      <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Role Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border ${
                      errors.subject ? 'border-rose-500' : 'border-black/10 dark:border-white/10'
                    } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please outline the context or details of your inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border ${
                      errors.message ? 'border-rose-500' : 'border-black/10 dark:border-white/10'
                    } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
