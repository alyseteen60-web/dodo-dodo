'use client';

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  Star,
  HelpCircle,
  Sun,
  Moon,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/lib/siteData';

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (supabase) {
        await supabase.from('contact_submissions').insert([formData]);
      }
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const defaultFaqs = [
    {
      q: "What services does dodo provide?",
      a: "We offer tailored end-to-end digital services, cloud deployment, and high-performance product solutions designed to elevate your brand standard."
    },
    {
      q: "How fast can I get started?",
      a: "Our team can onboard and launch initial project frameworks in as fast as 24-48 hours depending on scope requirements."
    },
    {
      q: "Is 24/7 technical support included?",
      a: "Yes, our priority enterprise plans include round-the-clock dedicated technical support and uptime monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
              D
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              {siteConfig.name || 'dodo'}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#services" className="hover:text-brand-primary dark:hover:text-brand-accent transition">Services</a>
            <a href="#products" className="hover:text-brand-primary dark:hover:text-brand-accent transition">Products</a>
            <a href="#pricing" className="hover:text-brand-primary dark:hover:text-brand-accent transition">Pricing</a>
            <a href="#faq" className="hover:text-brand-primary dark:hover:text-brand-accent transition">FAQ</a>
            <a href="#contact" className="hover:text-brand-primary dark:hover:text-brand-accent transition">Contact</a>
          </nav>

          {/* Actions: Dark Mode Toggle & CTA */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-200 shadow-sm flex items-center gap-2 text-xs font-semibold"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-500" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-brand-primary hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all duration-200"
            >
              Get Started
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200">Services</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200">Products</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200">Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-200">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-100 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-brand-primary dark:text-brand-accent text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Enterprise Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {siteConfig.hero?.headline || 'Welcome to dodo'}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal">
              Empowering modern teams with streamlined workflow solutions, scalable architecture, and reliable performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={siteConfig.hero?.ctaUrl || '#contact'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 transition-all duration-200"
              >
                {siteConfig.hero?.ctaText || 'Get Started'} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-base transition-all duration-200"
              >
                Explore Solutions
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Enterprise Grade
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 99.9% Uptime Guarantee
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-video lg:aspect-square flex items-center justify-center group">
            <img
              src={siteConfig.hero?.heroImageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80'}
              alt="Hero Preview"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Products & Features Section */}
      <section id="products" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Products</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              Explore our carefully engineered offerings designed for optimum performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(siteConfig.products || []).map((prod) => (
              <div
                key={prod.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                    {prod.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prod.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{prod.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-2xl font-extrabold text-brand-primary dark:text-brand-accent">{prod.price}</span>
                    <a
                      href="#contact"
                      className="px-4 py-2 rounded-lg bg-brand-primary hover:bg-blue-600 text-white text-xs font-semibold transition"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-b border-slate-100 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Transparent Pricing</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              Choose the plan that best fits your business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {(siteConfig.pricing || []).map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 ${'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md'}`}
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 my-6 text-sm text-slate-600 dark:text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary dark:text-brand-accent shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="w-full text-center py-3 rounded-xl bg-brand-primary hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition"
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-brand-primary mb-2">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-300">Everything you need to know about getting started.</p>
          </div>
          <div className="space-y-4">
            {defaultFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left font-semibold text-slate-900 dark:text-white flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  <span>{faq.q}</span>
                  <span className="text-brand-primary text-xl font-bold">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-b border-slate-100 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Have questions or ready to launch your project? Send us a message and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-brand-primary dark:text-brand-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <span>support@dodo.com</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-brand-primary dark:text-brand-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (800) 555-DODO</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-brand-primary dark:text-brand-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>100 Technology Plaza, San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Thank you for contacting us. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-brand-primary text-white font-medium text-sm hover:bg-blue-600 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-brand-primary hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-bold text-base">
              D
            </div>
            <span className="font-bold text-white text-lg">dodo</span>
          </div>
          <p className="text-center md:text-left text-xs text-slate-500">
            © {new Date().getFullYear()} dodo. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
