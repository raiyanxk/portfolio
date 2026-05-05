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
  technologies: string[]
}

type Project = {
  name: string
  description: string
  link: string
  video: boolean
  media: string
  id: string
  technologies: string[]
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
    technologies: [],
  },
  {
    company: 'NETGEAR',
    title: 'Firmware Engineer Intern',
    start: 'January 2025',
    end: 'August 2025',
    link: 'https://www.netgear.com/',
    id: 'work2',
    responsibilities: [
      'Optimized 10+ firmware API routes reducing Mobile Hotspot GUI update latency by 30% for hardware data display',
      'Leveraged a Linux and Docker-based environment to build and flash firmware images onto hotspot devices, using ADB and QXDM to validate firmware functionality during runtime, ensuring optimal device performance',
      'Developed Python and Bash scripts to automate firmware builds and flashes, reducing setup and deployment time by 40%',
      'Updated C++ internal Windows tools for eSIM compatibility across 50,000+ next-generation hotspot products globally',
    ],
    technologies: ['C', 'C++', 'Linux', 'Bash', 'Python', 'Docker', 'ADB', 'QXDM'],
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
    technologies: ['C#', '.NET', 'React', 'TypeScript', 'Azure', 'Microsoft SQL Server', 'SPFx', 'xUnit'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Medical Segmentation of GI Images',
    description:
      'Deep learning models with U-Nets to assist in the diagnosis of diseases such as ulcers, polyps, and tumors.',
    link: 'https://github.com/raiyanxk/gi-polyp-ml',
    video: false,
    media: '/gi.png',
    id: 'project1',
    technologies: ['Python', 'PyTorch', 'NumPy'],
  },
  {
    name: 'Self-Driving Car with Traffic Sign Recognition',
    description: 'A self-driving car with obstacle avoidance and traffic sign recognition capabilities',
    link: 'https://github.com/raiyanxk/self-driving-car',
    video: true,
    media: '/car.mp4',
    id: 'project2',
    technologies: ['Python', 'ROS2', 'YOLOv8', 'NumPy', 'OpenCV'],
  },
  {
    name: 'Lunaris',
    description: 'Pay-by-use cloud gaming platorm built with AWS services and Amazon DCV',
    link: 'https://github.com/ubclaunchpad/lunaris',
    video: true,
    media: '/lunaris.mp4',
    id: 'project3',
    technologies: ['TypeScript', 'AWS CDK', 'Stripe', 'Docker', 'React'],
  },
  {
    name: 'NHL Salary Projections',
    description: 'Predicting market value of NHL players based off advanced 24-25 season stats',
    link: 'https://github.com/raiyanxk/nhl-salary-app',
    video: true,
    media: '/nhl.mp4',
    id: 'project4',
    technologies: ['Python', 'scikit-learn', 'FastAPI', 'React'],
  },
  {
    name: 'DiveBuddy',
    description: 'Personalized Android app that allows athletes to discover training partners in their area',
    link: 'https://github.com/DiveBuddy-321/DiveBuddy',
    video: true,
    media: '/divebuddy.mp4',
    id: 'project5',
    technologies: ['TypeScript', 'Express' ,'Kotlin', 'Android', 'Docker', 'AWS EC2', 'Jest', 'GitHub Actions'],
  },
  {
    name: 'Internet of Things (IoT) Data Analytics',
    description: 'A simulated multithreaded Internet-of-Things server which provides device management and predictive analytics',
    link: 'https://github.com/raiyanxk/IOT',
    video: false,
    media: '/iot.jpg',
    id: 'project6',
    technologies: ['Java', 'Concurrency', 'Network Programming', 'AWS Lambda'],
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
