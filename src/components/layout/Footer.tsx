import React, { useState } from 'react';
import { NextLink } from '../ui/NextLink';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { companySettings, services, navigateTo } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Profil Perusahaan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-display font-black text-lg">
                M
              </span>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                {companySettings.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {companySettings.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              {companySettings.certifications.slice(0, 2).map((cert, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded"
                >
                  {cert.name}
                </div>
              ))}
            </div>
            <div className="pt-2 text-xs text-slate-500">
              Didirikan sejak tahun {companySettings.establishedYear} · Berizin Resmi LPJK & KemenPUPR
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <NextLink href="/" className="hover:text-blue-400 transition-colors">
                  Beranda
                </NextLink>
              </li>
              <li>
                <NextLink href="/tentang" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </NextLink>
              </li>
              <li>
                <NextLink href="/layanan" className="hover:text-blue-400 transition-colors">
                  Semua Layanan
                </NextLink>
              </li>
              <li>
                <NextLink href="/proyek" className="hover:text-blue-400 transition-colors">
                  Portofolio Proyek
                </NextLink>
              </li>
              <li>
                <NextLink href="/artikel" className="hover:text-blue-400 transition-colors">
                  Artikel & Panduan
                </NextLink>
              </li>
              <li>
                <NextLink href="/kontak" className="hover:text-blue-400 transition-colors">
                  Hubungi Kami
                </NextLink>
              </li>
              <li>
                <NextLink href="/admin" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                  <span>Dashboard Admin</span>
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Spesialis */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <NextLink
                    href={`/layanan/${service.slug}`}
                    className="hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {service.title.split('(')[0]}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak & Jam Kerja */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              Kantor & Operasional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{companySettings.address}, {companySettings.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${companySettings.phone}`} className="hover:text-white">
                  {companySettings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${companySettings.email}`} className="hover:text-white">
                  {companySettings.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-slate-900">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>{companySettings.operatingHours.weekdays}</p>
                  <p>{companySettings.operatingHours.saturday}</p>
                </div>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <p className="text-xs font-medium text-slate-300 mb-1.5">
                Newsletter Tips Arsitektur
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-1.5">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Anda..."
                  required
                  className="bg-slate-900 border border-slate-800 text-xs px-2.5 py-1.5 rounded text-white focus:outline-none focus:border-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded text-xs shrink-0 transition-colors"
                >
                  {subscribed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1">Terima kasih telah berlangganan!</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {companySettings.name}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">ISO 9001:2015 & ISO 45001 Terakreditasi</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => navigateTo('admin', undefined, 'seo')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              SEO & Sitemap
            </button>
            <span aria-hidden="true">·</span>
            <NextLink href="/admin" className="text-slate-400 hover:text-white transition-colors">
              Masuk Admin
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
