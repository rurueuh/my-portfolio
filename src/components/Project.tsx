import { motion } from 'framer-motion';
import React from 'react';

interface TagProps {
    text: string;
    logo: string;
    link?: string;
}

const Tag: React.FC<TagProps> = ({ text, logo, link }) => (
    <a
        href={link ?? '#'}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-2 py-1 bg-gray-700 rounded-lg"
    >
        <img src={logo} alt={text} className="w-5 h-5" />
        <span>{text}</span>
    </a>
);

interface ProjectCardProps {
    children?: React.ReactNode;
    logo: string;
}

const Project: React.FC<ProjectCardProps> = ({ children, logo }) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200 flex gap-4 items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.0 }}
        >
            <aside className="items-center place-self-center mb-4 basis-2/10">
                <img src={logo} alt="RilosHost Logo" className="w-18 h-18 mr-4" />
            </aside>
            <div className="basis-8/10">
                {children}
            </div>
        </motion.div>
    );
};

export default Project;
