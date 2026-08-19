'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { SpotlightCard } from '@/components/SpotlightCard';
import {
  ServerIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  CreditCardIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const partners = [
  {
    name: "DigitalOcean",
    url: "https://www.awin1.com/cread.php?awinmid=123996&awinaffid=2843616",
    description: "Developer-friendly cloud computing for building, deploying, and scaling modern applications.",
    bestFor: "Startups, APIs, managed databases",
    icon: CloudIcon,
    category: "Cloud & Compute",
    accent: "text-sky-400",
    accentBg: "group-hover:bg-sky-500/20",
    accentBorder: "hover:border-sky-500/30"
  },
  {
    name: "Railway.app",
    url: "https://railway.com?referralCode=eHXkgH",
    description: "A modern platform for rapid deployment of web applications, databases, and microservices.",
    bestFor: "Fast product launches and previews",
    icon: ServerIcon,
    category: "Cloud & Compute",
    accent: "text-rose-400",
    accentBg: "group-hover:bg-rose-500/20",
    accentBorder: "hover:border-rose-500/30"
  },
  {
    name: "HostKey.com",
    url: "https://www.hostkey.com/?a_aid=63db5be2bc84c",
    description: "Dedicated and GPU servers in Europe and the US for data-intensive and AI workloads.",
    bestFor: "GPU, AI, and dedicated workloads",
    icon: CpuChipIcon,
    category: "Cloud & Compute",
    accent: "text-orange-400",
    accentBg: "group-hover:bg-orange-500/20",
    accentBorder: "hover:border-orange-500/30"
  },
  {
    name: "Contabo",
    url: "https://www.anrdoezrs.net/click-101716708-13796479",
    description: "Cloud hosting with global availability and a strong price-to-resource ratio.",
    bestFor: "Cost-sensitive persistent workloads",
    icon: ServerIcon,
    category: "Cloud & Compute",
    accent: "text-indigo-400",
    accentBg: "group-hover:bg-indigo-500/20",
    accentBorder: "hover:border-indigo-500/30"
  },
  {
    name: "Selectel",
    url: "https://selectel.ru/?ref_code=842397bf4d",
    description: "Cloud and datacenter infrastructure suited to high-load projects.",
    bestFor: "Regional cloud and bare metal",
    icon: ServerIcon,
    category: "Cloud & Compute",
    accent: "text-indigo-400",
    accentBg: "group-hover:bg-indigo-500/20",
    accentBorder: "hover:border-indigo-500/30"
  },
  {
    name: "Aeza.net",
    url: "https://aeza.net/?ref=468871",
    description: "High-performance cloud servers with NVMe storage and built-in Anti-DDoS protection.",
    bestFor: "Compute-heavy regional workloads",
    icon: CloudIcon,
    category: "Cloud & Compute",
    accent: "text-purple-400",
    accentBg: "group-hover:bg-purple-500/20",
    accentBorder: "hover:border-purple-500/30"
  },
  {
    name: "Ping-admin.com",
    url: "https://ping-admin.com/free_test/28470.html",
    description: "Website and server uptime monitoring from global locations with instant notifications.",
    bestFor: "External uptime and latency checks",
    icon: ShieldCheckIcon,
    category: "Operations & Business Tools",
    accent: "text-emerald-400",
    accentBg: "group-hover:bg-emerald-500/20",
    accentBorder: "hover:border-emerald-500/30"
  },
  {
    name: "Reg.ru",
    url: "https://www.reg.ru/?rlink=reflink-11259125",
    description: "Domain registration and hosting services for digital products of different sizes.",
    bestFor: "Domains and regional hosting",
    icon: GlobeAltIcon,
    category: "Operations & Business Tools",
    accent: "text-sky-400",
    accentBg: "group-hover:bg-sky-500/20",
    accentBorder: "hover:border-sky-500/30"
  },
  {
    name: "PST.net",
    url: "https://pst.net/?f=74cdb011f3fc440ecbae291d5c51e6c3",
    description: "Virtual payment cards for advertising and digital service expenses.",
    bestFor: "Managing distributed digital spend",
    icon: CreditCardIcon,
    category: "Operations & Business Tools",
    accent: "text-blue-400",
    accentBg: "group-hover:bg-blue-500/20",
    accentBorder: "hover:border-blue-500/30"
  }
];

const partnerGroups = ["Cloud & Compute", "Operations & Business Tools"];

const referralChannels = [
  {
    title: "Architecture decisions",
    description: "We evaluate infrastructure during audits and recommend providers based on workload, compliance, geography, and cost.",
    icon: ChartBarIcon,
  },
  {
    title: "Migration & deployment",
    description: "We turn recommendations into production systems, from containerized workloads to bare metal and GPU compute.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Technical proof",
    description: "We support partners with implementation notes, comparisons, case studies, and practical guidance for technical buyers.",
    icon: DocumentTextIcon,
  },
  {
    title: "Qualified client access",
    description: "We work directly with founders, CTOs, and product teams building fintech, B2B SaaS, and AI products.",
    icon: UserGroupIcon,
  },
];

export default function Partnerships() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30 flex flex-col">

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <span className="text-white text-sm font-mono">/</span>
            </div>
            DEVS PRO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/#expertise" className="hover:text-white transition-colors">Expertise</Link>
            <Link href="/#process" className="hover:text-white transition-colors">Approach</Link>
            <span className="text-white">Partnerships</span>
          </div>
          <a href="mailto:hello@devs.pro?subject=Infrastructure%20partnership" className="hidden md:flex px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Discuss Partnership
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0a0a0a]"
            >
              <div className="px-6 py-6 flex flex-col gap-4 text-base font-medium text-zinc-400">
                <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Services</Link>
                <Link href="/#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Expertise</Link>
                <Link href="/#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Approach</Link>
                <Link href="/partnerships" onClick={() => setIsMobileMenuOpen(false)} className="text-white transition-colors py-2">Partnerships</Link>
                <a href="mailto:hello@devs.pro?subject=Infrastructure%20partnership" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-5 py-3 text-center rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                  Discuss Partnership
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-24 px-6 relative overflow-hidden text-center z-10">
        <ParticlesBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="max-w-5xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-300 mb-8 shadow-inner shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            Cloud, GPU & Infrastructure Partnerships
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            We help startups choose, deploy, and grow on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500 drop-shadow-lg">right infrastructure</span>.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            DEVS PRO is a senior engineering bureau working with fintech, B2B SaaS, and AI products. We influence infrastructure decisions through architecture audits, migrations, implementation work, and technical guidance.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@devs.pro?subject=Infrastructure%20partnership" className="h-14 px-8 rounded-full bg-white text-black text-base font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Discuss a partnership <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="#partner-fit" className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white text-base font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto justify-center backdrop-blur-sm">
              See our partner fit
            </a>
          </div>
        </motion.div>
      </section>

      {/* Proof */}
      <section className="py-12 px-6 border-y border-white/5 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "30+", label: "products launched" },
            { value: "100k+", label: "concurrent users handled" },
            { value: "€50M+", label: "processed through platforms built" },
            { value: "€10k–€80k", label: "typical client engagement" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="mt-2 text-xs md:text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Fit */}
      <section id="partner-fit" className="py-24 px-6 bg-[#050505] relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-3xl mb-14"
          >
            <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">How we create qualified referrals</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">Technical influence, not mass traffic.</h2>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              Our recommendations happen at the point where founders and engineering teams are making real architecture and infrastructure decisions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {referralChannels.map((channel) => (
              <motion.div key={channel.title} variants={fadeInUp} className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <channel.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{channel.title}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{channel.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">Who we reach</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Technical buyers with live products</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Founders & CTOs", "Funded startups", "Fintech", "B2B SaaS", "AI products", "High-load platforms"].map((item) => (
                  <span key={item} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">What partners can expect</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Fit-first recommendations</h3>
              <ul className="mt-6 space-y-3 text-zinc-400">
                {["Senior technical evaluation", "Qualified introductions and referrals", "Implementation and migration support", "Direct product feedback from real workloads"].map((item) => (
                  <li key={item} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Recommendations */}
      <section id="recommendations" className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a] relative z-10 flex-1 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-3xl">
              <span className="text-sky-400 font-semibold tracking-wider text-sm uppercase">Current recommendations</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">Infrastructure and tools we recommend by use case.</h2>
              <p className="mt-5 text-lg text-zinc-400 leading-relaxed">We select providers according to technical fit, reliability, location, and economics—not commission.</p>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-zinc-500 leading-relaxed lg:text-right">
              Some links below are affiliate links. DEVS PRO may earn a commission at no additional cost to you.
            </p>
          </div>

          {partnerGroups.map((group) => (
            <div key={group} className="mb-16 last:mb-0">
              <h3 className="text-xl font-semibold text-white mb-6">{group}</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {partners.filter((partner) => partner.category === group).map((partner) => (
                  <motion.div key={partner.name} variants={fadeInUp}>
                    <a href={partner.url} target="_blank" rel="sponsored noopener noreferrer" className="block h-full cursor-pointer">
                      <SpotlightCard className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 ${partner.accentBorder} hover:bg-white/[0.04] transition-all duration-300 group shadow-lg h-full flex flex-col`}>
                        <div className="flex justify-between items-start mb-6 w-full relative z-10">
                          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${partner.accentBg} group-hover:scale-110 transition-all duration-300`}>
                            <partner.icon className={`w-6 h-6 ${partner.accent}`} />
                          </div>
                          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 relative z-10">{partner.name}</h4>
                        <p className="text-zinc-400 leading-relaxed relative z-10 text-sm">{partner.description}</p>
                        <p className="mt-6 pt-5 border-t border-white/5 text-xs text-zinc-500 relative z-10">
                          <span className="text-zinc-300 font-medium">Best for:</span> {partner.bestFor}
                        </p>
                      </SpotlightCard>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">Open to new partnerships</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">Let&apos;s build a partner motion around real technical fit.</h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            We are expanding our network across European cloud, bare metal, GPU compute, and developer infrastructure. Tell us where your platform is strongest and we&apos;ll explore the right client and content use cases.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@devs.pro?subject=Infrastructure%20partnership" className="h-14 px-8 rounded-full bg-white text-black text-base font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105 w-full sm:w-auto justify-center">
              hello@devs.pro <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white text-base font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto justify-center">
              Book a partner call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-20 pb-10 px-6 sm:px-12 md:px-24 w-full">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <span className="text-white text-xl font-bold font-mono leading-none">/</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-100 transition-colors">DEVS PRO</span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-medium">
              Building fintech systems that scale.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/#contact" className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors flex items-center gap-2 group">
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Get a plan in 24h
              </Link>
              <a href="mailto:hello@devs.pro" className="text-zinc-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> hello@devs.pro
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 sm:gap-24 text-center sm:text-left h-full">
            <div className="space-y-5 flex flex-col justify-between h-full">
              <h4 className="text-white font-semibold tracking-wider text-xs uppercase opacity-80">Expertise</h4>
              <ul className="space-y-3 text-sm text-zinc-500 flex-1">
                <li><Link href="/#expertise" className="hover:text-indigo-400 transition-colors">Python Backend</Link></li>
                <li><Link href="/#services" className="hover:text-indigo-400 transition-colors">AI Integrations</Link></li>
                <li><Link href="/#services" className="hover:text-indigo-400 transition-colors">FinTech Architecture</Link></li>
                <li><Link href="/#services" className="hover:text-indigo-400 transition-colors">Project Rescue</Link></li>
              </ul>
            </div>

            <div className="space-y-5 flex flex-col justify-between h-full">
              <h4 className="text-white font-semibold tracking-wider text-xs uppercase opacity-80">Connect</h4>
              <ul className="space-y-3 text-sm text-zinc-500 flex-1">
                <li>
                  <a href="mailto:hello@devs.pro" className="hover:text-indigo-400 transition-colors flex items-center justify-center sm:justify-start gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    hello@devs.pro
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center justify-center sm:justify-start gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    Book a Call
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/devspro/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center justify-center sm:justify-start gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600 max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} DEVS PRO. Software Development Bureau.</p>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
