import React from 'react';
import { cn } from '../utils/cn.js';

const VARIANTS = {
  primary: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  danger: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  info: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  neutral: 'bg-slate-800 text-slate-300 border-slate-700',
};

const DOT_COLORS = {
  primary: 'bg-primary-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  danger: 'bg-rose-400',
  info: 'bg-sky-400',
  neutral: 'bg-slate-400',
};

const SIZES = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs font-medium',
};

/**
 * Reusable Badge component for statuses, tags, and categories
 */
export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  withDot = false,
  className = '',
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide',
        VARIANTS[variant] || VARIANTS.neutral,
        SIZES[size] || SIZES.md,
        className
      )}
      {...props}
    >
      {withDot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            DOT_COLORS[variant] || DOT_COLORS.neutral
          )}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
