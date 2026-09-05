"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/policies/quality", label: "Quality Policy" },
  { href: "/policies/health-safety", label: "Health & Safety" },
  { href: "/policies/environmental", label: "Environmental" },
  { href: "/policies/data-protection", label: "Data Protection" },
  { href: "/policies/equality-diversity", label: "Equality & Diversity" },
  { href: "/policies/modern-slavery", label: "Modern Day Slavery" },
  { href: "/policies/complaint", label: "Complaint Policy" },
  { href: "/policies/anti-bribery", label: "Anti-Bribery & Corruption" },
];

const socialLinks = [
  { href: "mailto:info@apvia-sl.com", label: "Email", icon: "email" },
  { href: "https://www.linkedin.com/in/apvia-sl-446918433/", label: "LinkedIn", icon: "linkedin" },
  { href: "https://www.facebook.com/profile.php?id=61594107118933", label: "Facebook", icon: "facebook" },
  { href: "https://www.instagram.com/apviasierraleone/#", label: "Instagram", icon: "instagram" },
  { href: "#", label: "X", icon: "twitter" },
];

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "email":
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [mobilePoliciesOpen, setMobilePoliciesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPoliciesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setIsOpen(false)}>
            <Image src="/Apvia_logo.jpeg" alt="APVIA Ltd Logo" width={32} height={32} className="rounded-md sm:w-9 sm:h-9" />
            <div className="flex flex-col leading-none">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#052e16]">APVIA</span>
              <span className="text-[8px] sm:text-[9px] text-[#d97706] tracking-[0.15em] font-semibold uppercase">Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#14532d] transition-colors duration-200 rounded-md hover:bg-green-50">
                {link.label}
              </Link>
            ))}

            {/* Policies Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPoliciesOpen(!policiesOpen)}
                onMouseEnter={() => setPoliciesOpen(true)}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#14532d] transition-colors duration-200 rounded-md hover:bg-green-50 inline-flex items-center gap-1"
              >
                Policies
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${policiesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {policiesOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50" onMouseLeave={() => setPoliciesOpen(false)}>
                  <Link href="/policies" onClick={() => setPoliciesOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-[#052e16] hover:bg-green-50 transition-colors">All Policies</Link>
                  <div className="border-t border-gray-100 my-1" />
                  {policyLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setPoliciesOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#14532d] hover:bg-green-50 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Icons (desktop) */}
            <div className="hidden md:flex items-center gap-2.5 text-gray-400">
              {socialLinks.map((social) => (
                <a key={social.icon} href={social.href} target={social.icon !== "email" ? "_blank" : undefined} rel={social.icon !== "email" ? "noopener noreferrer" : undefined} className="hover:text-[#14532d] transition-colors" aria-label={social.label}>
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <a href="mailto:info@apvia-sl.com" className="hidden md:inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#14532d] transition-colors">
              info@apvia-sl.com
            </a>

            <div className="hidden md:block w-px h-5 bg-gray-200" />

            {/* CTA Button (desktop) */}
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
              Get in Touch
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
              <div className="flex flex-col gap-1 w-4.5">
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-3 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#14532d] hover:bg-green-50 rounded-md transition-colors">
                {link.label}
              </Link>
            ))}

            {/* Policies Accordion */}
            <div className="border-t border-gray-100 mt-1 pt-1">
              <button
                onClick={() => setMobilePoliciesOpen(!mobilePoliciesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#052e16] hover:bg-green-50 rounded-md transition-colors"
              >
                <span>Policies</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobilePoliciesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobilePoliciesOpen && (
                <div className="pl-3 pb-1">
                  <Link href="/policies" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-[#052e16] hover:bg-green-50 rounded-md transition-colors">
                    View All Policies
                  </Link>
                  {policyLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-xs text-gray-500 hover:text-[#14532d] hover:bg-green-50 rounded-md transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Social */}
            <div className="border-t border-gray-100 mt-1 pt-2 pb-1">
              <div className="flex items-center gap-4 px-3">
                <a href="mailto:info@apvia-sl.com" className="text-gray-400 hover:text-[#14532d] transition-colors text-xs">info@apvia-sl.com</a>
                {socialLinks.filter(s => s.icon !== "email").map((social) => (
                  <a key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#14532d] transition-colors" aria-label={social.label}>
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
