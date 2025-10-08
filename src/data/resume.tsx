import { Icons } from "@/components/icons";
import { Badge, HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Abhishek Choudhary",
  initials: "AC",
  url: "https://abhicodes.me",
  location: "Greater Toronto Area, ON",
  locationLink: "https://www.google.com/maps/place/kitchener",
  description: "Meta Certified Full Stack Developer, Building Cool Things",

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "Choudharyabhishekk@gmail.com",
    tel: "+1 (548) 577-1371",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourgithub",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourlinkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:choudharyabhishekk@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  ventures: [
    {
      company: "Marketors.in",
      href: "https://www.marketors.in/",
      badges: [],
      location: "",
      title: "",
      logoUrl: "/marketors.png",
      start: "",
      end: "Website",
      description:
        "Built a successful digital marketing agency delivering content marketing and SEO services to businesses all around the world.",
    },
    {
      company: "Astro Bytes",
      href: "https://www.youtube.com/AstroBytes",
      badges: [],
      location: "",
      title: "",
      logoUrl: "/astrobytes.png",
      start: "",
      end: "Website",
      description:
        "A YouTube channel built to share my love for astrophysics, astronomy, and cosmology, scaled to 25,000+ subscribers in just 8 months.",
    },
    {
      company: "Geeksgyaan.com",
      href: "https://www.geeksgyaan.com/",
      badges: [],
      location: "",
      title: "",
      logoUrl:
        "https://geeksgyaan.com/wp-content/uploads/2022/02/cropped-gg-favicon.png",
      start: "",
      end: "Website",
      description:
        "Started as a hobby to explore my passion for building websites and evolved into a tech news platform, attracting over 300,000+ users in 2024.",
    },
  ],
  work: [
    {
      company: "Nelson",
      href: "https://www.nelson.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Digital Content Developer",
      logoUrl: "/nelson.png",
      start: "June 2025",
      end: "Present",
      description:
        "Design and develop engaging web content and interactive multimedia using HTML, JavaScript, and other relevant technologies.",
    },
    {
      company: "Skill4skill.ca",
      href: "https://skill4skill.ca/",
      badges: [],
      location: "Toronto, ON",
      title: "Front End Developer",
      logoUrl: "/skill4skill.png",
      start: "April 2025",
      end: "June 2025",
      description:
        "Engineered front-end with React, TypeScript, and Next.js, led UI architecture, and implemented real-time messaging with Ably/WebSockets.",
    },
    {
      company: "Marketors.in",
      href: "https://marketors.in",
      badges: [],
      location: "Mumbai, India",
      title: "Cofounder",
      logoUrl: "/marketors.png",
      start: "Nov 2021",
      end: "Sep 2023",
      description:
        "Co-founded a B2B digital marketing agency providing services like Content Marketing & Search Engine Optimization & Website development.",
    },
  ],
  education: [
    {
      school: "Conestoga College Institute of Technology",
      degree: "Post Graduation Diploma in Web Development",
      logoUrl: "/conestoga.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Science (Information Technology)",
      logoUrl: "/uni.png",
      start: "2017",
      end: "2021",
    },
  ],
  languages: [
    "TypeScript",
    "JavaScript",
    "C#",
    "PHP",
    "Kotlin",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  technologies: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "SASS",
    "Sanity",
    "Storybook",
    "Postman",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "GraphQL",
    "Docker",
    "Android Studio",
    "AWS",
    "WordPress",
    "Git",
    "Figma",
  ],
  concepts: [
    "MVC",
    "REST APIs",
    "Headless CMS",
    "Serverless backends",
    "Cloudflare Functions",

    "SEO",
  ],

  certifications: [
    {
      icon: "/meta.png",
      name: "Front-End Developer Certificate",
      link: "https://www.credly.com/badges/52b93f15-9fb9-4bfe-a271-155a4e229fd9/public_url",
    },

    {
      icon: "/apollo.png",
      name: "GraphQL Developer: Associate",
      link: "https://www.apollographql.com/tutorials/certifications/13f6f834-374e-48cc-b64a-709818b2c0e2",
    },
    {
      icon: "/meta.png",
      name: "Advance React",
      link: "https://www.coursera.org/account/accomplishments/verify/UYX2BUHD3Z71?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },

    {
      icon: "/meta.png",
      name: "Principles of UX/UI Design",
      link: "https://www.coursera.org/account/accomplishments/verify/JXUJ8TMPFBS1",
    },
    {
      icon: "/ibm.png",
      name: "Container & Kubernetes Essentials ",
      link: "https://www.credly.com/badges/ba812a77-374d-4565-85e2-f33340a3d175",
    },
    {
      icon: "/meta.png",
      name: "Version Control: Git",
      link: "https://www.coursera.org/account/accomplishments/verify/NJL2NI2BBPYB",
    },
    {
      icon: "/ibm.png",
      name: "Python for AI and Application Development",
      link: "https://www.credly.com/badges/d1485cca-df38-4105-a808-7e7d1c2453f6/public_url",
    },
  ],

  projects: [
    {
      title: "AI PDF Notes",
      href: "https://aipdfnotes.vercel.app/",
      thumbnail: "/pdf-thumb.png",
      active: true,
      description:
        "Built an AI-powered PDF Chat Tool allowing users to upload PDFs, ask questions, take notes, and save them as documents",
      technologies: [
        "TypeScript",
        "Next.js",
        "Langchain",
        "Gemini API",
        "Convex database",
        "Stripe API",
      ],
      image: "",

      video: "/aipdf.mp4",
      links: [
        {
          type: "Website",
          href: "https://aipdfnotes.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/choudharyabhishekk/ai-pdf",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },

    {
      title: "Flipp Redesign",
      href: "https://flipp.abhix.io/",
      active: true,
      description:
        "Redesigned the Flipp website from the ground up using React, implementing mobile-first design principles and interactive components.",
      image: "/flipp.png",
      video: "",
      thumbnail: "/flipp-thumb.png",

      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Flexbox",
        "CSS Grid",
        "SEO",
        "WCAG",
      ],
      links: [
        {
          type: "Website",
          href: "https://flipp.abhix.io/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/choudharyabhishekk/Flipp-Redesign",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Internship Platform",
      href: "https://internship.abhix.io/",
      active: true,
      description:
        "Developed a full-stack internship platform that enables students to apply to internships and track their applications. ",
      image: "",
      video: "/internship.mp4",
      thumbnail: "/internship-thumb.png",

      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "Cloudinary",
        "REST APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://internship-i37i.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/choudharyabhishekk/Internship",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "eCommerce Android App",
      href: "https://github.com/choudharyabhishekk/ecommerce",
      active: true,
      description:
        "An eCommerce Android app where users can browse and shop for products, manage their cart, and complete secure checkouts.",
      technologies: [
        "Kotlin",
        "Android Studio",
        "Firebase Realtime Database",
        "Firebase Auth",
      ],
      image: "/android.png",
      video: "",
      thumbnail: "",

      links: [
        {
          type: "GitHub",
          href: "https://github.com/choudharyabhishekk/ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
