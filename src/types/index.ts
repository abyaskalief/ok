export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  benefits: string[];
  features: string[];
  processSteps: { title: string; desc: string }[];
  gallery: string[];
  faqs: { question: string; answer: string }[];
  priceStart: string;
  estimatedTime: string;
  warranty: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Residensial' | 'Komersial' | 'Interior' | 'Industrial' | 'Atap & Plafon';
  location: string;
  clientName: string;
  year: string;
  area: string;
  duration: string;
  thumbnail: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  featured?: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  projectRef: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  industry: string;
  logo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
  certification: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest: string;
  message: string;
  createdAt: string;
  status: 'Baru' | 'Dihubungi' | 'Selesai';
}

export interface CompanySettings {
  name: string;
  tagline: string;
  description: string;
  establishedYear: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  mapsEmbedUrl: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    skilledWorkers: number;
    satisfactionRate: number;
  };
  vision: string;
  mission: string[];
  values: { title: string; desc: string; icon: string }[];
  certifications: { name: string; number: string; issuer: string }[];
  primaryColor: string;
  secondaryColor: string;
}

export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
}
