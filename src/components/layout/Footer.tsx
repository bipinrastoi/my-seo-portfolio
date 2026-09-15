import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['600'],
});

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090D16] text-slate-300 border-t border-slate-800/60 pt-12 pb-6 px-6 sm:px-12">
      
      {/* Soft Animated Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-indigo-600/15 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-6xl">
        
        {/* Compact Top Banner / Call to Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800/50">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to architect high-performance{' '}
              <span className={`${displayFont.className} text-indigo-400 pr-1`}>
                experiences?
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Specializing in Next.js, Technical SEO, and Answer Engine Optimization (AEO/GEO).
            </p>
          </div>

          {/* Sharp CTA Button */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-none border border-indigo-400/30 transition-all shadow-md hover:shadow-indigo-500/25 shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Compact Navigation & Info Grid */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs border-b border-slate-800/50">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-2">
            <Link href="/" className="inline-block font-extrabold text-white text-base tracking-wider">
              Bipin<span className="text-indigo-500">.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Frontend engineering & search engine architecture engineered for speed and AI dominance.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[10px]">Explore</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link href="/articles" className="hover:text-indigo-400 transition-colors">Articles</Link></li>
              <li><Link href="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[10px]">Connect</h4>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/bipinrastoi"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 border border-slate-800 hover:border-indigo-500 bg-slate-900/60 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-400 transition-all text-[11px] font-medium rounded-none"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bipin-raskoti-7a944331a/"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1.5 border border-slate-800 hover:border-indigo-500 bg-slate-900/60 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-400 transition-all text-[11px] font-medium rounded-none"
              >
                LinkedIn
              </a>
              <a
                href="bipinraskoti6@gmail.com"
                className="p-1.5 border border-slate-800 hover:border-indigo-500 bg-slate-900/60 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-400 transition-all rounded-none"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Legal / Meta */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[10px]">Legal</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Bipin Raskoti. All rights reserved.</p>
          <p>Built with <span className="text-slate-300 font-medium">Next.js</span> & <span className="text-slate-300 font-medium">Tailwind CSS</span></p>
        </div>

      </div>
    </footer>
  );
}