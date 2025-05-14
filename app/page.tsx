import PageHeader from "@/src/components/PageHeader";
import PageFooter from "@/src/components/PageFooter";
import SimpleCloud from "@/src/components/SkillsTagCloud";
import ContactForm from "@/src/components/ContactForm";
import BgGraphics from "@/src/components/BgGraphics";
import PageSection from "@/src/components/PageSection";
import BooksSection from "@/src/components/BooksSection";
import ProjectSection from "@/src/components/ProjectSection";
import ExpSection from "@/src/components/ExpSection";
import InfoSection from "@/src/components/InfoSection";
import WorkshopSection from "@/src/components/WorkshopSection";
import CertSection from "@/src/components/CertSection";
import EducationSection from "@/src/components/EducationSection";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-transparent text-black font-['Playfair_Display'] p-0 sm:p-0 md:px-8 lg:px-12 space-y-0">
        <PageHeader />

        <InfoSection />
        <EducationSection />
        <WorkshopSection />
        <CertSection />
        <BooksSection />

        <PageSection id="skills" title="My core tech skills">
          <SimpleCloud />
        </PageSection>

        <ExpSection />
        <ProjectSection />

        <ContactForm />
      </div>

      <PageFooter />
      <BgGraphics />
    </>
  );
}
