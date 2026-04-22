"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Building modern web applications for clients using Next.js, React, and Node.js. Focused on creating performant, user-friendly digital experiences.",
    tags: ["Next.js", "React", "Node.js", "MySQL"],
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "Project-Based",
    period: "2023 — 2024",
    description:
      "Developed responsive web interfaces and collaborated with teams to deliver high-quality digital products. Specialized in React and modern CSS.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    type: "education",
    title: "Computer Science",
    company: "University",
    period: "2022 — Present",
    description:
      "Studying Computer Science with focus on software engineering, data structures, algorithms, and web development technologies.",
    tags: ["Algorithms", "Data Structures", "Web Dev"],
  },
];

export default function Experience() {
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
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-linear-to-tr from-green-50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            Experience
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            My journey so far
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent/30 via-accent/10 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={exp.title + exp.company}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${0.2 + i * 0.15}s`,
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-2">
                <div className="w-full h-full rounded-full bg-white border-2 border-accent shadow-md shadow-accent/20" />
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
              </div>

              {/* Card — alternating sides on desktop */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-0"
                    : "md:ml-auto md:pl-0"
                }`}
              >
                <div className="group p-6 bg-white rounded-2xl border border-border/50 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
                  {/* Period badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-accent/5 border border-accent/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs font-semibold text-accent">
                      {exp.period}
                    </span>
                  </div>

                  {/* Type icon */}
                  <div className="flex items-center gap-2 mb-1">
                    {exp.type === "work" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 6 3 9 0v-5" />
                      </svg>
                    )}
                    <span className="text-xs text-muted uppercase tracking-wider font-medium">
                      {exp.type === "work" ? "Work" : "Education"}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-foreground group-hover:text-accent transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-accent/70 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium text-accent/80 bg-accent/5 rounded-full border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
