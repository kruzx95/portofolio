"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "2+", label: "Years Experience", icon: "⚡" },
  { number: "15+", label: "Projects Completed", icon: "🚀" },
  { number: "10+", label: "Happy Clients", icon: "😊" },
  { number: "5+", label: "Technologies", icon: "🛠️" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            About Me
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get to know me
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar / Visual */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-linear-to-br from-accent/10 to-green-100/50 rounded-3xl -rotate-3 transition-transform duration-500 hover:rotate-0" />
              <div className="absolute -inset-4 bg-linear-to-tr from-blue-50 to-accent/5 rounded-3xl rotate-3 transition-transform duration-500 hover:rotate-0" />
              <div className="relative aspect-square rounded-2xl bg-linear-to-br from-gray-50 to-white border border-border overflow-hidden flex items-center justify-center">
                {/* Abstract avatar / geometric illustration */}
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-linear-to-br from-accent to-secondary rounded-full opacity-20 animate-pulse-glow" />
                  <div className="absolute inset-4 bg-linear-to-br from-accent/30 to-secondary/30 rounded-full" />
                  <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-5xl font-bold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
                      M
                    </span>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-accent/10 rounded-xl rotate-12 animate-float" />
                <div className="absolute bottom-12 left-8 w-8 h-8 bg-green-100 rounded-lg -rotate-12 animate-float delay-200" />
                <div className="absolute top-1/3 left-12 w-6 h-6 bg-blue-100 rounded-full animate-float delay-400" />
                <div className="absolute bottom-8 right-12 w-4 h-4 bg-blue-100 rounded-full animate-float delay-600" />

                {/* Code snippet decoration */}
                <div className="absolute bottom-6 right-6 px-3 py-2 bg-foreground/90 rounded-lg text-[10px] font-mono text-green-400 leading-relaxed shadow-xl">
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-blue-300">dev</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-amber-300">&quot;Mallik&quot;</span>
                  <span className="text-white">;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building digital solutions for government and beyond 🏛️
            </h3>
            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                I am a <strong className="text-foreground font-semibold">Web Developer</strong> with experience in building and developing websites for government institutions. 
              </p>
              <p>
                Proficient in <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-sm font-medium mx-1 border border-blue-100 shadow-xs">WordPress</span> and modern technologies such as <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-sm font-medium mx-1 border border-blue-100 shadow-xs">TypeScript</span> and <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-green-50 text-green-600 text-sm font-medium mx-1 border border-green-100 shadow-xs">Tailwind CSS</span> to deliver responsive and efficient applications.
              </p>
              <div className="relative p-5 mt-6 bg-linear-to-br from-card-bg to-gray-50/50 border border-border rounded-2xl shadow-xs">
                <div className="absolute -top-3 -left-2 text-4xl text-accent/20">&quot;</div>
                <p className="relative z-10 italic text-foreground/80 text-sm md:text-base">
                  Strong collaboration skills, highly adaptable, and solution-oriented, supported by prior experience in Human Resources.
                </p>
              </div>
            </div>

            {/* Download CV button */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 mb-8 text-sm font-semibold text-accent border border-accent/20 rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group/stat p-5 rounded-xl bg-card-bg border border-border/50 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-0.5 ${
                    visible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${0.4 + i * 0.1}s`
                  }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-lg">{stat.icon}</span>
                    <div
                      className="text-2xl font-bold gradient-text"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
