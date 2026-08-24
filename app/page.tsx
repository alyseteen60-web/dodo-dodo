'use client';
import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Phone, Mail, MapPin, Send, ArrowRight, Star, HelpCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LandingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
              D
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">dodo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-primary transition">Services</a>
            <a href="#about" className="hover:text-brand-primary transition">About Us</a>
            <a href="#testimonials" className="hover:text-brand-primary transition">Testimonials</a>
            <a href="#faq" className="hover:text-brand-primary transition">FAQ</a>
            <a href="#contact" className="hover:text-brand-primary transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white font-medium text-sm transition shadow-sm hover:shadow-md"
            style={{ backgroundColor: "#3b82f6" }}
          >
            Production Deployment
Deployment
app-4jji6mpby-workeg.vercel.app
Domains
app-web-psi-ashen.vercel.app
Status
Ready
Created
18m ago by analolo6000-2808

analolo6000-2808 Avatar
Source
main
3fcabe6
fix: escape metadata title and description with JSON.stringify in all …

Deployment Settings
3 Recommendations
To deploy to Production, drop your project anywhere on this page, connect to git, or run vercel --prod via the CLI.
Production Checklist

0/5
Connect Git Repository
Add Custom Domain
Preview Deployment
Enable Web Analytics
Enable Speed Insights
Observability

6h
Edge Requests
162

          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span>Production Deployment Deployment app-4jji6mpby-workeg.vercel.app Domains app-web-psi-ashen.vercel.app Status Ready Created 18m ago by analolo6000-2808  analolo6000-2808 Avatar Source main 3fcabe6 fix: escape metadata title and description with JSON.stringify in all …  Deployment Settings 3 Recommendations To deploy to Production, drop your project anywhere on this page, connect to git, or run vercel --prod via the CLI. Production Checklist  0/5 Connect Git Repository Add Custom Domain Preview Deployment Enable Web Analytics Enable Speed Insights Observability  6h Edge Requests 162</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight mb-8">
            Empowering Your Growth with <span style={{ color: "#3b82f6" }}>dodo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Production Deployment
Deployment
app-4jji6mpby-workeg.vercel.app
Domains
app-web-psi-ashen.vercel.app
Status
Ready
Created
18m ago by analolo6000-2808

analolo6000-2808 Avatar
Source
main
3fcabe6
fix: escape metadata title and description with JSON.stringify in all …

Deployment Settings
3 Recommendations
To deploy to Production, drop your project anywhere on this page, connect to git, or run vercel --prod via the CLI.
Production Checklist

0/5
Connect Git Repository
Add Custom Domain
Preview Deployment
Enable Web Analytics
Enable Speed Insights
Observability

6h
Edge Requests
162

          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-base hover:bg-slate-200 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600">Tailored solutions engineered to deliver exceptional value and reliable outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Strategic Advisory', desc: 'Expert consultation and strategic roadmaps tailored to your specific organizational goals.' },
              { title: 'Operational Excellence', desc: 'Streamlined execution and robust processes to drive maximum operational efficiency.' },
              { title: 'Dedicated Support', desc: '24/7 client care and round-the-clock assistance to ensure seamless success.' },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white font-bold" style={{ backgroundColor: "#3b82f6" }}>
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Client Feedback</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left shadow-sm">
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"dodo exceeded our expectations at every milestone. Highly recommended for top tier results!"</p>
              <div className="font-semibold text-slate-900">Sarah Jenkins</div>
              <div className="text-xs text-slate-500">Director of Operations</div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left shadow-sm">
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"Professional, proactive, and exceptionally thorough from day one."</p>
              <div className="font-semibold text-slate-900">David Miller</div>
              <div className="text-xs text-slate-500">Managing Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact dodo</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Have questions or ready to launch your project? Fill out the form or reach out directly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span>alyseteen60@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <Phone className="w-5 h-5 text-brand-primary" />
                <span>3456yu765432</span>
              </div>
              
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#3b82f6" }}
                >
                  {submitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-lg">dodo</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} dodo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
// AI Modification:  i need add admin 
