import React from 'react';

interface CalloutBoxProps {
  type?: 'takeaway' | 'quick-answer' | 'info';
  title?: string;
  children: React.ReactNode;
}

export default function CalloutBox({ type = 'info', title, children }: CalloutBoxProps) {
  const styles = {
    takeaway: {
      border: 'border-l-4 border-amber-500 bg-amber-50/60 text-amber-950',
      badge: 'bg-amber-100 text-amber-800',
      defaultTitle: '💡 Key Takeaway',
    },
    'quick-answer': {
      border: 'border-l-4 border-indigo-600 bg-indigo-50/60 text-indigo-950',
      badge: 'bg-indigo-100 text-indigo-800',
      defaultTitle: '⚡ Quick Answer',
    },
    info: {
      border: 'border-l-4 border-blue-500 bg-blue-50/60 text-blue-950',
      badge: 'bg-blue-100 text-blue-800',
      defaultTitle: 'ℹ️ Note',
    },
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <aside className={`my-8 rounded-r-xl p-5 ${currentStyle.border} shadow-sm`}>
      <div className="flex items-center gap-2 mb-2 font-bold text-sm tracking-wide">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${currentStyle.badge}`}>
          {title || currentStyle.defaultTitle}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-neutral-800 font-normal">
        {children}
      </div>
    </aside>
  );
}