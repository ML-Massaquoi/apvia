"use client";

import Image from "next/image";

type SpinnerVariant = "ring" | "dots" | "breathing" | "logo";
type SpinnerSize = "sm" | "md" | "lg" | "xl";

interface SpinnerProps {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
  className?: string;
  text?: string;
}

const sizeMap: Record<SpinnerSize, { container: string; ring: string; dot: string }> = {
  sm: { container: "w-4 h-4", ring: "w-4 h-4 border-[2px]", dot: "w-1.5 h-1.5" },
  md: { container: "w-5 h-5", ring: "w-5 h-5 border-2", dot: "w-2 h-2" },
  lg: { container: "w-8 h-8", ring: "w-8 h-8 border-[3px]", dot: "w-2.5 h-2.5" },
  xl: { container: "w-16 h-16", ring: "w-16 h-16 border-4", dot: "w-3 h-3" },
};

function RingSpinner({ size }: { size: SpinnerSize }) {
  const s = sizeMap[size];
  return (
    <div className={`${s.container} relative`}>
      <div className={`${s.ring} border-gray-200 rounded-full absolute inset-0`} />
      <div className={`${s.ring} border-t-[#052e16] border-r-[#fbbf24] border-b-transparent border-l-transparent rounded-full absolute inset-0 animate-spin`} />
    </div>
  );
}

function DotsSpinner({ size }: { size: SpinnerSize }) {
  const s = sizeMap[size];
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${s.dot} bg-[#052e16] rounded-full animate-pulse-dot`}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function BreathingSpinner({ size }: { size: SpinnerSize }) {
  const s = sizeMap[size];
  return (
    <div className={`${s.container} relative flex items-center justify-center`}>
      <div className={`${s.ring} border-[#052e16]/20 rounded-full absolute inset-0`} />
      <div className={`${s.ring} border-t-[#052e16] border-r-transparent border-b-[#fbbf24] border-l-transparent rounded-full absolute inset-0 animate-spin`} />
      <div className="absolute inset-0 rounded-full animate-breathe" />
    </div>
  );
}

function LogoSpinner({ size }: { size: SpinnerSize }) {
  const s = sizeMap[size];
  const px = size === "xl" ? 40 : size === "lg" ? 24 : 16;
  return (
    <div className={`${s.container} relative flex items-center justify-center`}>
      <div className="absolute inset-0 border-2 border-gray-200 rounded-full" />
      <div className="absolute inset-0 border-2 border-t-[#052e16] border-r-[#fbbf24] border-b-transparent border-l-transparent rounded-full animate-spin" />
      <div className="relative w-3/5 h-3/5 flex items-center justify-center">
        <Image src="/Apvia_logo.jpeg" alt="" width={px} height={px} className="rounded-full object-cover" />
      </div>
    </div>
  );
}

export default function Spinner({ variant = "ring", size = "md", className = "", text }: SpinnerProps) {
  const SpinnerComponent = {
    ring: RingSpinner,
    dots: DotsSpinner,
    breathing: BreathingSpinner,
    logo: LogoSpinner,
  }[variant];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <SpinnerComponent size={size} />
      {text && <span className="text-sm text-gray-500 font-medium">{text}</span>}
    </div>
  );
}

export function ButtonSpinner({ text = "Loading..." }: { text?: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <div className="w-4 h-4 relative">
        <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
        <div className="absolute inset-0 border-2 border-t-white border-r-transparent border-b-transparent border-l-white rounded-full animate-spin" />
      </div>
      <span>{text}</span>
    </span>
  );
}

export function PageSpinner() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <LogoSpinner size="xl" />
      <p className="text-[#052e16] font-semibold text-sm mt-4 animate-pulse">Loading...</p>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-[#052e16]/40 rounded-full animate-pulse-dot"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
