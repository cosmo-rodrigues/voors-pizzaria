'use client';

import Image from 'next/image';

export default function HomeMenu() {
  return (
    <div className='left-0 right-0 w-full justify-start hidden md:flex h-full'>
      <div className='absolute left-0 top-[75vh] lg:top-[50vh] text-left -z-10'>
        <Image src='/salad_right.png' width={109} height={189} alt='Salad' />
      </div>
      <div className='absolute top-[75vh] lg:top-[50vh] right-0 -z-10'>
        <Image src='/salad_left.png' width={107} height={195} alt='Salad' />
      </div>
      <div className='fixed -bottom-3 left-[30%] lg:left-[40%] -z-10'>
        <Image
          src={'/tomatoes.png'}
          width={250}
          height={250}
          alt={'Tomatoes'}
        />
      </div>
    </div>
  );
}
