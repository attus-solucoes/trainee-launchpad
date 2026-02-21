interface NuLogoProps {
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-10 h-10 text-base",
  md: "w-16 h-16 text-2xl",
  lg: "w-24 h-24 text-4xl",
};

const NuLogo = ({ size = "md", glow = false, className = "" }: NuLogoProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-[28%] font-sora font-extrabold text-white select-none flex-shrink-0 ${sizeMap[size]} ${glow ? "animate-pulse-glow" : ""} ${className}`}
      style={{
        background: "linear-gradient(135deg, #820AD1 0%, #6B07B0 100%)",
        boxShadow: "0 0 30px rgba(130, 10, 209, 0.4)",
      }}
      aria-hidden="true"
    >
      Nu
    </div>
  );
};

export default NuLogo;
