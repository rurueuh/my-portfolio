import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react";
import SkillsLayout from './skill';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-proximity scroll-smooth bg-gray-900 text-white">
      <section className="h-screen flex flex-col justify-center items-center snap-start">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur mon Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Développeur Web FullStack
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Développeur CPP
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Développeur Opérationnel (DevOps)
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6"
        >
          <Button className="bg-blue-600 px-6 py-3 rounded-lg">Me Contacter</Button>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      <motion.section
        className="h-screen flex flex-col justify-center items-center snap-start"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">À Propos de Moi</h2>
        <p className="mt-4 max-w-3xl text-center text-gray-300">
          Je suis un jeune développeur passionné par les diverses technologies du web et de l'informatique.
        </p>
        <p className="mt-4 max-w-3xl text-center text-gray-300">
          J'ai une expérience en développement web fullstack, en développement C++ ainsi qu'en DevOps.
        </p>
      </motion.section>

      <div className="relative bg-gray-100 dark:bg-gray-900">
        <SkillsLayout />
      </div>

      <motion.section
        className="h-screen flex flex-col justify-center items-center snap-start"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">Me Contacter</h2>
        <p className="mt-4 text-gray-300">Envoyez-moi un message pour échanger.</p>
      </motion.section>
    </div>
  );
};

export default Home;
