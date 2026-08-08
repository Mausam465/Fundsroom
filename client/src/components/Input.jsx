import React, { forwardRef } from 'react';
import { cn } from '../utils/cn.js';

/**
 * Reusable Input component with labels, icons, and error handling
 */
const Input = forwardRef(function Input(
  {
    label,
    helperText,
    error,
    leftIcon,
    rightIcon,
    required = false,
    disabled = false,
    fullWidth = true,
    className = '',
    id,
    ...props
  },
  ref
) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto')}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-slate-300 flex items-center gap-1"
        >
          {label}
          {required && <span className="text-rose-400 font-bold">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            'w-full bg-slate-900 text-slate-100 text-sm rounded-lg border px-3.5 py-2.5 transition-colors placeholder:text-slate-500',
            'focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            'disabled:bg-slate-900/50 disabled:text-slate-500 disabled:cursor-not-allowed disabled:border-slate-800',
            error
              ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500'
              : 'border-slate-700/80 hover:border-slate-600',
            leftIcon ? 'pl-10' : '',
            rightIcon ? 'pr-10' : '',
            className
          )}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 flex items-center text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>

      {error ? (
        <p className="text-xs text-rose-400">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-400">{helperText}</p>
      ) : null}
    </div>
  );
});

export default Input;
