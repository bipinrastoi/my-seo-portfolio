'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import HeroVisual from './HeroVisual';
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: CONTENT SECTION */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.12]">
            Architecting{' '}
            <span className="relative inline-block align-baseline mx-1">
              <span 
                className="absolute inset-0 font-black italic tracking-tighter text-indigo-500/40 blur-[3px] select-none translate-x-1.5 -skew-x-12" 
                aria-hidden="true"
              >
                Fast
              </span>
              <span className="relative font-black italic tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent -skew-x-12 pr-1">
                Fast
              </span>
            </span>{' '}
            Web Apps & Search{' '}
            <span className="relative inline-block text-indigo-600">
              Visibility.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Specializing in Next.js App Router, Technical SEO, and Answer Engine Optimization (AEO/GEO). Building high-performance digital experiences that rank on Google & AI engines.
          </p>

          {/* CTA BUTTON GROUP */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Link
              href="/contact?intent=project"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all bg-slate-50 hover:bg-slate-100"
            >
              <Briefcase className="w-4 h-4 text-slate-500" /> View Case Studies
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: NEW INTERACTIVE BENTO GRID */}
        <div className="w-full flex justify-center lg:justify-end">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
}