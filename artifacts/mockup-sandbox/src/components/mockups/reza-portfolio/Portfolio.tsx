import { useEffect, useRef, useState } from "react";

export function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
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
    return { opacity: progress, transform: `translateY(${(1 - progress) * 40}px)` };
  };

  const fadeOut = (start: number, end: number) => {
    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    return { opacity: 1 - progress };
  };

  const scaleIn = (start: number, end: number) => {
    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    const scale = 0.85 + 0.15 * progress;
    return {
      opacity: progress,
      transform: `scale(${scale})`,
    };
  };

  const navOpacity = Math.min(scrollY / 100, 1);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll overflow-x-hidden bg-black text-white"
      style={{ scrollBehavior: "smooth", fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 transition-all duration-300"
        style={{
          background: `rgba(0,0,0,${navOpacity * 0.75})`,
          backdropFilter: navOpacity > 0.1 ? "blur(20px)" : "none",
          WebkitBackdropFilter: navOpacity > 0.1 ? "blur(20px)" : "none",
          borderBottom: navOpacity > 0.5 ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <span className="text-lg font-semibold tracking-tight">Reza Achmad</span>
        <div className="flex gap-8 text-sm text-white/60">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <span className="text-sm text-white/40">Available for work</span>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* bg gradient orbs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={parallax(0.3)}
        >
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
              filter: "blur(80px)",
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)`,
            }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
              filter: "blur(100px)",
              transform: `translate(50%, -50%) translateY(${scrollY * 0.15}px)`,
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
              filter: "blur(80px)",
              transform: `translate(-50%, 50%) translateY(${scrollY * -0.1}px)`,
            }}
          />
        </div>

        {/* grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            ...parallax(0.05),
          }}
        />

        <div
          className="relative z-10 text-center px-8 max-w-6xl mx-auto"
          style={{ ...fadeOut(200, 600) }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.35)",
              color: "#a78bfa",
            }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse" />
            Available for Freelance
          </div>

          <h1
            className="font-bold tracking-tight leading-none mb-6"
            style={{
              fontSize: "clamp(64px, 10vw, 120px)",
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              ...parallax(-0.06),
            }}
          >
            Digital
            <br />
            Designer &amp;
            <br />
            Creative
          </h1>

          <p
            className="text-white/50 text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            style={parallax(-0.04)}
          >
            Crafting immersive digital experiences that blend strategy, motion,
            and pixel-perfect design.
          </p>

          <div className="flex items-center justify-center gap-4" style={parallax(-0.03)}>
            <button
              className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 40px rgba(99,102,241,0.4)",
              }}
            >
              See My Work
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold text-sm border border-white/20 text-white/80 hover:border-white/50 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: Math.max(0, 1 - scrollY / 150) }}
        >
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-8 border-y border-white/10 overflow-hidden bg-black">
        <div
          className="flex gap-16 whitespace-nowrap text-white/20 text-sm font-medium tracking-widest uppercase"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {Array(4).fill(null).flatMap((_, i) => [
            <span key={`ui-${i}`}>UI Design</span>,
            <span key={`s1-${i}`} className="text-indigo-500">✦</span>,
            <span key={`ux-${i}`}>UX Strategy</span>,
            <span key={`s2-${i}`} className="text-indigo-500">✦</span>,
            <span key={`br-${i}`}>Branding</span>,
            <span key={`s3-${i}`} className="text-indigo-500">✦</span>,
            <span key={`mo-${i}`}>Motion Design</span>,
            <span key={`s4-${i}`} className="text-indigo-500">✦</span>,
            <span key={`fr-${i}`}>Framer</span>,
            <span key={`s5-${i}`} className="text-indigo-500">✦</span>,
            <span key={`fi-${i}`}>Figma</span>,
            <span key={`s6-${i}`} className="text-indigo-500">✦</span>,
            <span key={`wp-${i}`}>Webflow</span>,
            <span key={`s7-${i}`} className="text-indigo-500">✦</span>,
          ])}
        </div>
      </section>

      {/* ── WORK GRID ── */}
      <section id="work" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="mb-16" style={fadeIn(400, 700)}>
          <span className="text-xs text-indigo-400 tracking-widest uppercase font-medium">Selected Work</span>
          <h2 className="text-5xl font-bold mt-3 tracking-tight">Projects that matter</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "Luminara Finance",
              subtitle: "Mobile Banking App",
              tag: "UI/UX · 2024",
              gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              accent: "#60a5fa",
              shape: "circle",
            },
            {
              title: "Oasis Health",
              subtitle: "Wellness Platform",
              tag: "Branding · 2024",
              gradient: "linear-gradient(135deg, #0d1117 0%, #1a2a1a 50%, #0d2818 100%)",
              accent: "#4ade80",
              shape: "pill",
            },
            {
              title: "Prism Studio",
              subtitle: "Creative Agency Site",
              tag: "Web Design · 2023",
              gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #1a0a2e 100%)",
              accent: "#c084fc",
              shape: "square",
            },
            {
              title: "Veloce Dashboard",
              subtitle: "SaaS Analytics Platform",
              tag: "Product Design · 2023",
              gradient: "linear-gradient(135deg, #1a1a00 0%, #2a2000 50%, #1a1200 100%)",
              accent: "#fbbf24",
              shape: "triangle",
            },
          ].map((proj, i) => {
            const delay = i * 80;
            const progress = Math.min(Math.max((scrollY - (500 + delay)) / 300, 0), 1);
            return (
              <div
                key={proj.title}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  height: i % 2 === 0 ? "480px" : "360px",
                  background: proj.gradient,
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 50}px)`,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(99, 102, 241, 0.08)" }}
                />

                {/* decorative shape */}
                <div
                  className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    width: "160px",
                    height: "160px",
                    background: `radial-gradient(circle, ${proj.accent}, transparent 70%)`,
                    borderRadius: proj.shape === "circle" ? "50%" : proj.shape === "pill" ? "100px" : "24px",
                    filter: "blur(20px)",
                    transform: `translateY(${-scrollY * 0.03 * (i % 2 === 0 ? 1 : -1)}px)`,
                  }}
                />

                {/* mock UI lines */}
                <div className="absolute top-14 right-12 flex flex-col gap-2 opacity-10">
                  {[100, 70, 85, 55, 90].map((w, j) => (
                    <div key={j} className="h-2 rounded-full bg-white" style={{ width: `${w}px` }} />
                  ))}
                </div>

                {/* content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: `${proj.accent}20`, color: proj.accent, border: `1px solid ${proj.accent}40` }}
                    >
                      {proj.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-white/50 text-sm">{proj.subtitle}</p>

                  <div
                    className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0"
                    style={{ color: proj.accent }}
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT / STATS ── */}
      <section
        id="about"
        className="relative py-40 px-10 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #000 0%, #0a0a1a 50%, #000 100%)" }}
      >
        {/* large blurred orb */}
        <div
          className="absolute left-1/2 top-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: `translate(-50%, -50%) translateY(${(scrollY - 1400) * 0.15}px)`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 gap-24 items-center">
          <div style={fadeIn(1400, 1700)}>
            <span className="text-xs text-indigo-400 tracking-widest uppercase font-medium">About</span>
            <h2 className="text-5xl font-bold mt-3 mb-6 tracking-tight leading-tight">
              Turning ideas into
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digital experiences
              </span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6 text-lg">
              I'm Reza Achmad, a multidisciplinary digital designer based in Indonesia. I specialize in crafting
              UI/UX designs, brand identities, and interactive web experiences that connect with people.
            </p>
            <p className="text-white/40 leading-relaxed mb-10">
              With a deep passion for clean aesthetics and thoughtful interaction design, I work with startups
              and agencies to bring ambitious visions to life — from first wireframe to polished pixel.
            </p>
            <div className="flex gap-4">
              <button
                className="px-6 py-3 rounded-full text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Download CV
              </button>
              <button className="px-6 py-3 rounded-full text-sm font-semibold border border-white/20 text-white/70 hover:border-white/40 transition-colors">
                My Story
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5" style={fadeIn(1500, 1800)}>
            {[
              { value: "4+", label: "Years Experience", color: "#6366f1" },
              { value: "60+", label: "Projects Done", color: "#8b5cf6" },
              { value: "30+", label: "Happy Clients", color: "#06b6d4" },
              { value: "15+", label: "Design Awards", color: "#a78bfa" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-8 border border-white/8 hover:border-white/20 transition-all duration-300 group"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="text-5xl font-bold mb-2 tracking-tight"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, white)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20" style={fadeIn(1900, 2100)}>
          <span className="text-xs text-indigo-400 tracking-widest uppercase font-medium">What I Do</span>
          <h2 className="text-5xl font-bold mt-3 tracking-tight">Services</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {[
            {
              icon: "✦",
              title: "UI/UX Design",
              desc: "Human-centered design that turns complex flows into intuitive, delightful experiences.",
              tools: ["Figma", "Principle", "Maze"],
              color: "#6366f1",
            },
            {
              icon: "◈",
              title: "Brand Identity",
              desc: "Visual systems that give brands a distinctive presence — from logo to design language.",
              tools: ["Illustrator", "Figma", "Photoshop"],
              color: "#8b5cf6",
            },
            {
              icon: "⬡",
              title: "Web Design",
              desc: "Pixel-perfect web experiences built with Framer and Webflow for maximum impact.",
              tools: ["Framer", "Webflow", "React"],
              color: "#06b6d4",
            },
            {
              icon: "◉",
              title: "Motion Design",
              desc: "Purposeful animation that adds depth and life to digital interfaces.",
              tools: ["After Effects", "Lottie", "GSAP"],
              color: "#a78bfa",
            },
            {
              icon: "▣",
              title: "Design Systems",
              desc: "Scalable component libraries that keep teams moving fast and consistent.",
              tools: ["Figma", "Storybook", "Tokens"],
              color: "#34d399",
            },
            {
              icon: "◬",
              title: "Prototyping",
              desc: "High-fidelity interactive prototypes that feel like the real thing.",
              tools: ["Figma", "Framer", "ProtoPie"],
              color: "#fbbf24",
            },
          ].map((service, i) => {
            const progress = Math.min(Math.max((scrollY - (2000 + i * 50)) / 250, 0), 1);
            return (
              <div
                key={service.title}
                className="rounded-2xl p-7 border border-white/8 hover:border-white/20 group cursor-pointer transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  opacity: progress,
                  transform: `translateY(${(1 - progress) * 30}px)`,
                }}
              >
                <div
                  className="text-3xl mb-5 w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: `${service.color}18`, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-md"
                      style={{ background: `${service.color}12`, color: service.color, border: `1px solid ${service.color}25` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-32 overflow-hidden relative"
        style={{ background: "linear-gradient(180deg, #000 0%, #080812 50%, #000 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 800px 500px at 50% 50%, rgba(99,102,241,0.15), transparent)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-center mb-16" style={fadeIn(2600, 2850)}>
            <span className="text-xs text-indigo-400 tracking-widest uppercase font-medium">Testimonials</span>
            <h2 className="text-5xl font-bold mt-3 tracking-tight">What clients say</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                quote: "Reza transformed our product vision into something far beyond what we imagined. The attention to detail is unmatched.",
                author: "Sarah Chen",
                role: "CEO, Luminara",
                avatar: "SC",
                color: "#6366f1",
              },
              {
                quote: "Working with Reza felt like having a design partner who truly understood our brand. Every decision felt intentional.",
                author: "Marcus Williams",
                role: "Founder, Oasis Health",
                avatar: "MW",
                color: "#8b5cf6",
              },
              {
                quote: "The design system Reza built cut our development time in half. It's elegant, scalable, and the team loves it.",
                author: "Anya Patel",
                role: "Head of Product, Veloce",
                avatar: "AP",
                color: "#06b6d4",
              },
            ].map((t, i) => {
              const progress = Math.min(Math.max((scrollY - (2700 + i * 60)) / 300, 0), 1);
              return (
                <div
                  key={t.author}
                  className="rounded-2xl p-8 border border-white/8"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    opacity: progress,
                    transform: `translateY(${(1 - progress) * 30}px)`,
                  }}
                >
                  <div className="flex mb-5">
                    {Array(5).fill(null).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.author}</div>
                      <div className="text-xs text-white/40">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="relative py-40 px-10 flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* bg orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)",
            filter: "blur(80px)",
            transform: `translate(-50%, -50%) translateY(${(scrollY - 3200) * 0.1}px)`,
          }}
        />

        <div className="relative z-10 max-w-3xl" style={fadeIn(3100, 3350)}>
          <span className="text-xs text-indigo-400 tracking-widest uppercase font-medium">Let's Work Together</span>
          <h2
            className="font-bold tracking-tight my-6 leading-tight"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 60%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Have a project in mind?
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities. Whether it's a product, a brand, or a website —
            let's create something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:reza@example.com"
              className="px-10 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 60px rgba(99,102,241,0.35)",
              }}
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-white/30 text-sm">or reach me at rezaachmad@gmail.com</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-10 px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-white/30 text-sm">© 2024 Reza Achmad. All rights reserved.</span>
          <div className="flex gap-6">
            {["Twitter", "Dribbble", "Behance", "LinkedIn"].map((link) => (
              <a key={link} href="#" className="text-white/30 text-sm hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
          <span className="text-white/30 text-sm">Designed with passion</span>
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
