import passwordStrengthChecker from "../assets/Password-Strenght-Checker.png";
import cybersecurityDashboard from "../assets/cyberdash.png";
import portfolioimage from "../assets/myportfolio.png";
import ipchecker from "../assets/ipinfofinder.png";


const projects = [
  {
    id: 1,
    title: "̲̲M̲̲y̲ ̲P̲̲o̲̲r̲̲t̲̲f̲̲o̲̲l̲̲i̲̲o̲",
    image:  portfolioimage,
    description:
      "A real-time attendance tracking system using QR codes and Firebase. Built with React, Vite, and Firestore for real-time updates.",
    tech: ["React", "Firebase", "Tailwind CSS", "Vite"],
    link: "https://myad-fhe4.vercel.app/",
    github: "https://github.com/amiraasia15-arch/myad.git",
  },
  {
    id: 2,
    title: "̲P̲a̲̲s̲̲s̲̲w̲̲o̲̲r̲̲d̲ ̲S̲̲t̲̲r̲̲e̲̲n̲̲g̲̲h̲̲t̲ ̲C̲̲h̲̲e̲̲c̲̲k̲̲e̲̲r̲",
    image: passwordStrengthChecker,
    description:
      "An AI-powered landing page generator with one-click deployment and a drag-and-drop editor. Frontend-only project built with Next.js.",
    tech: ["Next.js", "Tailwind CSS", "OpenAI API"],
    link: "https://password-trength-checker-puce.vercel.app/",
    github: "https://github.com/amiraasia15-arch/Password-strength-checker.git",
  },
  {
    id: 3,
    title: "C̲̲y̲̲b̲̲e̲̲r̲̲S̲̲e̲̲c̲̲u̲̲r̲̲i̲̲t̲̲y̲̲ D̲a̲̲s̲̲h̲̲b̲̲o̲a̲̲r̲̲d̲",
    image:  cybersecurityDashboard,
    description:
      "A web app that summarizes and translates YouTube videos using AI. Ideal for quick learning and accessibility.",
    tech: ["React", "Rapid API", "Tailwind CSS"],
      link: "https://cybersecurity-dashboard-navy.vercel.app/",
    github: "https://github.com/amiraasia15-arch/Cybersecurity-Dashboard.git",
  },
  {
    id: 4,
    title: "̲I̲̲P̲ ̲C̲̲h̲̲e̲̲c̲̲k̲̲e̲̲r̲",
    image:  ipchecker,
    description:
      "A mini pentesting environment showcasing vulnerable and secure Node.js apps for ethical hacking exercises.",
    tech: ["Node.js", "Express", "Docker"],
    link: "https://vercel.com/mimiads-projects?repo=https://github.com/amiraasia15-arch/Ip-info-finder",
    github: "https://github.com/amiraasia15-arch/Ip-info-finder.git",
  },
  // {
  //   id: 5,
  //   title: "The Ultimate Money-Saving Blueprint",
  //   image: "/images/projects/money-blueprint.png",
  //   description:
  //     "A digital financial toolkit including a budgeting Excel template and a visually designed PDF guide for smart financial planning.",
  //   tech: ["Canva", "Excel", "Marketing Strategy"],
  //   link: "https://cyberflex-blueprint.vercel.app",
  //   github: "https://github.com/Cyb3rflex/money-blueprint",
  // },
];

export default projects;