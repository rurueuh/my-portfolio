import React from 'react';
import { motion } from 'framer-motion';

// Replace these imports with the actual paths to your logo files.
import Insitaction from '../assets/insitation.jpg';
import EpitechLogo from '../assets/epitech.svg';
import Riloshost from '../assets/riloshost.svg';

const ExperiencesSection: React.FC = () => {
    return (
        <section
            id="experiences"
            className="h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-br from-gray-900 to-gray-800 snap-start overflow-x-hidden"
        >
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold mb-12 text-center">Experiences</h2>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>

                    {/* Experience 1 - Left aligned */}
                    <motion.div
                        className="relative flex items-center mb-12"
                        initial={{ opacity: 0, x: 500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                        <motion.div
                            initial={{ opacity: 0, x: 500 }}
                            whileInView={{ opacity: 1, x: 150 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mr-8 bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
                            <img
                                src={Insitaction}
                                alt="Insitaction Logo"
                                className="w-12 h-12 mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold">Insitaction</h3>
                                <p className="text-sm text-gray-400">
                                    2020-2021 — Internship, Web Development
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative flex items-center mb-12 justify-end"
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                        <motion.div
                            initial={{ opacity: 0, x: -500 }}
                            whileInView={{ opacity: 1, x: -150 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mr-8 bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
                            <img
                                src={EpitechLogo}
                                alt="Epitech Logo"
                                className="w-12 h-12 mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold">Epitech</h3>
                                <p className="text-sm text-gray-400">
                                    2021-2024 — Intership, Pedagogy Assistant
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Experience 3 - Left aligned */}
                    <motion.div
                        className="relative flex items-center"
                        initial={{ opacity: 0, x: 500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                        <motion.div
                            initial={{ opacity: 0, x: 500 }}
                            whileInView={{ opacity: 1, x: 150 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mr-8 bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
                            <img
                                src={Riloshost}
                                alt="Riloshost Logo"
                                className="w-12 h-12 mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold">Riloshost</h3>
                                <p className="text-sm text-gray-400">
                                    2022-now — Internship, Web Development
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperiencesSection;
