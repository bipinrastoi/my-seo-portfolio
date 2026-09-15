import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowUpRight, 
  Zap, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

import { client } from '@/sanity/lib/client'; 

interface SanityProject {
  _id: string;
  slug: { current: string } | string;
  title: string;
  category?: string;
  description?: string;
  imageUrl?: string; // Direct image URL from Sanity asset
  imageAlt?: string;
  authorityBadge?: string;
  metric?: string;
  tags?: string[];
  liveUrl?: string;
}

// GROQ query: Uses coalesce to check mainImage, image, or coverImage automatically
async function getProjects(): Promise<SanityProject[]> {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    "imageUrl": coalesce(mainImage.asset->url, image.asset->url, coverImage.asset->url),
    imageAlt,
    authorityBadge,
    metric,
    tags,
    liveUrl
  }`;

  return await client.fetch(query, {}, { next: { revalidate: 10 } });
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-600 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio & Case Studies</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500">Projects</span>
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            High-performance web applications, technical SEO case studies, and search engine optimization systems engineered for maximum authority and speed.
          </p>
        </div>

        {/* DYNAMIC SANITY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectSlug = typeof project.slug === 'string' ? project.slug : project.slug?.current;
            
            return (
              <article 
                key={project._id}
                className="group bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(79,70,229,0.12)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* OPTIMIZED SEO IMAGE CONTAINER */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title || 'Project image'}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                      No Image Uploaded
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {project.authorityBadge && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/80 text-[11px] font-bold text-indigo-600 shadow-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{project.authorityBadge}</span>
                    </div>
                  )}

                  {project.metric && (
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-emerald-400 border border-slate-700/60 flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-emerald-400" />
                      <span>{project.metric}</span>
                    </div>
                  )}
                </div>

                {/* CARD CONTENT BODY */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-600">
                      <span>{project.category || 'Case Study'}</span>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-indigo-600 transition-colors"
                          title="Live Site"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      <Link href={`/projects/${projectSlug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* TECH TAGS & LINK */}
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/projects/${projectSlug}`}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-2xl bg-indigo-50/80 hover:bg-indigo-600 text-indigo-600 hover:text-white text-xs font-bold transition-all duration-200 group/btn"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}