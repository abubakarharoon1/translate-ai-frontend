import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface CustomButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string; // if provided, renders as a link
}

export const CustomButton: FC<CustomButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  href,
}) => {
  const baseStyles =
    "inline-block whitespace-nowrap rounded font-[500] min-w-[176px] text-[18px] leading-[24px] px-[17px] py-[15px] font-medium text-center transition ease-in-out duration-250";

  const variantStyles =
    variant === "primary"
      ? "bg-[#0055b8] text-white border border-blue-600 hover:bg-[#0055b8] hover:border-blue-700"
      : "bg-white text-black border border-gray-300 hover:bg-gray-100";

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
