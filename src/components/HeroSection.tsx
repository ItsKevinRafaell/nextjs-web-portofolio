// components/HeroSection.js
export default function HeroSection() {
  return (
    <section
      id='hero'
      className='w-full min-h-screen flex flex-col justify-center items-center text-center p-4 bg-white text-black'
    >
      <div className='max-w-3xl'>
        <h1 className='font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>
          Kevin Pierre Rafael Sabran
        </h1>
        <p className='font-mono text-md sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-700'>
          Laravel Developer | Flutter Developer | BNSP Certified Junior
          Assistant Programmer | Undergraduate Educational Technology at
          Brawijaya University
        </p>
        <div className='space-x-4'>
          <a
            href='#projects'
            className='font-sans inline-block bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300'
          >
            View My Projects
          </a>
          <a
            href='#contact'
            className='font-sans inline-block border-2 border-black text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors duration-300'
          >
            Get In Touch
          </a>
        </div>
        {/* Opsional: Link ke Social Media bisa ditambahkan di sini nanti */}
      </div>
    </section>
  );
}
