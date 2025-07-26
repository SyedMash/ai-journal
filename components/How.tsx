import clsx from "clsx";
import React from "react";

interface HowProps {
  index: string;
  description: string;
  className?: string;
}

const How = ({ description, index, className }: HowProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col lg:flex-row gap-3 p-6 lg:p-12 lg:items-end border border-accent rounded-[44px]",
        className
      )}
    >
      <h3 className="text-5xl lg:text-9xl opacity-50 font-rubik-sans text-primary-button">
        {index}
      </h3>
      <p className="text-xl font-bold text-custom-subtext">{description}</p>
    </div>
  );
};

export default How;
