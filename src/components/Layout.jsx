import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Layout() {
  const location = useLocation();
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const ring = ringRef.current;
    if (!ring) return;
    const move = (e) => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };
    const over = (e) => {
      if (e.target.closest('a,button,input,textarea,select,[role="button"]')) {
        ring.classList.add('hovering');
      } else {
        ring.classList.remove('hovering');
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}