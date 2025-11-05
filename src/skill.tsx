import { useState, useEffect } from "react";
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


