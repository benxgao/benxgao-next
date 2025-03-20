'use client';

import { useEffect, useState } from 'react';
import PageHeader from '@/src/components/PageHeader';
import PageFooter from '@/src/components/PageFooter';

import SimpleCloud from '@/src/components/SkillsTagCloud';
import ContactForm from '@/src/components/ContactForm';
import BgGraphics from '@/src/components/BgGraphics';
import PageSection from '@/src/components/PageSection';

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const { data, isLoading, isError } = useData('/api/sample-endpoint');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <BgGraphics /> {/* Replace canvas with BgGraphics */}
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-0 sm:p-0 lg:px-20 space-y-0">
        {/* Header */}
        <PageHeader isScrollingUp={isScrollingUp} />

        {/* Contact Info Section */}
        <PageSection id='personal-info' title=''>
          <p className='text-base sm:text-lg'>hi@benxgao.com</p>
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
