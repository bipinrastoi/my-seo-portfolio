'use client';

import React, { useState, useEffect } from 'react';
import { Search, Send, Sparkles, Smile, Paperclip } from 'lucide-react';

const GOOGLE_QUERIES = [
  "best cafe near me",
  "clothing store in Kathmandu",
  "SEO agency in Nepal",
  "top Next.js developer"
];

const AI_PROMPTS = [
  "How to optimize my brand for ChatGPT & Gemini?",
  "What is the best AEO & GEO strategy for 2026?",
  "Who builds high-speed Next.js web apps?"
];

export default function HeroVisual() {
  const [isMounted, setIsMounted] = useState(false);

  const [googleIndex, setGoogleIndex] = useState(0);
  const [googleText, setGoogleText] = useState('');
  const [isDeletingGoogle, setIsDeletingGoogle] = useState(false);

  const [aiIndex, setAiIndex] = useState(0);
  const [aiText, setAiText] = useState('');
  const [isDeletingAi, setIsDeletingAi] = useState(false);

  // Prevent Hydration Mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Typewriter effect for Google Search Bar
  useEffect(() => {
    if (!isMounted) return;

    const currentQuery = GOOGLE_QUERIES[googleIndex];
    const speed = isDeletingGoogle ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeletingGoogle) {
        setGoogleText(currentQuery.substring(0, googleText.length + 1));
        if (googleText === currentQuery) {
          setTimeout(() => setIsDeletingGoogle(true), 2000);
        }
      } else {
        setGoogleText(currentQuery.substring(0, googleText.length - 1));
        if (googleText === '') {
          setIsDeletingGoogle(false);
          setGoogleIndex((prev) => (prev + 1) % GOOGLE_QUERIES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [googleText, isDeletingGoogle, googleIndex, isMounted]);

  // Typewriter effect for AI Prompt Bar
  useEffect(() => {
    if (!isMounted) return;

    const currentPrompt = AI_PROMPTS[aiIndex];
    const speed = isDeletingAi ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeletingAi) {
        setAiText(currentPrompt.substring(0, aiText.length + 1));
        if (aiText === currentPrompt) {
          setTimeout(() => setIsDeletingAi(true), 2400);
        }
      } else {
        setAiText(currentPrompt.substring(0, aiText.length - 1));
        if (aiText === '') {
          setIsDeletingAi(false);
          setAiIndex((prev) => (prev + 1) % AI_PROMPTS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [aiText, isDeletingAi, aiIndex, isMounted]);

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col gap-8 p-2 select-none">
      
      {/* SECTION 1: GOOGLE SEARCH BAR WITH LIQUID BLOB */}
      <div className="relative flex items-center justify-center py-4">
        {/* Soft Organic Liquid Shape */}
        <div className="absolute w-[110%] h-28 bg-gradient-to-r from-blue-100/70 via-indigo-100/60 to-slate-200/50 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] blur-sm -z-10 transform -rotate-2 animate-pulse" />

        {/* Search Bar */}
        <div className="w-full bg-white rounded-full px-6 py-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center justify-between transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-4 flex-1 mr-3 overflow-hidden">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <div className="text-sm font-normal text-slate-700 truncate min-h-[20px] flex items-center">
              {isMounted ? googleText : ''}
              <span className="inline-block w-[2px] h-4 bg-blue-500 ml-1 animate-pulse" />
            </div>
          </div>
          <Search className="w-5 h-5 text-slate-400 shrink-0 cursor-pointer hover:text-slate-600 transition-colors" />
        </div>
      </div>

      {/* SECTION 2: SMARTPHONE FRAME WITH POP-OUT CHATS */}
      <div className="relative py-4 flex justify-center">
        {/* Soft Ambient Background Glow Canvas */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/60 via-indigo-100/50 to-pink-100/40 rounded-3xl blur-2xl -z-10" />

        {/* 3D Mobile Phone Container */}
        <div className="relative w-[280px] sm:w-[310px] bg-white rounded-[42px] p-3 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.25)] border-[5px] border-slate-100">
          
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-end px-2">
            <div className="w-2 h-2 rounded-full bg-indigo-900/80" />
          </div>

          {/* Screen Inner Viewport */}
          <div className="relative w-full bg-gradient-to-b from-slate-50 via-purple-50/30 to-white rounded-[32px] pt-9 px-2 pb-3 flex flex-col justify-between min-h-[380px]">
            
            {/* Header / Status */}
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-[10px] font-semibold text-slate-400">AI Assistant Engine</span>
              <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
              </span>
            </div>

            {/* Chat Flow Container */}
            <div className="flex flex-col gap-3 my-auto py-2">
              
              {/* CHAT BUBBLE 1 */}
              <div className="relative -ml-8 w-[112%] bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-slate-100/80 z-20 transform hover:-translate-y-0.5 transition-transform">
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Hi 👋 We index your site directly for <span className="text-purple-600 font-bold">ChatGPT & Gemini</span> answers with verified source citations!
                </p>
              </div>

              {/* ACTION PILLS */}
              <div className="flex items-center justify-end gap-2 -mr-8 z-20 my-1">
                <button className="text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all">
                  AEO Citation
                </button>
                <button className="text-xs font-medium text-purple-600 bg-white border border-purple-200 px-4 py-1.5 rounded-full shadow-md hover:bg-purple-50 transition-all">
                  GEO Strategy
                </button>
              </div>

              {/* CHAT BUBBLE 2 */}
              <div className="relative -ml-6 w-[108%] bg-white rounded-2xl rounded-tl-sm p-3 shadow-[0_10px_22px_rgba(0,0,0,0.06)] border border-slate-100/80 z-20">
                <p className="text-xs text-slate-600 font-normal">
                  Showing source authority: <span className="text-indigo-600 font-semibold underline">bipinraskoti.com</span>
                </p>
              </div>

            </div>

            {/* Mobile Bottom Chat Input */}
            <div className="mt-2 bg-slate-100/90 rounded-full px-3.5 py-2 flex items-center justify-between border border-slate-200/80 shadow-inner z-10">
              <div className="text-xs text-slate-500 truncate flex-1 mr-2 min-h-[16px] flex items-center">
                {isMounted ? aiText : ''}
                <span className="inline-block w-[2px] h-3.5 bg-purple-500 ml-0.5 animate-pulse" />
              </div>
              
              <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                <Smile className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                <Paperclip className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-purple-700 transition-colors">
                  <Send className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}