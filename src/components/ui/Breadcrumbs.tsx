import React from 'react';
import { NextLink } from './NextLink';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <li>
          <NextLink href="/" className="hover:text-blue-700 transition-colors">
            Beranda
          </NextLink>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-slate-400" aria-hidden="true">
                /
              </span>
              {isLast || !item.href ? (
                <span className="text-slate-800 font-medium truncate max-w-xs md:max-w-md">
                  {item.label}
                </span>
              ) : (
                <NextLink href={item.href} className="hover:text-blue-700 transition-colors">
                  {item.label}
                </NextLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
