import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const patterns = [
  'Adams Parachute',
  'Elk Hair Caddis',
  'Pheasant Tail Nymph',
  'Woolly Bugger',
  'Royal Wulff',
  "Hare's Ear",
  'Clouser Minnow',
  'Stimulator',
];

export default function Footer() {
  return (
    <footer className="relative bg-forest text-parchment grain overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-copper">
              Master Index
            </p>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-none">
              The Pattern
              <br />
              Archive
            </h2>
            <p className="mt-6 text-parchment/70 max-w-sm">
              A living catalog of every hand-tied pattern in our collection. Each
              entry is tied, inspected, and cataloged in our Ohio studio.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://www.instagram.com/buckeyeflies/"
                target="_blank"
                rel="noreferrer"
                className="text-parchment/70 hover:text-copper transition-colors"
              >
                <Instagram size={20} />
              </a>
              <Link
                to="/contact"
                className="text-parchment/70 hover:text-copper transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {patterns.map((p, i) => (
                <Link
                  key={p}
                  to="/shop"
                  className="group flex items-baseline justify-between border-b border-parchment/15 py-3"
                >
                  <span className="font-mono text-xs text-parchment/40">
                    {String(i + 1).padStart(3, '0')}
                  </span>
                  <span className="font-display text-xl group-hover:text-copper transition-colors flex-1 text-right">
                    {p}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-parchment/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-2xl">BuckeyeFlies</p>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-parchment/50">
            <Link to="/about" className="hover:text-copper">About</Link>
            <Link to="/faq" className="hover:text-copper">FAQ</Link>
            <Link to="/contact" className="hover:text-copper">Contact</Link>
            <Link to="/shop" className="hover:text-copper">Shop</Link>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment/50">
            © {new Date().getFullYear()} · Hand-Tied in Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}