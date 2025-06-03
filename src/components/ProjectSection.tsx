// components/ProjectsSection.js
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/app/page';

// Definisikan varian animasi
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

type ProjectsSectionProps = {
  projects: ProjectType[]; // Array dari ProjectType
  onOpenModal: (project: ProjectType) => void; // Fungsi yang menerima ProjectType
};

export default function ProjectsSection({
  projects,
  onOpenModal,
}: ProjectsSectionProps) {
  // Terapkan tipe di sini
  return (
    <motion.section
      id='projects'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-white text-black'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={sectionVariants}
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold text-center mb-12 sm:mb-16 text-black'>
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id} // Key dipasang di sini
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
