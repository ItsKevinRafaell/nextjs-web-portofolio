// components/ExperienceItem.js

// 1. Definisikan tipe untuk props komponen
type ExperienceItemProps = {
  company: string;
  location?: string; // Opsional jika tidak semua pengalaman punya lokasi
  dates: string;
  role: string;
  responsibilities: string[]; // Array of strings
};

// 2. Terapkan tipe pada props yang di-destructure
export default function ExperienceItem({
  company,
  location,
  dates,
  role,
  responsibilities,
}: ExperienceItemProps) {
  // <--- Tipe diterapkan di sini
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='sm:w-1/3 mb-2 sm:mb-0'>
        <h3 className='font-mono text-xl font-semibold text-black'>
          {company}
        </h3>
        {location && (
          <p className='font-sans text-sm text-gray-600'>{location}</p>
        )}
        <p className='font-mono text-sm text-gray-500'>{dates}</p>
      </div>
      <div className='sm:w-2/3 sm:pl-8'>
        <h4 className='font-sans text-lg font-medium text-gray-800 mb-2'>
          {role}
        </h4>
        <ul className='list-disc list-outside font-sans text-base text-gray-700 space-y-2 pl-5'>
          {/* Dengan responsibilities bertipe string[], 
            maka 'responsibility' di dalam map akan otomatis diinfer sebagai string,
            dan 'index' sebagai number. Jadi tidak perlu tipe eksplisit di sini.
          */}
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
