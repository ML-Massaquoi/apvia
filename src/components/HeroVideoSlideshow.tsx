"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const videos = [
  { src: "/videos/energy.mp4", label: "Energy & Power" },
  { src: "/videos/homepage-x.mp4", label: "Investment Opportunities" },
  { src: "/videos/flagship-1.mp4", label: "Flagship Projects" },
];

export default function HeroVideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const playVideo = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    playVideo(0);
  }, [playVideo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % videos.length;
        playVideo(next);
        return next;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [playVideo]);

  return (
    <div className="absolute inset-0 bg-[#052e16]">
      {videos.map((video, index) => (
        <video
          key={video.src}
          ref={(el) => { videoRefs.current[index] = el; }}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}
      <div className="video-overlay" />
    </div>
  );
}
