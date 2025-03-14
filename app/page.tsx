'use client';

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { CiUser, CiMedal, CiBookmark } from 'react-icons/ci';
import { sourceCodePro400, sourceCodePro700 } from '../styles/fonts';

// Reusable Section Component
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section
    id={id}
    className={`${sourceCodePro400.className} relative z-10 bg-white p-8 py-48 rounded-lg shadow-md mx-8 sm:mx-16 lg:mx-32 min-h-[10rem]`}
    style={{ margin: '2rem' }}
  >
    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6'>{title}</h2>
    {children}
  </section>
);

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-6 sm:p-12 lg:p-20 space-y-10">
        {/* Header */}
        <header
          className={`${
            sourceCodePro700.className
          } fixed top-0 left-0 w-full bg-white p-4 flex items-center z-50 shadow-md transition-transform duration-300 ${
            isScrollingUp ? 'translate-y-0 ease-in' : '-translate-y-full ease-out'
          }`}
        >
          <h1 className='text-2xl sm:text-4xl font-bold absolute left-1/2 transform -translate-x-1/2'>Ben Gao</h1>
          <div className='header-icons flex gap-4 ml-auto'>
            <button
              onClick={() => scrollToSection('personal-info')}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'
            >
              <CiUser className='w-5 h-5' />
            </button>
            <button
              onClick={() => scrollToSection('qualifications')}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'
            >
              <CiMedal className='w-5 h-5' />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'
            >
              <CiBookmark className='w-5 h-5' />
            </button>
          </div>
        </header>

        {/* Contact Info Section */}
        <Section id='personal-info' title=''>
          <p className='text-base sm:text-lg'>hi@benxgao.com</p>

          <p className='text-base sm:text-lg'>
            <a href='#' className='underline'>
              medium.com/@benxgao
            </a>
          </p>
        </Section>

        {/* Skills Section */}
        <Section id='skills' title=''>
          <div className='flex flex-wrap gap-4'>
            {[
              'React',
              'TypeScript',
              'JavaScript',
              'HTML',
              'CSS',
              'Tailwind CSS',
              'Next.js',
              'Node.js',
              'Git',
              'REST APIs',
            ].map((skill, index) => (
              <span key={index} className='px-4 py-2 bg-gray-200 text-sm sm:text-base rounded-full shadow-md'>
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Qualifications Section */}
        <Section id='qualifications' title=''>
          <ul className='list-disc pl-4 sm:pl-6'>
            <li className='text-base sm:text-lg'>10+ years of experience in frontend development</li>
            <li className='text-base sm:text-lg'>Proficient in React, Tailwind CSS, and TypeScript</li>
          </ul>
        </Section>

        {/* Personal Projects Section */}
        <Section id='projects' title=''>
          <div className='flex flex-col gap-8'>
            {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
              <div key={index} className='p-4 w-full'>
                <h3 className='text-lg sm:text-xl font-medium mb-2'>{project}</h3>
                <p className='text-sm sm:text-base'>
                  This is a description for {project}. It highlights the key features and technologies used.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section id='contact' title='Contact Me'>
          <form className='grid gap-4 w-full max-w-4xl mx-auto p-4 sm:p-8 border border-gray-300 rounded-lg'>
            <input
              type='text'
              placeholder='Your Name'
              className='p-3 border border-gray-400 rounded-md text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-black'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='p-3 border border-gray-400 rounded-md text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-black'
            />
            <textarea
              placeholder='Your Message'
              className='p-3 border border-gray-400 rounded-md text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-black'
              rows={6}
            ></textarea>
            <button
              type='submit'
              className='p-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base w-full'
            >
              Send Message
            </button>
          </form>
        </Section>
      </div>

      {/* Footer */}
      <footer
        className={`${sourceCodePro400.className} h-60 w-screen bg-black flex items-center justify-between px-24 py-24 relative`}
      >
        <div className='flex flex-col gap-2'>
          {['x.com'].map((site, index) => (
            <a
              key={index}
              href='https://x.com/benxgao'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-gray-400 text-sm sm:text-base'
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
            className='text-white hover:text-gray-400'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://github.com/benxgao'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-400'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://x.com/benxgao'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-400'
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <div className='absolute bottom-14 left-1/2 transform -translate-x-1/2 text-center'>
          <p className='text-sm sm:text-base text-white'>© 2025 benxgao.com</p>
          <p className='text-sm sm:text-base text-white'>Built with GitHub Copilot & Next.js</p>
        </div>
      </footer>
    </div>
  );
}
