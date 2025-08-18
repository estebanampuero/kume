// src/components/Nav.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import { ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// 1. Actualizamos el array de navegación
const NAV_ITEMS = [
  { label: 'Productos', href: '/#productos' },
  { label: 'Características', href: '/caracteristicas' }, // <-- ¡Actualizado!
  { label: 'Precios', href: '/precios' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800' : ''
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">Vambe* Clone</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.href} className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/precios" className="group inline-flex items-center gap-1 rounded-xl bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
            Empezar <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}