'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Bot, Search, Share2 } from 'lucide-react';

const floatingLogos = [
  { name: 'Google', icon: Search, color: 'text-blue-500', pos: 'top-12 left-[10%] sm:left-[18%]' },
  { name: 'Gemini', icon: Sparkles, color: 'text-indigo-500', pos: 'top-28 left-[22%] sm:left-[28%]' },
  { name: 'ChatGPT', icon: Bot, color: 'text-emerald-500', pos: 'top-20 right-[24%] sm:right-[30%]' },
  { name: 'Google Maps', icon: MapPin, color: 'text-red-500', pos: 'top-40 right-[12%] sm:right-[18%]' },
  { name: 'Social Media', icon: Share2, color: 'text-purple-500', pos: 'top-60 right-[8%] sm:right-[12%]' },
];

export default function GrabValueSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDFDFE] py-24 border-t border-slate-200/60">
      
      {/* Spider Web Background Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#4F46E5 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Glow Center Aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/15 to-red-500/15 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 min-h-[500px] flex flex-col justify-between items-center">
        
        {/* TOP SPIDER WEB THREADS & FLOATING LOGOS */}
        <div className="relative w-full h-80 flex justify-center items-start">
          
          {/* Animated SVG Web Strands */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-400/30" strokeWidth="1.5">
            {/* Center Anchor Strand */}
            <motion.path
              d="M 50% 0 L 50% 70%"
              stroke="url(#webGradient)"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            {/* Branching Web Threads */}
            <motion.path d="M 50% 0 L 18% 30%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
            <motion.path d="M 50% 0 L 28% 45%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.1 }} />
            <motion.path d="M 50% 0 L 70% 35%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
            <motion.path d="M 50% 0 L 82% 55%" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />

            <defs>
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Brand Node Badges */}
          {floatingLogos.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <motion.div
  key={brand.name}
  className={`absolute ${brand.pos} flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-200/80 shadow-lg shadow-indigo-500/5 cursor-pointer z-10`}
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 3 + index * 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  }}
  whileHover={{ scale: 1.1, rotateZ: index % 2 === 0 ? 3 : -3 }}
>
  <IconComponent className={`w-4 h-4 ${brand.color}`} />
  <span className="text-xs font-bold text-slate-800">{brand.name}</span>
</motion.div>
            );
          })}

          {/* 3D Central Web Pulling Node */}
          <motion.div
            className="absolute top-[40%] left-1/2 -translate-x-1/2 z-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-indigo-500/20 animate-ping" />
              <div className="relative z-10 p-4 rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-2xl shadow-indigo-500/50 border border-indigo-400/40">
                <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOLD TYPOGRAPHY CALLOUT ("GRAB YOUR BRAND VALUE") */}
        <motion.div
          className="text-center mt-12 z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Grab Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-red-500">Brand Value</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium mt-3 max-w-xl mx-auto">
            Weave search dominance across AI engines, Google search, and modern digital ecosystems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}