import { FaGithub, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { sourceCodePro700 } from '../../styles/fonts';

export default function PageHeader({ isScrollingUp }: { isScrollingUp: boolean }) {
  return (
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
          onClick={() => window.open('https://github.com/benxgao', '_blank')}
          title='GitHub'
          className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200'
        >
          <FaGithub className='w-5 h-5 hover:text-fuchsia-300' />
        </button>
        <button
          onClick={() => window.open('https://x.com/benxgao', '_blank')}
          title='Twitter'
          className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200'
        >
          <FaXTwitter className='w-5 h-5 hover:text-amber-300' />
        </button>
        <button
          onClick={() => window.open('https://medium.com/@benxgao', '_blank')}
          title='Medium'
          className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200'
        >
          <FaMedium className='w-5 h-5 hover:text-sky-300' />
        </button>
      </div>
    </header>
  );
}
