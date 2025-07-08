import Image from 'next/image';

function Main() {
    return (
<div className="relative min-h-screen flex bg-[#121212] overflow-x-hidden">
  <div className="flex flex-wrap md:flex-nowrap py-20 md:items-center gap-10 px-4 md:px-24 lg:px-14 w-full max-w-screen-xl mx-auto">
    

<Image
  src="/zavin.png"
  alt="Zavin smiling"
    width={500}
      height={500}
  style={{ transform: 'scaleX(-1)' }}
  className="rounded-xl bg-transparent shadow-md w-auto"
/>


    <div className="flex flex-col  text-center my-0 md:text-left">
      <h2 className="text-4xl sm:text-5xl text-amber-300 font-bold mb-2">
        Sarin Rahman Zavin
      </h2>

      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
I'm a Computer Science Engineer with hands-on experience in Android app development, backend systems, and embedded tech.
 I’ve built and deployed real apps, designed secure APIs, and enjoy working across the full stack to create fast, clean, and impactful solutions.
      </p>
    </div>
  </div>
</div>


    );
}

export default Main;