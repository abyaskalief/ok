import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { companySettings, addInquiry, services } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: services[0]?.title || 'Rangka Atap Baja Ringan (Light Steel Truss)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return;
    }

    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceInterest: formData.serviceInterest,
      message: formData.message,
    });

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: services[0]?.title || 'Rangka Atap Baja Ringan (Light Steel Truss)',
      message: '',
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Kontak' }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Hubungi Mitra Konstruksi
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mt-1">
            Mulai Konsultasi & Jadwalkan Survei Proyek Anda
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Tim estimator dan engineer kami siap memberikan penjelasan teknis, estimasi RAB transparan, dan kunjungan lokasi gratis.
          </p>
        </div>

        {/* 2-Column: Form + Office Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Pesan Anda Berhasil Terkirim!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih telah menghubungi Mitra Konstruksi. Tim representatif kami akan menghubungi Anda melalui Telepon atau WhatsApp dalam 1x24 jam kerja.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-blue-700 text-white text-xs font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                  Formulir Permohonan Survei & Konsultasi
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Bpk. Bambang Sutrisno"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="bambang@domain.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Telepon / WA */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Perusahaan (Opsional) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Perusahaan / Institusi (Opsional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="PT / CV / Pribadi"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* Layanan yang diminati */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Layanan Utama yang Diminati
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Lainnya">Layanan Konstruksi Lainnya</option>
                  </select>
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Rincian Kebutuhan & Lokasi Proyek *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran luasan, lokasi bangunan, dan jadwal rencana pengerjaan Anda..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-orange-400" />
                  <span>Kirim Formulir Konsultasi</span>
                </button>
              </form>
            )}
          </div>

          {/* Office Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Informasi Kantor & Kontak Langsung
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Alamat Kantor & Workshop:</div>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      {companySettings.address}, {companySettings.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Telepon Kantor:</div>
                    <a href={`tel:${companySettings.phone}`} className="hover:text-blue-700 block mt-0.5 font-mono text-xs">
                      {companySettings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Konsultasi Cepat WhatsApp:</div>
                    <a
                      href={`https://wa.me/${companySettings.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-700 font-bold block mt-0.5 font-mono text-xs hover:underline"
                    >
                      {companySettings.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Resmi:</div>
                    <a href={`mailto:${companySettings.email}`} className="hover:text-blue-700 block mt-0.5 font-mono text-xs">
                      {companySettings.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Jam Operasional Layanan:</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1 pl-6">
                  <p>{companySettings.operatingHours.weekdays}</p>
                  <p>{companySettings.operatingHours.saturday}</p>
                  <p className="text-slate-400">{companySettings.operatingHours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Box */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <span className="text-xs font-bold">Peta Lokasi Fasilitas Fabrikasi</span>
                <span className="text-[11px] text-slate-400">Jakarta Barat</span>
              </div>
              <div className="h-64 w-full bg-slate-200">
                <iframe
                  title="Lokasi Kantor Mitra Konstruksi"
                  src={companySettings.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
