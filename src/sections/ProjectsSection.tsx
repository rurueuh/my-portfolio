import React from 'react';
import { motion } from 'framer-motion';
import Tags from '@/components/Tags';

import Riloshost from '../assets/riloshost.svg';
import ReactJS from '../assets/react.svg';
import NextJS from '../assets/nextjs.svg';
import TypeScript from '../assets/typescript.svg';
import JavaScript from '../assets/javascript.svg';
import Pterodactyl from '../assets/ptero.png';
import API from '../assets/api.svg';
import RIOT from '../assets/riotgames.svg';
import Stats from '../assets/stats.svg';
import TailwindCSS from '../assets/tailwindcss.svg';
import OVH from '../assets/ovh.svg';
import Docker from '../assets/docker.svg';
import Server from '../assets/server.svg';
import EventEase from '../assets/eventease.webp';
import FireBase from '../assets/firebase.svg';
import FireStore from '../assets/firestore.svg';
import Mapping from '../assets/map.svg';
import CPP from '../assets/cpp.svg';
import Expo from '../assets/expo.svg';
import Game from '../assets/game.svg';
import Vite from '../assets/vite.svg';
import Project from '@/components/Project';

interface ProjectData {
  title: string;
  description: string;
  logo: string;
  alt: string;
  demoAccount?: {
    email: string;
    password: string;
  };
  tags: Array<{
    text: string;
    alt: string;
    logo: string;
    link?: string;
  }>;
  links: Array<{
    text: string;
    url: string;
  }>;
}

const PROJECTS: ProjectData[] = [
  {
    title: "RilosHost",
    description: "Create a hosting game company with website, setup server, panel and more.",
    logo: Riloshost,
    alt: "RilosHost",
    tags: [
      { text: "TypeScript", alt: "TypeScript logo", logo: TypeScript, link: 'https://www.typescriptlang.org/' },
      { text: "NextJS", alt: "NextJS logo", logo: NextJS, link: 'https://nextjs.org/' },
      { text: "TailwindCSS", alt: "TailwindCSS logo", logo: TailwindCSS, link: 'https://tailwindcss.com/' },
      { text: "Server", alt: "Server logo", logo: Server },
      { text: "OVH", alt: "OVH logo", logo: OVH, link: 'https://www.ovh.com/' },
      { text: "Docker", alt: "Docker logo", logo: Docker, link: 'https://www.docker.com/' },
      { text: "Pterodactyl", alt: "Pterodactyl logo", logo: Pterodactyl, link: 'https://pterodactyl.io/' }
    ],
    links: [
      { text: "Visit Website", url: "https://riloshost.fr" }
    ]
  },
  {
    title: "RilosHost Script",
    description: "Create a somes scripts for games",
    logo: Riloshost,
    alt: "RilosHost",
    tags: [
      { text: "JavaScript", alt: "JavaScript logo", logo: JavaScript, link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
      { text: "Server", alt: "Server logo", logo: Server },
      { text: "Docker", alt: "Docker logo", logo: Docker, link: 'https://www.docker.com/' },
      { text: "C/C++", alt: "C/C++ logo", logo: CPP, link: 'https://www.cplusplus.com/' }
    ],
    links: [
      { text: "Github Holdfast auto balance", url: "https://github.com/rurueuh/holdfastbalance" },
      { text: "Github ARK auto restart on crash", url: "https://github.com/rurueuh/crashArk" }
    ]
  },
  {
    title: "League Of Legends Bot",
    description: "Create a Discord bot for tracking if one player is in ranked and if he win or not and give stats about this player",
    logo: RIOT,
    alt: "Riot Games",
    tags: [
      { text: "JavaScript", alt: "JavaScript logo", logo: JavaScript, link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
      { text: "RiotGames", alt: "RiotGames logo", logo: RIOT, link: 'https://developer.riotgames.com/' },
      { text: "API", alt: "API logo", logo: API },
      { text: "Stats", alt: "Stats logo", logo: Stats }
    ],
    links: [
      { text: "Github ARK auto restart on crash", url: "https://github.com/rurueuh/discord-bot-lol" }
    ]
  },
  {
    title: "EventEase",
    description: "EventEase is a platform that allows you to create and manage your events or simple join other public event.",
    logo: EventEase,
    alt: "EventEase logo",
    demoAccount: {
      email: "ruruDemo@rurueuh.fr",
      password: "ruruDemo"
    },
    tags: [
      { text: "NextJS", alt: "NextJS logo", logo: NextJS, link: 'https://nextjs.org/' },
      { text: "NextUI", alt: "NextUI logo", logo: NextJS, link: 'https://nextui.org/' },
      { text: "TailwindCSS", alt: "TailwindCSS logo", logo: TailwindCSS, link: 'https://tailwindcss.com/' },
      { text: "FireBase", alt: "FireBase logo", logo: FireBase, link: 'https://firebase.google.com/' },
      { text: "FireStore", alt: "FireStore logo", logo: FireStore, link: 'https://firebase.google.com/docs/firestore' },
      { text: "Mapping", alt: "Map logo", logo: Mapping }
    ],
    links: [
      { text: "Go to EventEase", url: "https://eventease.rurueuh.fr/login" },
      { text: "Github EventEase", url: "https://github.com/rurueuh/EventEase" }
    ]
  },
  {
    title: "My Undercover",
    description: "Create a React Native mobile game inspired by the popular party game Undercover.",
    logo: Game,
    alt: "Game Undercover logo",
    tags: [
      { text: "React Native", alt: "React Native logo", logo: ReactJS, link: "https://reactnative.dev/" },
      { text: "Expo", alt: "Expo logo", logo: Expo, link: "https://expo.dev/" },
    ],
    links: [
      { text: "View on GitHub", url: "https://github.com/rurueuh/my_undercover" }
    ]
  },
  {
    title: "Website Portfolio",
    description: "Create a website portfolio to show my projects and my skills",
    logo: Game,
    alt: "Website Portfolio no logo",
    tags: [
      { text: "React", alt: "React logo", logo: ReactJS, link: "https://reactjs.org/" },
      { text: "TailwindCSS", alt: "TailwindCSS logo", logo: TailwindCSS, link: "https://tailwindcss.com/" },
      { text: "TypeScript", alt: "TypeScript logo", logo: TypeScript, link: "https://www.typescriptlang.org/" },
      { text: "Vite", alt: "Vite logo", logo: Vite, link: "https://vitejs.dev/" },
    ],
    links: [
      { text: "View on GitHub", url: "https://github.com/rurueuh/website-portfolio" }
    ]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-gray-900 snap-start py-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4">
        {PROJECTS.map((project) => (
          <Project 
            key={project.title.toLowerCase().replace(/\s+/g, '-')}
            logo={project.logo}
            alt={project.alt}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p>{project.description}</p>
            {project.demoAccount && (
              <p>demo account: email: {project.demoAccount.email} password: {project.demoAccount.password}</p>
            )}
            <div className="gap-2 mt-4 mb-4 flex flex-row flex-wrap">
              {project.tags.map((tag) => (
                <Tags
                  key={`${project.title}-${tag.text}`}
                  {...tag}
                />
              ))}
            </div>
            <div className="flex flex-row gap-2">
              {project.links.map((link) => (
                <a
                  key={`${project.title}-${link.text}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </Project>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
