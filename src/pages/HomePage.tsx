import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NextLink } from '../components/ui/NextLink';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { CostEstimatorModal } from '../components/ui/CostEstimatorModal';
import {
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  ChevronLeft,
  ChevronRight,
  HardHat,
  PenTool,
  Wrench,
  Layers,
  Triangle,
  Home,
  Box,
  Compass,
  Grid,
  Zap,
  PhoneCall,
  Sparkles,
  MapPin,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { companySettings, services, projects, articles, testimonials, clients, navigateTo } =
    useApp();
  const [activeTestiIndex, setActiveTestiIndex] = useState(0);
  const [activeProjectFilter, setActiveProjectFilter] = useState('Semua');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Triangle':
        return <Triangle className="w-6 h-6 text-blue-700" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-700" />;
      case 'Box':
        return <Box className="w-6 h-6 text-blue-700" />;
      case 'Home':
        return <Home className="w-6 h-6 text-blue-700" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-700" />;
      case 'Grid':
        return <Grid className="w-6 h-6 text-blue-700" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-700" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-700" />;
      default:
        return <Wrench className="w-6 h-6 text-blue-700" />;
    }
  };

  const projectCategories = [
    'Semua',
    'Residensial',
    'Komersial',
    'Interior',
    'Industrial',
    'Atap & Plafon',
  ];

  const filteredProjects =
    activeProjectFilter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeProjectFilter);

  const nextTesti = () => {
    setActiveTestiIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTesti = () => {
    setActiveTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-100 via-slate-50 to-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Spesialis Konstruksi, Baja Ringan & Interior Modern</span>
              </div>

              {/* Large Headline (No Orphan words) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Solusi Bangun & Renovasi Presisi dengan{' '}
                <span className="text-blue-700 underline decoration-orange-500/60 decoration-wavy decoration-2">
                  Mutu Standar Industri
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {companySettings.description}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <NextLink
                  href="/kontak"
                  className="px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>Konsultasi Proyek Gratis</span>
                </NextLink>

                <NextLink
                  href="/layanan"
                  className="px-5 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 shadow-sm transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Lihat 8+ Layanan</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </NextLink>

                <button
                  type="button"
                  onClick={() => setIsEstimatorOpen(true)}
                  className="px-4 py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold text-sm rounded-xl border border-amber-200 transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <Calculator className="w-4 h-4 text-amber-700" />
                  <span>Hitung Estimasi Biaya</span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bebas Biaya Survei & RAB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garansi Resmi Kebocoran 10 Thn</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Material SNI & Bersertifikat</span>
                </div>
              </div>
            </div>

            {/* Right Industrial Image Showcase + Floating Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <ImageWithFallback
                  src="/src/assets/images/hero_construction_modern_1792118814032.jpg"
                  alt="Konstruksi baja ringan dan plafon gypsum Mitra Konstruksi"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-dark text-white border border-slate-700/60">
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    Proyek Berjalan
                  </p>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    Instalasi Rangka Baja & Plafon AkustikSCBD Tower
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Ketepatan elevasi laser level & pengawasan mandor K3 bersertifikat
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Experience */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-4 rounded-xl glass-panel shadow-xl border border-white/80 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold font-mono text-base shadow-sm">
                  20+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Tahun Pengalaman</div>
                  <div className="text-[11px] text-slate-500">Sejak 2004 di Indonesia</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Satisfaction */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-4 rounded-xl glass-panel shadow-xl border border-white/80 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold font-mono text-base shadow-sm">
                  98%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Client Satisfaction</div>
                  <div className="text-[11px] text-slate-500">540+ Proyek Sukses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT & PARTNER STRIP */}
      <section className="py-10 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Dipercaya Oleh Pengembang, Perusahaan Komersial & Pemilik Properti Terkemuka
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="py-3 px-2 rounded-lg bg-slate-50/80 border border-slate-200/60 hover:border-slate-300 hover:bg-slate-100 transition-all text-center group"
                title={`${client.name} - ${client.industry}`}
              >
                <span className="text-xs font-extrabold font-mono tracking-wider text-slate-600 group-hover:text-blue-700 transition-colors">
                  {client.logo}
                </span>
                <span className="block text-[10px] text-slate-400 truncate mt-0.5">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI SUMMARY (2-column layout) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Workshop image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <ImageWithFallback
                  src="/src/assets/images/about_workshop_facility_1792118813993.jpg"
                  alt="Workshop fabrikasi dan studio interior Mitra Konstruksi"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-slate-900 text-white shadow-xl max-w-xs hidden sm:block border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Fasilitas Workshop Terpadu</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Fabrikasi mandiri rangka baja, cabinetry multiplek finishing HPL, dan perakitan interior presisi.
                </p>
              </div>
            </div>

            {/* Content text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Tentang Mitra Konstruksi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Membangun dengan Komitmen Integritas, Ketepatan Struktur, dan Estetika Abadi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Berdiri sejak 2004, PT Mitra Konstruksi Nusantara telah bertransformasi menjadi salah satu kontraktor spesialis rangka atap baja ringan, plafon partisi gypsum akustik, serta custom interior cabinetry terdepan. Kami memadukan pendekatan keteknikan yang ketat dengan sentuhan arsitektur modern.
              </p>

              {/* Visi & Misi preview */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    Visi Perusahaan
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {companySettings.vision}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    Misi Utama
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {companySettings.mission.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <NextLink
                  href="/tentang"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors group"
                >
                  <span>Pelajari Sejarah & Sertifikasi Kami</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION LAYANAN SPESIALIS (Minimal 8 Services) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
                Layanan Profesional
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Spesialisasi Konstruksi, Atap & Solusi Interior
              </h2>
            </div>
            <NextLink
              href="/layanan"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              <span>Lihat Katalog Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </NextLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => navigateTo('service-detail', service.slug)}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Image Top */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    fallbackTitle={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="absolute bottom-2 right-3 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900/80 text-white">
                    {service.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {service.title.split('(')[0]}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Investasi</span>
                      <span className="text-xs font-bold font-mono text-blue-700">
                        {service.priceStart}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEUNGGULAN / WHY CHOOSE US */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Standar Keunggulan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
              Mengapa Ratusan Klien Mempercayakan Proyeknya Kepada Mitra Konstruksi?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Kombinasi ketepatan rekayasa, transparansi pembiayaan, material berstandar SNI, serta jaminan garansi purna jual resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="w-6 h-6 text-orange-400" />,
                title: 'Teknologi Desain CAD & BIM Presisi',
                desc: 'Simulasi beban struktural dan detailing 3D sebelum konstruksi fisik dimulai untuk meminimalisir kesalahan lapangan.',
              },
              {
                icon: <HardHat className="w-6 h-6 text-blue-400" />,
                title: 'Tim Berpengalaman & Tersertifikasi',
                desc: 'Aplikator rangka baja dan tukang finishing terlatih dengan sertifikasi SKA, BNSP, dan pengawasan K3 ISO 45001.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
                title: 'Material 100% SNI & Original',
                desc: 'Baja ringan mutu G550 Bluescope/Kencana, papan gypsum Jayaboard, dan multiplek kualitas ekspor tanpa bahan tiruan.',
              },
              {
                icon: <Clock className="w-6 h-6 text-amber-400" />,
                title: 'Tepat Waktu & Kurva-S Terukur',
                desc: 'Jadwal pengerjaan terikat kontrak resmi dengan laporan foto dan video progres berkala langsung ke ponsel Anda.',
              },
              {
                icon: <Award className="w-6 h-6 text-cyan-400" />,
                title: 'Garansi Resmi Konstruksi',
                desc: 'Garansi struktur dan kebocoran hingga 10 tahun untuk atap baja ringan serta jaminan pemeliharaan purna jual.',
              },
              {
                icon: <Calculator className="w-6 h-6 text-rose-400" />,
                title: 'RAB Transparan Tanpa Biaya Tersembunyi',
                desc: 'Perhitungan volume jelas per meter persegi. Tidak ada pembengkakan biaya liar di tengah pengerjaan proyek.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-slate-600 transition-all hover:-translate-y-1"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-900 border border-slate-700 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ANIMATED COUNTER / STATISTIK */}
      <section className="py-14 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-blue-600/60">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white tabular-nums">
                {companySettings.stats.yearsExperience}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider mt-1">
                Tahun Pengalaman
              </div>
              <div className="text-[11px] text-blue-200 mt-0.5">Sejak 2004 di Indonesia</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white tabular-nums">
                {companySettings.stats.projectsCompleted}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider mt-1">
                Proyek Selesai
              </div>
              <div className="text-[11px] text-blue-200 mt-0.5">Residensial & Komersial</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white tabular-nums">
                {companySettings.stats.skilledWorkers}+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider mt-1">
                Tenaga Ahli & Tukang
              </div>
              <div className="text-[11px] text-blue-200 mt-0.5">Tersertifikasi K3 & Mandor</div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white tabular-nums">
                {companySettings.stats.satisfactionRate}%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider mt-1">
                Kepuasan Pelanggan
              </div>
              <div className="text-[11px] text-blue-200 mt-0.5">Berdasarkan Survei Purna Jual</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION PROYEK (Minimal 8 Projects) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Portofolio Pengerjaan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Karya Konstruksi & Interior Terbaru Kami
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Lihat bagaimana kami mentransformasi hunian residensial, gedung perkantoran, dan ruang komersial.
            </p>
          </div>

          {/* Category Filter Tabs (Interactive Segmented buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-200/80 rounded-xl max-w-2xl mx-auto mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeProjectFilter === cat
                    ? 'bg-white text-blue-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigateTo('project-detail', project.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-white rounded">
                    {project.category}
                  </div>
                  <div className="absolute bottom-2 right-3 text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded">
                    {project.year}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Luas: {project.area}</span>
                    <span className="font-semibold text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NextLink
              href="/proyek"
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm rounded-xl border border-slate-300 shadow-sm transition-all inline-flex items-center gap-2"
            >
              <span>Eksplorasi Seluruh {projects.length}+ Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </NextLink>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Pengalaman Klien
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Apa Kata Mereka Tentang Mitra Konstruksi?
              </h2>
            </div>
            
            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTesti}
                className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors text-slate-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTesti}
                className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors text-slate-700"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Card */}
          {testimonials.length > 0 && (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden">
              <div className="max-w-3xl">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonials[activeTestiIndex].rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
                  "{testimonials[activeTestiIndex].comment}"
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonials[activeTestiIndex].avatar}
                    alt={testimonials[activeTestiIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="font-display font-bold text-base text-slate-900">
                      {testimonials[activeTestiIndex].name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonials[activeTestiIndex].role} ·{' '}
                      <span className="text-blue-700 font-medium">
                        {testimonials[activeTestiIndex].company}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Proyek: {testimonials[activeTestiIndex].projectRef}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider dots */}
              <div className="flex items-center gap-1.5 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestiIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeTestiIndex === idx ? 'w-6 bg-blue-700' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 9. SECTION ARTIKEL / BLOG (Minimal 6 Articles) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Edukasi & Wawasan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Artikel & Panduan Konstruksi Terbaru
              </h2>
            </div>
            <NextLink
              href="/artikel"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              <span>Lihat Semua Artikel</span>
              <ArrowRight className="w-4 h-4" />
            </NextLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((art) => (
              <article
                key={art.id}
                onClick={() => navigateTo('article-detail', art.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={art.thumbnail}
                    alt={art.title}
                    fallbackTitle={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 text-[11px] font-semibold bg-blue-800 text-white rounded">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Zero-pill metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{art.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium truncate max-w-[180px]">
                      {art.author.name}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Baca</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-semibold mb-6">
            <Clock className="w-3.5 h-3.5" />
            <span>Respon Cepat Dalam 15 Menit di Jam Kerja</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display text-balance">
            Siap Mewujudkan Hunian & Bangunan Impian Anda Bersama Mitra Konstruksi?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Konsultasikan kebutuhan rangka baja ringan, plafon gypsum, kitchen set, atau renovasi rumah Anda sekarang. Dapatkan estimasi RAB transparan dan survei lokasi bebas biaya.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <NextLink
              href="/kontak"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Jadwalkan Survei Lokasi Gratis</span>
            </NextLink>

            <a
              href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Halo Mitra Konstruksi, saya ingin konsultasi rencana proyek konstruksi/interior.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Chat WhatsApp: {companySettings.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </div>
  );
};
