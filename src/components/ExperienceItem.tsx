// components/ExperienceItem.js
export default function ExperienceItem({
  company,
  location,
  dates,
  role,
  responsibilities,
}) {
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
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
