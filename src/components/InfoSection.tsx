'use client';

import { HiOutlineMail } from 'react-icons/hi';
import { IoMdTimer } from 'react-icons/io';
import { PiCityLight } from 'react-icons/pi';
import Image from 'next/image';
import PageSection from './PageSection';

interface InfoSectionProps {
  localTime: string;
}

export default function InfoSection({ localTime }: InfoSectionProps) {
  return (
    <PageSection id='personal-info' title='' className='flex flex-col sm:flex-row'>
      <div id='info-brief' className='sm:float-left sm:w-1/2 bg-opacity-50'>
        <h4 id='info-email' className={`text-base sm:text-lg flex items-center`}>
          <HiOutlineMail className='mr-2 text-lg text-gray-500' />
          hi@benxgao.com
        </h4>
        <p id='info-time' className='text-base sm:text-lg flex items-center'>
          <IoMdTimer className='mr-2 text-lg text-gray-500' />
          {localTime}
        </p>
        <p id='info-location' className='text-base sm:text-lg flex items-center'>
          <PiCityLight className='mr-2 text-lg text-gray-500' /> Auckland, New Zealand
        </p>
        <Image
          src='/stay_stay.png'
          alt='stay foolish, stay humble.'
          width={300}
          height={50}
          className='w-65 h-auto object-cover mt-24'
        />
      </div>
      <div id='info-avatar' className='sm:float-right sm:w-1/2 items-center justify-center'>
        <Image src='/avatar.jpg' alt='Avatar' width={600} height={450} className='w-full h-90 object-cover' />
      </div>
    </PageSection>
  );
}
