import { FileUser , BriefcaseBusiness,Presentation, Lightbulb, Link as  Mail, Earth } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* We will build here */}

<div className="px-10 py-40 max-w-5xl w-full">
  <h1 className="text-4xl sm:text-6xl font-bold mb-15">
  <span className="font-normal font-poppins text-white text-7xl">Hi!</span>{" "}
  <span className=" dark:text-white font-semibold font-poppins" style={{ color: '#FFF343' }}>I’m Zavin</span>
  
</h1>
<h1 className="text-3xl font-poppins text-white">Engineer | DIY enthusiast | problem solver</h1>
<div className="flex flex-wrap justify-center gap-1 mt-20">
  <Link href="/about">
  <GlassButton icon={<FileUser size={60} strokeWidth={0.5} className="text-white"   />} label="About Me" />
</Link>

  <Link href="/experience">
  <GlassButton icon={<BriefcaseBusiness  size={60} strokeWidth={0.5} className="text-white"/>} label="Experience" />
</Link>

    <Link href="/projects">
  <GlassButton icon={<Presentation   size={60} strokeWidth={0.5} className="text-white"/>} label="Projects" />
</Link>

    <Link href="/skills">
  <GlassButton icon={<Lightbulb  size={60} strokeWidth={0.5} className="text-white" />} label="Skills" />
</Link>

    <Link href="/life">
  <GlassButton icon={<Earth  size={60} strokeWidth={0.5} className="text-white" />} label="Life" />
</Link>

    <Link href="/contact">
  <GlassButton icon={<Mail   size={60} strokeWidth={0.5} className="text-white"/>} label="Contact" />
</Link>


</div>

</div>

    </main>
  );
}

