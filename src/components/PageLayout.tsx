// src/components/PageLayout.tsx
"use client";  
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function PageLayout({ children, textColor = "text-gray-700", iconColor = "text-white", logo='/logo.png'  }: { children: React.ReactNode, textColor?: string, iconColor?: string, logo?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="font-merriweather text-[18px] font-bold text-gray-700 w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full bg-transparent backdrop-blur-xl z-50 md:flex-nowrap">
        {/* Logo (clickable) */}
                <div
          className={`flex flex-col md:flex-row md:gap-6 items-center w-full md:w-auto absolute md:static px-10 top-16 md:top-0 left-0 md:bg-transparent transition-all duration-300 eae ${
            menuOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <Link href="/" className={`hover:underline font-orbitron ${textColor}`}>Home</Link>
          <Link href="/about" className={`hover:underline font-poppins ${textColor}`}>About Me</Link>
          <Link href="/experience" className={`hover:underline font-poppins ${textColor}`}>Experience</Link>
          <Link href="/projects" className={`hover:underline font-poppins ${textColor}`}>Projects</Link>
          <Link href="/skills" className={`hover:underline font-poppins ${textColor}`}>Skills</Link>
          <Link href="/life" className={`hover:underline font-poppins ${textColor}`}>Life</Link>
          <Link href="/contact" className={`hover:underline font-poppins ${textColor}`}>Contact</Link>
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <div
          className="md:hidden cursor-pointer "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className={`text-2xl ${iconColor}`}/>
          ) : (
            <FaBars className={`text-2xl ${iconColor}`} />
          )}
        </div>

        {/* Navigation Links */}

      </nav>

      {/* Page Content */}
      <main className="h-screen"> {/* Add padding to ensure content isn't hidden under the navbar */}
        {children}
      </main>
    </>
  );
}
