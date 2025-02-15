import React from 'react';
import { motion } from 'framer-motion';
import Tags from '@/components/Tags';

import Riloshost from '../assets/riloshost.svg';
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
import CPP from '../assets/cpp.svg';
import Project from '@/components/Project';

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
        {/* Project 1 */}
        <Project logo={Riloshost}>
          <h3 className="text-2xl font-semibold mb-2 text-white">RilosHost</h3>
          <p>Create a hosting game company with website, setup server, panel and more.</p>
          <div className='gap-2 mt-4 mb-4 flex flex-row flex-wrap'>
            <Tags text="TypeScript" logo={TypeScript} link='https://www.typescriptlang.org/' />
            <Tags text="NextJS" logo={NextJS} link='https://nextjs.org/' />
            <Tags text="TailwindCSS" logo={TailwindCSS} link='https://tailwindcss.com/' />
            <Tags text="Server" logo={Server} />
            <Tags text="OVH" logo={OVH} link='https://www.ovh.com/' />
            <Tags text="Docker" logo={Docker} link='https://www.docker.com/' />
            <Tags text="Pterodactyl" logo={Pterodactyl} link='https://pterodactyl.io/' />
          </div>
          <a href="https://riloshost.fr" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            Visit Website
          </a>
        </Project>

        {/* Project 2 */}
        <Project logo={Riloshost}>
          <h3 className="text-2xl font-semibold mb-2 text-white">RilosHost Script</h3>
          <p>Create a somes scripts for games</p>
          <div className='gap-2 mt-4 mb-4 flex flex-row flex-wrap'>
            <Tags text="JavaScript" logo={JavaScript} link='https://developer.mozilla.org/fr/docs/Web/JavaScript' />
            <Tags text="Server" logo={Server} />
            <Tags text="Docker" logo={Docker} link='https://www.docker.com/' />
            <Tags text="CPP/C++" logo={CPP} link='https://www.cplusplus.com/' />
          </div>
          <div className="flex flex-row gap-2">
            <a href="https://github.com/rurueuh/holdfastbalance" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              Github Holdfast auto balance
            </a>
            <a href="https://github.com/rurueuh/crashArk" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              Github ARK auto restart on crash
            </a>
          </div>
        </Project>

        {/* Project 3 */}
        <Project logo={RIOT}>
          <h3 className="text-2xl font-semibold mb-2 text-white">League Of Legends Bot</h3>
          <p>Create a Discord bot for tracking if one player is in ranked and if he win or not</p>
          <div className='gap-2 mt-4 mb-4 flex flex-row flex-wrap'>
            <Tags text="JavaScript" logo={JavaScript} link='https://developer.mozilla.org/fr/docs/Web/JavaScript' />
            <Tags text="RiotGames" logo={RIOT} />
            <Tags text="API" logo={API} />
            <Tags text="Stats" logo={Stats} />
          </div>
          <div className="flex flex-row gap-2">
            <a href="https://github.com/rurueuh/holdfastbalance" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              Github Holdfast auto balance
            </a>
            <a href="https://github.com/rurueuh/crashArk" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              Github ARK auto restart on crash
            </a>
          </div>
        </Project>

        {/* Project 4 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 4</h3>
          <p>This is a brief description of project 4.</p>
        </motion.div>

        {/* Project 5 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 5</h3>
          <p>This is a brief description of project 5.</p>
        </motion.div>

        {/* Project 6 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 6</h3>
          <p>This is a brief description of project 6.</p>
        </motion.div>

        {/* Project 7 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 7</h3>
          <p>This is a brief description of project 7.</p>
        </motion.div>

        {/* Project 8 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 8</h3>
          <p>This is a brief description of project 8.</p>
        </motion.div>

        {/* Project 9 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 9</h3>
          <p>This is a brief description of project 9.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
