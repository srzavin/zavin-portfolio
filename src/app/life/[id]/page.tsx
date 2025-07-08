import { LifeEvent } from "@/components/LifeEventHolder"; // or recreate the type locally
import { notFound } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
export default async function EventPage({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/life/${params.id}`, {
    cache: "no-store" // optional: disables caching if needed
  });

  if (!res.ok) return notFound();

  const event: LifeEvent = await res.json();

  return (

    <section className="max-w-4xl mx-auto px-4 py-10 mt-15">
        
<Link href={`/projects`} className="mt-auto mx-auto">
<button className="rounded-md bg-slate-800 p-2.5 cursor-pointer border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
</button></Link>

      <h1 className="text-3xl font-bold text-gray-100 mb-2">{event.name}</h1>


      <div
        className="prose prose-slate prose-a:text-white prose-strong:text-white prose-headings:text-slate-100 text-slate-100 max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: event.big_description }}
      ></div>


      {event.photos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {event.photos.map((src, i) => (
            <Image key={i} src={src} alt={`Project image ${i}`} className="rounded-lg w-full" />
          ))}
        </div>
      )}


    </section>
  );
}
