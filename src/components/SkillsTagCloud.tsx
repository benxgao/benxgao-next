import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'React.js', count: 90 },
  { value: 'TypeScript', count: 70 },
  { value: 'JavaScript', count: 70 },
  { value: 'Tailwind CSS', count: 70 },
  { value: 'Next.js', count: 70 },
  { value: 'Node.js', count: 70 },
  { value: 'GCP', count: 80 },
  { value: 'AWS', count: 70 },
  { value: 'Express.js', count: 70 },
  { value: 'Docker', count: 70 },
  { value: 'CI/CD', count: 70 },
  { value: 'Styled-components', count: 90 },
  // { value: 'Figma', count: 70 },
  // { value: 'Sketch', count: 70 },
  // { value: 'Bootstrap', count: 70 },
  // { value: 'Material Design', count: 70 },
  // { value: 'Ant Design', count: 70 },
  { value: 'Jest', count: 90 },
  { value: 'Agile', count: 80 },
  // { value: 'Scrum', count: 70 },
  { value: 'Firebase', count: 80 },
  { value: 'Message queue', count: 80 },
  { value: 'Web authentication', count: 80 },
  { value: 'Mobile-first design', count: 90 },
  { value: 'MongoDB', count: 60 },
  { value: 'Terraform', count: 70 },
];

const options = {
  hue: 'blue',
  lightness: 'dark',
  saturation: 'low',
};

const SkillsCloud = () => (
  <TagCloud
    minSize={24}
    maxSize={48}
    colorOptions={options}
    randomSeed={42}
    tags={data}
    // onClick={(tag) => console.log('clicking on tag:', tag)}
  />
);

export default SkillsCloud;
