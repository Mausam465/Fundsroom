import React from 'react';
import { cn } from '../utils/cn.js';

const SIZES = {
  xs: 'w-3.5 h-3.5 border-2',
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-3',
  xl: 'w-12 h-12 border-4',
};

const VARIANTS = {
  primary: 'border-primary-500/20 border-t-primary-500',
  white: 'border-white/20 border-t-white',
  slate: 'border-slate-700 border-t-slate-300',
};

/**
 * Reusable LoadingSpinner component
 */
export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  className = '',
  label = 'Loading...',
}) {
  return (
    <div role="status" className="inline-flex items-center justify-center">
      <div
        className={cn(
          'rounded-full animate-spin',
          SIZES[size] || SIZES.md,
          VARIANTS[variant] || VARIANTS.primary,
          className
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
