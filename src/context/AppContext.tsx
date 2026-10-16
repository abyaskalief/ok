import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
import {
  initialCompanySettings,
  initialSEOSettings,
  initialServices,
  initialProjects,
  initialArticles,
  initialTestimonials,
  initialClients,
  initialTeamMembers,
  initialTimeline,
  initialInquiries,
} from '../data/initialData';

export interface RouteState {
  path: string;
  slug?: string;
  adminTab?: string;
}

interface AppContextType {
  companySettings: CompanySettings;
  updateCompanySettings: (settings: Partial<CompanySettings>) => void;
  seoSettings: SEOSettings;
  updateSEOSettings: (settings: Partial<SEOSettings>) => void;
  services: ServiceItem[];
  addService: (service: ServiceItem) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  projects: ProjectItem[];
  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  articles: ArticleItem[];
  addArticle: (article: ArticleItem) => void;
  updateArticle: (id: string, article: Partial<ArticleItem>) => void;
  deleteArticle: (id: string) => void;
  testimonials: TestimonialItem[];
  addTestimonial: (testi: TestimonialItem) => void;
  updateTestimonial: (id: string, testi: Partial<TestimonialItem>) => void;
  deleteTestimonial: (id: string) => void;
  clients: ClientPartner[];
  addClient: (client: ClientPartner) => void;
  deleteClient: (id: string) => void;
  teamMembers: TeamMember[];
  timeline: TimelineItem[];
  inquiries: ContactInquiry[];
  addInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: ContactInquiry['status']) => void;
  deleteInquiry: (id: string) => void;
  mediaImages: string[];
  addMediaImage: (dataUrl: string) => void;
  currentRoute: RouteState;
  navigateTo: (path: string, slug?: string, adminTab?: string) => void;
  isAdminDarkMode: boolean;
  setIsAdminDarkMode: (val: boolean) => void;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function parsePath(pathname: string): RouteState {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return { path: 'home' };
  if (parts[0] === 'tentang') return { path: 'about' };
  if (parts[0] === 'layanan') {
    if (parts[1]) return { path: 'service-detail', slug: parts[1] };
    return { path: 'services' };
  }
  if (parts[0] === 'proyek') {
    if (parts[1]) return { path: 'project-detail', slug: parts[1] };
    return { path: 'projects' };
  }
  if (parts[0] === 'artikel') {
    if (parts[1]) return { path: 'article-detail', slug: parts[1] };
    return { path: 'articles' };
  }
  if (parts[0] === 'kontak') return { path: 'contact' };
  if (parts[0] === 'admin') {
    return { path: 'admin', adminTab: parts[1] || 'dashboard' };
  }
  return { path: 'home' };
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load stored state or defaults
  const [companySettings, setCompanySettings] = useState<CompanySettings>(() => {
    const saved = localStorage.getItem('mk_settings');
    return saved ? JSON.parse(saved) : initialCompanySettings;
  });

  const [seoSettings, setSeoSettings] = useState<SEOSettings>(() => {
    const saved = localStorage.getItem('mk_seo');
    return saved ? JSON.parse(saved) : initialSEOSettings;
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem('mk_services');
    return saved ? JSON.parse(saved) : initialServices;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('mk_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    const saved = localStorage.getItem('mk_articles');
    return saved ? JSON.parse(saved) : initialArticles;
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem('mk_testimonials');
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  const [clients, setClients] = useState<ClientPartner[]>(() => {
    const saved = localStorage.getItem('mk_clients');
    return saved ? JSON.parse(saved) : initialClients;
  });

  const [teamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [timeline] = useState<TimelineItem[]>(initialTimeline);

  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    const saved = localStorage.getItem('mk_inquiries');
    return saved ? JSON.parse(saved) : initialInquiries;
  });

  const [mediaImages, setMediaImages] = useState<string[]>(() => {
    const saved = localStorage.getItem('mk_media');
    return saved
      ? JSON.parse(saved)
      : [
          '/src/assets/images/hero_construction_modern_1792118814032.jpg',
          '/src/assets/images/about_workshop_facility_1792118813993.jpg',
          '/src/assets/images/service_roof_interior_1792118815223.jpg',
          '/src/assets/images/project_modern_residence_1792118815219.jpg',
        ];
  });

  const [currentRoute, setCurrentRoute] = useState<RouteState>(() => {
    if (typeof window !== 'undefined') {
      return parsePath(window.location.pathname);
    }
    return { path: 'home' };
  });

  const [isAdminDarkMode, setIsAdminDarkMode] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('mk_settings', JSON.stringify(companySettings));
  }, [companySettings]);

  useEffect(() => {
    localStorage.setItem('mk_seo', JSON.stringify(seoSettings));
  }, [seoSettings]);

  useEffect(() => {
    localStorage.setItem('mk_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('mk_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('mk_articles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('mk_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('mk_clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem('mk_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('mk_media', JSON.stringify(mediaImages));
  }, [mediaImages]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(parsePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (path: string, slug?: string, adminTab?: string) => {
    let url = '/';
    if (path === 'home') url = '/';
    else if (path === 'about') url = '/tentang';
    else if (path === 'services') url = '/layanan';
    else if (path === 'service-detail') url = `/layanan/${slug}`;
    else if (path === 'projects') url = '/proyek';
    else if (path === 'project-detail') url = `/proyek/${slug}`;
    else if (path === 'articles') url = '/artikel';
    else if (path === 'article-detail') url = `/artikel/${slug}`;
    else if (path === 'contact') url = '/kontak';
    else if (path === 'admin') url = adminTab ? `/admin/${adminTab}` : '/admin';

    window.history.pushState({}, '', url);
    setCurrentRoute({ path, slug, adminTab });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateCompanySettings = (settings: Partial<CompanySettings>) => {
    setCompanySettings((prev) => ({ ...prev, ...settings }));
  };

  const updateSEOSettings = (settings: Partial<SEOSettings>) => {
    setSeoSettings((prev) => ({ ...prev, ...settings }));
  };

  const addService = (service: ServiceItem) => {
    setServices((prev) => [service, ...prev]);
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  const addProject = (project: ProjectItem) => {
    setProjects((prev) => [project, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
  };

  const addArticle = (article: ArticleItem) => {
    setArticles((prev) => [article, ...prev]);
  };

  const updateArticle = (id: string, updated: Partial<ArticleItem>) => {
    setArticles((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((item) => item.id !== id));
  };

  const addTestimonial = (testi: TestimonialItem) => {
    setTestimonials((prev) => [testi, ...prev]);
  };

  const updateTestimonial = (id: string, updated: Partial<TestimonialItem>) => {
    setTestimonials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((item) => item.id !== id));
  };

  const addClient = (client: ClientPartner) => {
    setClients((prev) => [...prev, client]);
  };

  const deleteClient = (id: string) => {
    setClients((prev) => prev.filter((item) => item.id !== id));
  };

  const addInquiry = (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Baru',
    };
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: ContactInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const addMediaImage = (dataUrl: string) => {
    setMediaImages((prev) => [dataUrl, ...prev]);
  };

  const resetAllData = () => {
    setCompanySettings(initialCompanySettings);
    setSeoSettings(initialSEOSettings);
    setServices(initialServices);
    setProjects(initialProjects);
    setArticles(initialArticles);
    setTestimonials(initialTestimonials);
    setClients(initialClients);
    setInquiries(initialInquiries);
    localStorage.clear();
  };

  return (
    <AppContext.Provider
      value={{
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
        updateTestimonial,
        deleteTestimonial,
        clients,
        addClient,
        deleteClient,
        teamMembers,
        timeline,
        inquiries,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        mediaImages,
        addMediaImage,
        currentRoute,
        navigateTo,
        isAdminDarkMode,
        setIsAdminDarkMode,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
