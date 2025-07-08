"use client";

import { Mail, Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">📬 Contact Me</h1>

      {/* Social Icons */}
      <div className="flex gap-8 mb-12 text-4xl">
        <a href="https://facebook.com/szavin" target="_blank" rel="noopener noreferrer">
          <Facebook className="hover:text-blue-400 transition" size={48} />
        </a>
        <a href="https://instagram.com/sarinrahman" target="_blank" rel="noopener noreferrer">
          <Instagram className="hover:text-pink-400 transition" size={48} />
        </a>
        <a href="https://linkedin.com/in/srzavin" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:text-blue-500 transition" size={48} />
        </a>
        <a href="https://github.com/srzavin" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-gray-400 transition" size={48} />
        </a>
      </div>

      {/* Email Section */}
      <div className="flex items-center gap-4 text-xl bg-gray-900 px-6 py-4 rounded-xl shadow-md cursor-pointer">
        <a href="mailto:contact@srzavin.com" className="flex items-center gap-4">
          <Mail size={28} />
          <span>contact@srzavin.com</span>
        </a>
      </div>

    </div>
  );
}
