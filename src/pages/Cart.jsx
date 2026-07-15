import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { items, updateQty, removeItem, subtotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-parchment pt-40 md:pt-48 pb-32 px-6 text-center">
        <ShoppingBag className="mx-auto text-river" size={40} />
        <h1 className="display-heading text-forest mt-8">Your creel is empty.</h1>
        <p className="mt-4 text-carbon/70">
          Add a few patterns and they'll appear here.
        </p>
        <Link to="/shop" className="btn-primary mt-10">
          Browse the Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-parchment pt-40 md:pt-48 pb-32 px-6 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="eyebrow-copper">The Creel</p>
        <h1 className="display-heading text-forest mt-4">Your Cart</h1>

        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 divide-y divide-river/20 border-t border-river/20">
            {items.map((item) => (
              <div key={item.id} className="py-6 flex gap-6 items-center">
                <Link to={`/product/${item.id}`} className="shrink-0">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover vintage-border"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    className="font-display text-2xl text-forest hover:text-copper-dark transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.hook_size && (
                    <p className="spec-mono text-river mt-1">Hook {item.hook_size}</p>
                  )}
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center border border-carbon/30">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="p-2 hover:bg-carbon/5"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-mono w-10 text-center text-sm">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="p-2 hover:bg-carbon/5"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-carbon/40 hover:text-copper-dark"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <span className="font-mono text-lg text-copper-dark font-medium">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border border-river/30 p-8 lg:sticky lg:top-32">
              <p className="eyebrow">Summary</p>
              <div className="mt-6 flex justify-between">
                <span className="text-carbon/70">Subtotal</span>
                <span className="font-mono text-copper-dark">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="mt-3 flex justify-between">
                <span className="text-carbon/70">Shipping</span>
                <span className="font-mono text-river text-sm">
                  Calculated at checkout
                </span>
              </div>
              <div className="ledger-divider my-6" />
              <div className="flex justify-between items-baseline">
                <span className="font-display text-2xl">Total</span>
                <span className="font-mono text-2xl text-copper-dark">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <button className="btn-primary w-full mt-8">
                Proceed to Checkout <ArrowRight size={14} />
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-carbon/40 hover:text-copper-dark"
              >
                Empty the Creel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}