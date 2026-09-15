'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleListItem {
  title: string;
  slug: { current: string };
  publishedAt?: string;
  summary?: string;
  readingTime?: number;
  coverImageUrl?: string;
  category?: string;
}

interface ArticlesGridProps {
  articles: ArticleListItem[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from articles
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((art) => {
      if (art.category) set.add(art.category);
    });
    return ['All', ...Array.from(set)];
  }, [articles]);

  // Filter articles dynamically
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.summary && article.summary.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div>
      {/* Controls: Search Bar & Category Filter */}
      <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        <input
          type="text"
          placeholder="Search articles by title or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:max-w-xs px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
        />

        {categories.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-200/60 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid Display */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug.current}
              href={`/articles/${article.slug.current}`}
              className="group flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {article.coverImageUrl && (
                <div className="relative h-52 w-full bg-neutral-50 overflow-hidden">
                  <Image
                    src={article.coverImageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium mb-3">
                    {article.publishedAt && (
                      <time>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    )}
                    {article.readingTime && (
                      <>
                        <span>•</span>
                        <span>{article.readingTime} min read</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>
                  {article.summary && (
                    <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  )}
                </div>
                <span className="text-xs font-semibold text-indigo-600 group-hover:underline inline-flex items-center gap-1">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center">
          <p className="text-neutral-500 italic">No articles match your search criteria.</p>
        </div>
      )}
    </div>
  );
}