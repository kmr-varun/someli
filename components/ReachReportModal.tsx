'use client';

import { useState, useEffect } from 'react';

const BLOCKED_DOMAINS = [
  'gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com',
  'icloud.com','mail.com','protonmail.com','zoho.com','yandex.com',
  'live.com','msn.com','me.com','inbox.com','gmx.com',
];

const COMPANY_SIZES = [
  '1–50 employees',
  '51–200 employees',
  '201–500 employees',
  '501–1,000 employees',
  '1,000+ employees',
];

const PRIMARY_GOALS = [
  'Amplifying brand reach via employee networks',
  'Boosting organic social media engagement',
  'Streamlining leadership & employee advocacy content',
  'Increasing social selling capabilities',
];

const POST_FREQUENCIES = [
  'Less than 5 posts/month',
  '5–15 posts/month',
  '16–30 posts/month',
  '31–60 posts/month',
  '60+ posts/month',
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReachReportModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    companySize: '',
    goals: [] as string[],
    postFrequency: '',
    notes: '',
  });
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  function validateEmail(email: string) {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return '';
    if (BLOCKED_DOMAINS.includes(domain)) return 'Please use your corporate email address.';
    return '';
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setForm(f => ({ ...f, email: val }));
    setEmailError(validateEmail(val));
  }

  function toggleGoal(goal: string) {
    setForm(f => ({
      ...f,
      goals: f.goals.includes(goal) ? f.goals.filter(g => g !== goal) : [...f.goals, goal],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateEmail(form.email);
    if (err) { setEmailError(err); return; }
    setSubmitted(true);
  }

  const inputCls = 'w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[8px] px-4 py-3 text-white text-[14px] placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#ED6B52] transition-colors font-montserrat';
  const labelCls = 'block text-[12px] font-semibold text-[rgba(255,255,255,0.6)] uppercase tracking-[0.08em] mb-1.5 font-montserrat';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-[16px] p-6 sm:p-8 flex flex-col gap-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.15)] transition-colors text-[18px] leading-none"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="flex flex-col gap-1.5 pr-8">
              <h2 className="font-montserrat font-bold text-[22px] sm:text-[26px] text-white leading-[1.2] tracking-[-0.5px]">
                Request Your Free Reach Report
              </h2>
              <p className="font-montserrat text-[14px] text-[rgba(255,255,255,0.5)] leading-[1.5]">
                Get a personalized analysis of your brand's true reach potential.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className={labelCls}>First & Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className={inputCls}
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={`${inputCls} ${emailError ? 'border-red-500' : ''}`}
                    value={form.email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <p className="mt-1 text-red-400 text-[12px] font-montserrat">{emailError}</p>}
                </div>
                <div>
                  <label className={labelCls}>Telephone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 234 567 8900"
                    className={inputCls}
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  />
                </div>
              </div>

              {/* Job Title + Company row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Job Title / Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="Chief Marketing Officer"
                    className={inputCls}
                    value={form.jobTitle}
                    onChange={e => setForm(f => ({ ...f, jobTitle: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={labelCls}>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    className={inputCls}
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  />
                </div>
              </div>

              {/* Company Size */}
              <div>
                <label className={labelCls}>Company Size *</label>
                <select
                  required
                  className={`${inputCls} appearance-none cursor-pointer`}
                  value={form.companySize}
                  onChange={e => setForm(f => ({ ...f, companySize: e.target.value }))}
                >
                  <option value="" disabled>Select company size</option>
                  {COMPANY_SIZES.map(s => <option key={s} value={s} className="bg-[#111] text-white">{s}</option>)}
                </select>
              </div>

              {/* Primary Goals */}
              <div>
                <label className={labelCls}>Primary Goal(s) *</label>
                <div className="flex flex-col gap-2">
                  {PRIMARY_GOALS.map(goal => (
                    <label key={goal} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${
                          form.goals.includes(goal)
                            ? 'bg-[#ED6B52] border-[#ED6B52]'
                            : 'bg-transparent border-[rgba(255,255,255,0.25)] group-hover:border-[#ED6B52]'
                        }`}
                        onClick={() => toggleGoal(goal)}
                      >
                        {form.goals.includes(goal) && (
                          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                            <path d="M1 3L3.5 5.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span
                        className="font-montserrat text-[13px] text-[rgba(255,255,255,0.75)] leading-[1.4]"
                        onClick={() => toggleGoal(goal)}
                      >
                        {goal}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Post Frequency */}
              <div>
                <label className={labelCls}>Current Monthly Post Frequency</label>
                <select
                  className={`${inputCls} appearance-none cursor-pointer`}
                  value={form.postFrequency}
                  onChange={e => setForm(f => ({ ...f, postFrequency: e.target.value }))}
                >
                  <option value="" disabled>Select frequency</option>
                  {POST_FREQUENCIES.map(f => <option key={f} value={f} className="bg-[#111] text-white">{f}</option>)}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className={labelCls}>Additional Notes / Specific Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your specific goals or challenges..."
                  className={`${inputCls} resize-none`}
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-b from-[#EE6F58] to-[#D33546] text-white font-montserrat font-bold text-[15px] py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Generate My Report →
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="flex flex-col items-center gap-6 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[rgba(237,107,82,0.15)] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16L12 22L26 8" stroke="#ED6B52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-montserrat font-bold text-[22px] text-white">You're all set!</h3>
              <p className="font-montserrat text-[15px] text-[rgba(255,255,255,0.5)] leading-[1.5] max-w-[380px]">
                We've received your request. Our team will prepare your personalized reach report and be in touch shortly.
              </p>
            </div>
            <button
              onClick={onClose}
              className="border border-[#ED6B52] text-[#ED6B52] font-montserrat font-bold text-[14px] px-8 py-3 rounded-full hover:bg-[#ED6B52] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
