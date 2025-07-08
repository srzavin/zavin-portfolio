'use client';
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from 'next/link';

export type LifeEvent = {
  id: string;
  name: string;
  photo: string;
  description: string;
  big_description: string;
  photos: string[];
};


export default function EventHolder() {
  const [events, setEvent] = useState<LifeEvent[]>([]);





  useEffect(
    () => {
      fetch('/api/v1/life')
        .then(res => res.json())
        .then(data => { setEvent(data || []) });
    }, []
  );





  return (
    <section className="bg-slate-100  max-w-6xl mx-auto rounded-[15] px-4 py-5">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



        {events.map((event, index) => (

          <div
            key={index}
            className="bg-amber-50 w-full mx-auto p-6 rounded-xl border border-gray-400 shadow-sm relative flex flex-col"
          >

            <Image
              src={event.photo}
              alt="event photo"
              width={500}
              height={500}
              className="rounded-xl  bg-gray-700 shadow-md h-[250px] w-full"
            />
            <h3 className="text-2xl  my-5 font-bold text-gray-900">{event.name}</h3>
            <p className="text-md font-semibold text-gray-700">{event.description}</p>




            <Link href={`/life/${event.id}`} className="mt-auto mx-auto">
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

