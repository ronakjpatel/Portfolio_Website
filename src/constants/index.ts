import type {
  TNavLink,
  TService,
  TExperience,
  TTestimonial,
  TProject,
  TAcademicExperience,
} from "../types";

import {
  concordia,
  swinburne,
  gtu,
  github_logo,
  linkedin_logo,
  medium_logo,
  simplior,
  bunnings,
  jai_farrell,
  dhara_patel,
  devansi_patel,
  solution,
  analytics,
  developer,
  educator,
  chatnest,
  oldporfolio,
  retinalImg,
  edaProject,
  email_logo
} from "../../public/assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "academic_exp",
    title: "Academics",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Problem Solver",
    icon: solution,
  },
  {
    title: "Data Expert",
    icon: analytics,
  },
  {
    title: "Software Developer",
    icon: developer,
  },
  {
    title: "Educator",
    icon: educator,
  },
];


const technologies = {
	languages: [
		{
			name: "HTML5",
			icon: "assets/tech/html5.svg",
			link: "https://html.spec.whatwg.org/multipage/"
		},
		{
			name: "CSS3",
			icon: "assets/tech/css3.svg",
			link: "https://www.w3.org/Style/CSS/Overview.en.html"
		},
		{
			name: "JavaScript",
			icon: "assets/tech/javascript.svg",
			link: "https://262.ecma-international.org/"
    },
    {
			name: "SQL",
			icon: "assets/tech/sql.svg",
			link: "https://en.wikipedia.org/wiki/SQL"
    },
		{
			name: "C#",
			icon: "assets/tech/c.svg",
			link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
		},
		{
			name: "Java",
			icon: "assets/tech/java.svg",
			link: "https://www.java.com/en/"
		},
		{
			name: "Python",
			icon: "assets/tech/python.svg",
			link: "https://www.python.org/"
    },
    {
			name: "TypeScript",
			icon: "assets/tech/typescript.svg",
			link: "https://www.typescriptlang.org/"
    },
    {
			name: "R Language",
			icon: "assets/tech/Rlogo.svg",
			link: "https://www.r-project.org/about.html#:~:text=R%20is%20a%20language%20and,by%20John%20Chambers%20and%20colleagues."
    },
	],
	frameworks: [
		{
			name: "Next.js",
			icon: "assets/tech/nextjs.svg",
			link: "https://nextjs.org/"
		},
		{
			name: "TailwindCSS",
			icon: "assets/tech/tailwindcss.svg",
			link: "https://tailwindcss.com/"
    },
    {
			name: "DotNet",
			icon: "assets/tech/dotnet.svg",
			link: "https://dotnet.microsoft.com/en-us/"
		},
		
	],
	libraries: [
		{
			name: "React",
			icon: "assets/tech/react.svg",
			link: "https://react.dev/"
		},
		{
			name: "PyTorch",
			icon: "assets/tech/pytorch.svg",
			link: "https://pytorch.org/"
		},
		{
			name: "NumPy",
			icon: "assets/tech/numpy.svg",
			link: "https://numpy.org/"
		},
		{
			name: "NextAuth.js",
			icon: "assets/tech/nextauthjs.png",
			link: "https://next-auth.js.org/"
		},
	
	],
	tools: [
		{
			name: "Git",
			icon: "assets/tech/git.svg",
			link: "https://git-scm.com/"
		},
		{
			name: "Github",
			icon: "assets/tech/github.svg",
			link: "https://github.com/"
		},
		{
			name: "Docker",
			icon: "assets/tech/docker.svg",
			link: "https://www.docker.com/"
		}
	],
	environments: [
		{
			name: "Node.js",
			icon: "assets/tech/nodejs.svg",
			link: "https://nodejs.org/en"
    },
    {
			name: "Anaconda",
			icon: "assets/tech/Anaconda.svg",
			link: "https://www.anaconda.com/"
    }
    
	],
	databases: [
		{
			name: "MongoDB",
			icon: "assets/tech/mongodb.svg",
			link: "https://www.mongodb.com/"
		},
		{
			name: "Firebase",
			icon: "assets/tech/firebase.svg",
			link: "https://firebase.google.com/"
		}
  ],
  cloud: [
		{
			name: "Azure",
			icon: "assets/tech/azure.svg",
			link: "https://azure.microsoft.com/en-ca"
		},
	]
};


const socialLinks = [

  {
    name: "Email",
    icon: email_logo,
    link: "mailto:rjpatel7991@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: linkedin_logo,
    link: "https://www.linkedin.com/in/ronak-p",
  },
  {
    name: "GitHub",
    icon: github_logo,
    link: "https://github.com/ronakjpatel",
  },
  {
    name: "Medium",
    icon: medium_logo,
    link: "https://medium.com/@rjpatel7991",
  },
  

];


const academic_exp: TAcademicExperience[] = [
  {
    title: "Master of Computer Science",
    universityName: "Concordia University, Canada",
    icon: concordia,
    iconBg: "#ffffff",
    date: "Sep 2022 - Present",
    points: [
      
    ],
  },
  {
    title: "Bachelor in Computer Science - Data Science Major",
    universityName: "Swinburne University of Technology, Australia",
    icon: swinburne,
    iconBg: "#ffffff",
    date: "Feb 2017 - Jan 2020",
    points: [
      
    ],
  },
  {
    title: "Diploma in Computer Engineering",
    universityName: "Gujarat Technological University, India",
    icon: gtu,
    iconBg: "#ffffff",
    date: "June 2013 - June 2016",
    points: [
      
    ],
  },
  
];

const experiences: TExperience[] = [
  {
    title: "Graduate Teaching Assosiate",
    companyName: "Concordia University",
    icon: concordia,
    iconBg: "#ffffff",
    date: "Jun 2023 - Present",
    points: [
      "Facilitating classroom discussions, lab sessions, or tutorials, ensuring students comprehend course material and fostering an interactive learning environment.",
"Grading assignments, exams, or lab reports, providing constructive feedback to students, and offering support during office hours to clarify concepts.",
"Assisting professors in course preparation by organizing materials, setting up equipment for lab sessions, and ensuring the smooth operation of instructional activities."
    ],
  },
  {
    title: "Software Developer",
    companyName: "Simplior Technologies",
    icon: simplior,
    iconBg: "#ffffff",
    date: "Feb 2021 - Oct 2023",
    points: [
      "Developed responsive web interfaces using React.js and Next.js, ensuring a pixel-perfect UI/UX implementation, resulting in a 5% increase in user engagement metrics.",
      "Managed version control with Git and project progress with Jira, contributing to Agile/Scrum methodologies. Facilitated efficient team collaboration, resulting in a 12% increase in sprint velocity over the last 4 sprints.",
      "Conducted code quality checks with SonarQube, optimizing performance and scalability in CI/CD pipelines.",
      "Conducted comprehensive unit testing for both frontend and backend components, achieving a 20% increase in test coverage and a significant decrease in defect density, ensuring higher software reliability. Additionally, engineered robust C# .NET Core APIs to enhance backend functionality, resulting in significant improvements in API response times and overall system performance.",
    ],
  },
  {
    title: "Operations Team Member",
    companyName: "Bunnings Warehouse",
    icon: bunnings,
    iconBg: "#ffffff",
    date: "Sept 2021 - Aug 2022",
    points: [
      "Delivered outstanding customer satisfaction by actively listening to customers' needs and effectively communicating appropriate solutions, as demonstrated by the positive feedback received.",
      "Contributed to the Safety Improvement Team (SIT) to ensure proper implementation of safety procedures, resulting in a low rate of workplace accidents and injuries.",
      "Devised effective marketing strategies by analyzing customer behaviour and shopping patterns, resulting in an increase in sales figures compared to the previous year.",
      "Contributed to the rise in customer retention rate through participation in and leading business strategy improvement meetings, providing training to new employees, and ensuring they have the necessary product knowledge to deliver tailored customer service experiences.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I had the pleasure of working with Ronak on a Robotics project. He showed true leadership and really understood how to get the best out of people and technology. Ronak is a natural leader and a great team player, he will be an asset to any company.",
    name: "Jai Farrell ",
    designation: "Senior Project Manager",
    company: "PEXA, Australia",
    image: jai_farrell,
  },
  {
    testimonial:
      "Excellent knowledge, full of creativity with out of box thinking and no exception on Quality and hard work. So valuable so have you!!",
    name: "Dhara Patel",
    designation: "Project Manager",
    company: "Tech Mahindra",
    image: dhara_patel,
  },
  {
    testimonial:
      "Ronak was exceptional at his expertise in data analysis. He is definitely a team player. His work ethics are pristine and easily adjustable to any given situation. Thanks, mate! You made the project more smooth and successful. ",
    name: "Devansi Patel",
    designation: "Senior Business Analyst",
    company: "Builder's Academy Australia",
    image: devansi_patel,
  },
];

const projects: TProject[] = [
  {
    name: "Chat Nest - Chatting Application",
    description:
      "A dynamic real-time chat platform offering user login, personalized profiles, chat rooms, seamless real-time messaging, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatnest,
    sourceCodeLink: "https://github.com/ronakjpatel/ChatNestApp",
  },
  {
    name: "Portfolio Website (Old)",
    description:
      "Former portfolio website showcasing projects, skills, and experiences to potential employers and collaborators, with an emphasis on user-friendly navigation and showcasing creative endeavors.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: oldporfolio,
    sourceCodeLink: "https://github.com/ronakjpatel/Website",
  },
  {
    name: "Retinal Vessel Detection: MF-FDOG Method",
    description:
      "Implementing the MF-FDOG method for extracting retinal blood vessels from images, enhancing sensitivity, and specificity while reducing false positives. Ideal for medical imaging applications, like diabetic retinopathy diagnosis.",
    tags: [
      {
        name: "matlab",
        color: "blue-text-gradient",
      },
      {
        name: "image processing",
        color: "green-text-gradient",
      },
      {
        name: "image filtering",
        color: "pink-text-gradient",
      },
    ],
    image: retinalImg,
    sourceCodeLink: "https://github.com/ronakjpatel/Retinal-Vessel-Detection-Image-Processing/tree/master",
  },
  {
    name: "Exploratory Data Analysis",
    description:
      "Conducting in-depth exploratory data analysis (EDA) of absenteeism patterns using R, unveiling crucial insights for workplace management.",
    tags: [
      {
        name: "R language",
        color: "blue-text-gradient",
      },
      {
        name: "data analysis",
        color: "pink-text-gradient",
      },
      {
        name: "RStudio",
        color: "green-text-gradient",
      },
    
    ],
    image: edaProject,
    sourceCodeLink: "https://github.com/ronakjpatel/Absenteeism_analysis",
  },
];

export { services, technologies, academic_exp,experiences, testimonials, projects, socialLinks};

