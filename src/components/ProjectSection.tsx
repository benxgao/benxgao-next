"use client";

import PageSection from "@/src/components/PageSection";

export default function ProjectSection() {
  return (
    <PageSection id="projects" title="My personal projects">
      <div className="flex flex-col gap-8">
        <div key={1} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/react-retheming-theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-blue-300">
              react-retheming-theme
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            A utility of CSS framework integration in styled-components -
            https://github.com/benxgao/react-retheming-theme
          </p>
        </div>
        <div key={2} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/strapi-terraform-gcp-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-green-300">
              strapi-terraform-gcp-sample
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            A template for deploying Strapi CMS on GCP with Terraform and
            CircleCI - https://github.com/benxgao/strapi-terraform-gcp-sample
          </p>
        </div>
        <div key={3} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/benxgao-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-purple-300">
              benxgao-next
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            My profile website built with Github Copilot and Next.js -
            https://github.com/benxgao/benxgao-next
          </p>
        </div>

        <div key={4} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/firebase-nextjs-apphosting-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-orange-300">
              firebase-nextjs-apphosting-sample
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            A sample of Next.js app hosted on Firebase app hosting -
            https://github.com/benxgao/firebase-nextjs-apphosting-sample
          </p>
        </div>

        <div key={5} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/firebase-api-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-red-300">
              firebase-api-sample
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            A sample of API server on firebase functions -
            https://github.com/benxgao/firebase-api-sample
          </p>
        </div>

        <div key={6} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/gke-k8s-notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-lime-300">
              gke-k8s-notes
            </h3>
          </a>
          <p className="text-sm sm:text-base">
            My learning notes on Kubernetes and GKE -
            https://github.com/benxgao/gke-k8s-notes
          </p>
        </div>
      </div>
    </PageSection>
  );
}
