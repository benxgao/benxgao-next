import { FaGithub, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { sourceCodePro400 } from '../../styles/fonts';

export default function PageFooter() {
  return (
    <footer className={`${sourceCodePro400.className} w-screen bg-black p-4 sm:px-4 md:px-12 lg:px-24 py-16 relative`}>
      <div className='flex mb-4'>
        <div className='flex gap-4'>
          <a
            href='https://medium.com/@benxgao'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-sky-300'
          >
            <FaMedium size={24} />
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
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
      <div className='w-full absolute left-1/2 transform -translate-x-1/2 text-center'>
        <p className='text-sm text-white'>copyright © 2025 benxgao.com</p>
        <p className='text-sm text-white'>Built with GitHub Copilot & Next.js</p>
      </div>
    </footer>
  );
}
