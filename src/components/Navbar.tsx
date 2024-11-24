import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-900 h-16 w-full flex justify-between items-center p-4 fixed top-0 left-0 z-50'>
        <div className='h-24 w-16 mt-10 ml-8'>
          < Image src="../logo.9ff76f62.png" alt="loading" className="h-full w-full object-contain" />
        </div>
        <div className='hidden md:hidden text-blue-400 text-xl md:text-2xl lg:text-1xl xl:text-2xl'>
          Tuition Free Education Program on Latest Technologies
        </div>

        {/* Navigation links */}
        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Home</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Apply</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Jobs</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Courses</li>
          <li className='h-10 w-16 flex items-center justify-center text-white'>Result</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
