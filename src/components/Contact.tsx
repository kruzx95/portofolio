"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "kruza8@gmail.com",
    href: "mailto:kruza8@gmail.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Tasikmalaya, Indonesia",
    href: "#",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: "Website",
    value: "On Progress",
    href: "#",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Masukkan Access Key Web3Forms Anda di sini
    formData.append("access_key", "438d92ea-a3ca-4142-8545-7cb833e7d102");
    // Menambahkan nama pengirim default agar email terlihat lebih profesional dan tidak dianggap spam
    formData.append("from_name", "Pesan Baru Website Portofolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-linear-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-green-50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            Get In Touch
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s work together
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-6 max-w-lg mx-auto text-muted">
            Have a project in mind or just want to say hello? Feel free to
            reach out. I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="group flex items-start gap-4 p-5 bg-card-bg rounded-xl border border-border/50 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:shadow-md group-hover:shadow-accent/20 transition-all duration-300 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-muted">{info.label}</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="pt-4">
              <p className="text-sm font-medium text-muted mb-4">
                Follow me on
              </p>
              <div className="flex gap-3">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/kruzx95",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/mallikwinata/",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/kruzamidiwinata/",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-card-bg border border-border/50 flex items-center justify-center text-muted hover:text-accent hover:border-accent/20 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-card-bg rounded-2xl border border-border/50"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 text-sm bg-white border border-border/50 rounded-xl transition-all placeholder:text-muted/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 text-sm bg-white border border-border/50 rounded-xl transition-all placeholder:text-muted/40"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project collaboration"
                  required
                  className="w-full px-4 py-3 text-sm bg-white border border-border/50 rounded-xl transition-all placeholder:text-muted/40"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 text-sm bg-white border border-border/50 rounded-xl transition-all resize-none placeholder:text-muted/40"
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                disabled={submitted || isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-300">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
