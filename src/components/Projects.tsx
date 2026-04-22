"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with product management, shopping cart, and payment integration. Built for seamless online shopping experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    color: "from-blue-600 to-blue-400",
    colorLight: "from-blue-50 to-blue-100",
    emoji: "🛒",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, team boards, and progress tracking to boost productivity.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    color: "from-blue-500 to-cyan-500",
    colorLight: "from-blue-50 to-cyan-50",
    emoji: "📋",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "An analytics dashboard providing insights on portfolio performance with interactive charts and real-time data visualization.",
    tags: ["Next.js", "Chart.js", "REST API", "Tailwind"],
    color: "from-emerald-500 to-green-400",
    colorLight: "from-emerald-50 to-green-50",
    emoji: "📊",
    link: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description:
      "A social networking platform with user profiles, feeds, messaging, and content sharing built for modern communities.",
    tags: ["React", "Express", "MySQL", "Redux"],
    color: "from-emerald-500 to-teal-500",
    colorLight: "from-emerald-50 to-teal-50",
    emoji: "💬",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 bg-card-bg">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            My Projects
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured work
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 max-w-lg mx-auto text-muted">
            Here are some of my recent projects. Each one was crafted with care and attention to detail.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-white rounded-2xl border border-border/50 overflow-hidden hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 card-shine ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${0.2 + i * 0.12}s`,
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              {/* Project preview area */}
              <div className={`relative h-52 bg-linear-to-br ${project.color} overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-xl rotate-12 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                  <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full transition-transform duration-500 group-hover:scale-125" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-2xl -rotate-6 transition-transform duration-500 group-hover:rotate-6" />
                </div>

                {/* Center emoji */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">{project.emoji}</span>
                </div>

                {/* Window mockup */}
                <div className="absolute inset-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-3 transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <div className="ml-auto w-16 h-2 bg-white/20 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                    <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                    <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                  </div>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    className="p-3.5 bg-white rounded-full text-foreground hover:bg-accent hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="View live"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    className="p-3.5 bg-white rounded-full text-foreground hover:bg-accent hover:text-white transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="View source"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/5 rounded-full border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-accent border border-accent/20 rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
          >
            View All Projects on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
