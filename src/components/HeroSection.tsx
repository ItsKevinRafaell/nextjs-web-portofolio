// components/HeroSection.js
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 }, // Sedikit slide dari bawah atau hanya opacity: 0
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id='hero'
      className='w-full min-h-screen flex flex-col justify-center items-center text-center p-4 bg-white text-black'
      initial='hidden'
      animate='visible' // Gunakan 'animate' karena ini section pertama yang terlihat
      transition={{ duration: 0.8, ease: 'easeOut' }}
      variants={heroVariants}
    >
      {/* Konten HeroSection lainnya tetap sama */}
      <div className='max-w-3xl'>
        <motion.h1
          className='font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} // Delay sedikit untuk judul
        >
          Kevin Pierre Rafael Sabran
        </motion.h1>
        <motion.p
          className='font-mono text-md sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-700'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }} // Delay lebih untuk slogan
        >
          Laravel Developer | Flutter Developer | BNSP Certified Junior
          Assistant Programmer | Undergraduate Educational Technology at
          Brawijaya University
        </motion.p>
        <motion.div
          className='space-x-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }} // Delay untuk tombol
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
}
