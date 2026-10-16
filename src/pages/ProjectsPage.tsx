import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { NextLink } from '../components/ui/NextLink';
import { Search, MapPin, ArrowRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { projects, navigateTo } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Residensial',
    'Komersial',
    'Interior',
    'Industrial',
    'Atap & Plafon',
  ];

  const filteredProjects = projects.filter((prj) => {
    const matchCategory =
      activeCategory === 'Semua' || prj.category === activeCategory;
    const matchSearch =
      prj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Proyek' }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Portofolio Pengerjaan
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mt-1">
              Dokumentasi Proyek Konstruksi & Interior Mitra Konstruksi
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Eksplorasi portofolio pengerjaan kami mulai dari hunian pribadi tropis, perkantoran korporat, hingga fasilitas pergudangan industri.
            </p>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari lokasi, klien, teknologi..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">Tidak ada proyek yang sesuai dengan kriteria.</p>
            <button
              onClick={() => {
                setActiveCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-700 font-semibold hover:underline"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigateTo('project-detail', project.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold bg-slate-950/85 backdrop-blur-md text-white rounded">
                    {project.category}
                  </div>
                  <div className="absolute bottom-2 right-3 text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Luas: {project.area}</span>
                      <span className="text-[11px] text-slate-500 font-medium">Durasi: {project.duration}</span>
                    </div>
                    <span className="font-semibold text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Detail Kasus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
