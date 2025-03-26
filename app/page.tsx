'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import PageHeader from '@/src/components/PageHeader';
import PageFooter from '@/src/components/PageFooter';
import SimpleCloud from '@/src/components/SkillsTagCloud';
import ContactForm from '@/src/components/ContactForm';
import BgGraphics from '@/src/components/BgGraphics';
import PageSection from '@/src/components/PageSection';
import BooksSection from '@/src/components/BooksSection';
import ProjectSection from '@/src/components/ProjectSection';
import ExpSection from '@/src/components/ExpSection';
import InfoSection from '@/src/components/InfoSection';

export default function Home() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [localTime, setLocalTime] = useState(format(new Date(), 'yyyy-MM-dd hh:mm a'));

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
      <BgGraphics />
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-0 sm:p-0 lg:px-20 space-y-0">
        {/* Header */}
        <PageHeader isScrollingUp={isScrollingUp} />

        {/* Info Section */}
        <InfoSection localTime={localTime} />

        {/* Books Section */}
        <BooksSection />

        {/* Skills Section */}
        <PageSection id='skills' title='My skills'>
          <SimpleCloud />
        </PageSection>

        {/* Experience Section */}
        <ExpSection />

        {/* Personal Projects Section */}
        <ProjectSection />

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
