import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How are your flies tied?',
    a: 'Every fly is hand-tied at our studio in Ohio, one at a time, on a single vise. Nothing is mass-produced or machine-wound.',
  },
  {
    q: 'Do you take custom orders?',
    a: 'Yes. If you need a specific pattern, size, or quantity for a hatch, write to us through the Contact page. Lead times vary by complexity.',
  },
  {
    q: 'What hook sizes do you use?',
    a: 'We tie on premium chemically-sharpened hooks. Each pattern lists its standard hook size on the product page; alternates are available on request.',
  },
  {
    q: 'How should I store my flies?',
    a: "Keep them dry and out of direct sunlight. Our archival packaging is designed for long-term storage — let flies dry fully before returning them to a box.",
  },
  {
    q: 'What is your return policy?',
    a: 'Unused flies in original packaging may be returned within 30 days for a full refund. Custom orders are final sale.',
  },
  {
    q: 'How long does shipping take?',
    a: "Orders ship within 2–3 business days from Ohio. You'll receive a tracking number when your order leaves the bench.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-parchment pt-40 md:pt-48 pb-32 px-6 md:px-10">
      <div className="mx-auto max-w-[1000px]">
        <p className="eyebrow-copper">Field Notes</p>
        <h1 className="display-heading text-forest mt-4">Frequently Asked</h1>

        <div className="mt-16 divide-y divide-river/20 border-y border-river/20">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-2xl md:text-3xl text-forest">
                  {f.q}
                </span>
                {open === i ? (
                  <Minus className="text-copper shrink-0" size={20} />
                ) : (
                  <Plus className="text-copper shrink-0" size={20} />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? 'max-h-60 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-carbon/75 text-lg leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}