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
      src="/logo.png" // /public/logo.png
      alt="Imagem do Logo(descrever)"
      className={`${sizeClasses[size]} py-1 object-contain ${className}`}
      style={{
        filter: "drop-shadow(0 10px 25px rgba(6, 182, 212, 0.3))",
      }}
    />
  );
}
