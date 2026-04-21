// src/components/Logo.tsx

interface LogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "lg" }: LogoProps) {
  const sizeClasses = {
    xs: "h-8 mx-auto w-full",
    sm: "h-12 mx-auto w-full",
    md: "h-16 mx-auto w-full",
    lg: "h-20 mx-auto w-full",
    xl: "h-24 mx-auto w-full",
  };

  return (
    <img
      src="/logo_acc-mngr.png" // /public/logo.png
      alt="logo acc-mngr"
      className={`${sizeClasses[size]} object-contain ${className}`}
      style={{
        filter: "drop-shadow(0 10px 25px rgba(208, 212, 6, 0.3))",
      }}
    />
  );
}
