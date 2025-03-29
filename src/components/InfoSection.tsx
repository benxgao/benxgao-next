'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
// import { HiOutlineMail } from 'react-icons/hi';
// import { IoMdTimer } from 'react-icons/io';
// import { PiCityLight } from 'react-icons/pi';
import Image from 'next/image';
import PageSection from './PageSection';

const InfoSection = ({}) => {
  const [activity, setActivity] = useState('');
  // const [localDate, setLocalDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [localTime, setLocalTime] = useState(format(new Date(), 'HH:mm aaa'));

  useEffect(() => {
    const activities = [
      'sleeping', // 12 AM - 6 AM
      'exercising in gym', // 6 AM - 9 AM
      'working on a project', // 9 AM - 12 PM
      'having lunch', // 12 PM - 1 PM
      'taking a walk', // 1 PM - 3 PM
      'reading a book', // 3 PM - 6 PM
      'having dinner', // 6 PM - 8 PM
      'relaxing and watching TV', // 8 PM - 10 PM
      'getting ready for bed', // 10 PM - 12 AM
    ];

    const getActivity = () => {
      const hour = new Date().getHours();
      if (hour >= 0 && hour < 6) return activities[0];
      if (hour >= 6 && hour < 9) return activities[1];
      if (hour >= 9 && hour < 12) return activities[2];
      if (hour >= 12 && hour < 13) return activities[3];
      if (hour >= 13 && hour < 15) return activities[4];
      if (hour >= 15 && hour < 18) return activities[5];
      if (hour >= 18 && hour < 20) return activities[6];
      if (hour >= 20 && hour < 22) return activities[7];
      return activities[8];
    };

    const updateTime = () => {
      // setLocalDate(format(new Date(), 'yyyy-MM-dd'));
      setLocalTime(format(new Date(), 'HH:mm aaa'));
      setActivity(getActivity());
    };

    setActivity(getActivity());

    const timeInterval = setInterval(updateTime, 60000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <PageSection id='personal-info' title='' className='relative flex flex-col sm:flex-row'>
      <Image
        src='/postmark-bg.png'
        alt='Postmark Background'
        width={160}
        height={160}
        className='absolute bottom-10 right-5 w-60 h-60 bg-no-repeat bg-contain z-50 hidden sm:block'
        style={{ transform: 'rotate(30deg)' }}
      />
      <div id='info-brief' className='sm:float-left sm:w-1/2 bg-opacity-50'>
        <p className='font-medium text-base sm:text-lg line-clamp-2'>Hello, how is it going?</p>
        <p className='font-medium text-base sm:text-lg line-clamp-2'>I am in Auckland, New Zealand.</p>
        <p className='font-medium text-base sm:text-lg line-clamp-2'>
          Right now, it is {localTime}, I might be {activity}.
        </p>
        <p className='font-medium text-base sm:text-lg line-clamp-2'>What a life!</p>

        {/* <p id='info-email' className={`text-base sm:text-lg flex items-center`}>
          <HiOutlineMail className='mr-2 text-lg text-gray-500' />
          hi@benxgao.com
        </p>
        <p id='info-time' className='text-base sm:text-lg flex items-center'>
          <IoMdTimer className='mr-2 text-lg text-gray-500' />
          {localTime}
        </p>
        <p id='info-location' className='text-base sm:text-lg flex items-center'>
          <PiCityLight className='mr-2 text-lg text-gray-500' /> Auckland, New Zealand
        </p> */}
        <Image
          src='/stay_stay.png'
          alt='stay foolish, stay humble.'
          width={300}
          height={50}
          className='w-90 h-auto object-cover mt-24'
        />
      </div>
      <div id='info-avatar' className='sm:float-right sm:w-1/2 items-center justify-center'>
        <Image src='/avatar.jpg' alt='Avatar' width={600} height={450} className='w-full h-90 object-cover' />
      </div>
    </PageSection>
  );
};

export default InfoSection;
