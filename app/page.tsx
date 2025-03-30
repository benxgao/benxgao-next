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
import WorkshopSection from '@/src/components/WorkshopSection';

export default function Home() {

  return (
    <>
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-0 sm:p-0 md:px-8 lg:px-12 space-y-0">
        <PageHeader />

        <InfoSection />

        <WorkshopSection />

        <BooksSection />

        <PageSection id='skills' title='My skills'>
          <SimpleCloud />
        </PageSection>

        <ExpSection />

        <ProjectSection />

        <PageSection
          id='contact'
          title='Send me a message if you want to work together (in NZ or AU), got any ideas, or have a chat!'
        >
          <ContactForm />
        </PageSection>
      </div>

      <PageFooter />
      <BgGraphics />
    </>
  );
}
