import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek Choudhary",
  initials: "AC",
  url: "https://abhicodes.me",
  location: "Greater Toronto Area, ON",
  locationLink: "https://www.google.com/maps/place/kitchener",
  description: "Meta Certified Full Stack Developer, Building Cool Things",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "SASS",
    "C#",
    "PHP",
    "Kotlin",
    "Serverless backends",
    "Headless CMS",
    "Cloudflare Functions",
    "WordPress",
    "Figma",
    "Photoshop",
  ],
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
        url: "mailto:Choudharyabhishekk@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Marketors.in",
      href: "https://marketors.in",
      badges: [],
      location: "Mumbai, India",
      title: "Co-founder, Lead Developer",
      logoUrl: "",
      start: "Nov 2021",
      end: "Aug 2023",
      description:
        "Founded a digital marketing agency, providing services like content marketing, SEO, and web development to clients.",
    },
    {
      company: "Geeksgyaan.com",
      href: "https://geeksgyaan.com",
      badges: [],
      location: "Mumbai, India",
      title: "Founder & WordPress Developer",
      logoUrl:
        "https://geeksgyaan.com/wp-content/uploads/2022/02/gg-favicon.png",
      start: "Dec 2020",
      end: "Aug 2023",
      description:
        "Developed a popular tech website using WordPress CMS, driving more than 250,000 page views per month.",
    },
  ],
  education: [
    {
      school: "Conestoga College Institute of Technology",
      degree: "Ontario College Graduate Certificate (Web Development)",
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
    "Kotlin",
    "C#",
    "PHP",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "GraphQL",
    "Docker",
    "Android Studio",
    "AWS",
    "WordPress",
    "Tailwind CSS",
    "SASS",
    "Git",
    "CMS",
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

  projects: [
      {
      title: "AI PDF Note Taker",
      href: "https://github.com/choudharyabhishekk/ai-pdf",
      active: true,
      description:
         "Developed an AI-powered PDF Chat Tool allowing users to upload PDFs, ask questions, take notes, and save them seamlessly",     technologies: [
        "TypeScript",
        "Next js",
        "Langchain",
        "Gemini API",
        "Convex db",
      ],
      image: "/PDF.jpg",
      links: [
              {
          type: "Website",
          href: "#",
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
      title: "Internship Platform",
      href: "https://internship-i37i.onrender.com/",
      active: true,
      description:
        "Developed a full-stack internship platform that enables students to apply to internships and track their applications. ",
      image: "/internship.png",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Tailwind CSS",
        "JWT",
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
      title: "Online Shopping Platform: ASP.NET Core",
      href: "https://github.com/choudharyabhishekk/online-store?tab=readme-ov-file",
      active: true,
      description:
        "An e-commerce platform built with ASP.NET Core MVC. It includes a user-friendly customer interface, an admin panel for store management, user authentication via ASP.NET Identity, and a mobile-responsive design using Bootstrap.",
      technologies: ["ASP.NET Core", "EF Core", "Identity", "Bootstrap"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/choudharyabhishekk/online-store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/store.png",
    },
    {
      title: "eCommerce Android App",
      href: "https://github.com/choudharyabhishekk/ecommerce",
      active: true,
      description:
        "An eCommerce Android app that enables users to seamlessly browse and shop for products, manage their cart efficiently, and complete secure checkouts, all while providing a responsive and smooth experience across various devices.",
      technologies: [
        "Kotlin",
        "Android Studio",
        "Firebase Realtime Database",
        "Firebase Auth",
      ],
      image: "/android.png",
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
