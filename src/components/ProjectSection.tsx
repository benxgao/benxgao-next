"use client";

import PageSection from "@/src/components/PageSection";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectSection() {
  return (
    <PageSection id="projects" title="Side projects">
      <div className="flex flex-col gap-8">
        <div key={1} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/react-retheming-theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-blue-300 flex items-center gap-2">
              react-retheming-theme{" "}
              <FaExternalLinkAlt className="inline-block text-xs mb-0.5" />
            </h3>
          </a>
          <p className="text-lg sm:text-sm">
            A utility of CSS framework integration in styled-components
          </p>
          <div className="flex flex-wrap gap-2 mb-2 mt-2">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text">
              React
            </span>
            <span className="px-2 py-0.5 rounded bg-pink-100 text-pink-800 text">
              styled-components
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-800 text">
              CSS
            </span>
          </div>
        </div>
        <div key={2} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/strapi-terraform-gcp-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-green-300 flex items-center gap-2">
              strapi-terraform-gcp-sample{" "}
              <FaExternalLinkAlt className="inline-block text-xs mb-0.5" />
            </h3>
          </a>
          <p className="text-lg sm:text-sm">
            A template for deploying Strapi CMS on GCP with Terraform and
            CircleCI
          </p>
          <div className="flex flex-wrap gap-2 mb-2 mt-2">
            <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text">
              Strapi
            </span>
            <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text">
              Terraform
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text">
              GCP
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-800 text">
              CircleCI
            </span>
          </div>
        </div>
        <div key={3} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/benxgao-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-purple-300 flex items-center gap-2">
              benxgao-next{" "}
              <FaExternalLinkAlt className="inline-block text-xs mb-0.5" />
            </h3>
          </a>
          <p className="text-lg sm:text-sm">
            My profile website built with Github Copilot and Next.js
          </p>
          <div className="flex flex-wrap gap-2 mb-2 mt-2">
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text">
              Next.js
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text">
              React
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-800 text">
              TypeScript
            </span>
            <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text">
              TailswindCSS
            </span>
          </div>
        </div>

        <div key={4} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/firebase-nextjs-apphosting-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-orange-300 flex items-center gap-2">
              firebase-nextjs-apphosting-sample{" "}
              <FaExternalLinkAlt className="inline-block text-xs mb-0.5" />
            </h3>
          </a>
          <p className="text-lg sm:text-sm">
            A sample of Next.js app hosted on Firebase app hosting
          </p>
          <div className="flex flex-wrap gap-2 mb-2 mt-2">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 text">
              Firebase
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text">
              Next.js
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text">
              React
            </span>
          </div>
        </div>

        <div key={5} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/firebase-api-sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-red-300 flex items-center gap-2">
              firebase-api-sample{" "}
              <FaExternalLinkAlt className="inline-block text-xs mb-0.5" />
            </h3>
          </a>
          <p className="text-lg sm:text-sm">
            A sample of API server on firebase functions
          </p>
          <div className="flex flex-wrap gap-2 mb-2 mt-2">
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text">
              Firebase
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-800 text">
              API
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text">
              Cloud Functions
            </span>
          </div>
        </div>

        <div key={6} className="pb-8 sm:pb-2 md:pb-8 w-full">
          <a
            href="https://github.com/benxgao/gke-k8s-notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-lime-300 flex items-center gap-2">
              gke-k8s-notes{" "}
              <FaExternalLinkAlt className="inline-block text-xs mb-0.5" />
            </h3>
          </a>
          <p className="text-lg sm:text-sm">
            My learning notes on Kubernetes and GKE
          </p>
          <div className="flex flex-wrap gap-2 mb-2 mt-2">
            <span className="px-2 py-0.5 rounded bg-lime-100 text-lime-800 text">
              Kubernetes
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text">
              GKE
            </span>
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-800 text">
              Docker
            </span>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
