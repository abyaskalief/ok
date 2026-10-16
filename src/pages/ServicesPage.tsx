import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { NextLink } from '../components/ui/NextLink';
import { CostEstimatorModal } from '../components/ui/CostEstimatorModal';
import {
  Search,
  ArrowRight,
  Calculator,
  Triangle,
  Layers,
  Box,
  Home,
  Wrench,
  Grid,
  Zap,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { services, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  const categories = [
    'Semua',
    'Struktur & Atap',
    'Interior & Finishing',
    'Konstruksi & Renovasi',
    'Mekanikal & Elektrikal',
  ];

  const filteredServices = services.filter((srv) => {
    const matchCategory =
      selectedCategory === 'Semua' || srv.category === selectedCategory;
    const matchSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Triangle':
        return <Triangle className="w-5 h-5 text-blue-700" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-700" />;
      case 'Box':
        return <Box className="w-5 h-5 text-blue-700" />;
      case 'Home':
        return <Home className="w-5 h-5 text-blue-700" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-700" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-blue-700" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-700" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Layanan' }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Katalog Layanan
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mt-1">
              Solusi Konstruksi, Rangka Atap & Interior Lengkap
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Seluruh pekerjaan dikerjakan oleh tenaga spesialis tersertifikasi dengan jaminan mutu material SNI dan garansi resmi pemeliharaan.
            </p>
          </div>

          <button
            onClick={() => setIsEstimatorOpen(true)}
            className="px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2 shadow-sm shrink-0"
          >
            <Calculator className="w-4 h-4 text-orange-400" />
            <span>Kalkulator Estimasi Biaya</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan, material, kata kunci..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">Tidak ada layanan yang sesuai dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-700 font-semibold hover:underline"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => navigateTo('service-detail', service.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    fallbackTitle={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900/80 text-white">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* 2 Key benefits bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Tarif Mulai</span>
                      <span className="text-xs font-bold font-mono text-blue-700">
                        {service.priceStart}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Detail Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />
    </div>
  );
};
