// components/ProjectsSection.js
import ProjectCard from './ProjectCard'; // Import komponen ProjectCard

export default function ProjectsSection({ projects, onOpenModal }) {
  return (
    <section
      id='projects'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-white text-black'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold text-center mb-12 sm:mb-16 text-black'>
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
