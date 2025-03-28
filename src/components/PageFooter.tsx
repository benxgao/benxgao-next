import { FaGithub, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { sourceCodePro400 } from '../../styles/fonts';

export default function PageFooter() {
  return (
    <footer className={`${sourceCodePro400.className} w-screen bg-black py-12 px-8 sm:px-4 md:px-8 lg:px-24 relative`}>
      <div className='flex mb-12'>
        <div id='footer-tools' className=''>
          <p className='text text-white'>Built with:</p>
          <ul>
            <li>
              <a
                className='text-sm text-white hover:text-pink-300 underline'
                href='https://github.com/features/copilot?benxgao'
              >
                GitHub Copilot
              </a>
            </li>
            <li>
              <a
                className='text-sm text-white hover:text-pink-300 underline'
                href='https://www.typescriptlang.org?benxgao'
              >
                TypeScript
              </a>
            </li>
            <li>
              <a className='text-sm text-white hover:text-pink-300 underline' href='https://tailwindcss.com?benxgao'>
                Tailwind CSS
              </a>
            </li>
            <li>
              <a className='text-sm text-white hover:text-pink-300 underline' href='https://nextjs.org?benxgao'>
                Next.js
              </a>
            </li>
            <li>
              <a
                className='text-sm text-white hover:text-pink-300 underline'
                href='https://firebase.google.com/docs/app-hosting?benxgao'
              >
                Firebase App hosting
              </a>
            </li>
          </ul>
          <br />
          <p className='text text-white'>Thanks to the amazing resources:</p>
          <ul>
            <li>
              <a className='text text-white hover:text-pink-300 underline' href='https://www.canva.com/?benxgao'>
                canva.com
              </a>
            </li>
            <li>
              <a className='text text-white hover:text-pink-300 underline' href='https://www.remove.bg/?benxgao'>
                remove.bg
              </a>
            </li>
          </ul>
        </div>

        <div id='footer-social' className='hidden sm:flex gap-4 md:flex lg:flex ml-auto'>
          <a
            href='https://medium.com/@benxgao'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-sky-300 underline'
          >
            <FaMedium size={24} />
          </a>
          <a
            href='https://github.com/benxgao'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-fuchsia-300 underline'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://x.com/benxgao'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-amber-300 underline'
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>

      <div className='flex flex-reverse sm:flex-row-reverse justify-between items-center'>
        <p className='text-sm text-white'>copyright © 2025 benxgao.com</p>
      </div>
    </footer>
  );
}
