'use client';

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
// import { useData } from '@/src/mutations';

import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { CiUser, CiMedal, CiBookmark } from 'react-icons/ci';
import { sourceCodePro400, sourceCodePro700 } from '../styles/fonts';
import SimpleCloud from '@/src/components/SkillsTagCloud';
import ContactForm from '@/src/components/ContactForm';

// Reusable Section Component
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section
    id={id}
    className={`${sourceCodePro400.className} relative z-10 bg-white p-4 sm:px-4 md:px-8 lg:px-16 sm:py-4 md:py-12 lg:py-24 rounded-lg shadow-md m-4 sm:m-4 md:m-8 lg:mx-16 min-h-[10rem]`}
  >
    <h2 className='text sm:text-3xl lg:text-xl font-semibold mb-6'>{title}</h2>
    {children}
  </section>
);

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
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

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.PlaneGeometry(30, 30, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xd3d3d3, wireframe: true });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.002;
      plane.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full -z-10'></canvas>
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-0 sm:p-0 lg:px-20 space-y-0">
        {/* Header */}
        <header
          className={`${
            sourceCodePro700.className
          } fixed top-0 left-0 w-full bg-white px-8 py-6 sm:py-6 md:py-4 flex items-center z-50 shadow-md transition-transform duration-300 ${
            isScrollingUp ? 'translate-y-0 ease-in' : '-translate-y-full ease-out'
          }`}
        >
          <h1 className='text-2xl font-bold absolute left-1/2 transform -translate-x-1/2'>Ben Gao</h1>
          <div className='header-icons hidden sm:flex gap-4 ml-auto'>
            <button
              onClick={() => scrollToSection('personal-info')}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200'
            >
              <CiUser className='w-5 h-5 hover:text-blue-500' />
            </button>
            <button
              onClick={() => scrollToSection('qualifications')}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200'
            >
              <CiMedal className='w-5 h-5 hover:text-green-500' />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200'
            >
              <CiBookmark className='w-5 h-5 hover:text-purple-500' />
            </button>
          </div>
        </header>

        {/* Contact Info Section */}
        <Section id='personal-info' title=''>
          <p className='text-base sm:text-lg'>hi@benxgao.com</p>

          <p className='text-base sm:text-lg'>
            <a href='#' className='underline hover:text-cyan-300'>
              medium.com/@benxgao
            </a>
          </p>
        </Section>

        {/* Skills Section */}
        <Section id='skills' title=''>
          <SimpleCloud />
        </Section>

        {/* Qualifications Section */}
        <Section id='qualifications' title=''>
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
        </Section>

        {/* Personal Projects Section */}
        <Section id='projects' title=''>
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
        </Section>

        {/* Sample Data Section */}
        {/* <Section id='sample-data' title='Sample Data'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error loading data.</p>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Section> */}

        {/* Contact Form Section */}
        <Section
          id='contact'
          title='Send me a message if you want to work together (in NZ or AU), got any ideas, or have a chat!'
        >
          <ContactForm />
        </Section>
      </div>

      {/* Footer */}
      <footer
        className={`${sourceCodePro400.className} w-screen bg-black px-4 sm:px-4 md:px-12 lg:px-24 py-12 relative`}
      >
        <div className='flex mb-6'>
          <div className='flex flex-col gap-2 mr-4'>
            {['X'].map((site, index) => (
              <a
                key={index}
                href='https://x.com/benxgao'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-300 text-sm sm:text-base'
              >
                {site}
              </a>
            ))}
          </div>
          <div className='flex gap-4'>
            <a
              href='https://linkedin.com/in/benxgao'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-sky-300'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='https://github.com/benxgao'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-fuchsia-300'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://x.com/benxgao'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-amber-300'
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <div className='w-full absolute left-1/2 transform -translate-x-1/2 text-center'>
          <p className='text-sm text-white'>copyright © 2025 benxgao.com</p>
          <p className='text-sm text-white'>Built with GitHub Copilot & Next.js</p>
        </div>
      </footer>
    </div>
  );
}
