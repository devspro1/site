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
    name: "Selectel",
    url: "https://selectel.ru/?ref_code=842397bf4d",
    description: "Reliable cloud provider and datacenter operator. Optimal for high-load projects.",
    icon: ServerIcon,
    color: "indigo"
  },
  {
    name: "Reg.ru",
    url: "https://www.reg.ru/?rlink=reflink-11259125",
    description: "Largest domain registrar and hosting provider with a wide range of solutions for projects of any scale.",
    icon: GlobeAltIcon,
    color: "sky"
  },
  {
    name: "Ping-admin.com",
    url: "https://ping-admin.com/free_test/28470.html",
    description: "Website and server uptime monitoring service from various global locations with instant notifications.",
    icon: ShieldCheckIcon,
    color: "emerald"
  },
  {
    name: "Aeza.net",
    url: "https://aeza.net/?ref=468871",
    description: "High-performance cloud servers with powerful hardware (NVMe) and built-in Anti-DDoS protection.",
    icon: CloudIcon,
    color: "purple"
  },
  {
    name: "Railway.app",
    url: "https://railway.com?referralCode=eHXkgH",
    description: "Modern platform for rapid deployment of web applications, databases, and microservices.",
    icon: ServerIcon,
    color: "rose"
  },
  {
    name: "HostKey.com",
    url: "https://www.hostkey.com/?a_aid=63db5be2bc84c",
    description: "Global provider of dedicated and GPU servers in Europe and the US for Big Data and AI projects.",
    icon: CpuChipIcon,
    color: "orange"
  },
  {
    name: "PST.net",
    url: "https://pst.net/?f=74cdb011f3fc440ecbae291d5c51e6c3",
    description: "Virtual payment cards for affiliate marketing, advertising, and digital services without limits.",
    icon: CreditCardIcon,
    color: "blue"
  },
  {
    name: "DigitalOcean",
    url: "https://www.awin1.com/cread.php?awinmid=123996&awinaffid=2843616",
    description: "Developer-friendly cloud computing platform for building, deploying, and scaling modern applications.",
    icon: CloudIcon,
    color: "sky"
  },
  {
    name: "Contabo",
    url: "https://www.anrdoezrs.net/click-101716708-13796479",
    description: "Cloud hosting provider offering German quality and global availability at a highly competitive price.",
    icon: ServerIcon,
    color: "indigo"
  }
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
          <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" className="hidden md:flex px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Discuss Project
          </a>

          {/* Mobile Menu Button */}
          <button
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
                <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-5 py-3 text-center rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                  Discuss Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden text-center z-10">
        <ParticlesBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-300 mb-8 shadow-inner shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            Infrastructure & Operations
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            We work with industry professionals to create <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500 drop-shadow-lg">reliable services</span>.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Physical server suppliers, bare metal and virtual servers, datacenters and cloud computing
          </motion.p>
        </motion.div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a] relative z-10 flex-1">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10 flex justify-center"
          >
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-zinc-400 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              We earn commissions when you shop through the links below
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {partners.map((partner, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                  <SpotlightCard className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-${partner.color}-500/30 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg h-full flex flex-col`}>
                    <div className="flex justify-between items-start mb-6 w-full relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-${partner.color}-500/20 group-hover:scale-110 transition-all duration-300`}>
                        <partner.icon className={`w-6 h-6 text-${partner.color}-400 drop-shadow-[0_0_8px_rgba(currentColor,0.5)]`} />
                      </div>
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10 flex items-center gap-2">
                       {partner.name}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed relative z-10 text-sm mt-auto">
                        {partner.description}
                    </p>
                  </SpotlightCard>
                </a>
              </motion.div>
            ))}
          </motion.div>
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
