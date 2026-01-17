"use client";

import React, { useState } from "react";
import { Phone, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinkClass = (path) =>
    `relative text-gray-800 hover:text-cyan-900 transition-colors
     ${
       pathname === path
         ? "text-cyan-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-900"
         : ""
     }`;

  const serviceItems = [
    "Custom Software & Enterprise Solutions",
    "Web & Platform Development",
    "Mobile App Development",
    "AI, Data & Intelligent Automation",
    "Smart Academic & Scientific Writing",
  ];

  const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/&/g, "and") // replace & with and to avoid URL encoding issues
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "") // allow word characters and dashes
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white font-sans text-sm font-medium">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-900 rounded-lg" />
        <span className="text-xl font-bold text-gray-800 truncate">
          MinhajSolutions
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <a href="/" className={navLinkClass("/")}>Home</a>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 text-gray-800 hover:text-cyan-900"
          >
            Services <ChevronDown size={16} />
          </button>

          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              {serviceItems.map((item, index) => (
                <a
                  key={index}
                  href={`/Services/${slugify(item)}`}
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-900 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/Portfolio" className={navLinkClass("/Portfolio")}>Portfolio</a>
        <a href="/Blog" className="text-gray-800 hover:text-cyan-900">Blog</a>
        <a href="/About" className={navLinkClass("/About")}>About</a>
        <a href="/Contact" className={navLinkClass("/Contact")}>Contact</a>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:+923011111111"
          className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-gray-800 hover:border-cyan-800 hover:text-cyan-800 transition"
        >
          <Phone size={16} />
          <span>+923011111111</span>
        </a>

        <button
          onClick={() => router.push("/Contact")}
          className="flex items-center gap-2 bg-cyan-900 text-white px-4 py-2 rounded-lg hover:bg-cyan-800 transition-colors duration-200 font-medium"
        >
          Get Started
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="flex flex-col gap-4 px-4 py-4">

        <a href="/" onClick={() => setMenuOpen(false)} className={navLinkClass("/")}>Home</a>

        {/* Mobile Services */}
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full text-gray-800 hover:text-cyan-900"
          >
            Services <ChevronDown size={16} />
          </button>

          {servicesOpen && (
            <div className="mt-2 ml-3 flex flex-col gap-2">
              {serviceItems.map((item, index) => (
                <a
                  key={index}
                  href={`/Services/${slugify(item)}`}
                  onClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-cyan-900 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/Portfolio" onClick={() => setMenuOpen(false)} className={navLinkClass("/Portfolio")}>Portfolio</a>
        <a href="/Blog" className="text-gray-800 hover:text-cyan-900">Blog</a>
        <a href="/About" onClick={() => setMenuOpen(false)} className={navLinkClass("/About")}>About</a>
        <a href="/Contact" onClick={() => setMenuOpen(false)} className={navLinkClass("/Contact")}>Contact</a>

        <a
          href="tel:+923011111111"
          className="flex items-center gap-2 border border-gray-300 hover:border-cyan-800 hover:text-cyan-800 rounded-full px-3 py-1 w-fit text-gray-800"
        >
          <Phone size={16} />
          <span>+923011111111</span>
        </a>

        <button
          onClick={() => router.push("/Contact")}
          className="flex items-center gap-2 bg-cyan-900 text-white px-4 py-2 rounded-lg hover:bg-cyan-800 transition-colors duration-200 font-medium w-fit"
        >
          Get Started
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )}
</nav>

  );
}
