import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='container mx-auto mt-8 sm:mt-24 text-center '>
     
      <h1 className='font-extrabold text-2xl sm:text-4xl text-gray-950 mb-4 sm:mb-8'>
        Welcome to Web Development Quiz
      </h1>

      <div className='mt-6 mx-auto space-y-6 md:space-x-6'>
        {/* HTML Quiz Option */}
        <Link href='/html'>
          <div className='bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 duration-200 max-w-sm mx-auto'>
            HTML Quiz
          </div>
        </Link>

        {/* CSS Quiz Option */}
        <Link href='/css'>
          <div className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-200 max-w-sm mx-auto'>
            CSS Quiz
          </div>
        </Link>

        {/* TypeScript Quiz Option */}
        <Link href='/javascript'>
          <div className='bg-yellow-300 text-white px-4 py-2 rounded-md hover:bg-yellow-400 duration-200 max-w-sm mx-auto'>
            JavaScript Quiz
          </div>
        </Link>

        {/* All in One Quiz Option */}
        <Link href='/all'>
          <div className='bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 duration-200 max-w-sm mx-auto'>
            All in One
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
