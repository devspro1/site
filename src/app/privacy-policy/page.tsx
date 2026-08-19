import Link from "next/link";
import { MoveLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how we handle your data.",
};

export default function PrivacyPolicyPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Privacy Policy</h1>

        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-sm font-medium text-indigo-400 mb-12">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Welcome to our Privacy Policy. This policy describes how we collect, use, and handle your personal information when you use our website, products, and services.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">2. Information We Collect</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 marker:text-indigo-500">
              <li><strong className="text-zinc-200">Information you provide directly:</strong> Name, email address, and other contact details when you create an account or contact us.</li>
              <li><strong className="text-zinc-200">Information from your use of our services:</strong> Log data, usage information, and device information automatically collected when you interact with our platform.</li>
              <li><strong className="text-zinc-200">Cookies and similar technologies:</strong> We use cookies to remember your preferences and understand how you navigate our site.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">3. How We Use Your Information</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 marker:text-indigo-500">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and send related information.</li>
              <li>Send you technical notices, updates, and support messages.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Monitor and analyze trends, usage, and activities.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">4. Sharing of Information</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We do not share your personal information with third parties except in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 marker:text-indigo-500">
              <li>With your consent or at your direction.</li>
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">5. Data Security</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">6. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@devs.pro" className="text-indigo-400 hover:text-indigo-300 transition-colors">hello@devs.pro</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}