'use client';

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons

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
    const material = new THREE.MeshBasicMaterial({ color: 0xd3d3d3, wireframe: true }); // Light grey color
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.002; // Slower rotation
      plane.rotation.y += 0.002; // Slower rotation
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
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-6 sm:p-12 lg:p-20 space-y-20">
        {/* Header */}
        <header
          className={`fixed top-0 left-0 w-full bg-white p-4 flex items-center z-50 shadow-md transition-transform duration-300 ${
            isScrollingUp ? 'translate-y-0 ease-in' : '-translate-y-full ease-out'
          }`}
        >
          <h1 className='text-2xl sm:text-4xl font-bold absolute left-1/2 transform -translate-x-1/2'>Ben Gao</h1>
          <div className='header-icons flex gap-4 ml-auto'>
            <button
              onClick={() => scrollToSection('personal-info')}
              className='w-8 h-8 bg-gray-300 rounded-full block cursor-pointer'
            ></button>{' '}
            {/* Icon 1 */}
            <button
              onClick={() => scrollToSection('qualifications')}
              className='w-8 h-8 bg-gray-300 rounded-full block cursor-pointer'
            ></button>{' '}
            {/* Icon 2 */}
            <button
              onClick={() => scrollToSection('projects')}
              className='w-8 h-8 bg-gray-300 rounded-full block cursor-pointer'
            ></button>{' '}
            {/* Icon 3 */}
          </div>
        </header>

        {/* Contact Info Section */}
        <section
          id='personal-info'
          className='relative z-10 bg-white p-8 rounded-lg shadow-md mx-8 sm:mx-16 lg:mx-32 min-h-[10rem]'
          style={{ margin: '2rem' }}
        >
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>Frontend Developer</h1>
          <p className='text-base sm:text-lg'>Name: John Doe</p>
          <p className='text-base sm:text-lg'>Email: john.doe@example.com</p>
          <p className='text-base sm:text-lg'>
            LinkedIn:{' '}
            <a href='#' className='underline'>
              linkedin.com/in/johndoe
            </a>
          </p>
          <p className='text-base sm:text-lg'>
            Medium:{' '}
            <a href='#' className='underline'>
              medium.com/@johndoe
            </a>
          </p>
        </section>

        {/* Qualifications Section */}
        <section
          id='qualifications'
          className='relative z-10 bg-white p-8 rounded-lg shadow-md mx-8 sm:mx-16 lg:mx-32 min-h-[10rem]'
          style={{ margin: '2rem' }}
        >
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6'>Qualifications</h2>
          <ul className='list-disc pl-4 sm:pl-6'>
            <li className='text-base sm:text-lg'>Bachelor&apos;s Degree in Computer Science</li>
            <li className='text-base sm:text-lg'>5+ years of experience in frontend development</li>
            <li className='text-base sm:text-lg'>Proficient in React, Tailwind CSS, and TypeScript</li>
          </ul>
        </section>

        {/* Personal Projects Section */}
        <section
          id='projects'
          className='relative z-10 bg-white p-8 rounded-lg shadow-md mx-8 sm:mx-16 lg:mx-32 min-h-[10rem]'
          style={{ margin: '2rem' }}
        >
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6'>Personal Projects</h2>
          <div className='grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='p-4 border border-black'>
              <h3 className='text-lg sm:text-xl font-medium mb-2'>Project 1</h3>
              <p className='text-sm sm:text-base'>
                This project is a web application designed to streamline task management for teams. It features a clean
                and intuitive interface, allowing users to create, assign, and track tasks efficiently. The app
                integrates with popular tools like Slack and Google Calendar to enhance productivity. Built with React
                and Tailwind CSS, it ensures a responsive and visually appealing user experience. The backend is powered
                by Node.js and MongoDB, providing robust performance and scalability.
              </p>
            </div>
            <div className='p-4 border border-black'>
              <h3 className='text-lg sm:text-xl font-medium mb-2'>Project 2</h3>
              <p className='text-sm sm:text-base'>
                This project is an e-commerce platform tailored for small businesses. It includes features like product
                listings, a shopping cart, and secure payment processing. The platform is optimized for mobile devices,
                ensuring accessibility for all users. Developed using Next.js and Tailwind CSS, it delivers fast load
                times and a seamless browsing experience. The backend leverages Firebase for real-time database
                capabilities and authentication, making it a reliable solution for online stores.
              </p>
            </div>
            <div className='p-4 border border-black'>
              <h3 className='text-lg sm:text-xl font-medium mb-2'>Project 3</h3>
              <p className='text-sm sm:text-base'>
                This project is a portfolio website showcasing the work of a creative professional. It features a
                minimalist design with smooth animations and interactive elements. The site is built with Gatsby and
                Tailwind CSS, ensuring excellent performance and SEO optimization. It includes sections for projects,
                testimonials, and a contact form. The website is fully responsive, providing an optimal viewing
                experience on all devices. It serves as a perfect platform to highlight skills and attract potential
                clients.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          className='relative z-10 bg-white p-8 rounded-lg shadow-md mx-8 sm:mx-16 lg:mx-32 min-h-[10rem]'
          style={{ margin: '2rem' }}
        >
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center'>Contact Me</h2>
          <form className='grid gap-4 w-full max-w-4xl mx-auto p-4 sm:p-8 border border-gray-300 rounded-lg'>
            <input
              type='text'
              placeholder='Your Name'
              className='p-3 border border-gray-400 rounded-md text-sm sm:text-base w-full'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='p-3 border border-gray-400 rounded-md text-sm sm:text-base w-full'
            />
            <textarea
              placeholder='Your Message'
              className='p-3 border border-gray-400 rounded-md text-sm sm:text-base w-full'
              rows={6}
            ></textarea>
            <button
              type='submit'
              className='p-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base w-full'
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
      <footer className='h-30 w-screen bg-black flex items-center justify-between px-24'>
        <p className='text-sm sm:text-base text-white'>© benxgao.com</p>
        <div className='flex gap-4'>
          <a
            href='https://linkedin.com/in/johndoe'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-400'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://github.com/johndoe'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-400'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://twitter.com/johndoe'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-400'
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
