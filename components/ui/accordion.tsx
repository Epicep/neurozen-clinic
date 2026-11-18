import type { ComponentProps } from "react";

export function Accordion({ children, ...props }: ComponentProps<"div"> & { type?: string; collapsible?: boolean }) {
  const { type: _type, collapsible: _collapsible, ...rest } = props;
  return <div {...rest}>{children}</div>;
}
export function AccordionItem({ children, value: _value, ...props }: ComponentProps<"details"> & { value?: string }) { return <details {...props}>{children}</details>; }
export function AccordionTrigger({ children, ...props }: ComponentProps<"summary">) { return <summary {...props}>{children}</summary>; }
export function AccordionContent({ children, ...props }: ComponentProps<"div">) { return <div {...props}>{children}</div>; }

