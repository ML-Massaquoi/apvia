"use client";

import { useState, useEffect, useRef } from "react";

const videos = [
  { src: "/videos/energy.mp4", label: "Energy & Power" },
  { src: "/videos/ore.mp4", label: "Rich Mineral Ore" },
  { src: "/videos/homepage-x.mp4", label: "Investment Opportunities" },
];

export default function HeroVideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div className="absolute inset-0">
      {videos.map((video, index) => (
        <video
          key={video.src}
          ref={index === currentIndex ? videoRef : undefined}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          poster="/Apvia_logo.jpeg"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}
      <div className="video-overlay" />
    </div>
  );
}
