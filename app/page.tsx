'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
// import { sourceCodePro500 } from '@/styles/fonts';
import Image from 'next/image';
import PageHeader from '@/src/components/PageHeader';
import PageFooter from '@/src/components/PageFooter';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdTimer } from 'react-icons/io';
import { PiCityLight } from 'react-icons/pi';
import SimpleCloud from '@/src/components/SkillsTagCloud';
import ContactForm from '@/src/components/ContactForm';
import BgGraphics from '@/src/components/BgGraphics';
import PageSection from '@/src/components/PageSection';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [localTime, setLocalTime] = useState(format(new Date(), 'yyyy-MM-dd hh:mm a')); // Update format to 24-hour with AM/PM

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    const updateTime = () => {
      setLocalTime(format(new Date(), 'yyyy-MM-dd HH:mm a')); // Update format to 24-hour with AM/PM
    };

    window.addEventListener('scroll', handleScroll);
    const timeInterval = setInterval(updateTime, 60000); // Set interval for updating time

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval); // Clear interval on unmount
    };
  }, [lastScrollY]);

  return (
    <div>
      <BgGraphics /> {/* Replace canvas with BgGraphics */}
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-0 sm:p-0 lg:px-20 space-y-0">
        {/* Header */}
        <PageHeader isScrollingUp={isScrollingUp} />

        {/* Info Section */}
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

        {/* Skills Section */}
        <PageSection id='skills' title=''>
          <SimpleCloud />
        </PageSection>

        {/* Qualifications Section */}
        <PageSection id='qualifications' title=''>
          <ul className='list-disc'>
            <li className='block mb-4 text-base sm:text-lg'>
              Cloud and Backend Expertise: Proficient in GCP, Node.js, Express.js, Docker, serverless architectures (AWS
              Lambda, Firebase), and CI/CD pipelines (CircleCI, GitHub Actions).
            </li>

            <li className='block mb-4 text-base sm:text-lg'>
              Frontend Mastery: Extensive experience with React.js, TypeScript, and modern CSS practices
              (Styled-components, Tailwind.css), focusing on pixel-perfect UI/UX implementation.
            </li>

            <li className='block mb-4 text-base sm:text-lg'>
              UI/UX Design and Development: Skilled in translating designs from tools like Figma and Sketch into
              functional web applications, with a strong understanding of responsive design and UI frameworks
              (Bootstrap, Material Design, Ant Design).
            </li>

            <li className='block mb-4 text-base sm:text-lg'>
              Testing and Quality Assurance: Experienced in setting up Jest testing frameworks, writing unit and
              end-to-end tests, and implementing snapshot testing for React.js components, including blockchain testing.
            </li>

            <li className='block mb-4 text-base sm:text-lg'>
              Blockchain and Open Source Contributions: Hands-on experience with Substrate and Polkadot.js, contributing
              to open-source projects, managing CI/CD, and conducting code reviews.
            </li>

            <li className='block mb-4 text-base sm:text-lg'>
              Agile and Web Management: Practical experience in Agile methodologies (Scrum), website management (DNS,
              Cloudflare), and business website development, including SEO and Google Analytics.
            </li>
          </ul>
        </PageSection>

        {/* Personal Projects Section */}
        <PageSection id='projects' title=''>
          <div className='flex flex-col gap-8'>
            <div key={1} className='p-4 w-full'>
              <a href='https://github.com/benxgao/react-retheming-theme' target='_blank' rel='noopener noreferrer'>
                <h3 className='text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-blue-300'>
                  react-retheming-theme
                </h3>
              </a>
              <p className='text-sm sm:text-base'>
                A utility of CSS framework integration in styled-components -
                https://github.com/benxgao/react-retheming-theme
              </p>
            </div>
            <div key={2} className='p-4 w-full'>
              <a
                href='https://github.com/benxgao/strapi-terraform-gcp-sample'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h3 className='text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-green-300'>
                  strapi-terraform-gcp-sample
                </h3>
              </a>
              <p className='text-sm sm:text-base'>
                A template for deploying Strapi CMS on GCP with Terraform and CircleCI -
                https://github.com/benxgao/strapi-terraform-gcp-sample
              </p>
            </div>
            <div key={3} className='p-4 w-full'>
              <a href='https://github.com/benxgao/benxgao-next' target='_blank' rel='noopener noreferrer'>
                <h3 className='text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-purple-300'>
                  benxgao-next
                </h3>
              </a>
              <p className='text-sm sm:text-base'>
                My profile website built with Github Copilot and Next.js - https://github.com/benxgao/benxgao-next
              </p>
            </div>
          </div>
        </PageSection>

        {/* Books Recently Read Section */}
        {/* <PageSection id='books' title='Books Recently Read'>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 600, settings: { slidesToShow: 1 } },
            ]}
          >
            <div className='p-4'>
              <Image
                src='/avatar.jpg'
                alt='Atomic Habits'
                width={200}
                height={300}
                className='w-full h-auto object-cover'
              />
              <p className='text-center mt-2 text-base sm:text-lg'>Atomic Habits by James Clear</p>
            </div>
            <div className='p-4'>
              <Image
                src='/avatar.jpg'
                alt='Deep Work'
                width={200}
                height={300}
                className='w-full h-auto object-cover'
              />
              <p className='text-center mt-2 text-base sm:text-lg'>Deep Work by Cal Newport</p>
            </div>
            <div className='p-4'>
              <Image
                src='/avatar.jpg'
                alt='The Pragmatic Programmer'
                width={200}
                height={300}
                className='w-full h-auto object-cover'
              />
              <p className='text-center mt-2 text-base sm:text-lg'>The Pragmatic Programmer by Andrew Hunt</p>
            </div>
          </Slider>
        </PageSection> */}

        {/* Sample Data Section */}
        {/* <Section id='sample-data' title='Sample Data'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error loading data.</p>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Section> */}

        {/* Contact Form Section */}
        <PageSection
          id='contact'
          title='Send me a message if you want to work together (in NZ or AU), got any ideas, or have a chat!'
        >
          <ContactForm />
        </PageSection>
      </div>
      {/* Footer */}
      <PageFooter />
    </div>
  );
}
