// components/ContactSection.js
export default function ContactSection() {
  return (
    <section
      id='contact'
      className='w-full py-16 sm:py-20 md:py-24 px-6 sm:px-8 lg:px-16 bg-white text-black'
    >
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl sm:text-4xl font-mono font-bold mb-8 sm:mb-10 text-black'>
          Let's Connect
        </h2>
        <p className='font-sans text-lg sm:text-xl text-gray-700 mb-10 sm:mb-12'>
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you! Feel free to reach out via email or connect
          with me on LinkedIn.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8'>
          <a
            href='mailto:kevin.sabran@gmail.com'
            className='font-mono text-lg sm:text-xl bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 rounded shadow-md'
          >
            Email: kevin.sabran@gmail.com
          </a>
          <a
            href='https://linkedin.com/in/kevinsabran/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-mono text-lg sm:text-xl border-2 border-black text-black px-8 py-4 hover:bg-gray-100 transition-colors duration-300 rounded shadow-md'
          >
            LinkedIn Profile
          </a>
        </div>
        <p className='font-sans text-sm text-gray-500 mt-12 sm:mt-16'>
          Located in Malang, Indonesia.
        </p>
      </div>
    </section>
  );
}
