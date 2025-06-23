import Image from 'next/image';


export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">

          <h2 className="text-4xl ml-12 font-bold text-gray-700 mb-4">About Me</h2>

      <div className=" border-white/20 p-8 sm:p-12  space-y-12">
      

        {/* 👋 Intro */}
        <section>


<div className="flex items-center gap-10 flex-wrap md:flex-nowrap">
  {/* Left: Image */}
    <Image
    src="/dp_test.png"
    alt="Zavin smiling"
    width={500}
    height={500}
    style={{ transform: 'scaleX(-1)' }}
    className="rounded-xl bg-primary shadow-md"
  />

  {/* Right: Text */}
  <div className="flex flex-col">
    <h2 className="text-6xl leading-tight font-bold mb-4">
  Hi, I’m Sarin<br />
  Rahman<br />
  Zavin 👋
</h2>

    <p className="text-lg text-primary dark:text-primary leading-relaxed">
      I’m a curious engineer who enjoys building cool, useful things. Whether it’s Android apps,
      UVM testbenches, or weekend soldering projects — I love solving real problems with a creative mindset.
    </p>
              <h2 className="text-2xl font-semibold mb-2">⚙️ How I Work</h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            I'm hands-on, adaptable, and always eager to learn. I enjoy collaborating in fast-paced teams, debugging tough issues, and shipping clean, thoughtful code.
          </p>

  </div>

</div>

        {/* ⚙️ How I Work */}






        </section>



        {/* 🔭 What I’m Into Right Now */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔭 What I’m Into Right Now</h2>
          <div className="flex flex-wrap gap-2">
            {["Flutter", "Next.js", "UVM", "PCB Design", "Microcontrollers", "Minimal UI"].map((item) => (
              <span key={item} className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 🌍 Outside of Tech... */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🌍 Outside of Tech...</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
            <li>📷 Enjoys street photography and editing</li>
            <li>⚽ Football is life</li>
            <li>🌍 Loves to travel and document places</li>
            <li>☕ Fuelled by cola and rabbit-hole YouTube binges</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
