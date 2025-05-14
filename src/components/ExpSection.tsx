import PageSection from '@/src/components/PageSection';

export default function ExpSection() {
  return (
    <PageSection id="experience" title="My experience">
      <ul className="list-disc">
        <li className="block mb-4 text-base sm:text-lg">
          <b>Cloud & Backend Development</b>: Proficient in Google Cloud
          Platform (GCP), Node.js, Express.js, Docker, and serverless
          architectures such as AWS Lambda and Firebase. Experienced in setting
          up CI/CD pipelines using CircleCI and GitHub Actions.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Frontend Development</b>: Extensive experience with React.js,
          TypeScript, and modern CSS methodologies, including Styled-components
          and Tailwind CSS, ensuring pixel-perfect UI/UX implementations.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>UI/UX Design</b>: Skilled in translating designs from Figma and
          Sketch into responsive web applications. Familiar with UI frameworks
          like Bootstrap, Material Design, and Ant Design.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Testing & Quality Assurance</b>: Experienced in setting up testing
          frameworks such as Jest, writing unit and end-to-end tests, and
          implementing snapshot testing for React.js components, including
          blockchain-related testing.
        </li>
        <li className="block mb-4 text-base sm:text-lg">
          <b>Agile Methodologies & Web Management</b>: Practical experience with
          Agile methodologies (Scrum), website management (DNS, Cloudflare), and
          business website development, including SEO and Google Analytics
          integration.
        </li>
      </ul>
    </PageSection>
  );
}
