import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReadingProgress from '@/components/blog/ReadingProgress';
import TableOfContents from '@/components/blog/TableOfContents';
import { customComponents } from '@/components/blog/CustomPortableText';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    publishedAt,
    summary,
    body,
    content,
    "coverImageUrl": coverImage.asset->url
  }`;
  
  return await client.fetch(query, { slug }, { cache: 'no-store' });
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const richTextContent = article.content || article.body || [];

  return (
    <article className="min-h-screen bg-[#FAFAF8] text-[#171717] py-12 px-6 sm:px-12">
      <ReadingProgress />

      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb Link */}
        <Link 
          href="/articles" 
          className="text-xs font-semibold text-indigo-600 hover:underline mb-8 inline-block"
        >
          ← Back to Articles
        </Link>

        {/* Article Header */}
        <header className="max-w-[760px] mb-10">
          <p className="text-xs text-neutral-500 font-semibold mb-2">
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Recent Post'}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 mb-4 leading-tight">
            {article.title}
          </h1>
          {article.summary && (
            <p className="text-base text-neutral-600 leading-relaxed">
              {article.summary}
            </p>
          )}
        </header>

        {/* Featured Cover Image */}
        {article.coverImageUrl && (
          <div className="relative h-80 sm:h-96 w-full max-w-4xl mb-12 overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 flex items-center justify-center">
            <Image
              src={article.coverImageUrl}
              alt={article.title}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        )}

        {/* Two-Column Layout (Desktop TOC + Article Body) */}
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16 items-start">
          <TableOfContents content={richTextContent} />

          <div className="max-w-[760px] prose prose-neutral text-neutral-800 space-y-4 leading-relaxed">
            {richTextContent.length > 0 ? (
              <PortableText value={richTextContent} components={customComponents} />
            ) : (
              <p className="text-neutral-500 italic">No content body published for this article yet.</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}