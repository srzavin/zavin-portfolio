

function Page2() {
    return (
<div className="relative min-h-screen bg-amber-300 flex items-center justify-center px-6 sm:px-12 md:px-26">
  <div className="container max-w-3xl mx-auto flex-col text-left">
    <h3 className="text-3xl font-bold  py-2 mb-2 text-gray-700">⚙️ How I Work</h3>
    <p className="text-2xl font-normal py-2 text-gray-700 ">
      I&apos;m hands-on, adaptable, and always eager to learn. I enjoy collaborating in fast-paced teams, debugging tough issues, and shipping clean, thoughtful code.
    </p>
    <h2 className="text-3xl  font-semibold text-gray-700 mb-4">🔭 What I’m Into Right Now</h2>
    <div className="flex flex-wrap gap-2 justify-left">
      {["Flutter", "Next.js", "UVM", "PCB Design", "Microcontrollers", "Minimal UI"].map((item) => (
        <span key={item} className="bg-purple-400 text-purple-950 px-3 py-1 rounded-full text-sm">
          {item}
        </span>
      ))}
    </div>

    <h2 className="text-3xl pt-4 font-semibold text-gray-700 mb-4">🧭 Outside of Tech...</h2>
    <ul className="grid sm:grid-cols-1 gap-3 text-gray-700">
      <li>📷 Casual photography — capturing moments that feel right</li>
      <li>⚽ Football — watching or playing helps me unwind</li>
      <li>🌍 Traveling and exploring new places</li>
      <li>🕵️‍♂️ YouTube deep dives into true crime, mysteries, and physics</li>
      <li>✈️ Microsoft Flight Simulator — my favorite way to escape</li>
    </ul>
  </div>
</div>

    );
}

export default Page2;