'use client';

import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: "Agile-SCRUM", count: 75 },
  { value: "AWS", count: 50 },
  { value: "CI/CD", count: 70 },
  { value: "Docker", count: 70 },
  { value: "Express.js", count: 70 },
  { value: "Firebase", count: 80 },
  { value: "GCP", count: 90 },
  { value: "Github Copilot", count: 70 },
  { value: "JavaScript", count: 90 },
  { value: "Jest", count: 90 },
  { value: "Blockchain", count: 60 },
  { value: "Cloud infrastructure", count: 70 },
  // { value: "Mobile-first", count: 90 },
  { value: "MongoDB", count: 70 },
  { value: "Next.js", count: 70 },
  { value: "Node.js", count: 80 },
  { value: "React.js", count: 90 },
  // { value: "Styled-components", count: 80 },
  { value: "TailwindCSS", count: 70 },
  { value: "Terraform", count: 60 },
  { value: "TypeScript", count: 90 },
  // { value: "VPC", count: 80 },
  { value: "Automation-test", count: 70 },
  { value: "Kubernetes", count: 60 },
  // { value: 'Scrum', count: 70 },
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
