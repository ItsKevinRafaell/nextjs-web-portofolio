// components/Footer.js
export default function Footer() {
  return (
    <footer className='w-full py-8 text-center bg-gray-100 text-gray-600 font-sans text-sm'>
      <p>
        &copy; {new Date().getFullYear()} Kevin Pierre Rafael Sabran. All rights
        reserved.
      </p>
      <p>Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}
