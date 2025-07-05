function Page2() {
    return (
<div className="relative min-h-screen bg-amber-300 flex items-center justify-center px-6 sm:px-12 md:px-16">
  <div className="container max-w-screen-xl mx-auto flex-col text-left">
    <h2 className="text-2xl font-semibold mb-2 text-gray-700">⚙️ How I Work</h2>
    <p className="text-base text-gray-700">
      I'm hands-on, adaptable, and always eager to learn. I enjoy collaborating in fast-paced teams, debugging tough issues, and shipping clean, thoughtful code.
    </p>
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">🔭 What I’m Into Right Now</h2>
    <div className="flex flex-wrap gap-2 justify-left">
      {["Flutter", "Next.js", "UVM", "PCB Design", "Microcontrollers", "Minimal UI"].map((item) => (
        <span key={item} className="bg-purple-400 text-purple-950 px-3 py-1 rounded-full text-sm">
          {item}
        </span>
      ))}
    </div>

    <h2 className="text-2xl font-semibold text-gray-700 mb-4">🌍 Outside of Tech...</h2>
    <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
      <li>📷 Enjoys street photography and editing</li>
      <li>⚽ Football is life</li>
      <li>🌍 Loves to travel and document places</li>
      <li>☕ Fuelled by cola and rabbit-hole YouTube binges</li>
    </ul>
  </div>
</div>

    );
}

export default Page2;