import React from "react";
export function Button({ asChild, children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; size?: string; variant?: string }) {
  const base = `inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110 ${className}`;
  if (asChild && React.isValidElement(children)) return React.cloneElement(children as React.ReactElement<{ className?: string }>, { className: base });
  return <button className={base} {...props}>{children}</button>;
}

