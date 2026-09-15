import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import ArticlesGrid, { ArticleListItem } from '@/components/blog/ArticlesGrid';

export const metadata: Metadata = {
  title: 'Articles & Insights | Bipin',
  description: 'Explore the latest articles, guides, and technical insights from Khubex.',
};

async function getAllArticles(): Promise<ArticleListItem[]> {
  const query = `*[_type == "article"] | order(publishedAt desc){
    title,
    slug,
    publishedAt,
    summary,
    readingTime,
    category,
    "coverImageUrl": coverImage.asset->url
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function ArticlesIndexPage() {
  const articles = await getAllArticles();

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#171717] py-16 px-6 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            Articles & Insights
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Deep dives into digital marketing, technical SEO, web development, and modern engineering practices.
          </p>
        </header>

        <ArticlesGrid articles={articles} />
      </div>
    </main>
  );
}