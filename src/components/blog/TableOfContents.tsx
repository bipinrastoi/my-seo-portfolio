'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: 'h2' | 'h3';
}

interface TableOfContentsProps {
  content: any[];
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!content || !Array.isArray(content)) return;

    const extracted: TocItem[] = [];

    content.forEach((block: any) => {
      if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
        const text = block.children?.map((c: any) => c.text || '').join('') || '';
        const id = text
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-');

        if (text && id) {
          extracted.push({ id, text, level: block.style as 'h2' | 'h3' });
        }
      }
    });

    setHeadings(extracted);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8 rounded-xl border border-neutral-200 bg-white p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left font-semibold text-neutral-900 text-sm"
        >
          <span>On this page ({headings.length})</span>
          <span className="text-neutral-500 text-xs">{isOpen ? '▲ Hide' : '▼ Show'}</span>
        </button>
        {isOpen && (
          <nav className="mt-4 pt-3 border-t border-neutral-100 flex flex-col gap-2">
            {headings.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-sm transition-colors ${
                  item.level === 'h3' ? 'pl-4' : ''
                } ${
                  activeId === item.id
                    ? 'font-medium text-indigo-600'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside className="hidden lg:block sticky top-28 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
          On this page
        </p>
        <nav className="flex flex-col gap-2.5 text-sm">
          {headings.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors leading-snug ${
                item.level === 'h3' ? 'pl-3 border-l border-neutral-200' : 'font-medium'
              } ${
                activeId === item.id
                  ? 'text-indigo-600 font-semibold border-indigo-600'
                  : 'text-neutral-500 hover:text-neutral-900 border-transparent'
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}