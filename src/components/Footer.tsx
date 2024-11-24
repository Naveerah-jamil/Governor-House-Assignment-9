import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row mx-10 gap-8'>
      <div className='w-full md:w-1/3 h-96 overflow-hidden'>
        <Image src="/photo3.jpg" alt="Loading" className='w-full h-full object-cover' layout="fill" objectFit="cover" />
      </div>
      <div className='w-full md:w-1/3 h-96 overflow-hidden'>
        <Image src="/photo4.jpg" alt="Loading" className='w-full h-full object-cover' layout="fill" objectFit="cover" />
      </div>
      <div className='w-full md:w-1/3 h-96 overflow-hidden'>
        <Image src="/photo5.jpg" alt="Loading" className='w-full h-full object-cover' layout="fill" objectFit="cover" />
      </div>
    </footer>
  );
};

export default Footer;
