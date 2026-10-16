import React from 'react';
import { useApp } from '../../context/AppContext';

interface NextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const NextLink: React.FC<NextLinkProps> = ({ href, className, children, onClick, ...props }) => {
  const { navigateTo } = useApp();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle new tab / modifier clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }

    // Parse href to app route
    if (href === '/' || href === '') {
      navigateTo('home');
    } else if (href === '/tentang') {
      navigateTo('about');
    } else if (href === '/layanan') {
      navigateTo('services');
    } else if (href.startsWith('/layanan/')) {
      const slug = href.replace('/layanan/', '');
      navigateTo('service-detail', slug);
    } else if (href === '/proyek') {
      navigateTo('projects');
    } else if (href.startsWith('/proyek/')) {
      const slug = href.replace('/proyek/', '');
      navigateTo('project-detail', slug);
    } else if (href === '/artikel') {
      navigateTo('articles');
    } else if (href.startsWith('/artikel/')) {
      const slug = href.replace('/artikel/', '');
      navigateTo('article-detail', slug);
    } else if (href === '/kontak') {
      navigateTo('contact');
    } else if (href === '/admin' || href.startsWith('/admin')) {
      const parts = href.split('/').filter(Boolean);
      navigateTo('admin', undefined, parts[1] || 'dashboard');
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
