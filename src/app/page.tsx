import { FileUser , BriefcaseBusiness,Presentation, Lightbulb, Link as LinkIcon, Mail, Earth } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* We will build here */}

<div className="px-10 py-40 max-w-5xl w-full">
  <h1 className="text-4xl sm:text-6xl font-bold mb-15">
  <span className="font-normal dark:text-white font-poppins" style={{color:'#1F2937'}}>Hi!</span>{" "}
  <span className=" dark:text-white font-semibold font-poppins" style={{ color: 'rgba(182, 146, 246, 0.9)' }}>I’m Zavin</span>
  
</h1>
<h1 className="text-3xl font-poppins text-black-600">Engineer | DIY enthusiast | problem solver</h1>
<div className="flex flex-wrap justify-center gap-1 mt-20">
  <Link href="/about">
  <GlassButton icon={<FileUser size={60} strokeWidth={0.5} className="text-gray-800"   />} label="About Me" />
</Link>

  <Link href="/work">
  <GlassButton icon={<BriefcaseBusiness  size={60} strokeWidth={0.5} className="text-gray-800"/>} label="Experience" />
</Link>

    <Link href="/projects">
  <GlassButton icon={<Presentation   size={60} strokeWidth={0.5} className="text-gray-800"/>} label="Projects" />
</Link>

    <Link href="/skills">
  <GlassButton icon={<Lightbulb  size={60} strokeWidth={0.5} className="text-gray-800" />} label="Skills" />
</Link>

    <Link href="/life">
  <GlassButton icon={<Earth  size={60} strokeWidth={0.5} className="text-gray-800" />} label="Life" />
</Link>

    <Link href="/contact">
  <GlassButton icon={<Mail   size={60} strokeWidth={0.5} className="text-gray-800"/>} label="Contact" />
</Link>


</div>

</div>

    </main>
  );
}

