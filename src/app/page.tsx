'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { SpotlightCard } from '@/components/SpotlightCard';
import {
  CpuChipIcon,
  RocketLaunchIcon,
  ServerIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
  CloudArrowUpIcon,
  CreditCardIcon,
  ChartBarIcon
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

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30">

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white text-sm font-mono">/</span>
            </div>
            DEVS PRO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#process" className="hover:text-white transition-colors">Approach</a>
            <Link href="/partnerships" className="hover:text-white transition-colors">Partnerships</Link>
          </div>
          <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" className="hidden md:flex px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Discuss Project
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
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Services</a>
                <a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Expertise</a>
                <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Approach</a>
                <Link href="/partnerships" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Partnerships</Link>
                <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-5 py-3 text-center rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                  Discuss Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <ParticlesBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 shadow-inner shadow-indigo-500/10">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            AI-assisted engineering for faster delivery
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Launch fintech products in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-lg">weeks,</span> not months.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            We help startups and B2B SaaS fix architecture, scale systems, and ship production-ready software fast.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            <span className="text-lg md:text-xl text-zinc-500 block mt-4 md:mt-0 font-medium">
              We select and design the right cloud, bare-metal, or GPU infrastructure for each workload, geography, and growth stage.
            </span>
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" className="h-14 px-8 rounded-full bg-white text-black text-base font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Get architecture audit <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="#process" className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white text-base font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto justify-center backdrop-blur-sm">
              See how we work
            </a>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-6 flex justify-center">
            <a href="#case-study" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors">
              View infrastructure case study
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Cloud & Infrastructure Section */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <span className="text-sky-400 font-semibold tracking-wider text-sm uppercase block">New Capability</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Cloud & Infrastructure
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We design cloud architectures that handle real-world load — launch spikes, payment traffic, and scaling bottlenecks.
              <br />
              We work across hyperscale cloud, European providers, bare metal, and specialized GPU infrastructure.
            </p>
            <ul className="space-y-4">
              {[
                'Cloud architecture & migration',
                'Kubernetes & containerized workloads',
                'High-load infrastructure (launch spikes, traffic bursts)',
                'Cost optimization & performance tuning'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                    <ServerIcon className="w-3 h-3 text-sky-400" />
                  </div>
                  <span className="font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://calendly.com/adel-devs/30min" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 px-6 mt-4 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-[15px] font-semibold transition-all hover:bg-sky-500/20 hover:scale-105 shadow-[0_0_15px_rgba(14,165,233,0.15)] gap-2">
              Get cloud architecture consultation <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm group">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-sky-500/30 transition-all duration-700" />
              <div className="flex gap-4 mb-8 border-b border-white/10 pb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                  <CloudArrowUpIcon className="w-7 h-7 text-sky-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold text-lg">Multi-provider infrastructure</h4>
                  <p className="text-sm text-zinc-400 font-medium">Enterprise-grade infrastructure</p>
                </div>
              </div>
              <div className="space-y-5 relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-zinc-500"><span>Traffic Volume</span><span>99.9%</span></div>
                  <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 w-[95%] shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-zinc-500"><span>Resource Scaling</span><span>Dynamic</span></div>
                  <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 w-[80%] shadow-[0_0_10px_rgba(56,189,248,0.5)] animate-pulse" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-zinc-500"><span>Cost Efficiency</span><span>Optimized</span></div>
                  <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[90%] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12">
              Trusted by fast-growing fintechs and enterprises
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full mb-16">
              {[
                { value: '€50M+', label: 'processed via fintech platforms we built' },
                { value: '30+', label: 'products successfully launched' },
                { value: '100k+', label: 'concurrent users handled under load' },
                { value: '99.99%', label: 'system uptime maintained' },
              ].map((stat, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
                  <span className="text-sm text-zinc-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['Fintech', 'B2B SaaS', 'AI Platforms', 'E-commerce', 'Adtech', 'Ticketing'].map((category, idx) => (
                <div key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                  {category}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-3 block">Ideal Profile</span>
            <h2 className="text-3xl font-bold text-white mb-4">Who we work with</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">We bring the most value to dynamic tech companies that need to move fast without breaking things.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { title: 'B2B SaaS startups', icon: CloudArrowUpIcon, color: 'indigo' },
              { title: 'Fintech companies', icon: CreditCardIcon, color: 'purple' },
              { title: 'High-growth tech products', icon: RocketLaunchIcon, color: 'sky' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col items-start gap-4 hover:border-${item.color}-500/30 hover:bg-white/[0.02] transition-colors shadow-lg`}>
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center border border-${item.color}-500/20`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 block">Core Services</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">We specialize in solving complex engineering challenges for fast-moving companies.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: RocketLaunchIcon,
                color: "indigo",
                title: "Revenue-generating products launched in weeks",
                desc: "From zero to MVP and beyond. We take full ownership of your product development, allowing you to focus on business growth and user acquisition."
              },
              {
                icon: ShieldCheckIcon,
                color: "purple",
                title: "Stabilizing crashing architectures to handle massive scale",
                desc: "Inherited a failing codebase? System crashing under load? We audit, stabilize, and rebuild architectures to handle massive scale safely."
              },
              {
                icon: ServerIcon,
                color: "blue",
                title: "Fintech architecture that survives scale & PSP limits",
                desc: "Designing resilient, microservices-based or modular monolithic architectures specifically tailored for transactional business and FinTech."
              },
              {
                icon: CpuChipIcon,
                color: "emerald",
                title: "LLM features that drive real product value (not demos)",
                desc: "Implementing LLMs and machine learning pipelines into your B2B SaaS to create unfair advantages against your competitors."
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <SpotlightCard className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-${service.color}-500/30 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg h-full`}>
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-${service.color}-500/20 group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-400 drop-shadow-[0_0_8px_rgba(currentColor,0.5)]`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed relative z-10">{service.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-32 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24 text-center"
          >
            <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Proven Results</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Scaling Ticketing Platform to €500k+/month</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              How we designed a distributed architecture to support high-load ticket sales spikes without breaking a sweat.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                    <CodeBracketIcon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Context & Stack</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm mb-2">
                      <strong className="text-indigo-400 font-semibold tracking-wide uppercase text-xs mr-2">Client:</strong>
                      High-growth ticketing platform
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      <strong className="text-indigo-400 font-semibold tracking-wide uppercase text-xs mr-2">Stack:</strong>
                      GCP / Kubernetes / PostgreSQL / MongoDB / Kafka
                    </p>
                  </div>
                </motion.div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                    <XMarkIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">The Problem</h4>
                    <p className="text-zinc-400 leading-relaxed">System failing at peak events, frequent timeouts during sudden ticket drops, and slow transaction processing causing customer churn and lost revenue.</p>
                  </div>
                </motion.div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">The Solution</h4>
                    <p className="text-zinc-400 leading-relaxed">Re-architected the core pipeline using a distributed architecture, leveraging Kubernetes for auto-scaling and Kafka for robust asynchronous processing.</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-[#111] border border-white/5 rounded-2xl p-8 shadow-inner">
                <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" />
                  Results Delivered
                </h4>
                <ul className="space-y-6">
                  {[
                    { metric: 'Designed distributed architecture', icon: ServerIcon, color: 'blue' },
                    { metric: 'Supported high-load ticket sales spikes', icon: RocketLaunchIcon, color: 'purple' },
                    { metric: 'Reduced infrastructure costs by 30%', icon: CpuChipIcon, color: 'emerald' },
                    { metric: 'Implemented real-time analytics', icon: ChartBarIcon, color: 'sky' },
                  ].map((item, idx) => (
                    <motion.li key={idx} variants={fadeInUp} className="flex items-center gap-4 text-zinc-300 font-medium text-lg group">
                      <div className={`w-10 h-10 rounded-xl bg-${item.color}-500/10 flex items-center justify-center shrink-0 border border-${item.color}-500/20 group-hover:bg-${item.color}-500/20 transition-colors`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      <span className="flex-1">{item.metric}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise / The "Python" spin */}
      <section id="expertise" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Deep Specialization.<br />
              <span className="text-zinc-500">Zero Distractions.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-zinc-400 mb-8 leading-relaxed">
              We don't chase every new framework. We are elite specialists in the <strong className="text-white font-medium">Python ecosystem</strong>. For FinTech, Data-heavy B2B SaaS, and AI platforms, Python is the undisputed king. We leverage it to build secure, robust backends at unprecedented speeds.
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {[
                'High-performance APIs (FastAPI, Django)',
                'Secure transactional architectures for FinTech',
                'AI-driven code generation for rapid MVP delivery',
                'Scalable infrastructure & Data Engineering'
              ].map((item, i) => (
                <motion.li variants={fadeInUp} key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                    <CodeBracketIcon className="w-3 h-3 text-indigo-400" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl font-mono text-sm text-zinc-400 overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </div>
              <pre className="overflow-x-auto leading-loose">
                <code className="text-[#c678dd]">from</code> <span className="text-[#e5c07b]">fastapi</span> <code className="text-[#c678dd]">import</code> FastAPI, Depends<br />
                <code className="text-[#c678dd]">from</code> <span className="text-[#e5c07b]">core.security</span> <code className="text-[#c678dd]">import</code> verify_token<br />
                <br />
                <span className="text-[#e06c75]">app</span> = FastAPI(title=<span className="text-[#98c379]">"FinTech Core"</span>)<br />
                <br />
                <code className="text-[#61afef]">@app.post</code>(<span className="text-[#98c379]">"/api/v1/transactions"</span>)<br />
                <code className="text-[#c678dd]">async def</code> <span className="text-[#61afef]">process_transaction</span>(<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e06c75]">payload</span>: TransactionSchema,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e06c75]">auth</span>: <span className="text-[#e5c07b]">bool</span> = Depends(verify_token)<br />
                ):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7f848e] italic"># AI-accelerated business logic</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#e06c75]">result</span> = <code className="text-[#c678dd]">await</code> payment_gateway.charge(payload)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-[#c678dd]">return</code> {"{"}<span className="text-[#98c379]">"status"</span>: <span className="text-[#98c379]">"success"</span>, <span className="text-[#98c379]">"id"</span>: result.id{"}"}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24 text-center"
          >
            <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A transparent, no-BS process designed for speed and reliability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

            {[
              {
                step: '01',
                title: 'Audit',
                time: '1–2 days',
                desc: 'Deep dive into your codebase and architecture to identify bottlenecks.'
              },
              {
                step: '02',
                title: 'Plan',
                time: 'Architecture & Timeline',
                desc: 'Clear technical roadmap, blueprint, and precise execution timeline.'
              },
              {
                step: '03',
                title: 'Execution',
                time: '2–8 weeks',
                desc: 'Rapid development sprints. We build, test, and deploy production-ready code.'
              },
              {
                step: '04',
                title: 'Scale',
                time: 'Ongoing Support',
                desc: 'Post-launch monitoring, performance tuning, and infrastructure scaling.'
              }
            ].map((phase, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative group flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:scale-110 group-hover:border-indigo-400 group-hover:text-indigo-300 transition-all duration-300 relative z-10 bg-[#0a0a0a]">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors">{phase.title}</h3>
                <span className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4 whitespace-nowrap">
                  {phase.time}
                </span>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="md:w-1/2"
          >
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-4 block">The Devs Pro Difference</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why work with us</h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              We don't just write code. We solve business problems through engineering, focusing on stability, scale, and time-to-market.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Fintech-first engineering', desc: 'Deep expertise in transactional systems and data security.' },
                { title: 'We fix broken systems', desc: 'We don\'t just build from scratch; we rescue legacy codebases.' },
                { title: 'CTO-level expertise', desc: 'Led by a CTO with 15+ years in fintech & high-load systems. No juniors learning on your dime. Senior talent only.' },
                { title: 'Fast execution without bullshit', desc: 'Transparent communication and rapid delivery cycles.' }
              ].map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeInUp} className="mt-10 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 relative">
              <svg className="absolute top-4 right-4 w-8 h-8 text-indigo-500/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-zinc-300 italic text-sm mb-4 relative z-10">"Devs Pro helped us stabilize payments in 2 weeks. Before that, we had constant downtime."</p>
              <div className="text-sm font-semibold text-white relative z-10">CTO, Fintech startup</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-zinc-400">Typical Agency</span>
                    <span className="text-red-400">Months to launch</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-[80%]" />
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse" />
                  <div className="flex justify-between items-center text-sm font-medium relative z-10">
                    <span className="text-white font-bold">Devs Pro</span>
                    <span className="text-indigo-300 font-bold">Weeks to launch</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2 relative z-10">
                    <div className="bg-indigo-500 h-2 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team / Founder Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a] relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white/5 relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <img src="/founder.png" alt="CTO" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
            </div>

            <div className="text-center md:text-left relative z-10 flex-1 mt-2 md:mt-4">
              <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-3 block">Who you’ll work with</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                Led by CTO with 15+ years experience
              </h3>
              <ul className="space-y-3 mb-6 text-zinc-300">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Built 30+ products
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Led teams up to 70 engineers
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Specialized in fintech & high-load systems
                </li>
              </ul>
              <p className="text-lg text-zinc-400 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
                You’ll work directly with senior engineers — no juniors, no layers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Concerns Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-[#050505] relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <span className="text-red-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Objections Handling</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Common concerns</h2>
            <p className="text-xl text-zinc-400">Honest answers to why projects fail and how we prevent it.</p>
          </motion.div>
          <div className="grid gap-6 md:gap-8">
            {[
              { q: "“We don’t want a long rewrite”", a: "We don’t rewrite — we stabilize and improve incrementally avoiding massive risky transitions." },
              { q: "“We had bad experience with agencies”", a: "You work directly with senior engineers, not juniors. No bloated management." },
              { q: "“We need fast results”", a: "First improvements and stabilized metrics are visible within 1–2 weeks." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between shadow-lg">
                <div className="text-lg font-medium text-white md:w-1/3">{item.q}</div>
                <div className="text-zinc-400 md:w-2/3 md:pl-8 md:border-l border-white/10 leading-relaxed">{item.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-semibold text-indigo-400 mb-8 shadow-lg shadow-indigo-500/10">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Fast turnaround guaranteed
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Your system won’t scale by accident.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Get a plan in 24h.</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="mb-12 max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-6">
              Book a free architecture audit. We'll analyze your current setup and give you a clear roadmap to production.
            </p>
            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6 mb-8 shadow-inner max-w-lg mx-auto">
              <p className="text-base text-zinc-300 font-medium flex items-center gap-3 text-left">
                <span className="text-indigo-400 text-xl font-bold">↳</span>
                <span>
                  <strong className="text-white block font-bold text-lg mb-1">No obligations. No long-term commitment.</strong>
                  <span className="text-zinc-400 text-sm">If we can’t help — we’ll tell you honestly.</span>
                </span>
              </p>
            </div>
            <span className="text-sm border border-white/10 bg-white/5 px-4 py-2 rounded-full inline-block text-zinc-400 font-medium tracking-wide">
              We work with funded startups and scaleups (Typical engagement: €10k–€80k)
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://calendly.com/adel-devs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 px-10 items-center justify-center rounded-full bg-white text-black text-lg font-bold transition-all hover:bg-zinc-200 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] group w-full sm:w-auto"
            >
              👉 Book an Audit
            </a>
            <a
              href="mailto:hello@devs.pro"
              className="inline-flex h-16 px-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-lg font-semibold transition-all hover:bg-white/10 hover:border-white/20 w-full sm:w-auto backdrop-blur-sm"
            >
              hello@devs.pro
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-20 pb-10 px-6 sm:px-12 md:px-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">

          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <span className="text-white text-xl font-bold font-mono leading-none">/</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-100 transition-colors">DEVS PRO</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed font-medium">
              Building fintech systems that scale.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <a href="#contact" className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors flex items-center gap-2 group">
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Get a plan in 24h
              </a>
              <a href="mailto:hello@devs.pro" className="text-zinc-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> hello@devs.pro
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-16 sm:gap-24 text-center sm:text-left h-full">
            <div className="space-y-5 flex flex-col justify-between h-full">
              <h4 className="text-white font-semibold tracking-wider text-xs uppercase opacity-80">Expertise</h4>
              <ul className="space-y-3 text-sm text-zinc-500 flex-1">
                <li><a href="#expertise" className="hover:text-indigo-400 transition-colors">Python Backend</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">AI Integrations</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">FinTech Architecture</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Project Rescue</a></li>
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

        {/* Bottom Bar */}
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
