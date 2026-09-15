'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Search, Bot, Sparkles, TrendingUp, Layers } from 'lucide-react';

type NodeDetail = {
  id: string;
  title: string;
  fullName: string;
  tagline: string;
  clientValue: string;
  businessImpact: string[];
  keyStrategies: string[];
  borderColor: string;
  badgeBg: string;
};

const nodeData: Record<string, NodeDetail> = {
  SEO: {
    id: 'SEO',
    title: 'SEO',
    fullName: 'Search Engine Optimization',
    tagline: 'Capturing High-Intent Business Traffic on Google',
    clientValue:
      'Ensures your business appears at the top when prospective clients actively search for your services or products.',
    businessImpact: [
      'Increases organic lead generation without constant ad spend',
      'Establishes domain authority against direct market competitors',
      'Delivers sustainable, compounding long-term website traffic',
    ],
    keyStrategies: [
      'High-conversion keyword placement & technical SEO',
      'Core Web Vitals and page loading speed optimization',
      'Structured technical health audits & Google indexing',
    ],
    borderColor: 'border-blue-600 hover:border-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  AEO: {
    id: 'AEO',
    title: 'AEO',
    fullName: 'Answer Engine Optimization',
    tagline: 'Becoming the Direct Answer on Voice & Smart Assistants',
    clientValue:
      'Positions your brand as the primary authoritative answer on voice searches, featured snippets, and immediate query results.',
    businessImpact: [
      'Captures zero-click searches before users even scroll',
      'Builds instant brand credibility as the primary market authority',
      'Drives voice search traffic from mobile and smart home devices',
    ],
    keyStrategies: [
      'Direct Question-and-Answer content structuring',
      'Rich schema markup for immediate search engine extraction',
      'Targeting high-value featured snippet position #0',
    ],
    borderColor: 'border-amber-600 hover:border-amber-700',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  GEO: {
    id: 'GEO',
    title: 'GEO',
    fullName: 'Generative Engine Optimization',
    tagline: 'Securing Recommended Citations in ChatGPT & AI Search',
    clientValue:
      'Ensures your brand is directly recommended and cited when buyers ask AI tools (ChatGPT, Perplexity, Gemini) for solutions.',
    businessImpact: [
      'Protects future market share as consumer behavior shifts to AI',
      'Drives pre-educated, high-trust buyers directly to your business',
      'Establishes early market leadership in AI recommendation engines',
    ],
    keyStrategies: [
      'Entity-focused knowledge graph integration',
      'Deep topic coverage designed for LLM citation algorithms',
      'Cross-platform brand consistency for multi-source AI verification',
    ],
    borderColor: 'border-purple-600 hover:border-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
};

export function SearchOptimizationSection() {
  const [activeNode, setActiveNode] = useState<NodeDetail | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-24 text-gray-900 border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-gray-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-gray-800">
            <Layers className="h-3.5 w-3.5 text-indigo-600" />
            Growth Architecture
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Modern Search Strategy Flow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
            Click any node below to explore how we connect traditional search, direct answer engines, and AI discovery.
          </p>
        </div>

        {/* STAIRCASE FLOWCHART CONTAINER WITH WHITE BACKGROUND & SHARP BOXES */}
        <div className="relative mt-20 mx-auto max-w-3xl min-h-[460px] flex flex-col justify-between p-2">
          
          {/* SOLID BOLD BLACK CONNECTION LINES */}
          <svg 
            className="absolute inset-0 hidden sm:block h-full w-full pointer-events-none stroke-black" 
            strokeWidth="3.5" 
            fill="none"
          >
            {/* SEO -> AEO Line */}
            <path d="M 230,65 L 370,65 L 370,230 L 410,230" />
            {/* AEO -> GEO Line */}
            <path d="M 590,230 L 630,230 L 630,395 L 670,395" />
          </svg>

          {/* NODE 1: SEO (Top Left) */}
          <div className="flex justify-start sm:pl-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveNode(nodeData.SEO)}
              className={`group relative w-full sm:w-72 rounded-lg border-2 ${nodeData.SEO.borderColor} bg-white p-6 shadow-md hover:shadow-xl transition-all duration-200 text-left`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black tracking-tight text-gray-900">SEO</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <Search className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-xs font-bold text-gray-500">Google & Search Engines</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-blue-600 group-hover:translate-x-1 transition-transform">
                Touch to Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.button>
          </div>

          {/* NODE 2: AEO (Center) */}
          <div className="flex justify-center my-6 sm:my-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveNode(nodeData.AEO)}
              className={`group relative w-full sm:w-72 rounded-lg border-2 ${nodeData.AEO.borderColor} bg-white p-6 shadow-md hover:shadow-xl transition-all duration-200 text-left`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black tracking-tight text-gray-900">AEO</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                  <Bot className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-xs font-bold text-gray-500">Voice & Featured Snippets</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-amber-600 group-hover:translate-x-1 transition-transform">
                Touch to Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.button>
          </div>

          {/* NODE 3: GEO (Bottom Right) */}
          <div className="flex justify-end sm:pr-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveNode(nodeData.GEO)}
              className={`group relative w-full sm:w-72 rounded-lg border-2 ${nodeData.GEO.borderColor} bg-white p-6 shadow-md hover:shadow-xl transition-all duration-200 text-left`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black tracking-tight text-gray-900">GEO</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-50 text-purple-600">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-xs font-bold text-gray-500">ChatGPT & AI Recommendations</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-purple-600 group-hover:translate-x-1 transition-transform">
                Touch to Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.button>
          </div>

        </div>

      </div>

      {/* MODAL DRAWER FOR DETAILED CONTENT */}
      <AnimatePresence>
        {activeNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-xl rounded-xl border border-gray-300 bg-white p-6 sm:p-8 shadow-2xl text-gray-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveNode(null)}
                className="absolute top-5 right-5 rounded-md bg-gray-100 p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title Header */}
              <div className="flex items-center gap-3">
                <span className={`rounded-md border px-3 py-1 text-xs font-black tracking-wider uppercase ${activeNode.badgeBg}`}>
                  {activeNode.title}
                </span>
                <span className="text-xs font-bold text-gray-500">{activeNode.fullName}</span>
              </div>

              <h3 className="mt-4 text-2xl font-black text-gray-900 tracking-tight">
                {activeNode.tagline}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-normal">
                {activeNode.clientValue}
              </p>

              {/* Business Impact Section */}
              <div className="mt-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" /> Core Business Value
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {activeNode.businessImpact.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Implementation Strategies */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                  Key Deliverables
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {activeNode.keyStrategies.map((strat) => (
                    <span key={strat} className="rounded-md bg-gray-100 border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-800">
                      {strat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <button
                onClick={() => setActiveNode(null)}
                className="mt-8 w-full rounded-md bg-gray-900 py-3 text-xs font-bold text-white shadow-md hover:bg-indigo-600 transition-colors active:scale-95"
              >
                Close Insights
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}