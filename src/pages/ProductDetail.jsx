import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Check } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    setProduct(null);
    base44.entities.Product
      .get(id)
      .then((p) => {
        setProduct(p);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pt-40 px-6">
        <div className="h-[60vh] bg-muted animate-pulse mx-auto max-w-[1400px]" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-40 px-6 text-center pb-32">
        <p className="font-display text-3xl text-forest">Specimen not found.</p>
        <Link to="/shop" className="btn-outline mt-8">
          Return to Archive
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const specs = [
    ['Pattern', product.pattern_type],
    ['Category', product.category],
    ['Hook Size', product.hook_size],
    ['Origin', product.origin],
    ['Materials', product.materials],
  ];

  return (
    <div className="bg-parchment pt-28 md:pt-32">
      <div className="px-6 md:px-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-carbon/60 hover:text-copper-dark transition-colors"
        >
          <ArrowLeft size={14} /> Back to Archive
        </Link>
      </div>
      <div className="mx-auto max-w-[1400px] mt-8 grid lg:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-10 pb-32">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="overflow-hidden vintage-border">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        <div>
          <p className="eyebrow-copper">
            Specimen № {String(product.id || '').slice(-4).toUpperCase()}
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-forest mt-3 leading-none">
            {product.name}
          </h1>
          <p className="font-mono text-2xl text-copper-dark mt-6">
            ${product.price.toFixed(2)}
          </p>
          <div className="ledger-divider my-8" />
          <p className="text-lg text-carbon/80 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-10">
            <p className="eyebrow mb-4">Anatomical Specifications</p>
            <dl className="divide-y divide-river/20">
              {specs
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 py-3">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-river pt-1">
                      {k}
                    </dt>
                    <dd className="col-span-2 spec-mono text-carbon">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center border border-carbon/30">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="p-3 hover:bg-carbon/5"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="font-mono w-12 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-3 hover:bg-carbon/5"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-carbon/60">
              {product.in_stock ? 'In Stock' : 'Sold Out'}
            </span>
          </div>
          <button
            onClick={handleAdd}
            disabled={!product.in_stock}
            className="btn-primary w-full mt-6"
          >
            {added ? (
              <>
                <Check size={14} /> Added to Creel
              </>
            ) : (
              'Add to Creel'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}