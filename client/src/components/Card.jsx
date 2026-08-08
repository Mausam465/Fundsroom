import React from 'react';
import { cn } from '../utils/cn.js';

export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={cn(
        'bg-slate-900/60 border border-slate-800 rounded-xl shadow-sm overflow-hidden backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div
      className={cn('px-6 py-5 border-b border-slate-800/80 flex flex-col gap-1', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3
      className={cn('text-base font-semibold text-white tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p
      className={cn('text-xs text-slate-400 leading-normal', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div
      className={cn(
        'px-6 py-4 bg-slate-900/40 border-t border-slate-800/80 flex items-center justify-between gap-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
