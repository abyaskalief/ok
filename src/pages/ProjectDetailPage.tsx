import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { NextLink } from '../components/ui/NextLink';
import {
  MapPin,
  Calendar,
  Layers,
  Clock,
  User,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { projects, companySettings, navigateTo } = useApp();

  const project = projects.find((p) => p.slug === slug) || projects[0];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">Proyek Tidak Ditemukan</h2>
        <button
          onClick={() => navigateTo('projects')}
          className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-semibold"
        >
          Kembali ke Portofolio
        </button>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Proyek', href: '/proyek' },
            { label: project.title },
          ]}
        />

        {/* Project Header Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl mb-12 border border-slate-800">
          <div className="relative h-72 sm:h-96 w-full">
            <ImageWithFallback
              src={project.thumbnail}
              alt={project.title}
              fallbackTitle={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-4xl space-y-3">
              <span className="px-3 py-1 rounded bg-blue-700 text-white text-xs font-mono font-bold">
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{project.location}</span>
                <span aria-hidden="true">·</span>
                <span>Klien: {project.clientName}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar below banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-950 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Tahun Selesai</span>
              <span className="text-sm font-bold font-mono text-white">{project.year}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Luas Bangunan</span>
              <span className="text-sm font-bold font-mono text-white">{project.area}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Waktu Eksekusi</span>
              <span className="text-sm font-bold font-mono text-white">{project.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Kategori Proyek</span>
              <span className="text-sm font-bold text-orange-400">{project.category}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Ringkasan */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Ringkasan Pengerjaan
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {project.summary}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Tantangan Lapangan (Challenge)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Solusi Rekayasa (Solution)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Hasil & Dampak */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Hasil Akhir & Tolok Ukur Kualitas (Results)
              </h2>
              <div className="space-y-3 pt-1">
                {project.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Galeri Proyek */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Dokumentasi Galeri Proyek
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-slate-200 h-56 bg-slate-100">
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} - Foto ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Teknologi & Material Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-base text-slate-900">
                Spesifikasi Material & Teknologi
              </h3>
              <div className="space-y-2">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-mono flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-4 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Punya Proyek Serupa?
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Konsultasikan Kebutuhan Ruang Anda Sekarang
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dapatkan survei lokasi dan simulasi biaya akurat langsung dari tim arsitek dan engineer kami.
              </p>
              <div className="pt-2 flex flex-col gap-2.5">
                <NextLink
                  href="/kontak"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-orange-400" />
                  <span>Jadwalkan Survei Lokasi</span>
                </NextLink>
                <a
                  href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Halo Mitra Konstruksi, saya tertarik dengan portofolio ${project.title}. Mohon info estimasi biaya untuk proyek serupa.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow transition-colors"
                >
                  WhatsApp Konsultan
                </a>
              </div>
            </div>

            {/* Related Projects */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-display font-bold text-sm text-slate-900 mb-4">
                Proyek Terkait Lainnya
              </h4>
              <div className="space-y-4">
                {relatedProjects.map((rp) => (
                  <div
                    key={rp.id}
                    onClick={() => navigateTo('project-detail', rp.slug)}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-16 h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <ImageWithFallback
                        src={rp.thumbnail}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate">
                        {rp.title}
                      </h5>
                      <span className="text-[11px] text-slate-400 block truncate">
                        {rp.location} · {rp.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
