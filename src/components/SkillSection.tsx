// components/SkillsSection.js
import { motion } from 'framer-motion'; // Import motion

// Definisikan varian animasi
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const skills = [
    'Laravel',
    'Flutter',
    'Express Js',
    'Go',
    'WordPress',
    'Next.js',
    'React',
    'JavaScript',
    'PHP',
    'Dart',
    'MySQL',
    'Firebase',
    'Git',
    'API Design',
  ]; // Data skill bisa tetap di sini atau dipindah jika perlu

  return (
    <motion.section // Gunakan motion.section
      id='skills'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-gray-50 text-black'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={sectionVariants}
    >
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold text-center mb-12 sm:mb-16 text-black'>
          My Toolkit
        </h2>
        <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
          {/* Animasi stagger untuk skill pills bisa ditambahkan di sini nanti */}
          {skills.map((skill) => (
            <div
              key={skill}
              className='bg-white text-black font-mono text-base sm:text-lg py-3 px-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
