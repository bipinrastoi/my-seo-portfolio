import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Download, 
  FileText, 
  Eye 
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

async function getProjectData(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    category,
    description,
    "imageUrl": coalesce(mainImage.asset->url, image.asset->url, coverImage.asset->url),
    imageAlt,
    authorityBadge,
    metric,
    tags,
    liveUrl,
    body,
    "pdfUrl": coalesce(caseStudyPdf.asset->url, pdfFile.asset->url, pdf.asset->url, file.asset->url)
  }`;

  return await client.fetch(query, { slug }, { next: { revalidate: 30 } });
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study`,
    description: project.description || `Case study and technical document for ${project.title}`,
  };
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* TOP BAR / BACK NAVIGATION */}
        <div className="flex items-center justify-between">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors border border-slate-200 bg-slate-50 px-3.5 py-2 rounded-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-sm transition-colors"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* HEADER SECTION */}
        <div className="border border-slate-200 bg-white p-6 sm:p-8 rounded-sm space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 rounded-sm">
              {project.category || 'Case Study'}
            </span>
            
            {project.authorityBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 rounded-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                {project.authorityBadge}
              </span>
            )}

            {project.metric && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 rounded-sm">
                <Zap className="w-3.5 h-3.5 fill-emerald-600" />
                {project.metric}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.description}
            </p>
          )}

          {/* TAGS */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="text-[11px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 rounded-sm border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* SHARP LIGHT-THEME PDF ACTION BAR */}
        {project.pdfUrl && (
          <div className="border border-slate-200 bg-slate-50/70 p-5 sm:p-6 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-white border border-slate-200 rounded-sm text-slate-700">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Case Study Document</h3>
                <p className="text-xs text-slate-500 font-normal">PDF Format • Complete technical documentation</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-sm transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-slate-600" />
                <span>Open Full View</span>
              </a>

              <a
                href={`${project.pdfUrl}?dl=`}
                download
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-600 text-xs font-semibold rounded-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        )}

        {/* OPTIONAL CONTENT OR IMAGE IF NO PDF IS PRESENT */}
        {!project.pdfUrl && (
          <div className="border border-slate-200 bg-white p-6 rounded-sm space-y-4">
            {project.imageUrl && (
              <div className="relative aspect-[16/9] w-full bg-slate-100 border border-slate-200">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt || project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {project.body && (
              <div className="prose prose-slate max-w-none pt-4 border-t border-slate-100 text-sm">
                <PortableText value={project.body} />
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}