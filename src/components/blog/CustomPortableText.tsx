import { PortableTextComponents } from '@portabletext/react';
import React from 'react';
import { urlFor } from '@/sanity/lib/image';

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

const getBlockText = (block: any) => {
  if (!block || !block.children) return '';
  return block.children.map((child: any) => child.text || '').join('');
};

export const customComponents: PortableTextComponents = {
  block: {
    h2: (props) => {
      const id = slugify(getBlockText(props.value));
      return (
        <h2 id={id} className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-12 mb-4 scroll-mt-24">
          {props.children}
        </h2>
      );
    },
    h3: (props) => {
      const id = slugify(getBlockText(props.value));
      return (
        <h3 id={id} className="text-xl font-semibold text-neutral-800 mt-8 mb-3 scroll-mt-24">
          {props.children}
        </h3>
      );
    },
    blockquote: (props) => (
      <blockquote className="my-6 border-l-4 border-indigo-600 pl-4 italic text-neutral-700 font-serif text-lg">
        {props.children}
      </blockquote>
    ),
    normal: (props) => (
      <p className="mb-6 text-neutral-800 leading-relaxed text-base sm:text-lg">
        {props.children}
      </p>
    ),
  },
  list: {
    bullet: (props) => <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-800">{props.children}</ul>,
    number: (props) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-neutral-800">{props.children}</ol>,
  },
  marks: {
    code: (props) => (
      <code className="bg-[#F4F4F2] text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono border border-neutral-200">
        {props.children}
      </code>
    ),
    link: (props) => {
      const href = props.value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-indigo-600 underline font-medium underline-offset-4 hover:text-indigo-800 transition-colors"
        >
          {props.children}
        </a>
      );
    },
  },
 types: {
      code: (props: any) => (
        <div className="my-8 rounded-xl bg-[#1E1E1E] text-neutral-100 p-4 font-mono text-sm overflow-x-auto border border-neutral-800 shadow-md">
          <pre>
            <code>{props.value?.code || props.children}</code>
          </pre>
        </div>
      ),
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value)?.url();
      if (!imageUrl) return null;

      return (
        <figure className="my-8 flex flex-col items-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-neutral-200 bg-white p-2 shadow-sm">
            <img
              src={imageUrl}
              alt={value.alt || value.caption || 'Article image proof'}
              className="w-full h-auto rounded-lg object-contain max-h-[550px] mx-auto"
              loading="lazy"
            />
          </div>
          {(value.caption || value.alt) && (
            <figcaption className="mt-3 text-center text-xs text-neutral-500 font-medium">
              📷 {value.caption || value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};