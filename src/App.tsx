import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentRoute, companySettings, seoSettings, services, projects, articles, navigateTo } = useApp();

  // Dynamic Page Title & Meta tags sync on client-side route changes
  useEffect(() => {
    let title = `${companySettings.name} – ${companySettings.tagline}`;
    let desc = seoSettings.metaDescription;

    if (currentRoute.path === 'about') {
      title = `Tentang Kami – Profil & Sertifikasi | ${companySettings.name}`;
      desc = `Kenali rekam jejak, visi, misi, legalitas ISO, dan tim manajemen ahli PT Mitra Konstruksi Nusantara.`;
    } else if (currentRoute.path === 'services') {
      title = `Katalog Layanan Konstruksi, Baja Ringan & Interior | ${companySettings.name}`;
      desc = `Daftar lengkap layanan rangka atap baja ringan SNI, plafon gypsum akustik, custom kitchen set, dan renovasi rumah.`;
    } else if (currentRoute.path === 'service-detail' && currentRoute.slug) {
      const srv = services.find((s) => s.slug === currentRoute.slug);
      if (srv) {
        title = `${srv.title} – Spesifikasi & Biaya | ${companySettings.name}`;
        desc = srv.shortDesc;
      }
    } else if (currentRoute.path === 'projects') {
      title = `Portofolio Proyek Residensial & Komersial | ${companySettings.name}`;
      desc = `Dokumentasi hasil pengerjaan konstruksi, atap baja ringan, plafon, dan kitchen set Mitra Konstruksi.`;
    } else if (currentRoute.path === 'project-detail' && currentRoute.slug) {
      const prj = projects.find((p) => p.slug === currentRoute.slug);
      if (prj) {
        title = `${prj.title} – Studi Kasus Proyek | ${companySettings.name}`;
        desc = prj.summary;
      }
    } else if (currentRoute.path === 'articles') {
      title = `Artikel & Panduan Konstruksi Bangunan | ${companySettings.name}`;
      desc = `Tips memilih baja ringan SNI, material plafon gypsum, desain dapur ergonomis, dan manajemen biaya renovasi.`;
    } else if (currentRoute.path === 'article-detail' && currentRoute.slug) {
      const art = articles.find((a) => a.slug === currentRoute.slug);
      if (art) {
        title = `${art.title} | ${companySettings.name}`;
        desc = art.excerpt;
      }
    } else if (currentRoute.path === 'contact') {
      title = `Hubungi Kami – Jadwalkan Survei Proyek | ${companySettings.name}`;
      desc = `Hubungi kantor dan workshop Mitra Konstruksi di Daan Mogot, Jakarta Barat untuk konsultasi dan survei gratis.`;
    } else if (currentRoute.path === 'admin') {
      title = `Dashboard Admin – ${companySettings.name}`;
    }

    document.title = title;
  }, [currentRoute, companySettings, seoSettings, services, projects, articles]);

  const isAdmin = currentRoute.path === 'admin';

  const renderCurrentPage = () => {
    switch (currentRoute.path) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'service-detail':
        return <ServiceDetailPage slug={currentRoute.slug || ''} />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-detail':
        return <ProjectDetailPage slug={currentRoute.slug || ''} />;
      case 'articles':
        return <ArticlesPage />;
      case 'article-detail':
        return <ArticleDetailPage slug={currentRoute.slug || ''} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return (
          <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
            <span className="text-6xl font-black font-mono text-slate-300">404</span>
            <h2 className="text-2xl font-bold font-display text-slate-900 mt-2">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-sm text-slate-500 max-w-md mt-2">
              Maaf, tautan yang Anda tuju mungkin sudah dipindahkan, dihapus, atau sedang dalam perbaikan berkala.
            </p>
            <button
              onClick={() => navigateTo('home')}
              className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold text-xs rounded-xl hover:bg-blue-800 transition-colors shadow-sm"
            >
              Kembali ke Halaman Beranda
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white antialiased">
      {!isAdmin && <Navbar />}
      
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {!isAdmin && <Footer />}

      {/* Floating Quick Action WhatsApp button (Client-side, non-intrusive) */}
      {!isAdmin && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
          <a
            href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Halo Mitra Konstruksi, saya ingin bertanya tentang layanan konstruksi/interior.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
            title="Chat WhatsApp Konsultan"
          >
            <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
            <span className="text-xs font-bold hidden sm:inline-block pr-1">
              Konsultasi WhatsApp
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
