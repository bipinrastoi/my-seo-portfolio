

import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['600', '700'],
});

interface Article {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
}

async function getFeaturedArticles(): Promise<Article[]> {
  // Pulls the latest 4 published articles from Sanity
  const query = `*[_type == "article"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    summary
  }`;

  return await client.fetch(query, {}, { cache: 'no-store' });
}

export default async function BlogHighlights() {
  const articles = await getFeaturedArticles();

  return (
    <section className="py-16 px-6 sm:px-12 bg-[#090D16] text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED ARTICLES & INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              <span className={`${displayFont.className} italic text-indigo-400 pr-1`}>Blog</span> Highlights.
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Explore latest updates on Next.js, Technical SEO, AEO strategies, and modern web development.
            </p>
          </div>

          <Link 
            href="/articles" 
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all text-slate-200 self-start sm:self-auto"
          >
            <span>Explore All Blogs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Dynamic Card Grid fetched from Sanity */}
        {articles.length === 0 ? (
          <p className="text-slate-500 text-sm italic">No published articles to highlight right now.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((post) => (
              <article 
                key={post._id} 
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="text-indigo-400 font-semibold">
                      {post.publishedAt 
                        ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                        : 'Recent'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    <Link href={`/articles/${post.slug}`}>
                      <span className="absolute inset-0 z-10" />
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors mt-2">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}