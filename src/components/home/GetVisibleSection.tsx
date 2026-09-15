'use client';

import { motion } from 'framer-motion';

export function GetVisibleSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-gray-900 border-t border-gray-100">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 sm:px-12">
        
        {/* TWO VERTICAL ACCENT LINES (LEFT SIDE) */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex h-64 sm:h-80 gap-3 shrink-0 origin-top"
        >
          {/* Cyan Blue Line */}
          <div className="w-2.5 sm:w-3.5 rounded-full bg-sky-400 shadow-sm" />
          {/* Lime Green Line */}
          <div className="w-2.5 sm:w-3.5 rounded-full bg-lime-500 shadow-sm" />
        </motion.div>

        {/* SUNGLASSES & CONTENT CONTAINER */}
        <div className="relative flex-1 flex flex-col items-center justify-center py-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl"
          >
            {/* SVG SUNGLASSES GRAPHIC */}
            <svg 
              viewBox="0 0 800 350" 
              className="w-full h-auto drop-shadow-xl overflow-visible"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Soft Drop Shadow for Frames */}
                <filter id="glasses-shadow" x="-10%" y="-10%" width="130%" height="140%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#ef4444" floodOpacity="0.15" />
                </filter>
              </defs>

              <g filter="url(#glasses-shadow)">
                {/* LEFT TEMPLE / ARM */}
                <path 
                  d="M 210 130 L 390 40" 
                  stroke="#ef4444" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                />

                {/* RIGHT TEMPLE / ARM */}
                <path 
                  d="M 610 130 L 730 70" 
                  stroke="#ef4444" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                />

                {/* LEFT LENS OVAL */}
                <ellipse 
                  cx="260" 
                  cy="200" 
                  rx="130" 
                  ry="85" 
                  stroke="#ef4444" 
                  strokeWidth="10" 
                  fill="white" 
                />

                {/* RIGHT LENS OVAL */}
                <ellipse 
                  cx="530" 
                  cy="200" 
                  rx="130" 
                  ry="85" 
                  stroke="#ef4444" 
                  strokeWidth="10" 
                  fill="white" 
                />

                {/* NOSE BRIDGE & LOOPS */}
                <path 
                  d="M 390 190 Q 398 220 392 235 Q 380 245 375 225" 
                  stroke="#ef4444" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 400 190 Q 392 220 398 235 Q 410 245 415 225" 
                  stroke="#ef4444" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 390 185 Q 395 175 400 185" 
                  stroke="#ef4444" 
                  strokeWidth="9" 
                  strokeLinecap="round" 
                  fill="none" 
                />
              </g>

              {/* TEXT INSIDE LENSES */}
              {/* Left Lens Text */}
              <text 
                x="260" 
                y="215" 
                textAnchor="middle" 
                className="fill-sky-400 font-serif italic text-6xl sm:text-7xl font-normal select-none"
              >
                𝑔𝑒𝓉
              </text>

              {/* Right Lens Text */}
              <text 
                x="530" 
                y="215" 
                textAnchor="middle" 
                className="fill-lime-500 font-serif italic text-6xl sm:text-7xl font-normal select-none"
              >
                𝒱𝒾𝓈𝒾𝒷𝓁𝑒
              </text>
            </svg>

            {/* REALISTIC GROUND SHADOW */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto -mt-6 h-6 w-3/4 rounded-[100%] bg-black blur-md"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}