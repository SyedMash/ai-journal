import clsx from "clsx";
import React, { forwardRef } from "react";

interface BoundedProps {
  children: React.ReactNode;
  className?: string;
}

const Bounded = forwardRef<HTMLDivElement, BoundedProps>(
  ({ children, className }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx("max-w-[1900px] mx-auto px-4 py-36", className)}
      >
        {children}
      </section>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
