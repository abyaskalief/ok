import {
  ServiceItem,
  ProjectItem,
  ArticleItem,
  TestimonialItem,
  ClientPartner,
  TeamMember,
  TimelineItem,
  CompanySettings,
  SEOSettings,
  ContactInquiry,
} from '../types';

export const initialCompanySettings: CompanySettings = {
  name: 'Mitra Konstruksi',
  tagline: 'Solusi Konstruksi, Baja Ringan & Interior Presisi Modern',
  description:
    'Kami menyediakan solusi konstruksi, renovasi, dan interior profesional yang berspesialisasi dalam pemasangan plafon gypsum akustik, rangka atap baja ringan berstandar SNI, custom kitchen cabinet, serta proyek penyempurnaan residensial dan komersial berkualitas tinggi.',
  establishedYear: 2004,
  phone: '+62 21 5890 7822',
  whatsapp: '+62 812 8899 7720',
  email: 'halo@mitrakonstruksi.id',
  address: 'Kawasan Industri & Pergudangan Modern Blok C-12, Jl. Daan Mogot KM 19',
  city: 'Jakarta Barat, DKI Jakarta 11730',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126930.12354784913!2d106.7111666718047!3d-6.175392429672807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e8e7b9b7e9%3A0x2a21e428d06b4b45!2sJakarta%20Barat%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  operatingHours: {
    weekdays: 'Senin - Jumat: 08:00 - 17:00 WIB',
    saturday: 'Sabtu: 08:00 - 14:00 WIB',
    sunday: 'Minggu: Tutup (Konsultasi Darurat via WhatsApp)',
  },
  socialLinks: {
    instagram: 'https://instagram.com/mitrakonstruksi.official',
    facebook: 'https://facebook.com/mitrakonstruksi.id',
    linkedin: 'https://linkedin.com/company/mitra-konstruksi-id',
    youtube: 'https://youtube.com/@mitrakonstruksichannel',
  },
  stats: {
    yearsExperience: 20,
    projectsCompleted: 540,
    skilledWorkers: 128,
    satisfactionRate: 98,
  },
  vision:
    'Menjadi mitra konstruksi dan fabrikasi interior terdepan di Indonesia yang mengutamakan ketepatan struktur, inovasi material ramah lingkungan, serta estetika arsitektur bernilai tinggi.',
  mission: [
    'Memberikan hasil pengerjaan konstruksi dengan standar rekayasa tertinggi dan tanpa kompromi.',
    'Menghadirkan transparansi anggaran (RAB), jadwal kerja terukur, dan kepatuhan waktu serah terima proyek.',
    'Mengintegrasikan teknologi fabrikasi modern, material bersertifikat SNI/ISO, serta keselamatan kerja (K3).',
    'Membangun hubungan kemitraan jangka panjang berbasis kepercayaan, integritas, dan garansi resmi.',
  ],
  values: [
    {
      title: 'Integritas & Transparansi',
      desc: 'Rincian anggaran jelas tanpa biaya tersembunyi, komitmen material asli sesuai spesifikasi teknis.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Presisi Engineering',
      desc: 'Penerapan perhitungan beban struktur atap dan interior dengan software CAD/BIM berstandar industri.',
      icon: 'PenTool',
    },
    {
      title: 'K3 & Keselamatan Kerja',
      desc: 'Penerapan protokol zero accident dengan sertifikasi ISO 45001 pada seluruh lokasi proyek.',
      icon: 'HardHat',
    },
    {
      title: 'Garansi Resmi Pekerjaan',
      desc: 'Garansi kebocoran atap hingga 5 tahun dan jaminan purna jual interior 12 bulan penuh.',
      icon: 'Award',
    },
  ],
  certifications: [
    {
      name: 'ISO 9001:2015',
      number: 'ID21/05891',
      issuer: 'Sistem Manajemen Mutu Konstruksi & Fabrikasi Internasional',
    },
    {
      name: 'ISO 45001:2018',
      number: 'OHS-88210',
      issuer: 'Sistem Manajemen Keselamatan dan Kesehatan Kerja (K3)',
    },
    {
      name: 'LPJK Kualifikasi B1',
      number: '0-3171-08-012-1-09-0098',
      issuer: 'Lembaga Pengembangan Jasa Konstruksi Nasional',
    },
    {
      name: 'Sertifikasi Bluescope Steel',
      number: 'TRUSS-PRO-2024',
      issuer: 'Aplikator Resmi Baja Ringan Mutu Zincalume & Colorbond',
    },
  ],
  primaryColor: '#1e40af',
  secondaryColor: '#ea580c',
};

export const initialSEOSettings: SEOSettings = {
  metaTitle: 'Mitra Konstruksi – Solusi Konstruksi, Rangka Baja Ringan & Interior Modern',
  metaDescription:
    'Kontraktor konstruksi dan renovasi profesional spesialis pemasangan plafon gypsum akustik, rangka atap baja ringan SNI, custom kitchen set, dan perbaikan residensial terpercaya.',
  keywords:
    'mitra konstruksi, rangka atap baja ringan jakarta, pasang plafon gypsum, kitchen set minimalis, kontraktor renovasi rumah, interior kantor, fabrikasi baja wf',
  canonicalUrl: 'https://mitrakonstruksi.id',
  ogImage: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
};

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'rangka-atap-baja-ringan',
    title: 'Rangka Atap Baja Ringan (Light Steel Truss)',
    category: 'Struktur & Atap',
    shortDesc:
      'Pemasangan rangka atap baja ringan mutu tinggi G550 dengan profil Zincalume/Galvalume berstandar SNI dan bergaransi struktur hingga 10 tahun.',
    fullDesc:
      'Kami menyediakan sistem konstruksi rangka atap baja ringan engineered yang dirancang khusus sesuai geometri beban atap genteng beton, keramik, maupun metal pasir. Menggunakan perangkat lunak kalkulasi beban truss modern, setiap koneksi baut self-drilling screw dipasang presisi oleh aplikator bersertifikat nasional.',
    iconName: 'Triangle',
    image: '/src/assets/images/service_roof_interior_1792118815223.jpg',
    benefits: [
      'Bahan baja ringan G550 anti karat, anti rayap, dan tahan api',
      'Desain kuda-kuda dihitung dengan software struktural akurat',
      'Pemasangan cepat dan meminimalisir beban pondasi bangunan',
      'Garansi konstruksi rangka dan kebocoran hingga 10 tahun',
    ],
    features: [
      'Profil Canal C 0.75mm - 1.00mm SNI',
      'Reng asimetris pengikat genteng anti selip',
      'Baut dynabolt jangkar tahan gempa',
      'Insulasi aluminium foil bubble thermal reflektif',
    ],
    processSteps: [
      { title: 'Survei Geometri & Pengukuran', desc: 'Pengukuran akurat bentang ring balk dan kemiringan sudut atap bangunan.' },
      { title: 'Kalkulasi Beban & Desain Kuda-Kuda', desc: 'Pemodelan 3D dan simulasi beban angin serta bobot penutup genteng.' },
      { title: 'Fabrikasi & Perakitan Truss', desc: 'Perakitan kuda-kuda di workshop atau onsite dengan pengikatan standar K3.' },
      { title: 'Pemasangan & QC Serah Terima', desc: 'Ereksi rangka, perataan waterpass, pemasangan reng, dan inspeksi akhir.' },
    ],
    gallery: [
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    ],
    faqs: [
      {
        question: 'Berapa ketebalan baja ringan yang direkomendasikan untuk genteng keramik?',
        answer: 'Untuk genteng keramik atau beton dengan beban berat, kami menggunakan profil Canal C dengan ketebalan minimal 0.75mm TCT hingga 1.00mm dengan jarak kuda-kuda maksimal 1.2 meter.',
      },
      {
        question: 'Apakah rangka baja ringan tahan terhadap karat di area pesisir?',
        answer: 'Ya, kami menggunakan material Zincalume dengan lapisan aluminium-zinc 55% yang memiliki daya tahan korosi 4x lebih baik dibanding galvanis standar.',
      },
      {
        question: 'Berapa lama waktu pemasangan atap rumah 150m2?',
        answer: 'Pemasangan rangka atap baja ringan untuk luasan 150m2 umumnya memakan waktu 3 hingga 5 hari kerja tergantung tingkat kerumitan perisai atap.',
      },
    ],
    priceStart: 'Mulai Rp 145.000 / m²',
    estimatedTime: '3 - 7 Hari Kerja',
    warranty: 'Garansi Struktur 10 Tahun',
    featured: true,
  },
  {
    id: 'srv-2',
    slug: 'plafon-dan-partisi-gypsum',
    title: 'Plafon & Partisi Gypsum Akustik Modern',
    category: 'Interior & Finishing',
    shortDesc:
      'Instalasi drop ceiling bertingkat, cove lighting LED, plafon gypsum water-resistant, dan partisi dinding peredam suara ruang rapat maupun residensial.',
    fullDesc:
      'Solusi finishing plafon dan partisi dinding modern menggunakan papan gypsum premium (Jayaboard/Knauf/Elephant) dengan rangka hollow galvalum anti karat. Kami ahli dalam menciptakan aksen drop ceiling minimalis, shadowline modern, dan panel akustik perforated yang menyempurnakan kualitas suara ruangan.',
    iconName: 'Layers',
    image: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    benefits: [
      'Permukaan sambungan kompon super rata tanpa retak rambut (smooth finish)',
      'Desain drop ceiling estetik dengan integrasi jalur kabel LED tersembunyi',
      'Pilihan papan gypsum tahan kelembapan (Moisture Resistant) untuk toilet & dapur',
      'Partisi drywall kedap suara dengan insulasi rockwool densitas 60-80 kg/m³',
    ],
    features: [
      'Rangka Hollow 2x4 dan 4x4 ketebalan 0.35mm - 0.40mm',
      'Papan Gypsum 9mm & 12mm bersertifikasi SNI',
      'Pita textile joint tape anti retak elastis',
      'Cat akhir premium Dulux Pentalite / Nippon Paint Spot-less',
    ],
    processSteps: [
      { title: 'Penentuan Elevasi & Laser Level', desc: 'Penandaan ketinggian plafon menggunakan laser level untuk akurasi mutlak.' },
      { title: 'Pemasangan Rangka Hollow', desc: 'Penggantungan rod hanger dan rangka hollow grid 60x60cm yang rigid.' },
      { title: 'Instalasi Papan Gypsum & Desain Drop', desc: 'Pemasangan papan gypsum, modul drop ceiling, dan lubang downlight.' },
      { title: 'Kompon 3 Lapis & Pengecatan', desc: 'Finishing kompon sendi halus, pengamplasan vakum, dan pengecatan doff.' },
    ],
    gallery: [
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
    ],
    faqs: [
      {
        question: 'Apakah plafon gypsum rawan ambruk saat terkena rembesan air?',
        answer: 'Kami menerapkan protokol waterproofing pada dak beton sebelum pemasangan, dan untuk area basah (kamar mandi/overhang) kami mewajibkan papan gypsum hijau tipe Moisture Resistant (MR).',
      },
      {
        question: 'Bisa membuat model plafon lengkung atau indirect lighting?',
        answer: 'Tentu. Tim aplikator kami sangat terlatih dalam pengerjaan drop ceiling bertingkat, cove light, curved bulkhead, hingga panel akustik akustik bioskop mini.',
      },
    ],
    priceStart: 'Mulai Rp 110.000 / m²',
    estimatedTime: '2 - 5 Hari Kerja',
    warranty: 'Garansi Hasil Rata 12 Bulan',
    featured: true,
  },
  {
    id: 'srv-3',
    slug: 'custom-kitchen-set-interior',
    title: 'Custom Kitchen Set & Cabinetry Minimalis',
    category: 'Interior & Finishing',
    shortDesc:
      'Perancangan dan pembuatan kitchen set modular, kitchen island, wardrobe, kabinet TV, dan backdrop dinding berbahan multiplek solid finishing HPL/Duco.',
    fullDesc:
      'Ubah area dapur dan hunian Anda menjadi ruang multifungsi yang elegan, ergonomis, dan tahan puluhan tahun. Kami memproduksi cabinetry custom menggunakan bahan plywood meranti 18mm (bukan serbuk kayu/MDF murah), engsel slow-motion Blum/Hafele, serta top table granit alam atau quartz slab anti gores.',
    iconName: 'Box',
    image: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    benefits: [
      'Material 100% Multiplek/Plywood Meranti kualitas ekspor anti lapuk',
      'Aksesori engsel soft-close dan rel laci double-extension bergaransi',
      'Desain 3D realistis disesuaikan dengan alur kerja memasak (Work Triangle)',
      'Pilihan finishing variatif: HPL motif marmer/kayu, Cat Duco semi-matte, atau Lacquer',
    ],
    features: [
      'Top table Granite Black Nero Assoluto atau Quartz Calacatta Gold',
      'Rak piring tarik stainless steel SUS 304 anti karat',
      'Instalasi built-in hob kompor tanam, sink undermount, dan cooker hood',
      'Pencahayaan LED strip 3000K warm white dengan touch sensor',
    ],
    processSteps: [
      { title: 'Konsultasi Kebutuhan & Layout 3D', desc: 'Analisis kebutuhan storage, peralatan elektronik dapur, dan rendering visual.' },
      { title: 'Fabrikasi Presisi di Workshop', desc: 'Pemotongan mesin presisi panel multiplek, edging PVC mesin, dan pelapisan HPL.' },
      { title: 'Pemasangan Hardware & Fitting', desc: 'Pemasangan engsel soft close, rel hidrolik, dan aksesoris fungsional.' },
      { title: 'Instalasi On-site & Finishing', desc: 'Setting di lokasi klien, pemasangan top table marmer, silikon rapi, dan uji fungsi.' },
    ],
    gallery: [
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    ],
    faqs: [
      {
        question: 'Berapa estimasi biaya kitchen set per meter lari?',
        answer: 'Harga berkisar antara Rp 2.400.000 hingga Rp 3.800.000 per meter lari tergantung jenis finishing HPL dan tipe top table (solid surface vs granit alam).',
      },
      {
        question: 'Apakah kitchen set anti rayap dan tahan air?',
        answer: 'Kami menggunakan plywood inti padat dan untuk area kabinet basah di bawah sink kami menyediakan opsi bahan PVC Board 100% waterproof anti rayap.',
      },
    ],
    priceStart: 'Mulai Rp 2.400.000 / m lari',
    estimatedTime: '14 - 21 Hari Fabrikasi',
    warranty: 'Garansi Hardware 2 Tahun',
    featured: true,
  },
  {
    id: 'srv-4',
    slug: 'renovasi-rumah-residensial',
    title: 'Renovasi Rumah & Hunian Residensial',
    category: 'Konstruksi & Renovasi',
    shortDesc:
      'Layanan komprehensif penambahan lantai (tumbuh ke atas), peremajaan fasad modern tropis, penataan ulang denah ruang, dan perbaikan menyeluruh.',
    fullDesc:
      'Dari rumah lama bernuansa klasik hingga menjadi hunian modern minimalis dengan sirkulasi udara optimal. Kami mengelola seluruh tahapan renovasi mulai dari pembongkaran aman, perkuatan struktur kolom & balok, perapian plumbing, hingga serah terima kunci tepat waktu dengan sistem pengawasan mandor harian.',
    iconName: 'Home',
    image: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    benefits: [
      'RAB transparan dengan kurva S (jadwal progres mingguan tertulis)',
      'Pengawasan harian oleh Site Supervisor dan Quality Control tersertifikasi',
      'Tidak ada biaya tambahan mendadak (harga terikat kontrak resmi)',
      'Pemberesan puing dan kebersihan area kerja dijaga setiap hari',
    ],
    features: [
      'Perkuatan pondasi cakar ayam & balok gantung beton bertulang K-250',
      'Dinding bata ringan hebel plester aci semen instan Mortar Utama',
      'Instalasi kelistrikan berstandar SNI kabel tembaga murni 3x2.5mm',
      'Peremajaan fasad kisi-kisi conwood dan roster terakota modern',
    ],
    processSteps: [
      { title: 'Site Inspection & Tes Struktur', desc: 'Pengecekan kelayakan struktur bangunan eksisting dan identifikasi renovasi.' },
      { title: 'Penyusunan Desain & RAB Detail', desc: 'Pembuatan gambar kerja arsitektur dan penentuan volume material transparan.' },
      { title: 'Pelaksanaan Konstruksi & Laporan Progres', desc: 'Pengerjaan lapangan dengan update foto dan video mingguan kepada pemilik rumah.' },
      { title: 'Handover & Masa Retensi Garansi', desc: 'Serah terima kunci, uji coba fungsi seluruh fasilitas, dan proteksi garansi.' },
    ],
    gallery: [
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
    ],
    faqs: [
      {
        question: 'Apakah bisa renovasi bertahap sesuai budget yang dimiliki?',
        answer: 'Bisa. Kami dapat menyusun masterplan bertahap, misalnya pengerjaan struktur dan atap terlebih dahulu, disusul interior pada fase berikutnya.',
      },
      {
        question: 'Bagaimana penanganan jika rumah tetap dihuni saat renovasi?',
        answer: 'Kami menerapkan partisi debu zipper pelindung dan zona kerja terlokalisir agar privasi dan kenyamanan keluarga tetap terjaga.',
      },
    ],
    priceStart: 'Mulai Rp 3.800.000 / m²',
    estimatedTime: '30 - 90 Hari Kerja',
    warranty: 'Garansi Pemeliharaan 6 Bulan',
    featured: true,
  },
  {
    id: 'srv-5',
    slug: 'fabrikasi-besi-konstruksi-baja',
    title: 'Fabrikasi Besi & Konstruksi Baja WF',
    category: 'Struktur & Atap',
    shortDesc:
      'Fabrikasi struktur baja profil I-Beam/WF untuk gudang, kanopi kantilever modern, railing balkon laser-cut, tangga putar, dan pintu gerbang otomatis.',
    fullDesc:
      'Workshop fabrikasi kami dilengkapi mesin las MIG/TIG industri, mesin cutting plasma CNC, dan fasilitas sandblasting cat epoxy primer. Kami melayani proyek struktur baja bentang lebar untuk mezanin rumah, kanopi kaca tempered, hingga rangka bangunan industri berstandar mutu SNI baja berat.',
    iconName: 'Wrench',
    image: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    benefits: [
      'Penyambungan las bersertifikat AWS (American Welding Society) bebas cacat',
      'Pengecatan anti karat menggunakan sistem 2-pack Zinc Phosphate Epoxy',
      'Kekuatan struktur baja WF teruji untuk beban berat dan bentang bebas kolom',
      'Desain modern kombinasi baja dengan aksen kayu sintetis atau kaca laminated',
    ],
    features: [
      'Baja WF Gunung Garuda / Krakatau Steel bersertifikat mill certificate',
      'Kanopi atap Kaca Tempered 10mm atau Polycarbonate SolarTuff solid',
      'Railing tangga laser cutting plat besi 3mm motif parametrik',
      'Pintu gerbang sliding motor otomatis sensor remote control',
    ],
    processSteps: [
      { title: 'Gambar Kerja Teknis Shop Drawing', desc: 'Detailing sambungan baut mutu tinggi HTB A325 dan pelat buhul gusset.' },
      { title: 'Pemotongan & Pengelasan Pabrik', desc: 'Pemotongan presisi dan perakitan las di workshop dengan pengawasan QC.' },
      { title: 'Coating Anti Karat & Finishing', desc: 'Penyemprotan primer anti karat dan finishing polyurethane tahan cuaca.' },
      { title: 'Ereksi Struktur di Lokasi Proyek', desc: 'Pemasangan di lokasi dengan crane atau hoist mini secara aman dan cepat.' },
    ],
    gallery: [
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
    ],
    faqs: [
      {
        question: 'Apa keunggulan struktur baja WF dibanding beton bertulang?',
        answer: 'Struktur baja WF jauh lebih cepat dipasang (menghemat waktu hingga 50%), memiliki kekuatan tarik tinggi, dan dapat dibongkar pasang jika diperlukan ekspansi masa depan.',
      },
    ],
    priceStart: 'Mulai Rp 650.000 / m²',
    estimatedTime: '7 - 21 Hari Kerja',
    warranty: 'Garansi Las & Konstruksi 3 Tahun',
    featured: false,
  },
  {
    id: 'srv-6',
    slug: 'pemasangan-lantai-dan-finishing',
    title: 'Pemasangan Granit, Marmer & Lantai SPC/Vinyl',
    category: 'Interior & Finishing',
    shortDesc:
      'Pemasangan lantai granit tile ukuran jumbo (big slab 120x240cm), marmer poles kristalisasi, serta lantai vinyl SPC interlocking tahan air.',
    fullDesc:
      'Kerapian lantai menentukan kemewahan sebuah hunian. Kami mengadopsi teknik screeding waterpass laser dan perekat semen instan elastis grade C2TES1 untuk memastikan tidak ada ubin popping (terangkat) atau kopong. Dikerjakan dengan tile leveling spacer untuk nat yang seragam 1mm sempurna.',
    iconName: 'Grid',
    image: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    benefits: [
      'Nat super rapat 1mm dengan pengisi nat epoxy anti noda dan jamur',
      'Pemasangan bebas kopong dengan alat perekat getar elektrik (tile vibrator)',
      'Opsi lantai SPC click-system tahan gores dengan bantalan IXPE empuk',
      'Poles marmer awal dan kristalisasi mengkilap seperti cermin kaca',
    ],
    features: [
      'Pemasangan Granit Tile 60x60, 60x120, hingga 120x240 cm',
      'Lantai SPC Stone Polymer Composite tebal 5mm anti rayap',
      'Semen perekat Sika / MU Weber fleksibel non-shrinkage',
      'Perapian skirting plint dinding recessed flush modern',
    ],
    processSteps: [
      { title: 'Pemeriksaan Kerataan Dasar (Subfloor)', desc: 'Pengecekan kelembapan lantai dan perataan screeding semen pasir bergradasi.' },
      { title: 'Dry Laying & Pemilihan Pola Urat', desc: 'Penyusunan kering ubin marmer/granit untuk mencocokkan urat motif terindah.' },
      { title: 'Pemasangan dengan Tile Spacer & Leveler', desc: 'Aplikasi lem semen merata dan penguncian spacer agar tidak ada bibir ubin menonjol.' },
      { title: 'Grouting Epoxy & Buffing Pembersihan', desc: 'Pengisian nat cairan resin epoxy dan pemolesan pelindung permukaan.' },
    ],
    gallery: [
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
    ],
    faqs: [
      {
        question: 'Mengapa ubin granit bisa terangkat (popping) dan bagaimana pencegahannya?',
        answer: 'Popping terjadi karena pemuaian panas tanpa nat ekspansi atau penggunaan semen konvensional yang menyusut. Kami selalu menggunakan lem instan fleksibel polimer dan nat ekspansi elastis.',
      },
    ],
    priceStart: 'Mulai Rp 85.000 / m²',
    estimatedTime: '3 - 10 Hari Kerja',
    warranty: 'Garansi Pemasangan Tidak Kopong 1 Tahun',
    featured: false,
  },
  {
    id: 'srv-7',
    slug: 'instalasi-mep-dan-kelistrikan',
    title: 'Instalasi MEP & Kelistrikan Bangunan',
    category: 'Mekanikal & Elektrikal',
    shortDesc:
      'Perancangan instalasi kelistrikan 3-phase, panel MCB terbagi, jalur pipa air bersih panas/dingin PPR, pipa AC central, dan sistem proteksi petir.',
    fullDesc:
      'Sistem utilitas adalah urat nadi bangunan. Tim mekanikal elektrikal bersertifikasi kami merancang jalur instalasi tertutup dalam dinding dan pipa konduit berstandar PUIL 2020. Menjamin keselamatan dari bahaya korsleting arus pendek dan pencegahan kebocoran pipa terpendam dengan uji tekanan hidrostatik 10 bar.',
    iconName: 'Zap',
    image: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    benefits: [
      'Instalasi terorganisir dengan pipa konduit PVC high impact di setiap kabel',
      'Panel distribusi beban seimbang MCB Schneider anti trip beban berlebih',
      'Pipa air panas dingin Wavin Tigris Green / Westpex tahan suhu 95°C',
      'Uji beban isolasi megger test dan hydrotest sebelum penutupan dinding',
    ],
    features: [
      'Kabel NYM / NYY Supreme dan Kabelmetal tembaga murni SNI',
      'Sakelar dan stop kontak modular modern Schneider AvatarOn / Legrand',
      'Sistem grounding tembaga tahanan tanah di bawah 3 Ohm',
      'Sistem smart home lighting automation berbasis WiFi/Zigbee',
    ],
    processSteps: [
      { title: 'Schematic Wiring Diagram', desc: 'Pemetaan titik lampu, stop kontak daya tinggi AC & water heater, serta jalur utama.' },
      { title: 'Pembobokan & Pemasangan Pipa Konduit', desc: 'Pemasangan jalur pipa konduit rapi sebelum dinding diplester.' },
      { title: 'Penarikan Kabel & Pemasangan Panel', desc: 'Penarikan kabel berkode warna dan perakitan terminal box panel MCB.' },
      { title: 'Uji Tekan Pipa & Megger Test Kelistrikan', desc: 'Pengujian ketahanan isolasi kabel dan uji kebocoran pipa bertekanan tinggi.' },
    ],
    gallery: [
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    ],
    faqs: [
      {
        question: 'Apakah menyediakan gambar as-built drawing jalur pipa dan kabel?',
        answer: 'Ya, setiap proyek yang kami selesaikan akan mendapatkan dokumen As-Built Drawing MEP lengkap agar memudahkan perbaikan atau renovasi di kemudian hari.',
      },
    ],
    priceStart: 'Mulai Rp 95.000 / titik',
    estimatedTime: '5 - 14 Hari Kerja',
    warranty: 'Garansi Instalasi Kelistrikan 1 Tahun',
    featured: false,
  },
  {
    id: 'srv-8',
    slug: 'desain-arsitektur-dan-bim-3d',
    title: 'Desain Arsitektur & Perencanaan BIM 3D',
    category: 'Konstruksi & Renovasi',
    shortDesc:
      'Layanan konsultasi arsitektur, gambar kerja IMB/PBG, visualisasi 3D photorealistic, serta pemodelan BIM Revit untuk efisiensi volume material.',
    fullDesc:
      'Sebelum palu pertama diayunkan, wujudkan hunian impian Anda melalui visualisasi 3D yang detail dan gambar kerja konstruksi presisi. Tim arsitek kami memadukan aspek pencahayaan alami tropis, ventilasi silang hemat energi, dan optimasi tata ruang yang fungsional dengan perhitungan RAB yang tepat sasaran.',
    iconName: 'Compass',
    image: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    benefits: [
      'Visualisasi 3D eksterior dan interior photorealistic sebelum mulai bangun',
      'Gambar kerja arsitektur, struktur, dan MEP lengkap siap izin PBG',
      'Rencana Anggaran Biaya (RAB) detail per item pekerjaan tanpa mark-up liar',
      'Potongan biaya desain 100% (FREE) jika pengerjaan fisik diserahkan kepada kami',
    ],
    features: [
      'Pemodelan Autodesk Revit BIM Level of Detail (LOD) 300',
      'Animasi walk-through video 4K real-time rendering Lumion',
      'Perhitungan spesifikasi struktur dari Ahli Teknik Sipil ber-SKA',
      'Konsultasi pemilihan material ramah lingkungan dan hemat energi',
    ],
    processSteps: [
      { title: 'Briefing Kebutuhan & Analisis Lahan', desc: 'Wawancara gaya hidup pemilik rumah, orientasi matahari, dan regulasi GSB kawasan.' },
      { title: 'Konsep Denah 2D & Sketsa Awal', desc: 'Eksplorasi pembagian ruang (zoning) yang nyaman dan sirkulasi ergonomis.' },
      { title: 'Pemodelan 3D & Rendering High-Res', desc: 'Eksplorasi material fasad, warna, tata cahaya, dan detail tekstur.' },
      { title: 'Penyusunan Dokumen DED & RAB', desc: 'Pembuatan bundel Detail Engineering Design lengkap dengan rincian material.' },
    ],
    gallery: [
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
    ],
    faqs: [
      {
        question: 'Berapa lama proses pembuatan desain rumah tinggal 2 lantai?',
        answer: 'Biasanya memakan waktu 2 hingga 4 minggu termasuk 2 kali sesi revisi konsep denah dan visual fasad.',
      },
      {
        question: 'Apakah gambar kerja bisa langsung dipakai untuk mengurus izin PBG?',
        answer: 'Bisa. Kami menyertakan tanda tangan dan stempel arsitek ber-STRA untuk kelengkapan administrasi perizinan dinas tata ruang.',
      },
    ],
    priceStart: 'Mulai Rp 75.000 / m²',
    estimatedTime: '14 - 30 Hari Kerja',
    warranty: 'Revisi Terbimbing & Free Desain jika Bangun Fisik',
    featured: false,
  },
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'prj-1',
    slug: 'villa-modern-tropical-canggu',
    title: 'Vila Modern Tropical Sanctuary',
    category: 'Residensial',
    location: 'Canggu, Bali',
    clientName: 'Bpk. Hendra Kusuma',
    year: '2024',
    area: '420 m²',
    duration: '6 Bulan',
    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    gallery: [
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
    ],
    summary:
      'Pembangunan vila peristirahatan 2 lantai dengan konsep open-plan living, integrasi rangka baja ringan bentang lebar anti gempa, plafon drop ceiling kayu jati sintetis, dan kitchen island marmer Calacatta mewah.',
    challenge:
      'Lokasi proyek berjarak hanya 400 meter dari garis pantai berangin kencang dengan kadar garam tinggi yang berisiko mempercepat korosi logam atap, serta elevasi tanah berkontur miring.',
    solution:
      'Kami mengaplikasikan baja ringan profil Zincalume dengan coating anti karat ekstra marine grade, sistem penahan beban wind-brace silang, serta pondasi footplate bertingkat terpadu.',
    technologies: [
      'Baja Ringan Zincalume G550 Marine Coating',
      'Plafon Akustik Shadowline 9mm Jayaboard',
      'Kitchen Cabinet Multiplek Fin. HPL Taco Supreme',
      'Granit Slab 80x160cm Polish Mirror',
    ],
    results: [
      'Selesai 12 hari lebih cepat dari jadwal kontrak tanpa deviasi anggaran',
      'Tahan terpaan angin badai tropis tanpa ada pergeseran genteng',
      'Meningkatkan nilai valuasi sewa vila hingga 45% di platform luxury rental',
    ],
    featured: true,
  },
  {
    id: 'prj-2',
    slug: 'renovasi-penthouse-kemang-kitchen',
    title: 'Renovasi Interior & Kitchen Suite Kemang',
    category: 'Interior',
    location: 'Kemang, Jakarta Selatan',
    clientName: 'Ibu Stefanie Widjaja',
    year: '2024',
    area: '185 m²',
    duration: '45 Hari',
    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    gallery: [
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    ],
    summary:
      'Pengerjaan custom kitchen set gourmet island, backdrop panel TV berlapis marmer travertine tiruan, dan partisi walk-in closet presisi tinggi untuk unit penthouse.',
    challenge:
      'Regulasi gedung apartemen yang ketat: jam kerja hanya 09.00 - 17.00 WIB tanpa suara bising berlebih, serta larangan pengelasan langsung di dalam unit.',
    solution:
      '100% fabrikasi modul cabinetry dilakukan di workshop pusat kami di Daan Mogot, kemudian dikirim dalam sistem flat-pack modular untuk perakitan silent di lokasi.',
    technologies: [
      'Engsel Blum Tip-On Tandembox Austria',
      'Quartz Top Counter Silestone Blanco Zeus',
      'LED Linear Warm 2700K Dimmable Zigbee Smart Home',
      'Cat Duco Polyurethane Semi-Gloss Anti Scratch',
    ],
    results: [
      'Zero komplain kebisingan dari pengelola gedung apartemen',
      'Presisi sudut kabinet mencapai toleransi 0.5 milimeter',
      'Pemilik puas dengan kapasitas storage bertambah 60%',
    ],
    featured: true,
  },
  {
    id: 'prj-3',
    slug: 'office-tower-sudirman-ceiling',
    title: 'Instalasi Plafon Akustik & MEP Tower Sudirman',
    category: 'Komersial',
    location: 'SCBD, Sudirman, Jakarta Pusat',
    clientName: 'PT Graha Pratama Solusindo',
    year: '2023',
    area: '1.250 m²',
    duration: '3 Bulan',
    thumbnail: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    gallery: [
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
    ],
    summary:
      'Pemasangan plafon akustik perforated gypsum pada 3 lantai kantor korporat modern, integrasi kisi-kisi AC VRV tersembunyi, kabel tray, dan downlight arsitektural.',
    challenge:
      'Jalur pipa sprinkler, ducting pendingin udara, dan kabel data yang sangat padat di atas void plafon dengan toleransi ruang gantung terbatas.',
    solution:
      'Pemanfaatan koordinasi 3D BIM Clash Detection sebelum pengerjaan rangka hollow, memungkinkan pemasangan trap pintu akses inspeksi tersembunyi tanpa merusak estetika.',
    technologies: [
      'Gypsum Perforated Akustik Knauf Cleaneo NRC 0.75',
      'Rangka Hollow Galvalume Heavy Duty 0.45mm',
      'Panel Akses Flush Magnetic Trap 60x60cm',
      'Lampu Linear Recessed 40W 4000K Natural White',
    ],
    results: [
      'Tingkat pantulan gema suara (reverberation time) turun di bawah 0.6 detik sesuai standar ruang rapat internasional',
      'Sertifikasi laik fungsi green building tercapai dengan sukses',
    ],
    featured: true,
  },
  {
    id: 'prj-4',
    slug: 'gudang-logistik-cikarang-baja-wf',
    title: 'Fabrikasi Struktur Baja WF Gudang Logistik',
    category: 'Industrial',
    location: 'Kawasan Industri GIIC Cikarang',
    clientName: 'PT Cikarang Sukses Distribusi',
    year: '2023',
    area: '2.800 m²',
    duration: '4 Bulan',
    thumbnail: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    gallery: [
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
    ],
    summary:
      'Pembangunan struktur portal baja WF bentang 32 meter tanpa kolom tengah, atap insulasi sandwich panel, dan lantai beton floor hardener kapasitas forklift 5 ton.',
    challenge:
      'Kebutuhan ruang manuver forklift tanpa ada kolom penyangga tengah serta waktu konstruksi sebelum musim hujan tiba.',
    solution:
      'Penggunaan profil baja WF 400 dengan sistem rafter tapered dan baut high tensile strength Grade 8.8, dipadukan pengelasan full-penetration ultrasonic tested.',
    technologies: [
      'Baja WF 400x200 & WF 250 Gunung Garuda',
      'Atap Metal Zincalume 0.45mm insulasi Glasswool',
      'Sistem Baut A325 Heavy Hexagonal Torque Monitored',
      'Coating Epoxy Primer 120 Micron',
    ],
    results: [
      'Bentang 32 meter kokoh tanpa defleksi berlebih saat uji beban angin',
      'Serah terima 2 minggu lebih cepat dari target operasional klien',
    ],
    featured: true,
  },
  {
    id: 'prj-5',
    slug: 'residensial-cluster-serpong-atap',
    title: 'Penggantian Rangka Atap 42 Unit Rumah Cluster',
    category: 'Atap & Plafon',
    location: 'BSD City, Tangerang Selatan',
    clientName: 'Paguyuban Cluster Griya Serpong',
    year: '2024',
    area: '5.400 m²',
    duration: '2.5 Bulan',
    thumbnail: '/src/assets/images/service_roof_interior_1792118815223.jpg',
    gallery: [
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    ],
    summary:
      'Peremajaan total rangka atap kayu lapuk yang dimakan rayap menjadi rangka atap baja ringan engineered terpadu dengan penutup genteng metal pasir anti bocor.',
    challenge:
      'Pengerjaan dilakukan sementara para penghuni tetap tinggal di dalam rumah, sehingga risiko bocor akibat hujan mendadak saat atap terbuka sangat kritis.',
    solution:
      'Pemberlakuan metode segmen per 2 unit rumah dengan sistem tenda terpal pelindung cepat pasang, pembongkaran pagi dan penutupan genteng di sore hari.',
    technologies: [
      'Baja Ringan Kencana Truss Profil C75.75',
      'Aluminium Foil Double Sided Woven Insulation',
      'Genteng Metal Pasir Colorbond tebal 0.35mm',
      'Flashing nok zincalume anti cipratan',
    ],
    results: [
      'Zero kebocoran saat curah hujan ekstrem turun di pertengahan proyek',
      'Efisiensi suhu dalam ruangan turun 3 derajat Celsius berkat insulasi ganda',
    ],
    featured: true,
  },
  {
    id: 'prj-6',
    slug: 'kafe-resto-rooftop-senopati',
    title: 'Pembangunan Kafe Rooftop & Glasshouse',
    category: 'Komersial',
    location: 'Senopati, Jakarta Selatan',
    clientName: 'Kopi Langit Artisan F&B Group',
    year: '2024',
    area: '210 m²',
    duration: '60 Hari',
    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    gallery: [
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    ],
    summary:
      'Konstruksi kanopi kaca cantilever modern dengan rangka baja hollow galvanis 100x100, bar counter semen ekspos teraso, dan partisi dinding lipat aluminium panoramic.',
    challenge:
      'Kapasitas beban struktur dak lantai 3 gedung eksisting yang harus diperkuat tanpa menambah bobot mati berlebihan pada pondasi bawah.',
    solution:
      'Pemberian balok pembagi beban baja ringan hollow structural section dipadu pelat lantai deck komposit ringan berserat fiber.',
    technologies: [
      'Kaca Tempered Laminated 6+6mm Grey Tinted PVB',
      'Baja Hollow Hitam Galvanis Fin. Polyurethane Hitam Doff',
      'Meja Bar Cor Terrazzo Marmer Lokal Carrara',
      'Waterproofing Polyurea Spray Coating Elastomeric',
    ],
    results: [
      'Kafe menjadi salah satu spot kuliner terpopuler dengan panoramic view kota',
      'Struktur kanopi kaca terbukti kokoh dan kedap air 100%',
    ],
    featured: false,
  },
  {
    id: 'prj-7',
    slug: 'klinik-medis-terpadu-bsd',
    title: 'Fit-Out Interior & Plafon Higienis Klinik Medis',
    category: 'Komersial',
    location: 'Foresta Business Loft, BSD',
    clientName: 'Dr. Raymond Surya & Rekan',
    year: '2023',
    area: '340 m²',
    duration: '50 Hari',
    thumbnail: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    gallery: [
      '/src/assets/images/hero_construction_modern_1792118814032.jpg',
      '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    ],
    summary:
      'Pengerjaan interior ruang poli gigi dan laboratorium medis dengan spesifikasi dinding antibakteri, plafon tanpa celah jointless, dan lantai vinyl seamless hospital grade.',
    challenge:
      'Persyaratan ketat dinas kesehatan mengenai sterilitas ruang, peredaman suara antar poli medis, dan jalur radiasi X-Ray.',
    solution:
      'Instalasi pelat timbal (lead sheet 2mm) pada dinding ruang rontgen, plafon gypsum antibakteri anti jamur, dan lantai vinyl coved curved plint sudut bulat.',
    technologies: [
      'Lantai Vinyl Homogenous Gerflor Mipolam Bio Control',
      'Plafon Gypsum Jayaboard Wetstop Antibakteri',
      'Cat Dinding Medis Bio-Proof Silver Ion',
      'Sistem Partisi Rockwool Sound-Stop 52 dB',
    ],
    results: [
      'Lolos inspeksi akreditasi kementerian kesehatan pada audit pertama',
      'Kebisingan suara percakapan antar ruang dokter 100% terisolasi',
    ],
    featured: false,
  },
  {
    id: 'prj-8',
    slug: 'renovasi-rumah-tropis-bintaro',
    title: 'Transformasi Fasad & Interior Rumah Bintaro Jaya',
    category: 'Residensial',
    location: 'Bintaro Sektor 9, Tangerang Selatan',
    clientName: 'Keluarga Bpk. Arif Pratama',
    year: '2024',
    area: '260 m²',
    duration: '3.5 Bulan',
    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    gallery: [
      '/src/assets/images/project_modern_residence_1792118815219.jpg',
      '/src/assets/images/service_roof_interior_1792118815223.jpg',
    ],
    summary:
      'Renovasi total rumah era 90-an menjadi arsitektur tropis modern bertingkat mezzanine dengan skylight kaca tempered, taman kering indoor, dan kabinet kayu jati modular.',
    challenge:
      'Ruangan awal terasa gelap, pengap, dan sering rembes di sudut talang jurai atap beton.',
    solution:
      'Pembongkaran atap lama diganti atap baja ringan miring terarah satu sisi dengan skylight, serta penambahan void bukaan udara silang setinggi 6 meter.',
    technologies: [
      'Atap Baja Ringan Reng Galvalum dengan Genteng Flat Keramik KIA',
      'Skylight Kaca Low-E Laminated penolak panas radiasi',
      'Lantai Homogeneous Tile 60x120cm Matte Sandstone',
      'Partisi Roster Tanah Liat Terakota Handmade',
    ],
    results: [
      'Kebutuhan menyalakan lampu di siang hari berkurang hingga 80%',
      'Sirkulasi udara alami sejuk tanpa perlu menyalakan AC secara terus menerus',
    ],
    featured: false,
  },
];

export const initialArticles: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'panduan-memilih-baja-ringan-sni',
    title: 'Panduan Memilih Rangka Baja Ringan Berstandar SNI untuk Atap Rumah Aman',
    category: 'Edukasi Struktur',
    excerpt:
      'Ketahui cara membedakan baja ringan berkualitas G550 dengan produk abal-abal di pasaran agar terhindar dari risiko atap roboh.',
    content: `
### Pentingnya Standar Mutu Baja Ringan
Di tengah maraknya perumahan modern, rangka atap baja ringan (light gauge steel) telah menggantikan kayu konvensional. Namun, tidak semua baja ringan yang beredar di pasaran memiliki standar kekuatan yang sama. Banyak kontraktor nakal yang menggunakan baja ringan banci dengan ketebalan yang jauh di bawah standar demi memangkas biaya.

#### 1. Periksa Kode Mutu Tarik G550
Baja ringan untuk kuda-kuda struktural wajib memiliki tegangan tarik leleh minimal 550 MPa (Mega Pascal) atau diberi label G550. Kode ini membuktikan bahwa baja memiliki elastisitas dan ketahanan memikul beban penutup atap yang berat.

#### 2. Cek Lapisan Pelindung Karat (Coating Mass)
Terdapat dua jenis lapisan proteksi utama:
- **Zincalume/Galvalume**: Campuran 55% Aluminium, 43.5% Seng, dan 1.5% Silikon. Memiliki ketahanan korosi hingga 4 kali lipat lebih baik dibanding galvanis biasa. Minimal massa lapisan adalah AZ100 (100 gr/m²).
- **Galvanis**: Lapisan seng murni (Zinc). Cocok untuk area kering namun kurang tahan jika bersentuhan dengan semen basah.

#### 3. Ketebalan Material (BMT vs TCT)
Pastikan Anda menanyakan ketebalan **TCT (Total Coated Thickness)** atau **BMT (Base Metal Thickness)**.
- Kuda-kuda utama: Dianjurkan minimal tebal 0.75 mm hingga 1.00 mm.
- Reng pengikat genteng: Minimal 0.40 mm hingga 0.45 mm.

#### 4. Gunakan Software Perhitungan Struktural
Jangan biarkan tukang menyusun rangka hanya berdasarkan perkiraan. Mitra Konstruksi selalu menghitung bentang bangunan, sudut kemiringan atap, beban angin, dan jenis genteng menggunakan perangkat lunak kalkulasi terkomputerisasi demi keamanan jangka panjang.
    `,
    author: {
      name: 'Ir. Bagus Wicaksono, ST',
      role: 'Kepala Divisi Engineering Mitra Konstruksi',
      avatar: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    },
    date: '12 Oktober 2024',
    readTime: '5 Menit Baca',
    thumbnail: '/src/assets/images/service_roof_interior_1792118815223.jpg',
    tags: ['Baja Ringan', 'SNI', 'Konstruksi Atap', 'Tips Rumah'],
    featured: true,
  },
  {
    id: 'art-2',
    slug: 'plafon-gypsum-vs-pvc-mana-terbaik',
    title: 'Plafon Gypsum vs Plafon PVC: Perbandingan Biaya, Estetika & Daya Tahan',
    category: 'Material Interior',
    excerpt:
      'Bingung menentukan jenis plafon untuk ruang keluarga Anda? Simak ulasan mendalam kelebihan dan kekurangan gypsum dan PVC.',
    content: `
### Memilih Plafon yang Tepat untuk Karakter Hunian Anda
Plafon bukan sekadar penutup atap atau kabel utilitas; plafon adalah elemen penting yang membentuk nuansa akustik, visual, dan pencahayaan interior rumah. Dua pilihan terpopuler di Indonesia saat ini adalah plafon Gypsum dan PVC (Polyvinyl Chloride).

#### 1. Nilai Estetika dan Kemewahan (Pemenang: Gypsum)
Papan gypsum dapat disambung tanpa celah (seamless) menggunakan sistem kompon serat mikro. Hal ini memungkinkan terciptanya permukaan yang mulus merata, drop ceiling bertingkat dengan cove lighting, hingga dekorasi shadowline modern. Sementara plafon PVC memiliki garis-garis nat sambungan yang terlihat jelas, sehingga kurang cocok untuk rumah berkonsep luxury minimalis.

#### 2. Ketahanan Terhadap Air dan Kelembapan (Pemenang: PVC)
Jika atap rumah Anda rawan bocor, PVC adalah bahan anti air yang tidak akan lapuk atau berjamur saat tergenang air. Namun, gypsum modern kini telah menyediakan varian **Moisture Resistant (MR)** dengan kertas khusus berwarna hijau yang sangat tahan terhadap udara lembap kamar mandi dan dapur.

#### 3. Kemudahan Perbaikan dan Pengecatan Ulang (Pemenang: Gypsum)
Jika terjadi retak atau noda kotoran di kemudian hari, plafon gypsum sangat mudah diperbaiki hanya pada titik yang rusak lalu dicat ulang dengan warna baru. Sedangkan plafon PVC jika pecah atau menguning harus dibongkar satu lembar penuh dan warnanya sulit diubah.

#### Kesimpulan Mitra Konstruksi
Untuk ruang utama seperti ruang tamu, ruang keluarga, dan kamar tidur, gunakan **Plafon Gypsum** untuk hasil mewah dan elegan. Untuk area basah terbuka atau teras luar, gunakan varian gypsum tahan air atau PVC bermotif kayu serat halus.
    `,
    author: {
      name: 'Denny Setiawan, S.Ars',
      role: 'Lead Interior Designer',
      avatar: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    },
    date: '28 September 2024',
    readTime: '4 Menit Baca',
    thumbnail: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    tags: ['Plafon Gypsum', 'Plafon PVC', 'Interior Rumah', 'Material'],
    featured: true,
  },
  {
    id: 'art-3',
    slug: 'rahasia-desain-kitchen-set-ergonomis',
    title: 'Rahasia Desain Kitchen Set Ergonomis: Dari Segitiga Kerja hingga Pemilihan Top Table',
    category: 'Desain Interior',
    excerpt:
      'Membangun dapur impian bukan hanya soal penampilan cantik. Ikuti prinsip ergonomi agar memasak jadi lebih nyaman dan efisien.',
    content: `
### Dapur: Jantung Kehangatan Sebuah Rumah Modern
Banyak pemilik rumah menghabiskan puluhan juta untuk kitchen set namun merasa cepat lelah saat memasak. Masalah utamanya seringkali terletak pada tata letak yang mengabaikan prinsip ergonomi dan antropometri tubuh manusia.

#### Konsep Golden Work Triangle (Segitiga Kerja)
Tiga titik aktivitas terpenting dalam dapur adalah:
1. **Area Kulkas / Penyimpanan**: Tempat mengambil bahan makanan mentah.
2. **Area Bak Cuci Piring (Sink)**: Tempat membersihkan dan mencuci.
3. **Area Kompor (Cooktop)**: Tempat memasak dan menggoreng.
Jarak ideal antar ketiga titik ini adalah antara 1.2 meter hingga 2.7 meter tanpa adanya halangan lemari tinggi di tengah alur sirkulasi.

#### Ketinggian Meja Dapur yang Tepat
Standar tinggi meja dapur di Indonesia umumnya berkisar antara 82 cm hingga 88 cm dari lantai, disesuaikan dengan tinggi badan pengguna utama (rumus praktis: tinggi badan dibagi 2 ditambah 5 cm). Ketinggian kabinet atas idealnya berjarak 55-60 cm di atas counter agar kepala tidak terbentur.

#### Material Top Table: Granit vs Marmer vs Quartz
- **Granit Alam**: Sangat keras, tahan panas kuali panas, namun membutuhkan coating berkala.
- **Marmer**: Tampilan urat sangat mewah, tetapi berpori sehingga rentan terhadap noda asam cuka atau kopi jika tidak segera dilap.
- **Quartz Slab Engineered**: Pilihan terbaik masa kini karena padat tanpa pori, anti gores, higienis, dan hadir dengan corak marmer putih modern yang konsisten.
    `,
    author: {
      name: 'Rina Kusumaningrum',
      role: 'Interior Space Planner',
      avatar: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    },
    date: '15 September 2024',
    readTime: '6 Menit Baca',
    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    tags: ['Kitchen Set', 'Interior Dapur', 'Ergonomi', 'Renovasi'],
    featured: true,
  },
  {
    id: 'art-4',
    slug: 'cara-menghitung-estimasi-biaya-renovasi',
    title: 'Cara Cermat Menghitung Estimasi Biaya Renovasi Rumah Tanpa Takut Over-Budget',
    category: 'Panduan Proyek',
    excerpt:
      'Simak cara menyusun Rencana Anggaran Biaya (RAB) realistis dan strategi mengalokasikan dana cadangan darurat konstruksi.',
    content: `
### Mengapa Banyak Proyek Renovasi Mengalami Pembengkakan Biaya?
Salah satu kekhawatiran terbesar pemilik rumah saat merenovasi adalah biaya yang membengkak di tengah jalan. Hal ini umumnya disebabkan oleh tiga faktor: ketiadaan gambar kerja terinci, kesepakatan harga borongan global tanpa rincian volume satuan, dan perubahan spesifikasi mendadak saat proyek berjalan.

#### Langkah 1: Buat Rencana Prioritas (Need vs Want)
Pisahkan antara kebutuhan struktural yang mendesak (atap bocor, rembesan dinding, instalasi pipa air rusak) dengan kebutuhan dekoratif estetis (penggantian motif keramik, cat dinding baru, aksen kayu). Kerjakan fondasi dan struktur terlebih dahulu.

#### Langkah 2: Pahami Struktur RAB Satuan
Kontraktor profesional selalu memberikan RAB dengan rincian:
- Uraian pekerjaan (pekerjaan persiapan, dinding, atap, elektrikal)
- Volume pekerjaan dalam meter persegi (m²) atau meter lari (m1)
- Harga satuan material dan upah tukang
- Total perkalian volume x harga satuan

#### Langkah 3: Siapkan Dana Kontingensi 10% - 15%
Dalam pekerjaan renovasi rumah lama, sering kali ditemukan kendala tersembunyi yang baru terlihat saat dinding dibongkar, misalnya rangka kayu lama ternyata sudah hancur oleh rayap atau instalasi pipa lama yang berkarat. Menyiapkan dana cadangan 10-15% dari total RAB akan menjaga ketenangan finansial Anda.
    `,
    author: {
      name: 'Ir. Bagus Wicaksono, ST',
      role: 'Kepala Divisi Engineering Mitra Konstruksi',
      avatar: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    },
    date: '02 September 2024',
    readTime: '5 Menit Baca',
    thumbnail: '/src/assets/images/about_workshop_facility_1792118813993.jpg',
    tags: ['RAB', 'Biaya Renovasi', 'Manajemen Proyek', 'Tips Rumah'],
    featured: false,
  },
  {
    id: 'art-5',
    slug: 'standar-k3-konstruksi-dan-keselamatan-kerja',
    title: 'Standar K3 Konstruksi: Menjaga Zero Accident di Setiap Lokasi Proyek',
    category: 'Manajemen Konstruksi',
    excerpt:
      'Ketahui mengapa penerapan Keselamatan dan Kesehatan Kerja (K3) adalah cerminan profesionalitas dan jaminan kelancaran proyek Anda.',
    content: `
### Keselamatan Adalah Prioritas Mutlak, Bukan Pilihan
Sektor konstruksi memiliki risiko kerja yang tinggi, mulai dari bekerja di ketinggian rangka atap, debu material berbahaya, hingga instrumen listrik berkekuatan tinggi. Di Mitra Konstruksi, kami percaya bahwa hasil akhir yang indah hanya bermakna jika dicapai dengan menjaga setiap tenaga kerja pulang ke rumah dengan selamat.

#### Peralatan Perlindungan Diri (APD) Wajib
Setiap pekerja kami diwajibkan menggunakan:
- Helm pengaman bersertifikasi ANSI Z89.1
- Rompi visibilitas tinggi berscotlight
- Sepatu safety dengan sol baja anti paku
- Full body harness ganda untuk pekerjaan atap di atas ketinggian 1.8 meter

#### Protokol Tool Box Meeting Setiap Pagi
Sebelum memulai shift kerja pukul 08.00 WIB, supervisor lapangan kami memimpin briefing singkat 10 menit untuk mengevaluasi potensi bahaya cuaca, memeriksa kelayakan alat perancah scaffolding, dan memastikan rencana kerja hari itu dipahami secara serempak.
    `,
    author: {
      name: 'Budi Santoso, SKM',
      role: 'K3 Safety Officer Mitra Konstruksi',
      avatar: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    },
    date: '19 Agustus 2024',
    readTime: '4 Menit Baca',
    thumbnail: '/src/assets/images/hero_construction_modern_1792118814032.jpg',
    tags: ['K3', 'Keselamatan Kerja', 'ISO 45001', 'Standar Bangunan'],
    featured: false,
  },
  {
    id: 'art-6',
    slug: 'tren-arsitektur-tropis-modern-2025',
    title: 'Tren Arsitektur Tropis Modern 2025: Pencahayaan Alami & Efisiensi Energi',
    category: 'Arsitektur & Desain',
    excerpt:
      'Eksplorasi perpaduan beton ekspos, kisi-kisi kayu kanopi, dan sistem ventilasi silang yang menyejukkan hunian di iklim tropis Indonesia.',
    content: `
### Menyikapi Iklim Tropis dengan Desain Cerdas
Membangun rumah di Indonesia membutuhkan pemahaman mendalam tentang iklim tropis: curah hujan tinggi, kelembapan udara lembap, dan intensitas panas matahari sepanjang tahun. Tren arsitektur 2025 tidak lagi terpaku pada gaya minimalis serba tertutup berpendingin AC 24 jam, melainkan kembali merangkul alam melalui pendekatan **Biophilic Tropical Modern**.

#### 1. Overhang Atap Lebar dan Teritisan Baja
Bukaan atap dengan overstek minimal 1 meter memberikan naungan efektif dari tampias air hujan deras sekaligus memblokir sinar matahari langsung menyengat dinding kaca jendela.

#### 2. Cross Ventilation (Ventilasi Silang)
Dengan menempatkan bukaan jendela di dua sisi berlawanan dengan elevasi berbeda, udara panas secara alami terdorong keluar dan digantikan oleh semilir angin sejuk dari arah taman atau inner-court.

#### 3. Material Dinding Bernapas (Breathable Materials)
Pemanfaatan dinding roster terakota, kisi-kisi kayu komposit, serta void tinggi memungkinkan privasi tetap terjaga namun sirkulasi angin dan cahaya tetap mengalir bebas ke dalam ruang keluarga.
    `,
    author: {
      name: 'Denny Setiawan, S.Ars',
      role: 'Lead Interior Designer',
      avatar: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    },
    date: '05 Agustus 2024',
    readTime: '5 Menit Baca',
    thumbnail: '/src/assets/images/project_modern_residence_1792118815219.jpg',
    tags: ['Arsitektur Tropis', 'Tren 2025', 'Rumah Hemat Energi', 'Desain'],
    featured: false,
  },
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: 'tst-1',
    name: 'Bpk. Hendra Kusuma',
    role: 'Pemilik Vila & Pengusaha Properti',
    company: 'Sanctuary Living Bali',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment:
      'Pengerjaan rangka baja ringan dan drop ceiling vila kami di Canggu dikerjakan dengan sangat rapi dan presisi. Tim Mitra Konstruksi memberikan laporan progres foto mingguan yang detail, dan proyek selesai 2 minggu lebih cepat dari target!',
    projectRef: 'Vila Modern Tropical Sanctuary',
  },
  {
    id: 'tst-2',
    name: 'Ibu Stefanie Widjaja',
    role: 'Managing Director',
    company: 'Widjaja Advisory Kemang',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment:
      'Kitchen set custom dan interior penthouse yang mereka kerjakan memiliki finishing yang luar biasa halus. Semua engsel soft-close dan penyesuaian sudut sangat presisi. Senang sekali bekerja sama dengan kontraktor yang begitu komunikatif.',
    projectRef: 'Renovasi Interior & Kitchen Suite Kemang',
  },
  {
    id: 'tst-3',
    name: 'Ir. Triawan Santoso',
    role: 'Project Manager Komersial',
    company: 'PT Graha Pratama Solusindo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment:
      'Plafon akustik perforated di 3 lantai tower Sudirman kami lolos uji akustik dengan angka NRC 0.75 tanpa catatan deviasi. Kedisiplinan K3 pekerja mereka di lapangan patut diacungi jempol.',
    projectRef: 'Instalasi Plafon Akustik & MEP Tower Sudirman',
  },
  {
    id: 'tst-4',
    name: 'Bpk. Arif Pratama',
    role: 'Professional Banker',
    company: 'Residensial Bintaro Sektor 9',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment:
      'Renovasi rumah tua kami menjadi hunian modern tropis terwujud sesuai ekspektasi. RAB yang diberikan di awal benar-benar dipatuhi tanpa ada tagihan tambahan siluman di tengah proyek. Sangat direkomendasikan!',
    projectRef: 'Transformasi Fasad & Interior Rumah Bintaro Jaya',
  },
  {
    id: 'tst-5',
    name: 'Dr. Raymond Surya',
    role: 'Founder & Sp.Ort',
    company: 'Klinik Medis Terpadu BSD',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment:
      'Pemasangan dinding antibakteri dan plafon seamless di klinik kami sangat profesional. Mitra Konstruksi sangat memahami regulasi fasilitas kesehatan sehingga klinik kami langsung lolos akreditasi dinas terkait.',
    projectRef: 'Fit-Out Interior & Plafon Higienis Klinik Medis',
  },
];

export const initialClients: ClientPartner[] = [
  { id: 'cl-1', name: 'PT Astra International', industry: 'Industrial & Otomotif', logo: 'ASTRA' },
  { id: 'cl-2', name: 'Sinarmas Land', industry: 'Pengembang Kota Mandiri', logo: 'SINARMAS' },
  { id: 'cl-3', name: 'Ciputra Development', industry: 'Properti Residensial', logo: 'CIPUTRA' },
  { id: 'cl-4', name: 'Summarecon Agung', industry: 'Kawasan Komersial', logo: 'SUMMARECON' },
  { id: 'cl-5', name: 'Agung Podomoro Group', industry: 'Superblock & Mixed-Use', logo: 'PODOMORO' },
  { id: 'cl-6', name: 'Telkom Property', industry: 'Fasilitas Telekomunikasi', logo: 'TELKOM' },
  { id: 'cl-7', name: 'Bank Mandiri Properti', industry: 'Perbankan & Kantor Cabang', logo: 'MANDIRI' },
  { id: 'cl-8', name: 'BlueScope Steel', industry: 'Principal Baja Ringan Dunia', logo: 'BLUESCOPE' },
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Ir. Suhendra Wibowo, MT',
    role: 'Direktur Utama & Principal Engineer',
    experience: '24 Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    bio: 'Alumnus Teknik Sipil ITB dengan spesialisasi rekayasa struktur baja bentang lebar dan manajemen konstruksi gedung tinggi.',
    certification: 'SKA Ahli Madya Teknik Bangunan Gedung (LPJK)',
  },
  {
    id: 'tm-2',
    name: 'Denny Setiawan, S.Ars',
    role: 'Head of Architecture & Interior Design',
    experience: '14 Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bio: 'Spesialis arsitektur tropis modern, interior cabinetry custom, dan efisiensi sirkulasi ruang residensial mewah.',
    certification: 'STRA Arsitek Pratama IAI',
  },
  {
    id: 'tm-3',
    name: 'Ir. Bagus Wicaksono, ST',
    role: 'Kepala Rekayasa Struktur & Fabrikasi',
    experience: '16 Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    bio: 'Pakar kalkulasi rangka atap baja ringan, perancangan portal baja WF, dan simulasi pembebanan gempa SNI 1726.',
    certification: 'Certified BlueScope Truss Engineering Lead',
  },
  {
    id: 'tm-4',
    name: 'Budi Santoso, SKM',
    role: 'Senior K3 & Quality Control Manager',
    experience: '12 Tahun Pengalaman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    bio: 'Menjamin kepatuhan standar keselamatan kerja, penerapan protokol ISO 45001, serta inspeksi mutu harian di lokasi.',
    certification: 'Ahli K3 Konstruksi Madya BNSP',
  },
];

export const initialTimeline: TimelineItem[] = [
  {
    year: '2004',
    title: 'Awal Pendirian Workshop Fabrikasi',
    description: 'Mitra Konstruksi didirikan di Jakarta Barat berfokus pada pekerjaan las teralis, kanopi, dan perbaikan atap residensial.',
  },
  {
    year: '2009',
    title: 'Adopsi Teknologi Baja Ringan Berstandar SNI',
    description: 'Menjadi aplikator resmi pertama sistem rangka atap baja ringan engineered di kawasan Jabodetabek.',
  },
  {
    year: '2015',
    title: 'Ekspansi Divisi Interior & Custom Cabinetry',
    description: 'Mendirikan workshop interior modern dengan mesin edging dan perakitan kitchen set modular di Daan Mogot.',
  },
  {
    year: '2019',
    title: 'Sertifikasi ISO 9001:2015 & ISO 45001:2018',
    description: 'Mencapai standardisasi manajemen mutu internasional dan kepatuhan sistem keselamatan kerja (K3) zero accident.',
  },
  {
    year: '2024',
    title: 'Pencapaian 500+ Proyek Terselesaikan',
    description: 'Menuntaskan lebih dari 540 proyek konstruksi hunian, perkantoran komersial, serta pergudangan logistik di seluruh Indonesia.',
  },
];

export const initialInquiries: ContactInquiry[] = [
  {
    id: 'inq-1',
    name: 'Bpk. Chandra Gunawan',
    email: 'chandra.g@megahproperti.co.id',
    phone: '081387654321',
    company: 'PT Megah Properti Cemerlang',
    serviceInterest: 'Rangka Atap Baja Ringan (Light Steel Truss)',
    message: 'Halo Mitra Konstruksi, kami ada rencana penggantian rangka atap untuk 18 unit ruko di Serpong. Mohon info estimasi survei lokasi.',
    createdAt: '2026-10-14 14:32',
    status: 'Baru',
  },
  {
    id: 'inq-2',
    name: 'Ibu Melissa Tanjung',
    email: 'melissa.tanjung@gmail.com',
    phone: '081298761234',
    serviceInterest: 'Custom Kitchen Set & Cabinetry Minimalis',
    message: 'Ingin konsultasi pembuatan kitchen set dapur bersih dan island table dengan top table quartz calacatta untuk rumah tinggal di Pondok Indah.',
    createdAt: '2026-10-13 10:15',
    status: 'Dihubungi',
  },
  {
    id: 'inq-3',
    name: 'Bpk. Fajar Ramadhan',
    email: 'fajar.ramadhan@startuphub.id',
    phone: '085712348765',
    company: 'PT Kreasi Solusi Bangsa',
    serviceInterest: 'Plafon & Partisi Gypsum Akustik Modern',
    message: 'Butuh partisi gypsum kedap suara dan drop ceiling untuk ruang podcast dan studio rekaman kantor kami di Jakarta Selatan.',
    createdAt: '2026-10-11 16:40',
    status: 'Selesai',
  },
];
