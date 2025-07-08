'use client';

import { useEffect, useRef, useState } from "react";


type Experience = {
  name: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
};


type Education = {
  institution: string;
  degree_name: string;
  location: string;
  startDate: string;
  endDate: string | null;
  result: string;
  description: string;
};

export default function ExperienceSection() {
  const [works, setWorks] = useState<Experience[]>([]);
  const [edu, setEdu] = useState<Education[]>([]);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);



  useEffect(
    () => {
      fetch('/api/v1/exp')
        .then(res => res.json())
        .then(data => {
          setWorks(data.works || []);
          setEdu(data.educations || []);
        });
    }, []
  );

  useEffect(() => {
    if (expandedIndex !== null && contentRefs.current[expandedIndex]) {
      const el = contentRefs.current[expandedIndex];
      el.style.maxHeight = el.scrollHeight + "px";
    }
  }, [expandedIndex]);


  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  };
  if (contentRefs.current.length !== works.length) {
    contentRefs.current = Array(works.length).fill(null);
  }
  return (
    <section className="bg-transparent max-w-5xl mx-auto rounded-[15] px-4 py-5">


      <div className="flex flex-col  gap-6">
        <h2 className="text-4xl font-bold mb-8 text-amber-300">Experience</h2>

        {works.map((work, index) => (

          <div
            key={index}
            className="bg-[#e6f4ea] w-full max-w-full mx-auto p-6 rounded-xl border border-gray-400 shadow-sm relative"
          >
            <h3 className="text-2xl font-bold text-gray-900">{work.name}</h3>
            <p className="text-lg font-semibold text-gray-700">{work.position}</p>
            <p className="md:absolute font-semibold top-6 right-6 text-sm text-gray-600">
              {formatDate(work.startDate)} – {formatDate(work.endDate)}
            </p>
            <p className="md:absolute font-semibold top-12 right-6 text-sm text-gray-600">
              {work.location}
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              ref={(el) => void (contentRefs.current[index] = el)}
            >
              <ul className="mt-4 text-gray-700 space-y-1">
                {work.description.split('\n').map((line, i) => (
                  <li key={i}>{line.trim()}</li>
                ))}
              </ul>
            </div>
            <button className="md:hidden rounded-2xl mx-auto p-2  bg-blue-300 text-blue-950 text-sm mt-3"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }>
              {expandedIndex === index ? 'Show Less' : 'Show More'}
            </button>

            <ul className={`mt-4 sm: hidden text-gray-700 space-y-1 ${expandedIndex === index ? '' : 'hidden'} md:block`}>
              {work.description.split('\n').map((line, i) => (
                <li key={i}>{line.trim()}</li>
              ))}
            </ul>



          </div>
        ))}

        <h2 className="text-4xl font-bold mb-8 text-amber-300">Education</h2>
        {edu.map((institute, index) => (

          <div
            key={index}
            className="bg-[#e6f4ea] w-full max-w-full mx-auto p-6 rounded-xl border border-gray-400 shadow-sm relative"
          >
            <h3 className="text-2xl font-bold text-gray-900">{institute.institution}</h3>
            <p className="text-lg font-semibold text-gray-700">{institute.degree_name}</p>
            <p className="md:absolute font-semibold top-6 right-6 text-sm text-gray-600">
              {formatDate(institute.startDate)} – {formatDate(institute.endDate)}
            </p>
            <p className="md:absolute font-semibold top-12 right-6 text-sm text-gray-600">
              {institute.location}
            </p>





            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              ref={(el) => void (contentRefs.current[index] = el)}
            >
              <ul className="mt-4 text-gray-700 space-y-1">
                {institute.description.split('\n').map((line, i) => (
                  <li key={i}>{line.trim()}</li>
                ))}
              </ul>
            </div>
            <button className="md:hidden rounded-2xl mx-auto p-2  bg-blue-300 text-blue-950 text-sm mt-3"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }>
              {expandedIndex === index ? 'Show Less' : 'Show More'}
            </button>

            <ul className={`mt-4 sm: hidden text-gray-700 space-y-1 ${expandedIndex === index ? '' : 'hidden'} md:block`}>
              {institute.description.split('\n').map((line, i) => (
                <li key={i}>{line.trim()}</li>
              ))}
            </ul>



          </div>
        ))}

      </div>
    </section>
  );
}

