'use client';

import PageSection from '@/src/components/PageSection';

export default function EducationSection() {
  return (
    <PageSection id="Education" title="Education">
      <div className="flex flex-col gap-8">
        <div key={1} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a href="" target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-red-300">
              Auckland University of Technology (Mar 2008 - Jul 2012)
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            Bachelor of Computer and Information Sciences
          </p>
          <p className="text-sm sm:text-base">
            Mayjor in Software Development, and major in Networks and Security
          </p>
        </div>
      </div>
    </PageSection>
  );
}
