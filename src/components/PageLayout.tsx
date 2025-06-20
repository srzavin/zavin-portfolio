// src/components/PageLayout.tsx
import Image from "next/image";
import Link from "next/link";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="font-merriweather text-[18px] font-bold text-gray-700 w-full flex items-center justify-between px-6 py-4 sticky top-0 backdrop-blur z-50 ">
        
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

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
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
