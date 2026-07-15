import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index }) {
  if (!product) return null;
  return (
    <Link to={`/product/${product.id}`} className="specimen-cell group block">
      <div className="relative overflow-hidden vintage-border bg-card">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="specimen-img w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper bg-parchment/85 px-2 py-1">
            {product.category}
          </span>
        </div>
        {!product.in_stock && (
          <div className="absolute inset-0 bg-parchment/60 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-carbon">
              Sold Out
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl leading-tight group-hover:text-forest transition-colors">
            {product.name}
          </h3>
          <p className="spec-mono text-river mt-1">
            Hook 6-18 · {product.pattern_type}
          </p>
        </div>
        <span className="font-mono text-base text-copper-dark font-medium whitespace-nowrap">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}