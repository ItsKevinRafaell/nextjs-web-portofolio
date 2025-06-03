// components/ProjectsSection.js
import { motion } from 'framer-motion'; // Import motion
import ProjectCard from './ProjectCard';

// Definisikan varian animasi
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection({ projects, onOpenModal }) {
  return (
    <motion.section // Gunakan motion.section
      id='projects'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-white text-black'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }} // amount lebih kecil karena section ini mungkin lebih tinggi
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={sectionVariants}
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold text-center mb-12 sm:mb-16 text-black'>
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'>
          {/* Animasi stagger untuk ProjectCard bisa ditambahkan di sini nanti */}
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
