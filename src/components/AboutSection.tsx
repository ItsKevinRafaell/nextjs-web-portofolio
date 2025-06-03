// components/AboutSection.js
import { motion } from 'framer-motion'; // 1. Import motion

export default function AboutSection() {
  // Definisikan varian animasi (opsional tapi rapi)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Keadaan awal (tidak terlihat, sedikit di bawah)
    visible: { opacity: 1, y: 0 }, // Keadaan akhir (terlihat, di posisi asli)
  };

  return (
    <motion.section // 2. Gunakan motion.section
      id='about'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-white text-black'
      // 3. Tambahkan properti animasi
      initial='hidden' // Mulai dengan varian 'hidden'
      whileInView='visible' // Animasikan ke varian 'visible' saat elemen masuk viewport
      viewport={{ once: true, amount: 0.3 }} // `once: true` agar animasi hanya berjalan sekali
      // `amount: 0.3` berarti 30% elemen harus terlihat sebelum animasi dimulai
      transition={{ duration: 0.6, ease: 'easeOut' }} // Durasi dan tipe easing
      variants={sectionVariants} // Gunakan varian yang sudah didefinisikan
    >
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold text-center mb-10 sm:mb-12 text-black'>
          About Me
        </h2>
        <div className='font-sans text-base sm:text-lg text-gray-800 space-y-6 leading-relaxed text-left sm:text-justify'>
          <p>
            Hello! I'm Kevin, a passionate and self-driven developer with a keen
            interest in building innovative and user-centric web and mobile
            applications. My journey into the world of technology began with a
            curiosity for how things work, which quickly evolved into a passion
            for coding and problem-solving. I thrive in collaborative
            environments and am always eager to learn new technologies and
            methodologies to enhance my skill set.
          </p>
          <p>
            Currently, I am an undergraduate student pursuing a Bachelor's
            degree in Information Technology Education at Brawijaya University
            (2024-2028), where I'm deepening my understanding of software
            development principles and educational technologies. My academic GPA
            is 3.88.
          </p>
          <p>
            Prior to university, I completed my vocational high school education
            in Software Engineering at SMK Negeri 1 Balikpapan (2021-2024),
            graduating with a grade of 92.93. This foundational experience
            provided me with practical skills and a strong enthusiasm for the
            field.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
