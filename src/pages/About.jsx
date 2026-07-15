import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ABOUT_IMG = 'https://media.base44.com/images/public/6a5701ac08a1b397d1d9ad49/fd0384ce5_generated_28257eed.png';

const values = [
{
  n: '01',
  t: 'The Bench',
  d: 'Every fly is tied at a single bench in Ohio, by hands that have shaped feathers for a quarter century.'
},
{
  n: '02',
  t: 'The Specimen',
  d: 'We treat each pattern as a specimen — cataloged, measured, and held to an exacting standard of mimicry.'
},
{
  n: '03',
  t: 'The Drift',
  d: 'A fly is only as good as its drift. We design for the current, balancing delicacy with the strength to hold a hook.'
}];


export default function About() {
  return (
    <div className="bg-parchment">
      <section className="pt-40 md:pt-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow-copper">Est. 1998 · Ohio</p>
          <h1 className="display-heading text-forest mt-4 max-w-4xl">
            A ledger of
            <br />
            feathers & steel.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 overflow-hidden">
            <img
              src={ABOUT_IMG}
              alt="Naturalist journal of fly patterns"
              className="w-full aspect-[3/2] object-cover" />
            
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg text-carbon/80 leading-relaxed">Buckeye Flies began at a kitchen table on the banks of the local pond, with a vise, a spool of cheap black thread, and a stubborn belief that the fly deserves the same reverence as the fish.



            </p>
            <p className="mt-6 text-carbon/70">Built through patience, practice, and a commitment to quality, that table is a studio, and that belief is a practice. We tie a limited number of patterns, each one refined until it earns its place in the archive.



            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-10 border-y border-river/20 bg-card">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-3 gap-12">
          {values.map((v) =>
          <div key={v.n}>
              <span className="font-mono text-[11px] tracking-[0.3em] text-copper">
                {v.n}
              </span>
              <h3 className="font-display text-3xl text-forest mt-3">{v.t}</h3>
              <p className="mt-4 text-carbon/70 leading-relaxed">{v.d}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-40 px-6 text-center">
        <h2 className="section-heading text-forest">Tie one on.</h2>
        <Link to="/shop" className="btn-primary mt-10">
          Browse the Archive <ArrowRight size={14} />
        </Link>
      </section>
    </div>);

}