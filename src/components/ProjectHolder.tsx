'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { getRandomColor } from "@/utils/tagColors";
import Link from 'next/link';

export type Project = {
  id: string;
  name: string;
  photo: string;
  description: string;
  tools: string[];
  role: string;
  big_description: string;
  photos: string[];
  github_link: string;
};


export default function ProjectHolder() {
  const [project, setProject] = useState<Project[]>([]);
  useEffect(
    () => {
      fetch('/api/v1/projects')
        .then(res => res.json())
        .then(data => { setProject(data || []) });
    }, []
  );





  return (
    <section className="bg-slate-100  max-w-6xl mx-auto rounded-[15] px-4 py-5">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



        {project.map((proj, index) => (

          <div
            key={index}
            className="bg-amber-50 w-full mx-auto p-6 rounded-xl border border-gray-400 shadow-sm relative flex flex-col"
          >

            <Image
              src={proj.photo}
              alt={proj.name}
              width={500}
              height={500}
              className="rounded-2xl bg-transparent shadow-md sm:rounded-3xl w-full object-cover"
            />

            <h3 className="text-2xl  my-5 font-bold text-gray-900">{proj.name}</h3>
            <p className="text-md font-semibold text-gray-700">{proj.description}</p>

            <div className='flex flex-wrap gap-3 mt-5'>
              {proj.tools.map((item, index) => {

                const randomColor = getRandomColor(); // this runs per tag
                return (
                  <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${randomColor}`}>
                    {item}
                  </span>
                );
              })}
            </div>


            <p className="text-md font-bold my-10 text-gray-700">Role: {proj.role}</p>



            <Link href={`/projects/${proj.id}`} className="mt-auto mx-auto">
              <button className="rounded-xl mx-auto max-w-fit px-4 py-3 hover:bg-blue-400 bg-blue-100 text-slate-800 text-sm mt-3 cursor-pointer  hover:scale-105 transition duration-200 ease-in-out">
                Show More
              </button>
            </Link>



          </div>
        ))}


      </div>
    </section>
  );
}

