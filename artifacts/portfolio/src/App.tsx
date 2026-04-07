import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal, 
  Activity, 
  CreditCard, 
  LayoutDashboard, 
  Menu, 
  X,
  MapPin,
  ExternalLink,
  ChevronRight,
  Database,
  Globe,
  Linkedin,
  Mail
} from "lucide-react";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Sections Data
const MARQUEE_ITEMS = [
  "Node.js", "NestJS", "Microservices", "PostgreSQL", "Redis", 
  "Elasticsearch", "AWS", "Docker", "Kong", "CI/CD", 
  "Prisma", "TypeScript", "NX Monorepo"
];

const PROJECTS = [
  {
    title: "Order Flow Optimizer",
    year: "2025",
    desc: "Automated legacy manufacturing order systems. Reduced process time by 34%.",
    stack: ["Node.js", "PostgreSQL", "AWS"],
    metric: "34% faster process time",
    icon: Terminal
  },
  {
    title: "Realtime API Gateway",
    year: "2024",
    desc: "Scalable API gateway on Docker, Kong, Redis. 100k+ concurrent connections, 99.99% uptime.",
    stack: ["Microservices", "Docker", "Kong", "Redis"],
    metric: "99.99% uptime",
    icon: Activity
  },
  {
    title: "Payment Integration",
    year: "2023",
    desc: "Stripe and Braintree integration. Secured $2.5M+ in transactions.",
    stack: ["TypeScript", "Prisma", "Stripe", "Braintree"],
    metric: "$2.5M+ transactions",
    icon: CreditCard
  },
  {
    title: "Monitoring Dashboards",
    year: "2023",
    desc: "Observability with real-time incident tracking. Reduced triage time by 40%.",
    stack: ["React", "NestJS", "GraphQL"],
    metric: "40% faster triage",
    icon: LayoutDashboard
  }
];

const EXPERIENCE = [
  {
    role: "L3 Backend Developer",
    company: "PT DAnS Multi Pro",
    period: "2023-Present",
    desc: "Architected core backend systems. Led migration to NX monorepo cutting build times 60%. Achieved 97% downtime reduction."
  },
  {
    role: "Backend Developer & Web Consultant",
    company: "Freelance",
    period: "2021-2023",
    desc: "Delivered 3 production websites. Integrated payment gateways processing $2.5M+ in transactions."
  },
  {
    role: "Junior Backend Developer",
    company: "Various",
    period: "2019-2021",
    desc: "Built REST APIs, PostgreSQL and Redis, CI/CD pipeline setup."
  }
];

const WEBSITES = [
  {
    title: "Jakarta Garden City",
    url: "jakartagardencity.com",
    desc: "Corporate site for Jakarta's largest green township. Bilingual EN/ID, property listings, virtual 360 tours, news.",
    stack: ["Next.js", "React", "Multilingual", "Virtual Tour", "CMS"],
    color: "emerald",
    image: "/jakartagardencity.png"
  },
  {
    title: "Simela Proklim",
    url: "simelaproklim.org",
    desc: "UNOPS climate resilience platform for 100 villages in South Sumatra.",
    stack: ["Next.js", "React", "UNOPS", "Climate Tech"],
    color: "cyan",
    image: "/simelaproklim.png"
  },
  {
    title: "INA Agro",
    url: "ina-agro.id",
    desc: "National agricultural commodities platform. Real-time pricing, supply chain, export/import tracking.",
    stack: ["React", "NestJS", "PostgreSQL", "Agri-tech"],
    color: "amber",
    image: "/inaagro.png"
  }
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Websites", href: "#websites" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white z-50">
          REZA.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/rezaachmadnaufal/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" 
        />
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-primary mb-8"
        >
          <MapPin size={14} /> Available for remote/international roles
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          Senior Backend <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            &amp; Systems Architect
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed"
        >
          Building scalable, production-grade backend platforms that power global businesses. Technically elite, architecting for reliability.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="mailto:reza.achmad.naufal@gmail.com" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center rounded-full font-medium transition-all group">
            Email Me <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rezaachmadnaufal/" target="_blank" rel="noopener noreferrer" className="h-14 px-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center rounded-full font-medium transition-all">
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex items-center gap-8"
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-xl font-mono text-white/40 tracking-tight uppercase">{item}</span>
            <span className="text-primary/50 text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: "97%", label: "Downtime Reduction" },
    { value: "$2.5M+", label: "Payments Secured" },
    { value: "60%", label: "Faster Deployments" },
    { value: "40%", label: "Faster Triage" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5 border-y border-white/5 py-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-primary uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Systems</h2>
          <p className="text-xl text-white/60 max-w-2xl">High-performance architectures built to process millions of requests.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute top-8 right-8 text-white/20 group-hover:text-primary transition-colors">
                <project.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-sm font-mono text-primary mb-4">{project.year}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/60 mb-6 leading-relaxed">{project.desc}</p>
              
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/5 inline-block">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Impact</div>
                <div className="font-semibold text-white">{project.metric}</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 text-white/70 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 bg-background relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-white/60 max-w-2xl">A track record of engineering leadership and delivery.</p>
        </motion.div>

        <div className="max-w-4xl">
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bottom-auto group-last:h-full">
                <div className="absolute top-2 -left-[5px] w-[11px] h-[11px] rounded-full bg-background border-2 border-primary" />
              </div>
              
              <div className="md:pl-12 flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <div className="md:w-48 shrink-0 pt-1">
                  <div className="text-sm font-mono text-primary/80">{exp.period}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-lg text-white/60 mb-4">{exp.company}</div>
                  <p className="text-white/70 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Websites() {
  return (
    <section id="websites" className="py-32 bg-[#030303] relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Websites Built</h2>
            <p className="text-xl text-white/60 max-w-2xl">End-to-end web applications delivered for enterprise clients.</p>
          </div>
          <div className="hidden md:block text-primary">
            <Globe size={48} strokeWidth={1} />
          </div>
        </motion.div>

        <div className="flex flex-col gap-16">
          {WEBSITES.map((site, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-8">
                  <a href={`https://${site.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors">
                    Visit {site.title} <ExternalLink size={16} />
                  </a>
                </div>
                <img src={site.image} alt={site.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              
              <div className="w-full lg:w-2/5">
                <a href={`https://${site.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4 font-mono">
                  {site.url} <ExternalLink size={14} />
                </a>
                <h3 className="text-3xl font-bold text-white mb-4">{site.title}</h3>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">{site.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {site.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 text-sm font-medium rounded-full bg-white/5 text-white/80 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Ready to scale?</h2>
          <p className="text-xl text-white/60 mb-12">
            Currently open to senior backend and systems architecture roles. 
            Available for remote and international opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:reza.achmad.naufal@gmail.com" className="h-16 px-10 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center rounded-full font-bold text-lg transition-all">
              reza.achmad.naufal@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rezaachmadnaufal/" target="_blank" rel="noopener noreferrer" className="h-16 px-10 bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center rounded-full font-bold text-lg transition-all">
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-sm">
          © 2025 Reza Achmad Naufal. All rights reserved.
        </div>
        <div className="text-white/40 text-sm">
          Senior Backend &amp; Systems Architect
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/rezaachmadnaufal/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:reza.achmad.naufal@gmail.com" className="text-white/40 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Projects />
        <Experience />
        <Websites />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
