import PageSection from '@/src/components/PageSection';

export default function ExpSection() {
  return (
    <PageSection id="experience" title="My experience">
      <ul className="list-disc">
        <li className="block mb-4 text-base sm:text-lg">
          <b>Full-Stack JavaScript Development:</b> Proficient in developing web
          applications using Node.js and React.js, with experience in both
          front-end and back-end development.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Cloud Technologies (GCP):</b> Experienced in managing Google Cloud
          Platform resources, including building data integration systems on
          Message Queues, setting up VPC networking, and utilizing serverless
          functions and Firebase Suites.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Data Integration & API Development:</b> Proven ability to develop
          and maintain robust data integrations for e-commerce platforms and
          design and implement RESTful APIs.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>CI/CD Pipelines & Automation Testing:</b> Skilled in designing,
          implementing, and maintaining CI/CD pipelines for automated deployment
          and implementing comprehensive automated test coverage (unit,
          integration, and end-to-end).
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Front-End Development:</b> Expertise in front-end technologies
          including HTML5, SCSS, Styled-components, and experience with
          component libraries (React) and UI/UX enhancement.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Back-End Development:</b> Strong back-end skills utilizing Node.js,
          TypeScript, and experience with databases like MongoDB.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Security & Authentication:</b> Experience in enhancing API
          authentication security (OAuth/JWT) and implementing best practices
          for user privacy data protection.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Agile/SCRUM:</b> Experienced working within Agile/SCRUM teams and
          methodologies.
        </li>
      </ul>
    </PageSection>
  );
}
