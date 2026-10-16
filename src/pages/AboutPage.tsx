import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { NextLink } from '../components/ui/NextLink';
import {
  ShieldCheck,
  Award,
  HardHat,
  CheckCircle2,
  Calendar,
  Building2,
  PhoneCall,
  ArrowRight,
  PenTool,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { companySettings, teamMembers, timeline } = useApp();

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Tentang Kami' }]} />

        {/* Hero Section Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-14 mb-16 shadow-xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/60 pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Profil & Rekam Jejak
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-tight text-white">
              Dua Dekade Membangun dengan Integritas dan Presisi Konstruksi
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              PT Mitra Konstruksi Nusantara berdedikasi menghadirkan standar mutu rekayasa bangunan, efisiensi rangka atap baja ringan berstandar SNI, plafon gypsum modern, dan cabinetry interior custom yang memadukan daya tahan struktural dengan keindahan visual.
            </p>
          </div>
        </div>

        {/* Profil & Sejarah Perusahaan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Sejarah Singkat
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Dari Workshop Fabrikasi Sederhana Menuju Kontraktor Terintegrasi Nasional
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Didirikan pada tahun 2004 di Jakarta Barat oleh para praktisi teknik sipil dan arsitektur, Mitra Konstruksi berawal dari workshop fabrikasi besi tempa dan kanopi residensial. Seiring pesatnya perkembangan teknologi bahan bangunan, kami menjadi salah satu pionir yang mengadopsi sistem rangka atap baja ringan cold-formed steel engineered di Indonesia.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kini, dengan dukungan fasilitas workshop fabrikasi modern seluas lebih dari 2.500 m² di kawasan Daan Mogot, kami menangani proyek terintegrasi mulai dari perancangan arsitektur BIM, konstruksi struktur atap, instalasi MEP, hingga fit-out interior custom untuk ratusan hunian pribadi, gedung perkantoran, dan fasilitas industri.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <ImageWithFallback
                src="/src/assets/images/about_workshop_facility_1792118813993.jpg"
                alt="Workshop Fabrikasi Mitra Konstruksi"
                className="w-full h-[380px] object-cover"
              />
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Workshop & Studio Interior Mitra Konstruksi</span>
                <span>Daan Mogot, Jakarta Barat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visi, Misi & Nilai Perusahaan */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Landasan Filosofi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Visi, Misi & Nilai Fundamental Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Visi */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Visi Perusahaan
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {companySettings.vision}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-blue-700">
                Commitment to Engineering Excellence
              </div>
            </div>

            {/* Misi */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
                  <PenTool className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Misi Utama
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {companySettings.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-orange-700">
                Delivering High Performance Living Spaces
              </div>
            </div>
          </div>

          {/* 4 Nilai Perusahaan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companySettings.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-blue-700 flex items-center justify-center font-mono font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Perjalanan Perusahaan (2004 - 2024) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Tonggak Sejarah
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Timeline Perjalanan & Prestasi Kami
            </h2>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-32 space-y-10 py-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Year Badge at left */}
                <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-700 border-4 border-white shadow-sm" />
                <div className="sm:absolute sm:-left-28 sm:top-0 text-sm font-black font-mono text-blue-800 mb-1 sm:mb-0">
                  {item.year}
                </div>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-2xl">
                  <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legalitas & Sertifikasi Resmi */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Kepatuhan & Sertifikasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Legalitas Badan Usaha & Standardisasi Mutu
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Memberikan kepastian hukum dan jaminan keselamatan standar konstruksi resmi pemerintah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companySettings.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      TERVERIFIKASI
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-blue-700 mb-2">
                    No: {cert.number}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tim Manajemen & Tenaga Ahli */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Dewan Ahli
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Dipimpin Praktisi Teknik Sipil & Arsitektur Berpengalaman
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100">
                    <span className="text-[11px] font-mono text-slate-600 block truncate">
                      {member.certification}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {member.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-700 text-white text-center">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
            Konsultasikan Kebutuhan Proyek Konstruksi Anda Hari Ini
          </h3>
          <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6">
            Tim engineer kami siap melakukan inspeksi struktur dan penyusunan RAB detail tanpa pungutan biaya.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NextLink
              href="/kontak"
              className="px-6 py-3.5 bg-white text-blue-800 font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors shadow"
            >
              Hubungi Tim Kami
            </NextLink>
            <NextLink
              href="/proyek"
              className="px-6 py-3.5 bg-blue-800 text-white font-semibold text-sm rounded-xl hover:bg-blue-900 transition-colors border border-blue-600"
            >
              Lihat Hasil Kerja Proyek
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};
