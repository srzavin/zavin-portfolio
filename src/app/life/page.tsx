import LifeEventHolder from "@/components/LifeEventHolder";


export default function EventPage() {
  return (
    <main className="min-h-screen mt-8 px-6 py-16 max-w-6xl mx-auto">
          <div className="pt-5 w-full mx-auto">
      <h2 className="text-4xl font-bold mb-8 pt-5 text-amber-400">Events</h2>
      <LifeEventHolder />
    </div>
    </main>
  );
}
