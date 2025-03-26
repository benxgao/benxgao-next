'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useClientOnly } from './hooks';

export interface Book {
  title: string;
  subtitle?: string;
  authors: string[];
  previewLink: string;
  coverImage: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const bookList = [
  {
    title: 'The Value of Everything',
    subtitle: 'Making and Taking in the Global Economy',
    authors: ['Mariana Mazzucato'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=ERwXDAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'Tools And Weapons',
    subtitle: 'The Promise and the Peril of the Digital Age',
    authors: ['Brad Smith', 'Carol Ann Browne'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=QNOODwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'Building Microservices',
    subtitle: 'Designing Fine-Grained Systems',
    authors: ['Sam Newman'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=jjl4BgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'Rework',
    subtitle: '',
    authors: ['Jason Fried', 'David Heinemeier Hansson'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=4N4_MUkcQy4C&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  // {
  //   title: 'The Minimalist Entrepreneur',
  //   subtitle: 'How Great Founders Do More with Less',
  //   authors: ['Sahil Lavingia'],
  //   previewLink:'',
  //   coverImage:
  //     'http://books.google.com/books/content?id=V0kxEAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  // },
  {
    title: 'The Knowledge Illusion',
    subtitle: 'Why We Never Think Alone',
    authors: ['Steven Sloman', 'Philip Fernbach'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=PqMgDgAAQBAJ&printsec=frontcover&img=1&zoom=0&source=gbs_api',
  },
  {
    title: 'The Lean Startup',
    subtitle: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    authors: ['Eric Ries'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=r9x-OXdzpPcC&printsec=frontcover&img=1&zoom=0&source=gbs_api',
  },
  {
    title: 'API Security in Action',
    subtitle: '',
    authors: ['Neil Madden'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=7TczEAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'The Human Side Of Enterprise',
    subtitle: '',
    authors: ['Douglas McGregor'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=czmT99wOFZ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    title: 'Zero To One',
    subtitle: '',
    authors: ['Peter Thiel'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=M22fAwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'True Professionalism',
    subtitle: 'The Courage to Care About Your People, Your Clients, and Your Career',
    authors: ['David H. Maister'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=l7v8IXvQH9IC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'Continuous Delivery',
    subtitle: 'Reliable Software Releases through Build, Test, and Deployment Automation',
    authors: ['Jez Humble', 'David Farley'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=6ADDuzere-YC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: "The Innovator's Dilemma",
    subtitle: 'When New Technologies Cause Great Firms to Fail',
    authors: ['Clayton M. Christensen'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=3JnBAgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'Crucial Accountability',
    subtitle: 'Tools for Resolving Violated Expectations, Broken Commitments, and Bad Behavior',
    authors: ['Kerry Patterson', 'Joseph Grenny', 'Ron McMillan', 'Al Switzler'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=bQhSkDdQ_AMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'The Nature of Technology',
    subtitle: 'What It Is and How It Evolves',
    authors: ['W. Brian Arthur'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=1IxKf-gat2cC&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'Crucial Conversations',
    subtitle: 'Tools for Talking When Stakes Are High',
    authors: ['Kerry Patterson', 'Joseph Grenny', 'Ron McMillan', 'Al Switzler'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=3P5FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    title: 'Nonviolent Communication',
    subtitle: 'A Language of Life',
    authors: ['Marshall B. Rosenberg'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=A3qACgAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api',
  },
  {
    title: 'The Responsibility Virus',
    subtitle: 'How Control Freaks, Shrinking Violets-and the Rest of Us-Can Harness the Power of True Partnership',
    authors: ['Roger Martin'],
    previewLink: '',
    coverImage:
      'https://books.google.com/books/content?id=ugbpswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
];

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [localTime, setLocalTime] = useState(format(new Date(), 'yyyy-MM-dd hh:mm a'));
  const [books, isClient] = useClientOnly<Book[]>(bookList);
  const [shuffledBooks, setShuffledBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (books.length > 0) {
      setShuffledBooks(shuffleArray(books));
    }
  }, [books]);

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

  // useEffect(() => {
  //   const apiKey = 'AIzaSyCedKd1qAf9vnYbajt4ELw-9knWNY8rKnE';

  //   const bookTitles = [
  //     'The Value of Everything',
  //     'Tools And Weapons',
  //     'Building Microservices',
  //     'Rework',
  //     'The Minimalist Entrepreneur',
  //     'The Knowledge Illusion',
  //     'The Lean Startup',
  //     'API Security in Action',
  //     'The Human Side Of Enterprise',
  //     'Zero To One',
  //     'True Professionalism',
  //     'Continuous Delivery',
  //     "The Innovator's Dilemma",
  //     'Crucial Accountability',
  //     'The Nature of Technology',
  //     'Crucial Conversations',
  //     'Nonviolent Communication',
  //     'The Responsibility Virus',
  //     // 'The Value of Everything', // Mariana Mazzucato
  //     // 'Bad Data: Why We Measure the Wrong Things and Often Miss the Metrics That Matter', // Peter Schryvers
  //     // 'Tools And Weapons: The Promise and the Peril of the Digital Age', // Brad Smith, Carol Ann Browne
  //     // 'Building Microservices: Designing Fine-Grained Systems', // Sam Newman
  //     // 'Rework', // Jason Fried, David Heinemeier Hansson
  //     // 'The Minimalist Entrepreneur: How Great Founders Do More with Less', // Sahil Lavingia
  //     // 'The Knowledge Illusion: Why We Never Think Alone', // Steven Sloman, Philip Fernbach
  //     // 'CODE: Version 2.0', // Lawrence Lessig
  //     // "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses", // Eric Ries
  //     // 'API Security in Action', // Neil Madden
  //     // 'The Human Side Of Enterprise', // Douglas McGregor
  //     // 'Zero To One', // Peter Thiel
  //     // 'True Professionalism: The Courage to Care About Your People, Your Clients, and Your Career', // David H. Maister
  //     // 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation', // Jez Humble, David Farley
  //     // "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail", // Clayton M. Christensen
  //     // 'Crucial Accountability: Tools for Resolving Violated Expectations, Broken Commitments, and Bad Behavior', // Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler
  //     // 'The Nature of Technology: What It Is and How It Evolves', // W. Brian Arthur
  //     // 'Crucial Conversations: Tools for Talking When Stakes Are High', // Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler
  //     // 'Nonviolent Communication: A Language of Life', // Marshall B. Rosenberg
  //     // 'The Responsibility Virus: How Control Freaks, Shrinking Violets-and the Rest of Us-Can Harness the Power of True Partnership', // Roger Martin
  //   ];

  //   // TODO
  //   [
  //     bookTitles[17], //
  //   ].forEach(async (title) => {
  //     const searchQuery = title;
  //     const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&maxResults=1`;

  //     await fetch(apiUrl)
  //       .then((x) => x.json())
  //       .then((data) => {
  //         const { volumeInfo } = data.items[0];

  //         // console.log(`data.items[0]: ${JSON.stringify(data.items[0], null, 2)}`);

  //         const metaData = {
  //           title: volumeInfo.title,
  //           subtitle: volumeInfo.subtitle,
  //           authors: volumeInfo.authors,
  //           previewLink: volumeInfo.previewLink,
  //           coverImage: volumeInfo.imageLinks.thumbnail,
  //         };

  //         console.log(JSON.stringify(metaData, null, 2));

  //         // setBooks((books) => [...books, metaData]);

  //         return metaData;
  //       })
  //       .catch((error) => console.error('Error fetching data:', error));
  //   });
  // }, []);

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

        {/* Books Recently Read Section */}
        <PageSection id='books' title='Recently completed reading in Chinese translation'>
          <div className='pb-8'>
            {isClient ? (
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={4}
                slidesToScroll={4}
                arrows={true}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 3 } },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      dots: true,
                    },
                  },
                ]}
              >
                {shuffledBooks && shuffledBooks.length > 0 ? (
                  shuffledBooks.map((book, index) => (
                    <div key={`${book.title}-${index}`} className='p-2 sm:p-4'>
                      <a
                        href=''
                        // href={book.previewLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block hover:opacity-80 transition-opacity'
                      >
                        <div className='relative aspect-[2/3] w-[calc(100%-1rem)]'>
                          <Image
                            src={book.coverImage}
                            alt={`${book.title}${book.subtitle ? ` - ${book.subtitle}` : ''}`}
                            fill
                            sizes='(max-width: 400px) 50vw, (max-width: 1024px) 10vw, 21vw'
                            className='object-cover rounded-md shadow-lg'
                            priority={index < 3}
                          />
                        </div>
                        <div className='mt-4 space-y-1'>
                          <h3 className='text-center font-medium text-base sm:text-lg line-clamp-2'>{book.title}</h3>
                          {book.authors && book.authors.length > 0 && (
                            <p className='text-center text-sm text-gray-600'>by {book.authors.join(', ')}</p>
                          )}
                        </div>
                      </a>
                    </div>
                  ))
                ) : (
                  <div className='w-full p-8 text-center text-gray-500'>No books available</div>
                )}
              </Slider>
            ) : (
              <div className='w-full p-8 text-center text-gray-500'>Loading books...</div>
            )}
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
