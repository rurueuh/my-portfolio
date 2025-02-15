import { motion } from 'framer-motion';
import React from 'react';

interface ProjectCardProps {
    children?: React.ReactNode;
    logo: string;
    alt: string;
}

const Project: React.FC<ProjectCardProps> = ({ children, logo, alt }) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200 flex gap-4 items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.0 }}
        >
            <aside className="items-center place-self-center mb-4 basis-2/10">
                <img src={logo} alt={alt} className="w-18 h-18 mr-4" />
            </aside>
            <div className="basis-8/10">
                {children}
            </div>
        </motion.div>
    );
};

export default Project;
