import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ServiceItem, ProjectItem, ArticleItem, TestimonialItem, ClientPartner } from '../types';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import {
  LayoutDashboard,
  Building,
  Layers,
  Briefcase,
  FileText,
  Star,
  Users,
  Image as ImageIcon,
  Mail,
  Search as SearchIcon,
  Globe,
  Settings,
  Plus,
  Edit2,
  Trash2,
  Save,
  Moon,
  Sun,
  Eye,
  CheckCircle2,
  X,
  Upload,
  ArrowUpRight,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    companySettings,
    updateCompanySettings,
    seoSettings,
    updateSEOSettings,
    services,
    addService,
    updateService,
    deleteService,
    projects,
    addProject,
    updateProject,
    deleteProject,
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    clients,
    addClient,
    deleteClient,
    inquiries,
    updateInquiryStatus,
    deleteInquiry,
    mediaImages,
    addMediaImage,
    isAdminDarkMode,
    setIsAdminDarkMode,
    navigateTo,
    resetAllData,
  } = useApp();

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Modals state
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [editingArticle, setEditingArticle] = useState<ArticleItem | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  const [isTestiModalOpen, setIsTestiModalOpen] = useState(false);
  const [newTesti, setNewTesti] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    comment: '',
    projectRef: '',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  });

  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', industry: '', logo: '' });

  const showNotification = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Profile form local state
  const [profileForm, setProfileForm] = useState({
    name: companySettings.name,
    tagline: companySettings.tagline,
    description: companySettings.description,
    phone: companySettings.phone,
    whatsapp: companySettings.whatsapp,
    email: companySettings.email,
    address: companySettings.address,
    city: companySettings.city,
    vision: companySettings.vision,
  });

  // SEO form local state
  const [seoForm, setSeoForm] = useState({
    metaTitle: seoSettings.metaTitle,
    metaDescription: seoSettings.metaDescription,
    keywords: seoSettings.keywords,
    canonicalUrl: seoSettings.canonicalUrl,
  });

  // Color & Theme state
  const [colorForm, setColorForm] = useState({
    primaryColor: companySettings.primaryColor || '#1e40af',
    secondaryColor: companySettings.secondaryColor || '#ea580c',
  });

  // Handle image upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          addMediaImage(reader.result);
          showNotification('Foto berhasil diunggah ke Media Manager!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const navMenuItems = [
    { id: 'dashboard', label: 'Ringkasan Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profil', label: 'Kelola Profil & Hero', icon: <Building className="w-4 h-4" /> },
    { id: 'layanan', label: 'Kelola Layanan', icon: <Layers className="w-4 h-4" />, count: services.length },
    { id: 'project', label: 'Kelola Project', icon: <Briefcase className="w-4 h-4" />, count: projects.length },
    { id: 'artikel', label: 'Kelola Artikel', icon: <FileText className="w-4 h-4" />, count: articles.length },
    { id: 'testimoni', label: 'Kelola Testimoni', icon: <Star className="w-4 h-4" />, count: testimonials.length },
    { id: 'client', label: 'Kelola Mitra & Client', icon: <Users className="w-4 h-4" />, count: clients.length },
    { id: 'media', label: 'Media Manager', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'pesan', label: 'Pesan Masuk (Inbox)', icon: <Mail className="w-4 h-4" />, count: inquiries.filter(i => i.status === 'Baru').length },
    { id: 'seo', label: 'SEO & Structured Data', icon: <Globe className="w-4 h-4" /> },
    { id: 'pengaturan', label: 'Pengaturan Website', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${isAdminDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Sidebar */}
      <aside className={`w-full md:w-64 border-r shrink-0 flex flex-col justify-between p-4 ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div>
          {/* Brand */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/40">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-display font-black text-sm">
                M
              </span>
              <div>
                <span className="font-display font-bold text-sm tracking-tight block">
                  Admin Panel
                </span>
                <span className="text-[10px] text-slate-400 block -mt-0.5">
                  Mitra Konstruksi
                </span>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsAdminDarkMode(!isAdminDarkMode)}
              className={`p-1.5 rounded-lg border transition-colors ${isAdminDarkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}
              title="Toggle Dark Mode"
            >
              {isAdminDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 space-y-1">
            {navMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-700 text-white shadow-xs'
                    : isAdminDarkMode
                    ? 'text-slate-300 hover:bg-slate-800'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      activeTab === item.id
                        ? 'bg-blue-800 text-blue-100'
                        : isAdminDarkMode
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-4 border-t border-slate-200/40 space-y-2">
          <button
            onClick={() => navigateTo('home')}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
          >
            <span>Buka Website Utama</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto max-h-screen">
        
        {/* Top bar inside content */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/60">
          <div>
            <h1 className="font-display font-bold text-2xl">
              {navMenuItems.find((i) => i.id === activeTab)?.label}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola seluruh konten, profil, layanan, proyek, dan SEO tanpa reload
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (confirm('Kembalikan semua data awal (factory reset)? Perubahan Anda akan direset.')) {
                  resetAllData();
                  showNotification('Data telah direset ke pengaturan awal.');
                }
              }}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg text-rose-600 border border-rose-200 hover:bg-rose-50 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data Awal</span>
            </button>
          </div>
        </div>

        {/* TAB 1: DASHBOARD SUMMARY */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-5 rounded-2xl border ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-medium text-slate-400">Total Layanan Aktif</div>
                <div className="text-3xl font-black font-mono text-blue-600 mt-2">{services.length}</div>
                <div className="text-[11px] text-slate-500 mt-1">Siap tampil di katalog publik</div>
              </div>

              <div className={`p-5 rounded-2xl border ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-medium text-slate-400">Total Proyek Portofolio</div>
                <div className="text-3xl font-black font-mono text-orange-500 mt-2">{projects.length}</div>
                <div className="text-[11px] text-slate-500 mt-1">Dokumentasi tantangan & hasil</div>
              </div>

              <div className={`p-5 rounded-2xl border ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-medium text-slate-400">Artikel & Panduan</div>
                <div className="text-3xl font-black font-mono text-emerald-600 mt-2">{articles.length}</div>
                <div className="text-[11px] text-slate-500 mt-1">Mendongkrak traffic organik SEO</div>
              </div>

              <div className={`p-5 rounded-2xl border ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-medium text-slate-400">Pesan Masuk Baru</div>
                <div className="text-3xl font-black font-mono text-cyan-600 mt-2">
                  {inquiries.filter((i) => i.status === 'Baru').length}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Dari calon klien via formulir</div>
              </div>
            </div>

            {/* Recent Inquiries List Preview */}
            <div className={`p-6 rounded-2xl border ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-base">Permohonan Survei & Pesan Masuk Terbaru</h3>
                <button
                  onClick={() => setActiveTab('pesan')}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  Lihat Semua ({inquiries.length})
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className={`border-b ${isAdminDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                    <tr>
                      <th className="py-2.5 px-3">Nama</th>
                      <th className="py-2.5 px-3">Kontak</th>
                      <th className="py-2.5 px-3">Layanan Diminati</th>
                      <th className="py-2.5 px-3">Waktu</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/40">
                    {inquiries.slice(0, 4).map((inq) => (
                      <tr key={inq.id}>
                        <td className="py-3 px-3 font-semibold">{inq.name}</td>
                        <td className="py-3 px-3 font-mono">{inq.phone}</td>
                        <td className="py-3 px-3 truncate max-w-xs">{inq.serviceInterest}</td>
                        <td className="py-3 px-3 text-slate-400 font-mono">{inq.createdAt}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            inq.status === 'Baru'
                              ? 'bg-amber-100 text-amber-800'
                              : inq.status === 'Dihubungi'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {inq.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KELOLA PROFIL & HERO */}
        {activeTab === 'profil' && (
          <div className="max-w-3xl space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-display font-bold text-base">Identitas Perusahaan & Hero</h3>
              
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Nama Perusahaan</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Tagline Singkat</label>
                <input
                  type="text"
                  value={profileForm.tagline}
                  onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Deskripsi Utama (Hero Section)</label>
                <textarea
                  rows={3}
                  value={profileForm.description}
                  onChange={(e) => setProfileForm({ ...profileForm, description: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Nomor Telepon Kantor</label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Nomor WhatsApp Konsultan</label>
                  <input
                    type="text"
                    value={profileForm.whatsapp}
                    onChange={(e) => setProfileForm({ ...profileForm, whatsapp: e.target.value })}
                    className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Email Resmi</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Kota & Domisili</label>
                  <input
                    type="text"
                    value={profileForm.city}
                    onChange={(e) => setProfileForm({ ...profileForm, city: e.target.value })}
                    className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Alamat Lengkap Workshop & Kantor</label>
                <input
                  type="text"
                  value={profileForm.address}
                  onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  updateCompanySettings(profileForm);
                  showNotification('Profil perusahaan berhasil diperbarui!');
                }}
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan Profil</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: KELOLA LAYANAN (CRUD) */}
        {activeTab === 'layanan' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Daftar {services.length} Layanan Aktif</span>
              <button
                onClick={() => {
                  setEditingService({
                    id: `srv-${Date.now()}`,
                    slug: 'layanan-baru',
                    title: 'Layanan Baru',
                    category: 'Struktur & Atap',
                    shortDesc: 'Deskripsi ringkas layanan baru...',
                    fullDesc: 'Deskripsi lengkap pelaksanaan teknis...',
                    iconName: 'Wrench',
                    image: '/src/assets/images/service_roof_interior_1792118815223.jpg',
                    benefits: ['Garansi resmi', 'Material SNI'],
                    features: ['Komponen standar industri'],
                    processSteps: [
                      { title: 'Survei', desc: 'Pengukuran awal' },
                      { title: 'Instalasi', desc: 'Pengerjaan lapangan' },
                    ],
                    gallery: ['/src/assets/images/service_roof_interior_1792118815223.jpg'],
                    faqs: [{ question: 'Berapa biayanya?', answer: 'Tergantung volume dan spek.' }],
                    priceStart: 'Mulai Rp 150.000 / m²',
                    estimatedTime: '3 - 5 Hari Kerja',
                    warranty: 'Garansi 1 Tahun',
                  });
                  setIsServiceModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Layanan Baru</span>
              </button>
            </div>

            <div className={`rounded-2xl border overflow-hidden ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <table className="w-full text-xs text-left">
                <thead className={`border-b ${isAdminDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                  <tr>
                    <th className="py-3 px-4">Layanan</th>
                    <th className="py-3 px-4">Kategori</th>
                    <th className="py-3 px-4">Tarif Mulai</th>
                    <th className="py-3 px-4">Garansi</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/40">
                  {services.map((srv) => (
                    <tr key={srv.id} className="hover:bg-slate-50/5">
                      <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                        <img src={srv.image} alt={srv.title} className="w-8 h-8 rounded object-cover" />
                        <span>{srv.title}</span>
                      </td>
                      <td className="py-3 px-4 font-mono">{srv.category}</td>
                      <td className="py-3 px-4 font-mono text-blue-600">{srv.priceStart}</td>
                      <td className="py-3 px-4 text-slate-400">{srv.warranty}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingService(srv);
                              setIsServiceModalOpen(true);
                            }}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Hapus layanan "${srv.title}"?`)) {
                                deleteService(srv.id);
                                showNotification('Layanan berhasil dihapus.');
                              }
                            }}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: KELOLA PROJECT (CRUD) */}
        {activeTab === 'project' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Daftar {projects.length} Proyek Selesai</span>
              <button
                onClick={() => {
                  setEditingProject({
                    id: `prj-${Date.now()}`,
                    slug: 'proyek-baru',
                    title: 'Proyek Baru',
                    category: 'Residensial',
                    location: 'Jakarta',
                    clientName: 'Bpk. Klien',
                    year: '2024',
                    area: '150 m²',
                    duration: '2 Bulan',
                    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
                    gallery: ['/src/assets/images/project_modern_residence_1792118815219.jpg'],
                    summary: 'Ringkasan pengerjaan proyek baru...',
                    challenge: 'Tantangan lokasi...',
                    solution: 'Solusi rekayasa konstruksi...',
                    technologies: ['Baja Ringan G550', 'Plafon Gypsum'],
                    results: ['Selesai tepat waktu'],
                  });
                  setIsProjectModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Proyek Baru</span>
              </button>
            </div>

            <div className={`rounded-2xl border overflow-hidden ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <table className="w-full text-xs text-left">
                <thead className={`border-b ${isAdminDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                  <tr>
                    <th className="py-3 px-4">Nama Proyek</th>
                    <th className="py-3 px-4">Kategori</th>
                    <th className="py-3 px-4">Lokasi</th>
                    <th className="py-3 px-4">Tahun</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/40">
                  {projects.map((prj) => (
                    <tr key={prj.id} className="hover:bg-slate-50/5">
                      <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                        <img src={prj.thumbnail} alt={prj.title} className="w-8 h-8 rounded object-cover" />
                        <span>{prj.title}</span>
                      </td>
                      <td className="py-3 px-4 font-mono">{prj.category}</td>
                      <td className="py-3 px-4">{prj.location}</td>
                      <td className="py-3 px-4 font-mono text-slate-400">{prj.year}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingProject(prj);
                              setIsProjectModalOpen(true);
                            }}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Hapus proyek "${prj.title}"?`)) {
                                deleteProject(prj.id);
                                showNotification('Proyek berhasil dihapus.');
                              }
                            }}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: KELOLA ARTIKEL (CRUD) */}
        {activeTab === 'artikel' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Daftar {articles.length} Artikel Edukasi</span>
              <button
                onClick={() => {
                  setEditingArticle({
                    id: `art-${Date.now()}`,
                    slug: 'artikel-konstruksi-baru',
                    title: 'Judul Artikel Baru',
                    category: 'Edukasi Struktur',
                    excerpt: 'Ringkasan singkat artikel...',
                    content: '### Pendahuluan\nIsi artikel mendalam di sini...',
                    author: {
                      name: 'Tim Engineer Mitra Konstruksi',
                      role: 'Engineering Lead',
                      avatar: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
                    },
                    date: '15 Oktober 2024',
                    readTime: '4 Menit Baca',
                    thumbnail: '/src/assets/images/service_roof_interior_1792118815223.jpg',
                    tags: ['Konstruksi', 'Tips'],
                  });
                  setIsArticleModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tulis Artikel Baru</span>
              </button>
            </div>

            <div className={`rounded-2xl border overflow-hidden ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <table className="w-full text-xs text-left">
                <thead className={`border-b ${isAdminDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                  <tr>
                    <th className="py-3 px-4">Judul Artikel</th>
                    <th className="py-3 px-4">Kategori</th>
                    <th className="py-3 px-4">Tanggal</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/40">
                  {articles.map((art) => (
                    <tr key={art.id} className="hover:bg-slate-50/5">
                      <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                        <img src={art.thumbnail} alt={art.title} className="w-8 h-8 rounded object-cover" />
                        <span className="truncate max-w-sm">{art.title}</span>
                      </td>
                      <td className="py-3 px-4 font-mono">{art.category}</td>
                      <td className="py-3 px-4 text-slate-400 font-mono">{art.date}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingArticle(art);
                              setIsArticleModalOpen(true);
                            }}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Hapus artikel "${art.title}"?`)) {
                                deleteArticle(art.id);
                                showNotification('Artikel berhasil dihapus.');
                              }
                            }}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 6: KELOLA TESTIMONI */}
        {activeTab === 'testimoni' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Daftar {testimonials.length} Testimoni Klien</span>
              <button
                onClick={() => setIsTestiModalOpen(true)}
                className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Testimoni</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <h4 className="font-bold text-xs">{t.name}</h4>
                          <span className="text-[10px] text-slate-400">{t.role} · {t.company}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(`Hapus ulasan dari ${t.name}?`)) {
                            deleteTestimonial(t.id);
                            showNotification('Testimoni dihapus.');
                          }
                        }}
                        className="text-rose-500 hover:text-rose-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-2">"{t.comment}"</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200/40 text-[10px] text-blue-600 font-medium">
                    Proyek: {t.projectRef}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: KELOLA CLIENT */}
        {activeTab === 'client' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Daftar {clients.length} Logo Mitra & Client</span>
              <button
                onClick={() => setIsClientModalOpen(true)}
                className="px-4 py-2 bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Klien</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {clients.map((cl) => (
                <div
                  key={cl.id}
                  className={`p-4 rounded-xl border text-center relative group ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <button
                    onClick={() => {
                      if (confirm(`Hapus ${cl.name}?`)) {
                        deleteClient(cl.id);
                        showNotification('Klien dihapus.');
                      }
                    }}
                    className="absolute top-2 right-2 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono font-black text-sm text-blue-700 block">{cl.logo}</span>
                  <div className="font-bold text-xs mt-1">{cl.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{cl.industry}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: MEDIA MANAGER */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-display font-bold text-base mb-2">Unggah Gambar Baru ke Galeri</h3>
              <p className="text-xs text-slate-400 mb-4">
                Pilih foto pengerjaan konstruksi, atap baja ringan, plafon, atau kitchen set dari perangkat Anda.
              </p>
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors">
                <Upload className="w-4 h-4" />
                <span>Pilih Foto dari Komputer</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {mediaImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border overflow-hidden p-2 group ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <div className="h-32 rounded-xl overflow-hidden bg-slate-100">
                    <img src={img} alt={`Media ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 truncate max-w-[120px]">Asset #{idx + 1}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(img);
                        showNotification('URL gambar disalin ke clipboard!');
                      }}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Salin URL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: PESAN MASUK / INBOX */}
        {activeTab === 'pesan' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Total {inquiries.length} Pesan Masuk ({inquiries.filter((i) => i.status === 'Baru').length} Belum Dihubungi)
              </span>
            </div>

            <div className="space-y-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className={`p-6 rounded-2xl border space-y-3 ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-sm">{inq.name}</h4>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        {inq.phone} · {inq.email} {inq.company ? `(${inq.company})` : ''}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={inq.status}
                        onChange={(e) => {
                          updateInquiryStatus(inq.id, e.target.value as any);
                          showNotification(`Status pesan ${inq.name} diubah.`);
                        }}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                          inq.status === 'Baru'
                            ? 'bg-amber-100 text-amber-900 border-amber-300'
                            : inq.status === 'Dihubungi'
                            ? 'bg-blue-100 text-blue-900 border-blue-300'
                            : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        }`}
                      >
                        <option value="Baru">Status: Baru</option>
                        <option value="Dihubungi">Status: Dihubungi</option>
                        <option value="Selesai">Status: Selesai</option>
                      </select>

                      <button
                        onClick={() => {
                          if (confirm(`Hapus pesan dari ${inq.name}?`)) {
                            deleteInquiry(inq.id);
                            showNotification('Pesan dihapus.');
                          }
                        }}
                        className="p-1.5 text-rose-500 hover:bg-rose-50 rounded"
                        title="Hapus Pesan"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 text-xs">
                    <span className="font-bold text-blue-700 block mb-1">
                      Kebutuhan: {inq.serviceInterest}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {inq.message}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Waktu kirim: {inq.createdAt}</span>
                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Halo ${inq.name}, saya dari Mitra Konstruksi menindaklanjuti pesan konsultasi Anda mengenai ${inq.serviceInterest}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 font-bold hover:underline"
                    >
                      Balas via WhatsApp →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 10: SEO & STRUCTURED DATA */}
        {activeTab === 'seo' && (
          <div className="max-w-3xl space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-display font-bold text-base">Pengaturan Meta Tag SEO & Canonical</h3>
              
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Meta Title Tag (Maks 60 Karakter)</label>
                <input
                  type="text"
                  value={seoForm.metaTitle}
                  onChange={(e) => setSeoForm({ ...seoForm, metaTitle: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Meta Description (120 - 160 Karakter)</label>
                <textarea
                  rows={3}
                  value={seoForm.metaDescription}
                  onChange={(e) => setSeoForm({ ...seoForm, metaDescription: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Target Keywords (Pisahkan dengan koma)</label>
                <input
                  type="text"
                  value={seoForm.keywords}
                  onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Canonical URL</label>
                <input
                  type="url"
                  value={seoForm.canonicalUrl}
                  onChange={(e) => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                  className={`w-full text-xs p-2.5 rounded-lg border ${isAdminDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  updateSEOSettings(seoForm);
                  showNotification('Pengaturan SEO berhasil disimpan!');
                }}
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Simpan SEO Global</span>
              </button>
            </div>

            {/* Live Google Search Preview */}
            <div className={`p-6 rounded-2xl border space-y-3 ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h4 className="text-xs font-bold text-slate-500 uppercase">Preview Tampilan di Google Search</h4>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-left font-sans">
                <div className="text-xs text-slate-700 truncate">{seoForm.canonicalUrl}</div>
                <div className="text-base font-semibold text-blue-800 hover:underline cursor-pointer truncate mt-0.5">
                  {seoForm.metaTitle}
                </div>
                <div className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {seoForm.metaDescription}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 11: PENGATURAN WEBSITE & TEMA */}
        {activeTab === 'pengaturan' && (
          <div className="max-w-2xl space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isAdminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-display font-bold text-base">Pengaturan Warna & Visual Tema</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Warna Utama (Primary Blue)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={colorForm.primaryColor}
                      onChange={(e) => setColorForm({ ...colorForm, primaryColor: e.target.value })}
                      className="w-10 h-10 rounded border cursor-pointer"
                    />
                    <span className="font-mono text-xs">{colorForm.primaryColor}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Aksen Sekunder (Secondary Orange)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={colorForm.secondaryColor}
                      onChange={(e) => setColorForm({ ...colorForm, secondaryColor: e.target.value })}
                      className="w-10 h-10 rounded border cursor-pointer"
                    />
                    <span className="font-mono text-xs">{colorForm.secondaryColor}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    updateCompanySettings({
                      primaryColor: colorForm.primaryColor,
                      secondaryColor: colorForm.secondaryColor,
                    });
                    showNotification('Warna tema berhasil disimpan!');
                  }}
                  className="px-5 py-2.5 bg-blue-700 text-white rounded-xl text-xs font-bold"
                >
                  Simpan Warna Tema
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* SERVICE MODAL ADD/EDIT */}
      {isServiceModalOpen && editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                {editingService.id.startsWith('srv-') ? 'Edit / Tambah Layanan' : 'Layanan'}
              </h3>
              <button onClick={() => setIsServiceModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div>
              <label className="block font-semibold mb-1">Nama Layanan</label>
              <input
                type="text"
                value={editingService.title}
                onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold mb-1">Kategori</label>
                <select
                  value={editingService.category}
                  onChange={(e) => setEditingService({ ...editingService, category: e.target.value })}
                  className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
                >
                  <option value="Struktur & Atap">Struktur & Atap</option>
                  <option value="Interior & Finishing">Interior & Finishing</option>
                  <option value="Konstruksi & Renovasi">Konstruksi & Renovasi</option>
                  <option value="Mekanikal & Elektrikal">Mekanikal & Elektrikal</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Tarif Mulai</label>
                <input
                  type="text"
                  value={editingService.priceStart}
                  onChange={(e) => setEditingService({ ...editingService, priceStart: e.target.value })}
                  className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Deskripsi Singkat</label>
              <textarea
                rows={2}
                value={editingService.shortDesc}
                onChange={(e) => setEditingService({ ...editingService, shortDesc: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Deskripsi Lengkap Teknis</label>
              <textarea
                rows={4}
                value={editingService.fullDesc}
                onChange={(e) => setEditingService({ ...editingService, fullDesc: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsServiceModalOpen(false)}
                className="px-4 py-2 border rounded text-slate-600"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  const exists = services.some((s) => s.id === editingService.id);
                  if (exists) {
                    updateService(editingService.id, editingService);
                    showNotification('Layanan berhasil diperbarui!');
                  } else {
                    addService(editingService);
                    showNotification('Layanan baru ditambahkan!');
                  }
                  setIsServiceModalOpen(false);
                }}
                className="px-5 py-2 bg-blue-700 text-white rounded font-bold"
              >
                Simpan Layanan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT MODAL ADD/EDIT */}
      {isProjectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Kelola Proyek Portofolio
              </h3>
              <button onClick={() => setIsProjectModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div>
              <label className="block font-semibold mb-1">Nama Proyek</label>
              <input
                type="text"
                value={editingProject.title}
                onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold mb-1">Kategori</label>
                <select
                  value={editingProject.category}
                  onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                  className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
                >
                  <option value="Residensial">Residensial</option>
                  <option value="Komersial">Komersial</option>
                  <option value="Interior">Interior</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Atap & Plafon">Atap & Plafon</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Lokasi</label>
                <input
                  type="text"
                  value={editingProject.location}
                  onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                  className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Ringkasan Proyek</label>
              <textarea
                rows={2}
                value={editingProject.summary}
                onChange={(e) => setEditingProject({ ...editingProject, summary: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Tantangan (Challenge)</label>
              <textarea
                rows={2}
                value={editingProject.challenge}
                onChange={(e) => setEditingProject({ ...editingProject, challenge: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Solusi (Solution)</label>
              <textarea
                rows={2}
                value={editingProject.solution}
                onChange={(e) => setEditingProject({ ...editingProject, solution: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="px-4 py-2 border rounded text-slate-600"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  const exists = projects.some((p) => p.id === editingProject.id);
                  if (exists) {
                    updateProject(editingProject.id, editingProject);
                    showNotification('Proyek diperbarui!');
                  } else {
                    addProject(editingProject);
                    showNotification('Proyek baru ditambahkan!');
                  }
                  setIsProjectModalOpen(false);
                }}
                className="px-5 py-2 bg-blue-700 text-white rounded font-bold"
              >
                Simpan Proyek
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE MODAL ADD/EDIT */}
      {isArticleModalOpen && editingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Kelola Artikel Edukasi
              </h3>
              <button onClick={() => setIsArticleModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div>
              <label className="block font-semibold mb-1">Judul Artikel</label>
              <input
                type="text"
                value={editingArticle.title}
                onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Kategori</label>
              <input
                type="text"
                value={editingArticle.category}
                onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Ringkasan Excerpt</label>
              <textarea
                rows={2}
                value={editingArticle.excerpt}
                onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Konten Lengkap Markdown</label>
              <textarea
                rows={6}
                value={editingArticle.content}
                onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800 font-mono"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsArticleModalOpen(false)}
                className="px-4 py-2 border rounded text-slate-600"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  const exists = articles.some((a) => a.id === editingArticle.id);
                  if (exists) {
                    updateArticle(editingArticle.id, editingArticle);
                    showNotification('Artikel berhasil diperbarui!');
                  } else {
                    addArticle(editingArticle);
                    showNotification('Artikel baru diterbitkan!');
                  }
                  setIsArticleModalOpen(false);
                }}
                className="px-5 py-2 bg-blue-700 text-white rounded font-bold"
              >
                Terbitkan Artikel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TESTIMONI MODAL */}
      {isTestiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b">
              <h3 className="font-bold text-sm">Tambah Testimoni Klien</h3>
              <button onClick={() => setIsTestiModalOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            <div>
              <label className="block font-semibold mb-1">Nama Klien</label>
              <input
                type="text"
                value={newTesti.name}
                onChange={(e) => setNewTesti({ ...newTesti, name: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Role & Perusahaan</label>
              <input
                type="text"
                value={newTesti.company}
                onChange={(e) => setNewTesti({ ...newTesti, company: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Ulasan / Testimoni</label>
              <textarea
                rows={3}
                value={newTesti.comment}
                onChange={(e) => setNewTesti({ ...newTesti, comment: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div className="pt-2 flex justify-end gap-2">
              <button onClick={() => setIsTestiModalOpen(false)} className="px-3 py-1.5 border rounded">Batal</button>
              <button
                onClick={() => {
                  if (newTesti.name && newTesti.comment) {
                    addTestimonial({ ...newTesti, id: `tst-${Date.now()}` });
                    showNotification('Testimoni berhasil ditambahkan!');
                    setIsTestiModalOpen(false);
                  }
                }}
                className="px-4 py-1.5 bg-blue-700 text-white rounded font-bold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CLIENT MODAL */}
      {isClientModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b">
              <h3 className="font-bold text-sm">Tambah Logo Mitra / Klien</h3>
              <button onClick={() => setIsClientModalOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            <div>
              <label className="block font-semibold mb-1">Nama Perusahaan</label>
              <input
                type="text"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Sektor Industri</label>
              <input
                type="text"
                value={newClient.industry}
                onChange={(e) => setNewClient({ ...newClient, industry: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Teks Singkatan Logo (Monogram)</label>
              <input
                type="text"
                value={newClient.logo}
                onChange={(e) => setNewClient({ ...newClient, logo: e.target.value })}
                className="w-full p-2 border rounded bg-slate-50 dark:bg-slate-800 font-mono"
              />
            </div>
            <div className="pt-2 flex justify-end gap-2">
              <button onClick={() => setIsClientModalOpen(false)} className="px-3 py-1.5 border rounded">Batal</button>
              <button
                onClick={() => {
                  if (newClient.name) {
                    addClient({ ...newClient, id: `cl-${Date.now()}` });
                    showNotification('Mitra client berhasil ditambahkan!');
                    setIsClientModalOpen(false);
                  }
                }}
                className="px-4 py-1.5 bg-blue-700 text-white rounded font-bold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
