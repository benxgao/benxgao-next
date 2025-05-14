'use client';

import PageSection from '@/src/components/PageSection';

export default function CertificationSection() {
  return (
    <PageSection id="certification" title="Certifications I've Completed">
      <div className="flex flex-col gap-8">
        <div key={1} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://cloud.google.com/learn/certification/cloud-engineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-amber-300">
              Google Cloud Certified Associate Cloud Engineer (May 2025)
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            Validated proficiency in deploying applications, monitoring
            operations, and managing enterprise solutions on Google Cloud
            Platform.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
