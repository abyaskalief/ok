import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { CostEstimatorModal } from '../components/ui/CostEstimatorModal';
import { NextLink } from '../components/ui/NextLink';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calculator,
  ChevronDown,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { services, companySettings, navigateTo } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const service = services.find((s) => s.slug === slug) || services[0];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">Layanan Tidak Ditemukan</h2>
        <p className="text-sm text-slate-500 mt-2">Layanan yang Anda tuju mungkin telah dipindahkan atau dihapus.</p>
        <button
          onClick={() => navigateTo('services')}
          className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-semibold"
        >
          Kembali ke Katalog Layanan
        </button>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getEstimatorCategory = () => {
    if (service.slug.includes('atap') || service.slug.includes('baja')) return 'atap';
    if (service.slug.includes('plafon')) return 'plafon';
    if (service.slug.includes('kitchen')) return 'kitchen';
    return 'renovasi';
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Layanan', href: '/layanan' },
            { label: service.title },
          ]}
        />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 mb-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 text-xs font-bold font-mono bg-blue-800 text-blue-200 rounded-md">
                  {service.category}
                </span>
                <span className="text-xs text-orange-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{service.warranty}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Investasi Mulai</span>
                  <span className="text-base font-extrabold font-mono text-white">
                    {service.priceStart}
                  </span>
                </div>

                <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Estimasi Waktu</span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{service.estimatedTime}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <NextLink
                href="/kontak"
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>Konsultasi & Survei Gratis</span>
              </NextLink>

              <button
                onClick={() => setIsEstimatorOpen(true)}
                className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl text-center border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-blue-400" />
                <span>Hitung Estimasi Biaya</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Full Desc, Benefits & Features */}
          <div className="lg:col-span-8 space-y-10">
            {/* Full Description */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Deskripsi Lengkap & Standar Pelaksanaan
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {service.fullDesc}
              </p>
            </div>

            {/* Keunggulan & Benefit */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Keunggulan Spesifikasi Layanan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitur & Komponen Material */}
            {service.features && service.features.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="font-display font-bold text-xl text-slate-900">
                  Komponen & Standar Material Digunakan
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4-Step Process */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Alur Tahapan Pengerjaan Proyek
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 relative"
                  >
                    <div className="text-xs font-mono font-bold text-blue-700 mb-1">
                      Tahap 0{idx + 1}
                    </div>
                    <h4 className="font-display font-bold text-sm text-slate-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Galeri Hasil Pengerjaan */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-slate-900">
                Galeri Foto Hasil Pengerjaan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {service.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden border border-slate-200 h-52 bg-slate-100"
                  >
                    <ImageWithFallback
                      src={imgUrl}
                      alt={`${service.title} Foto ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="font-display font-bold text-xl text-slate-900">
                  Pertanyaan Umum (FAQ) Seputar {service.title.split('(')[0]}
                </h2>
                <div className="space-y-3 pt-2">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-4 py-3.5 text-left text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            openFaqIndex === idx ? 'rotate-180 text-blue-700' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-4 py-3.5 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Consultation Box & Other Services */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Consultation Card */}
              <div className="p-6 rounded-2xl bg-blue-700 text-white shadow-lg space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  Konsultasi Langsung
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Ingin Survei Lokasi atau Penawaran RAB?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Hubungi tim estimator Mitra Konstruksi untuk mendapatkan rincian biaya yang tepat dan transparan tanpa kewajiban apa pun.
                </p>
                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Halo Mitra Konstruksi, saya tertarik dengan layanan ${service.title}. Mohon info survei lokasi.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>WhatsApp: {companySettings.whatsapp}</span>
                  </a>
                  <NextLink
                    href="/kontak"
                    className="w-full py-3 px-4 bg-white hover:bg-blue-50 text-blue-900 font-bold text-xs rounded-xl text-center shadow transition-colors"
                  >
                    Form Permohonan Survei
                  </NextLink>
                </div>
              </div>

              {/* Other Services List */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <h4 className="font-display font-bold text-sm text-slate-900 mb-3">
                  Layanan Terkait Lainnya
                </h4>
                <div className="space-y-2">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 5)
                    .map((other) => (
                      <NextLink
                        key={other.id}
                        href={`/layanan/${other.slug}`}
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-1">
                          {other.title.split('(')[0]}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {other.priceStart}
                        </div>
                      </NextLink>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        defaultCategory={getEstimatorCategory()}
      />
    </div>
  );
};
