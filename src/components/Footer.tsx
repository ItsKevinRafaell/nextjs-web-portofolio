// components/Footer.js
import { motion } from 'framer-motion'; // Import motion

// Definisikan varian animasi
const footerVariants = {
  hidden: { opacity: 0, y: 20 }, // Slide up lebih sedikit untuk footer
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer // Gunakan motion.footer
      className='w-full py-8 text-center bg-gray-100 text-gray-600 font-sans text-sm'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }} // amount tinggi karena footer pendek
      transition={{ duration: 0.5, ease: 'easeOut' }}
      variants={footerVariants}
    >
      <p>
        &copy; {new Date().getFullYear()} Kevin Pierre Rafael Sabran. All rights
        reserved.
      </p>
      <p>Built with Next.js & Tailwind CSS.</p>
    </motion.footer>
  );
}
