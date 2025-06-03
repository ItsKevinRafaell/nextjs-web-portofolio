// components/ExperienceSection.js
import ExperienceItem from './ExperienceItem'; // Import sub-komponen

const experiences = [
  {
    company: 'PT. Mitra Lindung Sarana',
    location: 'Samarinda, Indonesia',
    dates: 'Jun 2024 - Apr 2025',
    role: 'Web Developer Freelance',
    responsibilities: [
      'Developed and maintained company websites, focusing on user experience and functionality.',
      'Ensured technical SEO optimization to improve search engine rankings and enhance online visibility.',
      'Maintained website security and implemented best practices to protect against vulnerabilities and ensure data integrity.',
    ],
  },
  {
    company: 'PT. Berkah Bersama Alta',
    location: 'Balikpapan, Indonesia',
    dates: 'Oct 2023',
    role: 'Software Engineer Freelance',
    responsibilities: [
      'Developed company landing pages using WordPress as a freelancer.',
      'Ensured user-friendly design and functionality to meet client needs.',
    ],
  },
  {
    company: 'PT. Comtelindo',
    location: 'Balikpapan, Indonesia',
    dates: 'Jul 2023 - Sep 2023',
    role: 'Backend Developer Intern',
    responsibilities: [
      "Contributed to the company's main internal project focused on ERP, collaborating with cross-functional teams to define project requirements and ensure alignment with business objectives.",
      'Implemented best practices in the Laravel framework to enhance code quality and maintainability, and conducted in-depth database analysis for query performance optimization.',
      'Gained expertise in the Flutter framework to prepare for cross-platform mobile application development.',
    ],
  },
  {
    company: 'PT. Comtelindo',
    location: 'Balikpapan, Indonesia',
    dates: 'Jan 2023 - Mar 2023',
    role: 'Programmer Intern',
    responsibilities: [
      'Studied and implemented the Laravel framework to develop efficient web applications from development to production, applying analytical skills for targeted database strategies.',
      'Engaged in quality assurance initiatives and collaborated with teams to establish and enforce quality standards, ensuring optimal project outcomes and client satisfaction.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-gray-50 text-black'
    >
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold text-center mb-12 sm:mb-16 text-black'>
          My Experience
        </h2>
        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index} // Sebaiknya gunakan ID unik jika ada, untuk sekarang index cukup
              company={exp.company}
              location={exp.location}
              dates={exp.dates}
              role={exp.role}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
