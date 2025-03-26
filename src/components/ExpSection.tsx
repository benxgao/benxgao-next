import PageSection from '@/src/components/PageSection';

export default function ExpSection() {
  return (
    <PageSection id='experience' title='My experience'>
      <ul className='list-disc'>
        <li className='block mb-4 text-base sm:text-lg'>
          Cloud and Backend Expertise: Proficient in GCP, Node.js, Express.js, Docker, serverless architectures (AWS
          Lambda, Firebase), and CI/CD pipelines (CircleCI, GitHub Actions).
        </li>
        <li className='block mb-4 text-base sm:text-lg'>
          Frontend Mastery: Extensive experience with React.js, TypeScript, and modern CSS practices (Styled-components,
          Tailwind.css), focusing on pixel-perfect UI/UX implementation.
        </li>
        <li className='block mb-4 text-base sm:text-lg'>
          UI/UX Design and Development: Skilled in translating designs from tools like Figma and Sketch into functional
          web applications, with a strong understanding of responsive design and UI frameworks (Bootstrap, Material
          Design, Ant Design).
        </li>
        <li className='block mb-4 text-base sm:text-lg'>
          Testing and Quality Assurance: Experienced in setting up Jest testing frameworks, writing unit and end-to-end
          tests, and implementing snapshot testing for React.js components, including blockchain testing.
        </li>
        <li className='block mb-4 text-base sm:text-lg'>
          Blockchain and Open Source Contributions: Hands-on experience with Substrate and Polkadot.js, contributing to
          open-source projects, managing CI/CD, and conducting code reviews.
        </li>
        <li className='block mb-4 text-base sm:text-lg'>
          Agile and Web Management: Practical experience in Agile methodologies (Scrum), website management (DNS,
          Cloudflare), and business website development, including SEO and Google Analytics.
        </li>
      </ul>
    </PageSection>
  );
}
