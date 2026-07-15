import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import ProductCard from '@/components/ProductCard';

const HERO_IMG = 'https://media.base44.com/images/public/6a5701ac08a1b397d1d9ad49/afc5d5ac0_generated_ca278ece.png';
const CRAFT_IMG = 'https://media.base44.com/images/public/6a5701ac08a1b397d1d9ad49/fd0384ce5_generated_28257eed.png';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    base44.entities.Product
      .filter({ featured: true }, '-created_date', 6)
      .then(setFeatured)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-parchment">
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${offset * 0.4}px) scale(1.12)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/40 via-carbon/20 to-carbon/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-parchment/80 fade-up">
            BuckeyeFlies · Ohio
          </p>
          <h1
            className="display-heading text-parchment mt-6 fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            The Art of
            <br />
            the Drift
          </h1>
          <p
            className="mt-8 max-w-xl text-parchment/85 text-lg fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Hand-tied flies engineered with the precision of a naturalist and the
            soul of an angler. Each pattern, a small masterpiece.
          </p>
          <Link
            to="/shop"
            className="btn-primary mt-10 fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Enter the Archive <ArrowRight size={14} />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/60">
          Scroll
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow-copper">Philosophy</p>
            <h2 className="section-heading mt-4 text-forest">
              Tied by hand,
              <br />
              tuned by water.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-carbon/80 leading-relaxed">
              For twenty-five years we've tied at the bench with one belief: a fly
              is not a product, it's a promise. Every feather is selected, every
              wrap of thread counted, every hook tested against the current. We
              study the hatch, mimic the insect, and build a lure worthy of the
              fish that rises to meet it.
            </p>
            <p className="mt-6 text-carbon/70">
              This is the discipline of the naturalist and the patience of the
              angler, bound together in copper wire and barred feather.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-river/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow">Featured Specimens</p>
              <h2 className="section-heading mt-4">The Collection</h2>
            </div>
            <Link
              to="/shop"
              className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-copper-dark"
            >
              View All Patterns <ArrowRight size={14} className="inline" />
            </Link>
          </div>
          {featured.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i}>
                  <div className="aspect-square bg-muted animate-pulse" />
                  <div className="h-6 bg-muted animate-pulse mt-4 w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {featured.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CRAFT */}
      <section className="relative py-24 md:py-40 px-6 md:px-10 bg-forest text-parchment grain overflow-hidden">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-copper">
              The Bench
            </p>
            <h2 className="section-heading mt-4">
              A Naturalist's
              <br />
              Ledger
            </h2>
            <p className="mt-6 text-parchment/80 text-lg">
              Our patterns are cataloged like specimens in a 19th-century journal —
              pattern number, hook gauge, materials, origin. Because the difference
              between a good fly and a great one is measured in fractions, and we
              measure everything.
            </p>
            <Link
              to="/about"
              className="btn-outline mt-10"
              style={{ borderColor: '#FAF9F6', color: '#FAF9F6' }}
            >
              Our Story
            </Link>
          </div>
          <div className="order-1 lg:order-2 overflow-hidden">
            <img
              src={CRAFT_IMG}
              alt="Naturalist journal of fly patterns"
              className="w-full aspect-[3/2] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 px-6 text-center">
        <h2 className="display-heading text-forest">Begin the drift.</h2>
        <Link to="/shop" className="btn-primary mt-10">
          Shop the Archive
        </Link>
      </section>
    </div>
  );
}