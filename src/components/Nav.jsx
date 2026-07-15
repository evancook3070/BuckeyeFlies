import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !onHome || open;

  const linkClass = (extra = '') =>
    `link-underline font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${solid ? 'text-carbon' : 'text-parchment'} ${extra}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-parchment/95 backdrop-blur border-b border-river/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 md:h-24 grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass()}>Shop</Link>
          <Link to="/about" className={linkClass()}>About</Link>
        </div>

        <button
          className="md:hidden justify-self-start"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={solid ? 'text-carbon' : 'text-parchment'} />
          ) : (
            <Menu className={solid ? 'text-carbon' : 'text-parchment'} />
          )}
        </button>

        <Link to="/" className="justify-self-center text-center">
          <span
            className={`block font-display leading-none ${
              solid ? 'text-forest' : 'text-parchment'
            }`}
            style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', letterSpacing: '0.01em' }}
          >
            BuckeyeFlies
          </span>
          <span
            className={`block font-mono text-[9px] uppercase tracking-[0.3em] mt-1 ${
              solid ? 'text-copper' : 'text-parchment/80'
            }`}
          >
            Hand-Tied · Est. 2026
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 justify-self-end">
          <Link to="/faq" className={linkClass()}>FAQ</Link>
          <Link to="/contact" className={linkClass()}>Contact</Link>
          <Link to="/cart" className="relative" aria-label="Cart">
            <ShoppingBag className={solid ? 'text-carbon' : 'text-parchment'} size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-copper text-parchment text-[10px] font-mono w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>

        <Link to="/cart" className="md:hidden justify-self-end relative" aria-label="Cart">
          <ShoppingBag className={solid ? 'text-carbon' : 'text-parchment'} size={20} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-copper text-parchment text-[10px] font-mono w-4 h-4 rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </nav>

      {open && (
        <div className="md:hidden bg-parchment border-t border-river/20 px-6 py-8 flex flex-col gap-6">
          {[
            { l: 'Shop', p: '/shop' },
            { l: 'About', p: '/about' },
            { l: 'FAQ', p: '/faq' },
            { l: 'Contact', p: '/contact' },
          ].map((item) => (
            <Link key={item.l} to={item.p} className="font-display text-3xl text-forest">
              {item.l}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}