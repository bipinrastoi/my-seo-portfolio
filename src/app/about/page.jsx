import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Code2, 
  Globe, 
  Zap, 
  Database, 
  Server, 
  BookOpen, 
  Briefcase, 
  PenTool, 
  GraduationCap 
} from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['600', '700'],
});

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#FDFDFE] text-slate-900 overflow-hidden font-sans">
      
      {/* Corner Grid Background Patterns */}
      <div 
        className="pointer-events-none absolute top-0 left-0 w-72 h-72 opacity-[0.07] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div 
        className="pointer-events-none absolute top-0 right-0 w-80 h-80 opacity-[0.07] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Energy Glows */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Intro Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
              <span>Full-Stack & Search Architect</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Bridging Technical Execution &{' '}
              <span className={`${displayFont.className} text-indigo-600 font-normal italic pr-2`}>
                Marketing Strategy.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              I am a detail-oriented BIT student at Padmashree International College combining hands-on technical SEO with modern full-stack engineering. Passionate about building AI-driven solutions and web applications engineered for speed, structural clarity, and search dominance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="mailto:bipinraskoti6@gmail.com"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm px-6 py-3 rounded-xl transition-all border border-slate-200"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT: Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-sm" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/my-image.png"
                    alt="Bipin Raskoti"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Projects
                  </span>
                  <span className="font-mono text-[10px]">Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Matrix Section */}
      
      {/* Education & Training */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12 py-12 border-t border-slate-200/60">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Education & Training</h2>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm gap-2">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Bachelor of Information Technology (BIT)</h3>
                <p className="text-xs text-slate-500">Padmashree International College, Kathmandu</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
              Current (5th Semester)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm gap-2">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Web Development Course</h3>
                <p className="text-xs text-slate-500">Broadway Infosys</p>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-500">May 2024 – Sept 2024</span>
          </div>
        </div>
      </section>

    </div>
  );
}