import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { NextLink } from '../components/ui/NextLink';
import { Search, ArrowRight, BookOpen, Clock } from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  const { articles, navigateTo } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const categories = [
    'Semua',
    'Edukasi Struktur',
    'Material Interior',
    'Desain Interior',
    'Panduan Proyek',
    'Manajemen Konstruksi',
    'Arsitektur & Desain',
  ];

  const filteredArticles = articles.filter((art) => {
    const matchCat =
      activeCategory === 'Semua' || art.category === activeCategory;
    const matchSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Artikel' }]} />

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Pusat Edukasi & Wawasan
            </span>
            <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mt-1">
              Artikel, Panduan & Tips Konstruksi Bangunan
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Informasi praktis seputar pemilihan baja ringan SNI, instalasi plafon akustik, desain kitchen set ergonomis, dan manajemen anggaran renovasi rumah.
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
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
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
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari topik artikel..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setActiveCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-700 font-semibold hover:underline"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => navigateTo('article-detail', art.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={art.thumbnail}
                    alt={art.title}
                    fallbackTitle={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-800 text-white">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Zero-pill metadata with unboxed text and separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{art.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium truncate max-w-[170px]">
                      {art.author.name}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Baca Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                  currentPage === idx + 1
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 disabled:opacity-40"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
