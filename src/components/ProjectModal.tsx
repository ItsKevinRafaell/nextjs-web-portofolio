// components/ProjectModal.js

import { ProjectType } from '@/app/page';

type ProjectModalProps = {
  project: ProjectType | null; // project bisa null jika modal tidak aktif
  onClose: () => void; // Fungsi tanpa argumen dan tidak mengembalikan apa-apa
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Terapkan tipe di sini
  if (!project) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 flex justify-center items-center z-50 p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-white/30'
      onClick={onClose}
    >
      <div
        className='bg-white p-6 sm:p-8 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative font-sans'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-600 hover:text-black text-3xl font-mono'
          aria-label='Close modal'
        >
          &times;
        </button>

        <h3 className='font-mono text-2xl sm:text-3xl font-bold text-black mb-4'>
          {project.title}
        </h3>

        {project.imageUrl && (
          <div className='w-full h-56 sm:h-72 bg-gray-200 rounded mb-6 overflow-hidden'>
            <img
              src={project.imageUrl}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}

        <div className='text-gray-700 space-y-4'>
          <p className='font-mono text-sm text-gray-500'>
            Role: {project.role}
          </p>
          <h4 className='font-mono text-lg font-semibold text-black pt-2'>
            Project Description:
          </h4>
          <p className='text-base leading-relaxed'>
            {project.details?.description || project.brief}
          </p>
          {project.details?.responsibilities &&
            project.details.responsibilities.length > 0 && (
              <>
                <h4 className='font-mono text-lg font-semibold text-black pt-2'>
                  Key Responsibilities:
                </h4>
                <ul className='list-disc list-outside pl-5 space-y-1 text-base leading-relaxed'>
                  {project.details.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </>
            )}
          <h4 className='font-mono text-lg font-semibold text-black pt-2'>
            Technologies Used:
          </h4>
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
          {project.details?.links && (
            <div className='pt-4'>
              <h4 className='font-mono text-lg font-semibold text-black'>
                Links:
              </h4>
              <div className='flex space-x-4 mt-2'>
                {project.details.links.live && (
                  <a
                    href={project.details.links.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-black hover:underline font-sans'
                  >
                    Live Demo 🔗
                  </a>
                )}
                {project.details.links.repo && (
                  <a
                    href={project.details.links.repo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-black hover:underline font-sans'
                  >
                    GitHub Repo 🔗
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className='mt-8 bg-black text-white font-sans px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-300'
        >
          Close
        </button>
      </div>
    </div>
  );
}
