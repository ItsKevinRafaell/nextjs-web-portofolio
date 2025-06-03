// components/ProjectCard.js
export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div
      key={project.id}
      className='bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col'
      onClick={() => onOpenModal(project)}
    >
      <div className='w-full h-48 sm:h-56 bg-gray-200'>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-gray-400 font-mono'>
            [Project Image]
          </div>
        )}
      </div>

      <div className='p-5 sm:p-6 flex flex-col flex-grow'>
        <h3 className='font-mono text-xl sm:text-2xl font-semibold text-black mb-2'>
          {project.title}
        </h3>
        <p
          className='font-sans text-sm text-gray-700 mb-3 overflow-hidden flex-grow'
          style={{ maxHeight: '4.5rem' }}
        >
          {project.brief}
        </p>
        <div className='mb-4 mt-auto'>
          <p className='font-mono text-xs text-gray-500 mb-1'>
            Role: {project.role}
          </p>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className='bg-gray-200 text-gray-700 text-xs font-mono px-2 py-1 rounded'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Mencegah trigger onClick dari div utama kartu
            onOpenModal(project);
          }}
          className='font-sans text-sm text-black hover:underline self-start mt-2'
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
