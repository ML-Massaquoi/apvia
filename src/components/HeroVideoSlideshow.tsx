"use client";

export default function HeroVideoSlideshow() {
  return (
    <div className="absolute inset-0 bg-[#052e16]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/Apvia_logo.jpeg"
      >
        <source src="/videos/energy.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />
    </div>
  );
}
