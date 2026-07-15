import React, { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm({ ...form, [key]: e.target.value }),
    className:
    'w-full mt-2 bg-transparent border-b border-river/40 py-3 focus:border-copper outline-none font-body text-lg transition-colors'
  });

  return (
    <div className="bg-parchment pt-40 md:pt-48 pb-32 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow-copper">Correspondence</p>
        <h1 className="display-heading text-forest mt-4">Contact</h1>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-carbon/80 max-w-md">
              Questions about a pattern, a custom order, or the state of the river?
              Write to the bench — we answer every letter.
            </p>
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-copper mt-1" size={18} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
                    Email
                  </p>
                  <p className="spec-mono">buckeyeflies@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-copper mt-1" size={18} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
                    Studio
                  </p>
                  <p className="spec-mono">Canal Winchester, Ohio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-copper mt-1" size={18} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
                    Bench Hours
                  </p>
                  <p className="spec-mono">Tue–Sat · 9am–5pm</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
                Name
              </label>
              <input required {...field('name')} />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
                Email
              </label>
              <input required type="email" {...field('email')} />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
                Message
              </label>
              <textarea
                required
                rows={5}
                {...field('message')}
                className="w-full mt-2 bg-transparent border-b border-river/40 py-3 focus:border-copper outline-none font-body text-lg resize-none transition-colors" />
              
            </div>
            <button type="submit" className="btn-primary">
              Send Letter
            </button>
            {sent &&
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest">
                ✓ Your letter is on its way to the bench.
              </p>
            }
          </form>
        </div>
      </div>
    </div>);

}