import React from 'react';

export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'px-4 py-2 rounded-md font-medium inline-flex items-center justify-center';
  const variants = {
    default: 'bg-construction text-white',
    secondary: 'bg-white text-construction',
    outline: 'border border-muted bg-transparent'
  };
  const classes = `${base} ${variants[variant] || variants.default} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
