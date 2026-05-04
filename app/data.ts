type School = {
  name: string
  degree: string
  designations: string
  gpa: string
  start: string
  end: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  responsibilities: string[]
}

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EDUCATION: School[] = [
  {
    name: 'University of British Columbia',
    degree: 'Bachelor of Applied Science in Computer Engineering',
    designations: 'Dean\'s List — Co-op Student',
    gpa: '4.33 / 4.33',
    start: 'September 2022',
    end: 'Present',
    id: 'school1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Amazon',
    title: 'Software Development Engineer Intern',
    start: 'May 2026',
    end: 'Present',
    link: 'https://www.amazon.ca/',
    id: 'work1',
    responsibilities: [
      'Incoming on the Amazon Financial Foundation Services (AFFS) team',
    ],
  },
  {
    company: 'NETGEAR',
    title: 'Firmware Engineer Intern',
    start: 'January 2025',
    end: 'April 2025',
    link: 'https://www.netgear.com/',
    id: 'work2',
    responsibilities: [
      'Optimized 10+ firmware API routes reducing Mobile Hotspot GUI update latency by 30% for hardware data display',
      'Leveraged a Linux and Docker-based environment to build and flash firmware images onto hotspot devices, using ADB and QXDM to validate firmware functionality during runtime, ensuring optimal device performance',
      'Developed Python and Bash scripts to automate firmware builds and flashes, reducing setup and deployment time by 40%',
      'Updated C++ internal Windows tools for eSIM compatibility across 50,000+ next-generation hotspot products globally',
    ],
  },
  {
    company: 'Terra Dygital Solutions',
    title: 'Software Developer Intern',
    start: 'May 2024',
    end: 'December 2024',
    link: 'https://www.terradygital.com/',
    id: 'work3',
    responsibilities: [
      'Created a full-stack web application to manage company timesheets and billing data using the .NET framework, Microsoft SQL Server, and React, accelerating the customer billing process by 2 weeks per month',
      'Developed a custom document management system using the SPFx framework with TypeScript, integrating Azure Functions with the SharePoint API to automate the sign-out process of 20,000+ engineering drawings',
      'Built an xUnit test suite with Moq-based mocked and 97% statement coverage for a C# console app handling SQL imports',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Medical Segmentation of Gastrointestinal Images with Deep Learning',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Self-Driving Car with Traffic Sign Recognition',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
    {
    name: 'asd',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
    {
    name: 'Self-Driving Car with Traffic Sign Recognition',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/raiyanxk',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raiyanxk',
  },
]

export const EMAIL = 'raiyankhan2002@gmail.com'
