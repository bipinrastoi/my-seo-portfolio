interface ArticleSchemaProps {
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export default function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = 'Bipin Raskoti',
  faqItems,
}: ArticleSchemaProps) {
  // Article / BlogPosting Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description: description || '',
    image: imageUrl ? [imageUrl] : [],
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || datePublished || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: authorName,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bipin.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Khubex',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bipin.com'}/logo.png`,
      },
    },
  };

  // FAQ Schema (if FAQs exist on the article)
  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}