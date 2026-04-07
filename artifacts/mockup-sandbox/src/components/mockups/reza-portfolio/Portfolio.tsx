import { useEffect, useRef, useState } from "react";

export function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  const fadeIn = (start: number, end: number) => {
    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    return { opacity: progress, transform: `translateY(${(1 - progress) * 40}px)`, transition: "opacity 0.4s ease, transform 0.4s ease" };
  };

  const fadeOut = (start: number, end: number) => {
    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    return { opacity: 1 - progress };
  };

  const navOpacity = Math.min(scrollY / 100, 1);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll overflow-x-hidden bg-[#050508] text-white"
      style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
        style={{
          background: `rgba(5,5,8,${navOpacity * 0.85})`,
          backdropFilter: navOpacity > 0.1 ? "blur(24px)" : "none",
          WebkitBackdropFilter: navOpacity > 0.1 ? "blur(24px)" : "none",
          borderBottom: navOpacity > 0.5 ? "1px solid rgba(255,255,255,0.07)" : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <span className="text-base font-semibold tracking-tight">Reza Achmad Naufal</span>
        <div className="flex gap-8 text-sm text-white/50">
          {["Experience", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse" />
          <span className="text-white/40">Open to Remote &amp; International</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax background orbs */}
        <div className="absolute inset-0 pointer-events-none" style={parallax(0.25)}>
          <div className="absolute top-[20%] left-[20%] w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(100px)" }} />
          <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(90px)" }} />
          <div className="absolute bottom-[20%] left-[40%] w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(80px)" }} />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            ...parallax(0.04),
          }} />

        {/* Hero content */}
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto" style={fadeOut(200, 600)}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-medium tracking-wide"
            style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)", color: "#93c5fd" }}
          >
            Senior Backend &amp; Systems Architect
          </div>

          <h1
            className="font-bold tracking-tight leading-none mb-6"
            style={{
              fontSize: "clamp(56px, 9vw, 110px)",
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 45%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              ...parallax(-0.05),
            }}
          >
            Reza Achmad
            <br />
            Naufal
          </h1>

          <p className="text-white/45 text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={parallax(-0.03)}>
            Building scalable, production-grade backend platforms that power global businesses.
            Expert in distributed systems, cloud architecture, and delivering measurable business value.
          </p>

          <div className="flex items-center justify-center gap-4" style={parallax(-0.02)}>
            <a
              href="https://www.linkedin.com/in/rezaachmadnaufal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)", boxShadow: "0 0 40px rgba(37,99,235,0.35)" }}
            >
              View LinkedIn
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="mailto:reza.achmad.naufal@gmail.com"
              className="px-8 py-4 rounded-full font-semibold text-sm border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - scrollY / 150) }}>
          <span className="text-xs text-white/25 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-6 border-y border-white/8 overflow-hidden" style={{ background: "rgba(255,255,255,0.015)" }}>
        <div className="flex gap-14 whitespace-nowrap text-white/25 text-xs font-medium tracking-widest uppercase"
          style={{ animation: "marquee 22s linear infinite" }}>
          {Array(3).fill(null).flatMap((_, i) => [
            <span key={`njs-${i}`}>Node.js</span>,
            <span key={`s1-${i}`} className="text-blue-500">✦</span>,
            <span key={`nest-${i}`}>NestJS</span>,
            <span key={`s2-${i}`} className="text-blue-500">✦</span>,
            <span key={`ms-${i}`}>Microservices</span>,
            <span key={`s3-${i}`} className="text-blue-500">✦</span>,
            <span key={`pg-${i}`}>PostgreSQL</span>,
            <span key={`s4-${i}`} className="text-blue-500">✦</span>,
            <span key={`redis-${i}`}>Redis</span>,
            <span key={`s5-${i}`} className="text-blue-500">✦</span>,
            <span key={`es-${i}`}>Elasticsearch</span>,
            <span key={`s6-${i}`} className="text-blue-500">✦</span>,
            <span key={`aws-${i}`}>AWS</span>,
            <span key={`s7-${i}`} className="text-blue-500">✦</span>,
            <span key={`docker-${i}`}>Docker</span>,
            <span key={`s8-${i}`} className="text-blue-500">✦</span>,
            <span key={`kong-${i}`}>Kong</span>,
            <span key={`s9-${i}`} className="text-blue-500">✦</span>,
            <span key={`cicd-${i}`}>CI/CD</span>,
            <span key={`s10-${i}`} className="text-blue-500">✦</span>,
            <span key={`prisma-${i}`}>Prisma</span>,
            <span key={`s11-${i}`} className="text-blue-500">✦</span>,
            <span key={`ts-${i}`}>TypeScript</span>,
            <span key={`s12-${i}`} className="text-blue-500">✦</span>,
            <span key={`nx-${i}`}>NX Monorepo</span>,
            <span key={`s13-${i}`} className="text-blue-500">✦</span>,
          ])}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="mb-16" style={fadeIn(400, 680)}>
          <span className="text-xs text-blue-400 tracking-widest uppercase font-medium">Project Highlights</span>
          <h2 className="text-5xl font-bold mt-3 tracking-tight">Systems that scale</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "Order Flow Optimizer",
              year: "2025",
              desc: "Automated legacy manufacturing order systems. Reduced process time by 34% and improved accuracy.",
              stack: ["Node.js", "PostgreSQL", "AWS"],
              metric: "34% faster",
              metricLabel: "process time",
              gradient: "linear-gradient(135deg, #0f1a2e 0%, #0a2040 50%, #061430 100%)",
              accent: "#60a5fa",
              icon: "⬡",
            },
            {
              title: "Realtime API Gateway",
              year: "2024",
              desc: "Scalable, high-throughput API gateway on Docker, Kong & Redis. Enabled 100k+ concurrent connections with 99.99% uptime.",
              stack: ["Microservices", "Docker", "Kong", "Redis"],
              metric: "99.99%",
              metricLabel: "uptime",
              gradient: "linear-gradient(135deg, #071a1a 0%, #062020 50%, #042818 100%)",
              accent: "#34d399",
              icon: "◈",
            },
            {
              title: "Payment Integration",
              year: "2023",
              desc: "Stripe & Braintree integration for e-commerce. Secured $2.5M+ in transactions with zero payment failures.",
              stack: ["TypeScript", "Prisma", "Stripe", "Braintree"],
              metric: "$2.5M+",
              metricLabel: "transactions secured",
              gradient: "linear-gradient(135deg, #1a1000 0%, #251800 50%, #1a1200 100%)",
              accent: "#fbbf24",
              icon: "◉",
            },
            {
              title: "Monitoring Dashboards",
              year: "2023",
              desc: "End-to-end observability dashboards with real-time incident tracking. Reduced triage time by 40%.",
              stack: ["React", "NestJS", "GraphQL"],
              metric: "40% faster",
              metricLabel: "incident triage",
              gradient: "linear-gradient(135deg, #120a2e 0%, #1a0f3d 50%, #100828 100%)",
              accent: "#a78bfa",
              icon: "▣",
            },
          ].map((proj, i) => {
            const progress = Math.min(Math.max((scrollY - (480 + i * 70)) / 280, 0), 1);
            return (
              <div
                key={proj.title}
                className="group relative rounded-3xl overflow-hidden cursor-default"
                style={{
                  height: i % 2 === 0 ? "460px" : "380px",
                  background: proj.gradient,
                  border: "1px solid rgba(255,255,255,0.05)",
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 50}px)`,
                  transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s",
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${proj.accent}08, transparent)` }} />

                {/* Decorative floating orb */}
                <div className="absolute top-8 right-8 opacity-25 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                  style={{
                    width: "180px", height: "180px",
                    background: `radial-gradient(circle, ${proj.accent}, transparent 70%)`,
                    filter: "blur(30px)",
                    transform: `translateY(${-scrollY * 0.025 * (i % 2 === 0 ? 1 : -1)}px)`,
                  }} />

                {/* Year badge */}
                <div className="absolute top-8 left-8">
                  <span className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ background: `${proj.accent}18`, color: proj.accent, border: `1px solid ${proj.accent}30` }}>
                    {proj.year}
                  </span>
                </div>

                {/* Metric highlight */}
                <div className="absolute top-8 right-8 text-right">
                  <div className="text-3xl font-bold" style={{ color: proj.accent }}>{proj.metric}</div>
                  <div className="text-xs text-white/30 mt-0.5">{proj.metricLabel}</div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
                  <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{proj.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {proj.stack.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md font-mono"
                        style={{ background: `${proj.accent}14`, color: proj.accent, border: `1px solid ${proj.accent}25` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section
        id="experience"
        className="relative py-36 px-10 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #050508 0%, #07091a 50%, #050508 100%)" }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: `translate(-50%, -50%) translateY(${(scrollY - 1500) * 0.12}px)`,
          }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16" style={fadeIn(1350, 1580)}>
            <span className="text-xs text-blue-400 tracking-widest uppercase font-medium">Career</span>
            <h2 className="text-5xl font-bold mt-3 tracking-tight">Experience</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/8" />

            <div className="space-y-12">
              {[
                {
                  period: "2023 – Present",
                  role: "L3 Developer / Senior Backend-Focused Full Stack Engineer",
                  company: "PT DAnS Multi Pro",
                  color: "#60a5fa",
                  bullets: [
                    "Led major incident response — reduced downtime by 97% and improved SLA compliance.",
                    "Owned architecture overhaul and enforced reliability for distributed systems.",
                    "Automated CI/CD pipelines, accelerating deployments by 60% across product lines.",
                    "Coordinated cross-team initiatives for platform scalability and resilience.",
                  ],
                },
                {
                  period: "2021 – 2023",
                  role: "Freelance Backend Developer",
                  company: "Independent",
                  color: "#34d399",
                  bullets: [
                    "Designed and shipped robust REST APIs and event-driven microservices in Node.js / NestJS.",
                    "Integrated Stripe & Braintree, processing over $2.5M in transactions securely.",
                    "Delivered low-latency, high-availability realtime products for startups.",
                  ],
                },
                {
                  period: "2019 – 2021",
                  role: "Junior Backend Developer",
                  company: "Early Career",
                  color: "#a78bfa",
                  bullets: [
                    "Built production infrastructure, optimizing SQL queries for 20% faster response.",
                    "Handled monitoring, incident triage, and on-call SRE responsibility.",
                    "Collaborated in fast-paced Agile teams, delivering features on schedule.",
                  ],
                },
              ].map((exp, i) => {
                const progress = Math.min(Math.max((scrollY - (1450 + i * 120)) / 300, 0), 1);
                return (
                  <div
                    key={exp.role}
                    className="relative pl-16"
                    style={{ opacity: progress, transform: `translateX(${(1 - progress) * -20}px)`, transition: "all 0.5s ease" }}
                  >
                    {/* dot */}
                    <div className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center -translate-x-1/2"
                      style={{ borderColor: exp.color, background: "#050508" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                    </div>

                    <div className="rounded-2xl p-8 border border-white/6 hover:border-white/12 transition-colors duration-300"
                      style={{ background: "rgba(255,255,255,0.025)" }}>
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white leading-tight">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-medium" style={{ color: exp.color }}>{exp.company}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono px-3 py-1.5 rounded-full text-white/40"
                          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20" style={fadeIn(2150, 2380)}>
          <span className="text-xs text-blue-400 tracking-widest uppercase font-medium">Technology</span>
          <h2 className="text-5xl font-bold mt-3 tracking-tight">Skills &amp; Stack</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {[
            {
              category: "Backend",
              skills: ["Node.js", "NestJS", "Microservices", "NX Monorepo", "REST APIs", "Event-Driven Architecture"],
              color: "#60a5fa",
              icon: "⬡",
            },
            {
              category: "Data &amp; Storage",
              skills: ["PostgreSQL", "Redis", "Elasticsearch", "Prisma ORM"],
              color: "#34d399",
              icon: "◈",
            },
            {
              category: "Cloud &amp; DevOps",
              skills: ["AWS", "Docker", "Kong API Gateway", "CI/CD Pipelines"],
              color: "#06b6d4",
              icon: "◉",
            },
            {
              category: "Engineering Practices",
              skills: ["Incident Handling", "Performance Tuning", "Secure APIs", "Peer Mentoring", "SRE / On-call"],
              color: "#a78bfa",
              icon: "▣",
            },
          ].map((group, i) => {
            const progress = Math.min(Math.max((scrollY - (2250 + i * 60)) / 280, 0), 1);
            return (
              <div
                key={group.category}
                className="rounded-2xl p-8 border border-white/7 hover:border-white/14 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 30}px)`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${group.color}15`, color: group.color }}>
                    {group.icon}
                  </div>
                  <h3 className="font-semibold text-white" dangerouslySetInnerHTML={{ __html: group.category }} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1.5 rounded-lg font-mono"
                      style={{ background: `${group.color}10`, color: group.color, border: `1px solid ${group.color}20` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft skills row */}
        <div className="rounded-2xl p-8 border border-white/7" style={{ background: "rgba(255,255,255,0.02)", ...fadeIn(2500, 2700) }}>
          <h4 className="text-xs text-white/30 tracking-widest uppercase font-medium mb-5">Leadership &amp; Soft Skills</h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Cross-team Collaboration", "Technical Leadership", "Agile / Scrum", "Incident Management",
              "System Design", "Code Review", "Mentoring Junior Devs", "Strategic Thinking",
            ].map((s) => (
              <span key={s} className="text-sm px-4 py-2 rounded-full text-white/50 border border-white/10 hover:border-white/25 hover:text-white/70 transition-all duration-200 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="relative py-28 px-10 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #050508 0%, #06091c 50%, #050508 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 1000px 400px at 50% 50%, rgba(37,99,235,0.08), transparent)",
            transform: `translateY(${(scrollY - 2800) * 0.08}px)`,
          }} />
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 relative z-10">
          {[
            { value: "97%", label: "Downtime Reduction", color: "#60a5fa" },
            { value: "60%", label: "Faster Deployments", color: "#34d399" },
            { value: "$2.5M+", label: "Transactions Secured", color: "#fbbf24" },
            { value: "40%", label: "Faster Incident Triage", color: "#a78bfa" },
          ].map((stat, i) => {
            const progress = Math.min(Math.max((scrollY - (2850 + i * 60)) / 260, 0), 1);
            return (
              <div key={stat.label} className="text-center rounded-2xl p-8 border border-white/6"
                style={{ background: "rgba(255,255,255,0.025)", opacity: progress, transform: `translateY(${(1 - progress) * 24}px)` }}>
                <div className="text-4xl font-bold mb-2 tracking-tight"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, white)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                  {stat.value}
                </div>
                <div className="text-white/35 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative py-44 px-10 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)",
            filter: "blur(90px)",
            transform: `translate(-50%, -50%) translateY(${(scrollY - 3300) * 0.1}px)`,
          }} />

        <div className="relative z-10 max-w-3xl" style={fadeIn(3200, 3450)}>
          <span className="text-xs text-blue-400 tracking-widest uppercase font-medium">Let's Connect</span>
          <h2 className="font-bold tracking-tight my-6 leading-tight"
            style={{
              fontSize: "clamp(44px, 6vw, 76px)",
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.65) 55%, #60a5fa 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
            Have a project in mind?
          </h2>
          <p className="text-white/45 text-lg mb-4 leading-relaxed">
            For senior backend roles, consulting, or collaboration.
            Open to remote and international opportunities. Response within 24h.
          </p>
          <p className="text-white/25 text-sm mb-10">
            reza.achmad.naufal@gmail.com
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:reza.achmad.naufal@gmail.com"
              className="px-10 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)", boxShadow: "0 0 60px rgba(37,99,235,0.35)" }}
            >
              Send an Email
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rezaachmadnaufal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-semibold text-sm border border-white/15 text-white/65 hover:border-white/35 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/8 py-10 px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-white/25 text-sm">© 2026 Reza Achmad Naufal. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="mailto:reza.achmad.naufal@gmail.com" className="text-white/25 text-sm hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/rezaachmadnaufal/" target="_blank" rel="noopener noreferrer" className="text-white/25 text-sm hover:text-white transition-colors">LinkedIn</a>
          </div>
          <span className="text-white/15 text-sm">Senior Backend &amp; Systems Architect</span>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
