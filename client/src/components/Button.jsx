import React from 'react';
import { cn } from '../utils/cn.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const VARIANTS = {
  primary: 'bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white shadow-sm shadow-primary-950/40 border border-primary-500/30',
  secondary: 'bg-slate-800 hover:bg-slate-700 active:bg-slate-850 text-slate-100 border border-slate-700/80 shadow-sm',
  outline: 'bg-transparent hover:bg-slate-800/60 active:bg-slate-800 text-slate-200 border border-slate-700',
  ghost: 'bg-transparent hover:bg-slate-800/50 active:bg-slate-800 text-slate-300 hover:text-white border border-transparent',
  danger: 'bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white shadow-sm shadow-rose-950/40 border border-rose-500/30',
  success: 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-sm shadow-emerald-950/40 border border-emerald-500/30',
};

const SIZES = {
  sm: 'px-3 py-1.5 text-xs font-medium gap-1.5 rounded-md',
  md: 'px-4 py-2 text-sm font-medium gap-2 rounded-lg',
  lg: 'px-5 py-2.5 text-base font-semibold gap-2.5 rounded-lg',
};

/**
 * Reusable Button component for ERP/CRM actions
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  className = '',
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        VARIANTS[variant] || VARIANTS.primary,
        SIZES[size] || SIZES.md,
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <LoadingSpinner
          size={size === 'lg' ? 'md' : 'sm'}
          variant={variant === 'primary' || variant === 'danger' || variant === 'success' ? 'white' : 'slate'}
        />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
}
