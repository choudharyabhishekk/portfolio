import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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
      icon: "/meta.png", // Replace with the specific Lucide icon name for Meta, if available
      name: "Front-End Developer Specialization",
      link: "https://www.credly.com/badges/52b93f15-9fb9-4bfe-a271-155a4e229fd9/public_url",
    },
    {
      icon: "/meta.png", // Example: use a relevant Lucide icon for UX/UI
      name: "Principles of UX/UI Design",
      link: "https://www.coursera.org/account/accomplishments/verify/JXUJ8TMPFBS1",
    },

    {
      icon: "/apollo.png", // Example: use a relevant Lucide icon for GraphQL
      name: "GraphQL Developer: Associate",
      link: "https://www.apollographql.com/tutorials/certifications/13f6f834-374e-48cc-b64a-709818b2c0e2",
    },
    {
      icon: "/ibm.png",
      name: "Container & Kubernetes Essentials",
      link: "https://www.credly.com/badges/ba812a77-374d-4565-85e2-f33340a3d175",
    },

    {
      icon: "/ibm.png", //
      name: " AI Applications with Python and Flask",
      link: "https://www.credly.com/badges/d1485cca-df38-4105-a808-7e7d1c2453f6/public_url",
    },
    {
      icon: "/meta.png", //
      name: "Version Control",
      link: "https://www.coursera.org/account/accomplishments/verify/NJL2NI2BBPYB",
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
      title: "Internship Platform",
      href: "https://internship-i37i.onrender.com/",
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
      title: "Online Shopping Platform: ASP.NET Core",
      href: "https://github.com/choudharyabhishekk/online-store?tab=readme-ov-file",
      active: true,
      description:
        "A full stack e-commerce platform with a customer interface, an admin panel for store management, and a mobile-responsive design using Bootstrap.",
      technologies: [
        "ASP.NET Core",
        "EF Core",
        "ASP.NET Identity",
        "Bootstrap",
        "C#",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/choudharyabhishekk/online-store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "",
      thumbnail: "",
      image: "/store.png",
    },
    {
      title: "eCommerce Android App",
      href: "https://github.com/choudharyabhishekk/ecommerce",
      active: true,
      description:
        "An eCommerce Android app where users can browse and shop for products, manage their cart, and complete secure checkouts, all while providing a responsive experience across various devices.",
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
