import Image from 'next/image';
import Link from 'next/link';

export interface ArticlePreview {
  title: string;
  slug: { current: string };
  summary?: string;
  publishedAt?: string;
  coverImageUrl?: string;
}

interface RelatedArticlesProps {
  articles: ArticlePreview[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((item) => (
          <Link
            key={item.slug.current}
            href={`/articles/${item.slug.current}`}
            className="group flex flex-col rounded-xl border border-neutral-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
          >
            {item.coverImageUrl && (
              <div className="relative h-44 w-full bg-neutral-50 overflow-hidden">
                <Image
                  src={item.coverImageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs text-neutral-400 font-medium mb-1">
                {item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : 'Article'}
              </p>
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                {item.title}
              </h3>
              {item.summary && (
                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}