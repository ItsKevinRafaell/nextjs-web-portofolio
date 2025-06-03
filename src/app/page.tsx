'use client';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectSection';
import ProjectModal from '@/components/ProjectModal';
import SkillsSection from '@/components/SkillSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export type ProjectType = {
  id: string;
  title: string;
  role: string;
  brief: string;
  techStack: string[];
  imageUrl?: string; // Opsional jika tidak semua proyek punya gambar
  details?: {
    // Opsional jika tidak semua proyek punya detail lengkap
    description?: string;
    responsibilities?: string[];
    links?: {
      live?: string;
      repo?: string;
    };
  };
};

const projectsData: ProjectType[] = [
  {
    id: 'semuaada',
    title: 'SemuaAda (ERP System)',
    role: 'Full Stack Developer',
    brief:
      'Developed tailored features based on user requirements and crafted ERDs for optimal database structure using Laravel Filament.', // [cite: 11, 12, 13]
    techStack: ['Laravel', 'Filament', 'MySQL'],
    imageUrl: '/images/projects/semuaada-thumbnail.jpg', // Ganti dengan path gambar thumbnail jika ada
    details: {
      description:
        'Conducted in-depth analysis of user requirements to drive the development of tailored features that align with client needs and enhance overall satisfaction. Crafted comprehensive Entity-Relationship Diagrams (ERDs) to strategically structure the database, ensuring optimal performance and scalability. Leveraged the Laravel Filament framework to implement innovative features, streamlining web application development from concept to production.', // [cite: 11, 12, 13]
      responsibilities: [
        'User requirement analysis.', // [cite: 11]
        'ERD design and database structuring.', // [cite: 12]
        'Feature implementation with Laravel Filament.', // [cite: 13]
      ],
      // links: { live: '#', repo: '#' } // Jika ada
    },
  },
  {
    id: 'pika-starter-kit',
    title: 'Pika Starter Kit',
    role: 'Full Stack Developer',
    brief:
      'Created a powerful Laravel Filament starter kit by analyzing recurring setups and implementing various plugins.', // [cite: 14]
    techStack: ['Laravel', 'Filament', 'Livewire'],
    imageUrl: '/images/projects/pika-thumbnail.jpg', // Ganti dengan path gambar thumbnail
    details: {
      description:
        'Analyzed recurring setups in Laravel Filament projects and implemented various plugins to create a powerful and attractive starter kit that enhances development efficiency. Developed clear documentation to ensure usability and accessibility for other developers.', // [cite: 14, 15]
      responsibilities: [
        'Analysis of recurring Laravel Filament project setups.', // [cite: 14]
        'Plugin implementation for enhanced starter kit.', // [cite: 14]
        'Development of clear documentation.', // [cite: 15]
      ],
    },
  },
  {
    id: 'kasirku-aja',
    title: 'Kasirku Aja',
    role: 'Full Stack Developer',
    brief:
      'Developed an admin dashboard, POS page with QR functionality, and a Flutter app with Bluetooth printing.', // [cite: 16]
    techStack: ['Laravel', 'Flutter', 'API'],
    imageUrl: '/images/projects/kasirku-thumbnail.jpg',
    details: {
      description:
        'Spearheaded the development of a dynamic admin dashboard and POS page for the website, seamlessly integrating features like QR code functionality and robust import/export capabilities. Engineered an application using Flutter that integrates with the admin dashboard API, incorporating Bluetooth printing functionality.', // [cite: 16]
      responsibilities: [
        'Admin dashboard and POS page development.', // [cite: 16]
        'QR code and import/export feature integration.', // [cite: 16]
        'Flutter mobile app development with Bluetooth printing.', // [cite: 16]
      ],
    },
  },
  {
    id: 'mls-profile',
    title: 'Mitra Lindung Sarana Company Profile',
    role: 'Web Developer',
    brief:
      'Developed a comprehensive company profile website using WordPress with a focus on user-friendly design and security.', // [cite: 17, 18]
    techStack: ['WordPress', 'SEO', 'Security'],
    imageUrl: '/images/projects/mls-thumbnail.jpg',
    details: {
      description:
        'Developed a comprehensive company profile website using WordPress, ensuring a user-friendly design and seamless navigation. Implemented security measures to protect the website and its data. Focused on SEO best practices throughout the development process.', // [cite: 17, 18, 19]
      responsibilities: [
        'WordPress company profile development.', // [cite: 17]
        'Implementation of security measures.', // [cite: 18]
        'SEO best practices focus.', // [cite: 19]
      ],
    },
  },
  {
    id: 'ruang-tenang',
    title: 'Ruang Tenang',
    role: 'Lead Developer',
    brief:
      'Led agile development, designed intuitive application features, and supported backend processes using Laravel Filament.', // [cite: 20, 21, 22]
    techStack: ['Laravel', 'Filament', 'Agile'],
    imageUrl: '/images/projects/ruangtenang-thumbnail.jpg',
    details: {
      description:
        'Analyzed user needs to design intuitive applications and features that enhance user experience. Orchestrated agile development by creating sprints for the team, facilitating efficient workflows. Supported backend development processes using the Laravel Filament framework.', // [cite: 20, 21, 22]
      responsibilities: [
        'User needs analysis and application design.', // [cite: 20]
        'Agile development orchestration.', // [cite: 21]
        'Backend development support with Laravel Filament.', // [cite: 22]
      ],
    },
  },
  {
    id: 'kerjayuk',
    title: 'KerjaYuk',
    role: 'Full Stack Developer',
    brief:
      'Developed web applications using Laravel, designed ERDs, and implemented user-friendly dashboards.', // [cite: 23, 24]
    techStack: ['Laravel', 'ERD Design'],
    imageUrl: '/images/projects/kerjayuk-thumbnail.jpg',
    details: {
      description:
        'Developed efficient web applications using the Laravel framework, overseeing the process from development to production while applying analytical database strategies. Designed ERDs and implemented features, creating user-friendly dashboards for administrators, freelancers, and clients.', // [cite: 23, 24]
      responsibilities: [
        'Laravel web application development.', // [cite: 23]
        'ERD design and feature implementation.', // [cite: 24]
        'Dashboard creation for various user roles.', // [cite: 24]
      ],
    },
  },
  {
    id: 'comtelindo-erp-module',
    title: 'Comtelindo ERP System (Modules)',
    role: 'Backend Developer',
    brief:
      'Designed and implemented BOQ and quotation system modules, collaborating with team members and users.', // [cite: 25, 26]
    techStack: ['Laravel', 'BOQ', 'Quotation Systems'],
    imageUrl: '/images/projects/comtelindo-erp-thumbnail.jpg',
    details: {
      description:
        'Designed and implemented various modules, including BOQ and quotation systems, ensuring they meet user requirements and business objectives. Collaborated with team members and users to communicate progress and gather feedback on the modules under development.', // [cite: 25, 26]
      responsibilities: [
        'Design and implementation of BOQ and quotation modules.', // [cite: 25]
        'Collaboration with team and users for feedback and QA.', // [cite: 26]
      ],
    },
  },
  {
    id: 'absenyuk',
    title: 'AbsenYuk',
    role: 'Full Stack Developer',
    brief:
      'Developed a student attendance web app (Laravel) and an employee attendance mobile app (Flutter & Firebase) with advanced validation features.', // [cite: 27, 28, 29]
    techStack: ['Laravel', 'Flutter', 'Firebase', 'Geolocation'],
    imageUrl: '/images/projects/absenyuk-thumbnail.jpg',
    details: {
      description:
        'Developed a web application for managing student attendance, creating an admin dashboard to oversee records, class details, and student information using Laravel. Integrated advanced features like face capture and geolocation. Created a mobile application using Flutter and Firebase for employee attendance, utilizing geolocation for validation.', // [cite: 27, 28, 29]
      responsibilities: [
        'Laravel web app for student attendance management.', // [cite: 27]
        'Integration of face capture and geolocation.', // [cite: 28]
        'Flutter and Firebase mobile app for employee attendance.', // [cite: 29]
      ],
    },
  },
  // Tambahkan proyek lainnya dari CV dengan struktur serupa
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  // Fungsi untuk membuka modal
  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Mencegah scroll di background
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Mengembalikan scroll di background
  };

  return (
    <main className='flex flex-col items-center min-h-screen'>
      {/* Navbar akan kita buat sebagai komponen terpisah nanti atau langsung di sini */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection projects={projectsData} onOpenModal={handleOpenModal} />

      {/* Skills Section */}
      <SkillsSection />
      {/* Achievements Section (Jika ingin ditambahkan) */}
      {/* <section id="achievements" className="w-full py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-12 text-black">
          Awards & Recognition
        </h2>
        // Konten Achievements akan di sini
      </section> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer (Sederhana) */}
      <Footer />

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </main>
  );
}
