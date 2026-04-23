"use client";

import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    name: "Next.js",
    category: "Framework",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 16 6-8" />
      </svg>
    ),
    color: "group-hover:text-black group-hover:bg-white"
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 11l8-8 8 8" />
        <path d="M4 15l8 8 8-8" />
      </svg>
    ),
    color: "group-hover:text-blue-600 group-hover:bg-blue-50"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "group-hover:text-cyan-500 group-hover:bg-cyan-50"
  },
  {
    name: "MySQL",
    category: "Database",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    color: "group-hover:text-orange-500 group-hover:bg-orange-50"
  },
  {
    name: "PC Troubleshooting",  
    category: "Hardware & Support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect width="14" height="8" x="5" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h2" />
        <path d="M12 18h6" />
      </svg>
    ),
    color: "group-hover:text-accent group-hover:bg-accent/10"
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 bg-card-bg overflow-hidden"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Background blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "animate-fade-in-up" : ""
          }`}
        >
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            My Skills
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What I work with
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 max-w-lg mx-auto text-muted">
            I specialize in building reliable systems, from robust codebases to hardware troubleshooting, ensuring everything runs smoothly.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`group flex items-center gap-4 p-5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
              }}
            >
              <div className={`p-3 rounded-xl bg-gray-50 text-muted transition-colors duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{skill.name}</h3>
                <p className="text-xs text-muted/80 uppercase tracking-wider font-medium">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
