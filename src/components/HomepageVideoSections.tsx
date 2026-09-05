"use client";

import { useState } from "react";
import VideoModal from "@/components/VideoModal";
import { whyInvestVideos, mineralVideos, agricultureVideos } from "@/data/content";

export default function HomepageVideoSections() {
  const [selectedVideo, setSelectedVideo] = useState<typeof whyInvestVideos[0] | null>(null);

  return (
    <>
      {/* Why Invest in Sierra Leone */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Why Invest in Sierra Leone</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Discover the natural resources and strategic advantages that make Sierra Leone a prime investment destination in West Africa</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyInvestVideos.map((video) => (
              <div
                key={video.src}
                onClick={() => setSelectedVideo(video)}
                className="rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video bg-[#052e16]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/90 via-[#052e16]/30 to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-white font-bold text-sm sm:text-base mb-1">{video.title}</p>
                    <p className="text-white/70 text-xs sm:text-sm">{video.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.modalTitle || ""}
        description={selectedVideo?.modalDescription || ""}
        videoSrc={selectedVideo?.src || ""}
        facts={selectedVideo?.facts || []}
      />

      {/* Agriculture & Livestock */}
      <section className="py-16 sm:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">Agriculture & Livestock</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Integrated farming, poultry, and livestock operations leveraging Sierra Leone's abundant arable land and growing protein demand</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {agricultureVideos.map((video) => (
              <MineralVideoCard key={video.src} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Vast Untapped Mineral Deposit */}
      <section className="py-16 sm:py-24 bg-[#052e16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="gold-line mx-auto mb-4 sm:mb-5" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">Vast Untapped Mineral Deposit</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">Sierra Leone is endowed with extraordinary natural wealth — from rich mineral ores to sustainable energy potential, creating unparalleled investment opportunities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {mineralVideos.map((video) => (
              <MineralVideoCard key={video.src} video={video} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MineralVideoCard({ video }: { video: typeof mineralVideos[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative aspect-video bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <p className="text-white font-bold text-xs sm:text-sm mb-0.5">{video.title}</p>
            <p className="text-white/60 text-xs">{video.desc}</p>
          </div>
        </div>
      </div>
      <VideoModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={video.modalTitle}
        description={video.modalDescription}
        videoSrc={video.src}
        facts={video.facts}
      />
    </>
  );
}
