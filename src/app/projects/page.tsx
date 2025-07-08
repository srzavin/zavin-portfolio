import ProjectHolder from "@/components/ProjectHolder";


export default function ProjectPage() {
  return (
    <main className="min-h-screen mt-8 px-6 py-16 max-w-6xl mx-auto">
          <div className="pt-5 w-full mx-auto">
      <h2 className="text-4xl font-bold mb-8 pt-5 text-amber-400">Projects</h2>
      <ProjectHolder />
    </div>
    </main>
  );
}
