import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { NextLink } from '../components/ui/NextLink';
import {
  Share2,
  Copy,
  Check,
  MessageCircle,
  Facebook,
  Twitter,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const { articles, navigateTo } = useApp();
  const [copied, setCopied] = useState(false);

  const article = articles.find((a) => a.slug === slug) || articles[0];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">Artikel Tidak Ditemukan</h2>
        <button
          onClick={() => navigateTo('articles')}
          className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-semibold"
        >
          Kembali ke Daftar Artikel
        </button>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const text = `${article.title} - Baca selengkapnya di Mitra Konstruksi:\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareTwitter = () => {
    const text = `${article.title}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Artikel', href: '/artikel' },
            { label: article.title },
          ]}
        />

        <article className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs p-6 sm:p-12 mb-16">
          {/* Header Metadata */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-blue-700">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight text-balance">
              {article.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {article.author.name}
                </div>
                <div className="text-[11px] text-slate-500">
                  {article.author.role}
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative rounded-2xl overflow-hidden mb-10 h-72 sm:h-96 bg-slate-100 border border-slate-200">
            <ImageWithFallback
              src={article.thumbnail}
              alt={article.title}
              fallbackTitle={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Full Body */}
          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} className="font-display font-bold text-xl text-slate-900 mt-8 mb-3">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h4 key={idx} className="font-display font-bold text-base text-slate-900 mt-6 mb-2">
                    {trimmed.replace('#### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n').map((li) => li.replace('- ', ''));
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-600 my-4">
                    {listItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Tag Topik:</span>
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs text-slate-600 bg-slate-100 rounded-md font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-blue-700" />
              <span>Bagikan Artikel Ini:</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={shareWhatsApp}
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={shareTwitter}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>Twitter</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin' : 'Salin Link'}</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
            Artikel & Panduan Terkait
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigateTo('article-detail', rel.slug)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all p-4 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 rounded-xl overflow-hidden bg-slate-100 mb-3">
                    <ImageWithFallback
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-[11px] font-semibold text-blue-700 mb-1">
                    {rel.category}
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{rel.date}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
