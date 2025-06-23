// src/components/PageLayout.tsx
"use client";  

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="font-merriweather text-[18px] font-bold text-gray-700 w-full flex items-center justify-between px-6 py-4 sticky top-0 backdrop-blur z-50 md:flex-nowrap">
        
        {/* Logo (clickable) */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>


        {/* Navigation Links */}
<div
  className={`flex flex-col md:flex-row md:gap-6 items-center w-full md:w-auto absolute md:static top-16 md:top-0 left-0 bg-white/30 backdrop-blur-xl md:bg-transparent transition-all duration-300 eae  ${
    menuOpen ? "left-0" : "left-[-100%]"
  }`}
>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/skills" className="hover:underline">Skills</Link>
          <Link href="/life" className="hover:underline">Life</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="px-6 py-12">{children}</main>
    </>
  );
}
