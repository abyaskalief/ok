import React, { useState } from 'react';
import { Hammer } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-radial from-blue-900/20 to-transparent pointer-events-none" />
        <Hammer className="w-8 h-8 text-amber-500/80 mb-2" />
        <span className="text-xs font-medium text-slate-400 text-center px-4 line-clamp-1">
          {fallbackTitle || alt || 'Mitra Konstruksi'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
