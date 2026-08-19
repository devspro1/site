import Link from "next/link";
import { MoveLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Read our terms of service to understand the rules for using our platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <MoveLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Terms of Service</h1>

        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-sm font-medium text-indigo-400 mb-12">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access our service.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">2. Use of Services</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 marker:text-indigo-500">
              <li>Maintaining the confidentiality of your account information.</li>
              <li>All activities that occur under your account.</li>
              <li>Notifying us immediately of any unauthorized use or security breach.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">3. Prohibited Conduct</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 marker:text-indigo-500">
              <li>Copying, distributing, or disclosing any part of our service in any medium.</li>
              <li>Using any automated system, including robots or spiders, to access the service.</li>
              <li>Transmitting spam, chain letters, or other unsolicited emails.</li>
              <li>Attempting to interfere with or compromise our system integrity or security.</li>
              <li>Taking any action that imposes an unreasonable load on our infrastructure.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">4. Intellectual Property Rights</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Our services and their original content, features, and functionality are and will remain the exclusive property of our company and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">5. Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">6. Changes to Terms</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this site.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">7. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you have any questions about these Terms, please contact us at <a href="mailto:hello@devs.pro" className="text-indigo-400 hover:text-indigo-300 transition-colors">hello@devs.pro</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}