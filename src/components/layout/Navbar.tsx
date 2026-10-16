import React, { useState } from 'react';
import { NextLink } from '../ui/NextLink';
import { useApp } from '../../context/AppContext';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { companySettings, currentRoute, navigateTo } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Proyek', href: '/proyek' },
    { label: 'Artikel', href: '/artikel' },
    { label: 'Kontak', href: '/kontak' },
  ];

  const isCurrentActive = (href: string) => {
    if (href === '/' && currentRoute.path === 'home') return true;
    if (href === '/tentang' && currentRoute.path === 'about') return true;
    if (href === '/layanan' && (currentRoute.path === 'services' || currentRoute.path === 'service-detail')) return true;
    if (href === '/proyek' && (currentRoute.path === 'projects' || currentRoute.path === 'project-detail')) return true;
    if (href === '/artikel' && (currentRoute.path === 'articles' || currentRoute.path === 'article-detail')) return true;
    if (href === '/kontak' && currentRoute.path === 'contact') return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <NextLink
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <span className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center font-display font-black text-lg shadow-sm group-hover:bg-blue-800 transition-colors">
              M
            </span>
            <span className="font-display tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              {companySettings.name}
            </span>
          </NextLink>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const active = isCurrentActive(link.href);
              return (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    active ? 'text-blue-700 font-semibold' : 'hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </NextLink>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <NextLink
              href="/admin"
              className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-blue-700 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </NextLink>
            <NextLink
              href="/kontak"
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Konsultasi Proyek</span>
            </NextLink>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <NextLink
              href="/admin"
              className="p-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
              title="Dashboard Admin"
            >
              <ShieldCheck className="w-4 h-4" />
            </NextLink>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isCurrentActive(link.href)
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </NextLink>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <NextLink
                href="/kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-700 rounded-lg shadow-sm"
              >
                Konsultasi Proyek Gratis
              </NextLink>
              <a
                href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                WhatsApp Langsung: {companySettings.whatsapp}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
