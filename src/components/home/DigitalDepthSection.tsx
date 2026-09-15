'use client';

import { motion } from 'framer-motion';

const platforms = [
  {
    id: 'google-maps',
    color: 'bg-amber-400',
    width: 'w-[45%]',
    // Google Maps Pin Logo SVG
    logo: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
        <circle cx="12" cy="9" r="3" fill="#FFF" />
      </svg>
    ),
  },
  {
    id: 'google-search',
    color: 'bg-lime-500',
    width: 'w-[60%]',
    // Google 'G' Logo SVG
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
      </svg>
    ),
  },
  {
    id: 'gemini',
    color: 'bg-sky-400',
    width: 'w-[75%]',
    // Gemini Sparkle Logo SVG
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" fill="url(#gemini_grad)" />
        <defs>
          <linearGradient id="gemini_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A73E8" />
            <stop offset="0.5" stopColor="#8A2BE2" />
            <stop offset="1" stopColor="#E91E63" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'chatgpt',
    color: 'bg-red-500',
    width: 'w-[90%]',
    // OpenAI / ChatGPT Logo SVG
    logo: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 23.97a6.0367 6.0367 0 0 0 5.7608-3.9882 5.98 5.98 0 0 0 3.9977-2.9 6.0558 6.0558 0 0 0-.7356-7.2607zm-9.022 12.6081a4.4042 4.4042 0 0 1-2.8628-1.0416l.166-.0959 4.786-2.7634a.82.82 0 0 0 .41-.7102V11.026l2.0221 1.1672a.0805.0805 0 0 1 .041.0621v5.5802a4.433 4.433 0 0 1-4.5623 4.5937zM3.4977 17.514a4.4185 4.4185 0 0 1-.5254-3.0044l.166.0982 4.786 2.7634a.82.82 0 0 0 .82 0l5.882-3.397v2.3344a.0805.0805 0 0 1-.0363.067L9.7423 19.231a4.433 4.433 0 0 1-6.2446-1.717zm-1.036-9.8784a4.4185 4.4185 0 0 1 2.3374-1.9627v5.7237a.82.82 0 0 0 .41.7102l5.882 3.397-2.0221 1.1672a.0805.0805 0 0 1-.0773.0048L4.1414 13.82a4.433 4.433 0 0 1-1.6797-6.1844zm16.5963 3.3441L13.176 7.5827a.82.82 0 0 0-.82 0L6.474 10.9797V8.6453a.0805.0805 0 0 1 .0363-.067l4.8477-2.8554a4.433 4.433 0 0 1 6.8062 4.7568zm1.9488-3.0331a4.4185 4.4185 0 0 1 .5254 3.0044l-.166-.0982-4.786-2.7634a.82.82 0 0 0-.82 0l-5.882 3.397V9.1332a.0805.0805 0 0 1 .0363-.067l4.8477-2.8554a4.433 4.433 0 0 1 6.2446 1.717zm-6.8539 2.5028l-2.0221-1.1672a.0805.0805 0 0 1-.041-.0621V3.6402a4.433 4.433 0 0 1 7.425 2.4517l-.166.0959-4.786 2.7634a.82.82 0 0 0-.41.7102z"/>
      </svg>
    ),
  },
];

export function DigitalDepthSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-gray-900 border-t border-gray-100">
      <div className="mx-auto max-w-4xl px-6 sm:px-12">
        
        {/* HEADER CONTENT TO FILL TOP SPACE */}
        <div className="mb-10 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-md">
            Multi-Platform Coverage
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
            Connecting Your Brand Across Every Engine
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 font-medium max-w-lg mx-auto">
            From local maps to generative AI assistants, we extend your search visibility across all digital touchpoints.
          </p>
        </div>

        {/* TIGHTER, SLEEK STAGGERED LINES WITH BRAND LOGOS */}
        <div className="flex flex-col gap-4 py-2">
          {platforms.map((item, index) => (
            <div key={item.id} className="relative flex items-center w-full">
              
              {/* SLIM LINE */}
              <div className="flex-1 pr-3">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left' }}
                  className={`h-2 rounded-full ${item.color} ${item.width}`}
                />
              </div>

              {/* STANDALONE LOGO ICON (NO TEXT BOX) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 + 0.5 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:scale-110 transition-transform"
              >
                {item.logo}
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}