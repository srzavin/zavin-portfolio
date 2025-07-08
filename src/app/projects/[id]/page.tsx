import { Project } from "@/components/ProjectHolder"; // or recreate the type locally
import { notFound } from "next/navigation";
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

import ProjectGallery from "@/components/PhotosGallery";



export default async function ProjectPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/projects/${params.id}`, {
    cache: "no-store" // optional: disables caching if needed
  });

  if (!res.ok) return notFound();
  const project: Project = await res.json();

  const html = await fs.readFile(
    path.join(process.cwd(), `public/assets/projects/${params.id}/body.html`),
    'utf-8'
  );


  return (

    <section className="max-w-4xl mx-auto px-4 py-10 mt-15">
        
<Link href={`/projects`} className="mt-auto mx-auto">
<button className="rounded-md bg-slate-800 p-2.5 cursor-pointer border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
</button></Link>

      <h1 className="text-3xl font-bold text-gray-100 mb-2">{project.name}</h1>
      <p className="text-md font-semibold text-gray-200 mb-4">Role: {project.role}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tools.map((tool, idx) => (
          <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
            {tool}
          </span>
        ))}
      </div>

      <div
        className="prose prose-slate prose-code:text-white prose-a:text-white prose-strong:text-white prose-headings:text-slate-100 text-slate-100 max-w-none mb-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      {project.github_link && (
        <a
          href={project.github_link}
          target="_blank"
          className="inline-block mb-10 text-blue-300 hover:underline font-medium"
        >
          View on GitHub
        </a>
      )}

      <ProjectGallery photos={project.photos} />



    </section>
  );
}
