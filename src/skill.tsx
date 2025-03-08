import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const sections = ["Section 1", "Section 2", "Section 3"];

export default function SkillsLayout() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-4">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded transition-all ${
              activeIndex === index ? "bg-gray-600" : "bg-gray-700 hover:bg-gray-500"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 h-full flex items-center justify-center bg-gray-100 relative overflow-hidden">
        <div
          className="w-full h-full transition-transform duration-500 flex"
          style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center text-3xl font-bold"
            >
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Barre de progression + lien */
function NavItem({
  href,
  label,
  active,
  progress,
}: {
  href: string;
  label: string;
  active: boolean;
  progress: number;
}) {
  return (
    <div className="flex flex-col space-y-1">
      <div className="h-2 w-full bg-gray-700 rounded">
        <motion.div
          className="h-2 bg-pink-600 rounded"
          animate={{ width: `${(progress * 100).toFixed(2)}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <motion.a
        href={href}
        style={{ backgroundColor: active ? "#db2777" : "transparent" }}
        transition={{ duration: 0.3 }}
        className={`block px-2 py-1 rounded hover:bg-gray-700 transition-colors ${
          active ? "text-white" : "text-gray-300"
        }`}
      >
        {label}
      </motion.a>
    </div>
  );
}

function WebSection({
  parentRef,
  onActive,
}: {
  parentRef: React.RefObject<HTMLElement | null>;
  onActive: (id: string) => void;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (inView) onActive("web");
  }, [inView, onActive]);

  return (
    <section
      id="web"
      ref={parentRef}
      className="h-[100vh] border-b border-gray-200 dark:border-gray-700 flex items-start pt-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h3 className="text-3xl font-semibold mb-4">Développement Web</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Du contenu plus ou moins long...
        </p>
      </motion.div>
    </section>
  );
}

function CppSection({
  parentRef,
  onActive,
}: {
  parentRef: React.RefObject<HTMLElement | null>;
  onActive: (id: string) => void;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (inView) onActive("cpp");
  }, [inView, onActive]);

  return (
    <section
      id="cpp"
      ref={parentRef}
      className="h-[100vh] border-b border-gray-200 dark:border-gray-700 flex items-start pt-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h3 className="text-3xl font-semibold mb-4">C++</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Se déclenche quand le ref arrive au milieu de l'écran environ.
        </p>
      </motion.div>
    </section>
  );
}

function DevOpsSection({
  parentRef,
  onActive,
}: {
  parentRef: React.RefObject<HTMLElement | null>;
  onActive: (id: string) => void;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (inView) onActive("devops");
  }, [inView, onActive]);

  return (
    <section
      id="devops"
      ref={parentRef}
      className="h-[100vh] border-b border-gray-200 dark:border-gray-700 flex items-start pt-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h3 className="text-3xl font-semibold mb-4">DevOps</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Pareil, l'activation est décalée pour éviter 
          qu'elle se produise trop tôt.
        </p>
      </motion.div>
    </section>
  );
}
