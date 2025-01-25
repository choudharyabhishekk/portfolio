import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek Choudhary",
  initials: "AC",
  url: "https://abhicodes.me",
  location: "Kitchener, ON",
  locationLink: "https://www.google.com/maps/place/kitchener",
  description: "Meta Certified Front End Developer, Building at Geeksgyaan",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "WordPress",
    "C#",
    "PHP",
    "Kotlin",
    "GraphQL",
    "Tailwind CSS",
    "SASS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
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
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
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
      company: "Remotasks",
      href: "https://remotasks.com",
      badges: [],
      location: "San Francisco, Remote",
      title: "AI Trainer",
      logoUrl: "/remotasks.png",
      start: "Dec 2023",
      end: "Jul 2024",
      description:
        "Generated targeted prompts to optimize LLM performance and analyzed model outputs to enhance overall model proficiency.",
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
      end: "Sept 2023",
      description:
        "Developed a popular tech blog using WordPress CMS, driving 100,000+ organic unique users.",
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
      logoUrl: "/mumbai.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Internship Platform",
      href: "https://internship-i37i.onrender.com/",
      active: true,
      description:
        "Developed a full-stack internship platform that enables students to browse internships, apply by uploading resumes, and track applications. Employers can post internships, assess candidates and hire them.",
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
      title: "Audio to Sign Language Translator",
      href: "https://github.com/yourgithub/sign-language-translator",
      active: true,
      description:
        "Developed an Android app that converts audio and text input into American sign language representations using SpeechRecognizer and Jsoup for dynamic image retrieval. Integrated real-time web resources and offline drawable assets to enhance accessibility for users.",
      technologies: ["Java", "Android Studio", "SpeechRecognizer API", "Jsoup"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourgithub/sign-language-translator",
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
      title: "eCommerce App",
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
