import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Farès Zeghoudi",
  initials: "FZ",
  url: "https://fares.zeghoudi.io",
  location: "Rouen, France",
  locationLink: "https://www.google.com/maps/place/Rouen",
  description:
    "Ingénieur Logiciel à la recherche de nouvelles opportunités. Passionné par le développement web et les technologies modernes, je suis toujours prêt à relever de nouveaux défis.",
  summary:
    "Ingénieur Logiciel sortant de ses études, je souhaite continuer d’explorer le monde professionnel. J’ai 3 ans d’expérience Mainframe et Web, tout aussi compétent pour du front basé sur React.js, ou pour une création de microservice.Net. J’ai une bonne connaissance des bases de données relationnelles, et je suis à l’aise avec les méthodes agiles.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    ".Net",
    "C#",
    "SQL",
    "SQLServer",
    "Docker",
    "OpenApi",
    "Cobol",
    "JCL",
    "Mainframe",
    "Bases DL1",
    "EntityFramework",
    "Figma",
    "CICD",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fares.zeghoudi@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Matmut",
      href: "https://www.matmut.fr/",
      badges: [],
      location: "Rouen, France",
      title: "Analyste Programmeur",
      logoUrl: "/matmut.jpeg",
      start: "Septembre 2022",
      end: "Maintenant",
      description:
        "Développement de microservices .NET, interfaces React et programmes COBOL/JCL dans un environnement mainframe, avec une forte implication en architecture, base de données et méthode agile.",
    },
    {
      company: "MetalMaker3D",
      badges: [],
      href: "https://metalmaker3d.com/",
      location: "Cracovie, Pologne",
      title: "Developpeur Web",
      logoUrl: "/metalmaker.jpeg",
      start: "Juillet 2024",
      end: "Octobre 2024",
      description:
        "Optimisation du site intranet avec ajout d’un dark mode, d’un système de langues (i18n) et d’améliorations UI pour une meilleure expérience utilisateur.",
    },
    {
      company: "I-Surveillance",
      href: "https://www.i-surveillance.pro/index.html",
      badges: [],
      location: "Rouen, France",
      title: "Technicien Informatique",
      logoUrl: "/isurveillance.png",
      start: "2019",
      end: "2021",
      description:
        "Support technique et maintenance informatique lors de deux stages de découverte du milieu professionnel.",
    },
  ],
  education: [
    {
      school: "Cesi Rouen",
      href: "https://rouen.cesi.fr/",
      degree: "Ingénieur Informatique",
      logoUrl: "/cesi.jpg",
      start: "2022",
      end: "2025",
    },
    {
      school: "Lycée Marcel Sembat",
      href: "https://lyceesmarcelsembat.wordpress.com/",
      degree: "BTS Systèmes Numériques",
      logoUrl: "/marcelSembat.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Lycée Marcel Sembat",
      href: "https://lyceesmarcelsembat.wordpress.com/",
      degree: "Baccalauréat Systèmes Numériques",
      logoUrl: "/marcelSembat.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "FlashFood",
      href: "",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Création d'une application type Uber Eats basée sur React et sur des microservices node.js. Le tout avec une architecture conteneurisée avec Docker et l'utilisation de Nginx pour le reverse proxy.",
      technologies: [
        "React.js",
        "Typescript",
        "SQLServer",
        "Prisma",
        "TailwindCSS",
        "Docker",
        "Nginx",
        "Figma",
        "MongoDB",
      ],
      image: "/flashfood.png",
      video: "",
    },
    {
      title: "Ranko",
      href: "",
      dates: "Juillet 2025 - Maintenant",
      active: true,
      description:
        "Ranko est une application web en cours de maquettage, conçue pour répertorier, noter et organiser tes contenus culturels (animés, mangas, jeux, musique), avec tierlists, objectifs et statistiques personnalisées.",
      technologies: [
        "Next.js",
        "Shadcn UI",
        "React Hook Form",
        "Zod",
        "TailwindCSS",
        "Prisma",
        "ASP.NET Core",
        "Docker Compose",
        "YARP Gateway",
      ],
      image: "/Ranko.png",
      video: "",
    },
  ],
} as const;
