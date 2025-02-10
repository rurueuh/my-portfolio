import { useState, useEffect, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function SkillsLayout() {
  const [activeSection, setActiveSection] = useState("");

  // Progression de scroll (0 -> 1) par section
  const [webProgress, setWebProgress] = useState(0);
  const [cppProgress, setCppProgress] = useState(0);
  const [devopsProgress, setDevopsProgress] = useState(0);

  // Refs pour mesurer la position / taille de chaque section
  const webRef = useRef<HTMLElement | null>(null);
  const cppRef = useRef<HTMLElement | null>(null);
  const devopsRef = useRef<HTMLElement | null>(null);

  // Intersection Observer : section active
  const handleActiveSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  // Calcul progression
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      function calcProgress(sectionEl: HTMLElement | null) {
        if (!sectionEl) return 0;
        const offsetTop = sectionEl.offsetTop;
        const sectionHeight = sectionEl.offsetHeight;
        const distance = sectionHeight - viewportHeight;

        if (distance <= 0) {
          return scrollY >= offsetTop ? 1 : 0;
        }
        const raw = (scrollY - offsetTop) / distance;
        return Math.max(0, Math.min(1, raw));
      }

      // On met à jour les 3
      const w = calcProgress(webRef.current);
      const c = calcProgress(cppRef.current);
      const d = calcProgress(devopsRef.current);

      setWebProgress(w);
      setCppProgress(c);
      setDevopsProgress(d);

      // Debug
      console.log({
        scrollY,
        webProgress: w,
        cppProgress: c,
        devopsProgress: d,
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // première init

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Barre latérale */}
      <aside className="sticky top-0 w-72 h-screen bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Mes Compétences</h2>
        <nav className="space-y-4">
          <NavItem
            href="#web"
            label="Développement Web"
            active={activeSection === "web"}
            progress={webProgress}
          />
          <NavItem
            href="#cpp"
            label="C++"
            active={activeSection === "cpp"}
            progress={cppProgress}
          />
          <NavItem
            href="#devops"
            label="DevOps"
            active={activeSection === "devops"}
            progress={devopsProgress}
          />
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 bg-white dark:bg-gray-800">
        <WebSection parentRef={webRef} onActive={handleActiveSection} />
        <CppSection parentRef={cppRef} onActive={handleActiveSection} />
        <DevOpsSection parentRef={devopsRef} onActive={handleActiveSection} />
      </main>
    </div>
  );
}

/** Barre de progression + lien */
function NavItem({
  href,
  label,
  active,
  progress,
}: Readonly<{
  href: string;
  label: string;
  active: boolean;
  progress: number;
}>) {
  return (
    <div className="flex flex-col space-y-1">
      {/* Barre horizontale */}
      <div className="h-2 w-full bg-gray-700 rounded">
        <motion.div
          className="h-2 bg-pink-600 rounded"
          // On applique un width de 0% à 100% selon progress
          animate={{ width: `${(progress * 100).toFixed(2)}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Lien */}
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

// ---------- Web Section -----------
function WebSection({
  parentRef,
  onActive,
}: Readonly<{
  parentRef: React.RefObject<HTMLElement | null>;
  onActive: (id: string) => void;
}>) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) onActive("web");
  }, [inView, onActive]);

  return (
    <section
      id="web"
      ref={parentRef}
      // IMPORTANT : plus grand que la fenêtre => 150vh
      className="h-[150vh] border-b border-gray-200 dark:border-gray-700 flex items-start pt-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <h3 className="text-3xl font-semibold mb-4">Développement Web</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Du contenu assez long pour forcer un scroll.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          laoreet mi sit amet ornare molestie. Phasellus nec lorem non
          metus aliquet sollicitudin. Nullam lacinia enim eu convallis
          tristique. 
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Continuez à scroller pour voir la barre rose augmenter à gauche.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          ...
        </p>
      </motion.div>
    </section>
  );
}

// ---------- C++ Section -----------
function CppSection({
  parentRef,
  onActive,
}: Readonly<{
  parentRef: React.RefObject<HTMLElement | null>;
  onActive: (id: string) => void;
}>) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) onActive("cpp");
  }, [inView, onActive]);

  return (
    <section
      id="cpp"
      ref={parentRef}
      className="h-[150vh] border-b border-gray-200 dark:border-gray-700 flex items-start pt-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <h3 className="text-3xl font-semibold mb-4">C++</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Encore du texte pour forcer un défilement vertical.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Scrollez pour voir la barre rose se remplir lorsque vous avancez dans cette section.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          ...
        </p>
      </motion.div>
    </section>
  );
}

// ---------- DevOps Section -----------
function DevOpsSection({
  parentRef,
  onActive,
}: Readonly<{
  parentRef: React.RefObject<HTMLElement | null>;
  onActive: (id: string) => void;
}>) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) onActive("devops");
  }, [inView, onActive]);

  return (
    <section
      id="devops"
      ref={parentRef}
      className="h-[150vh] border-b border-gray-200 dark:border-gray-700 flex items-start pt-10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <h3 className="text-3xl font-semibold mb-4">DevOps</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Encore du contenu...
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          ...pour tester la progression de la barre rose
        </p>
      </motion.div>
    </section>
  );
}
