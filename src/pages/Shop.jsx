import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import ProductCard from '@/components/ProductCard';

const CATEGORIES = ['All', 'Dry Fly', 'Nymph', 'Streamer', 'Emerger', 'Terrestrial'];

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState('All');

  useEffect(() => {
    base44.entities.Product
      .list('-created_date', 50)
      .then((p) => {
        setProducts(p.filter((x) => x.image_url));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = cat === 'All' ? products : products.filter((p) => p.category === cat);

  return (
    <div className="bg-parchment pt-32 md:pt-40">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow-copper">The Specimen Case</p>
          <h1 className="display-heading text-forest mt-4">Shop</h1>
          <p className="mt-6 max-w-xl text-carbon/70">
            Each fly tied to order, inspected under magnification, and shipped in
            archival packaging.
          </p>
        </div>
      </section>

      <section className="mt-16 px-6 md:px-10 border-y border-river/20">
        <div className="mx-auto max-w-[1400px] py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-river">
            Filter ·
          </span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                cat === c ? 'text-copper-dark' : 'text-carbon/50 hover:text-carbon'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className="aspect-square bg-muted animate-pulse" />
                  <div className="h-6 bg-muted animate-pulse mt-4 w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}