import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  Link2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  POSTS,
  getPostBySlug,
  getSimilarPosts,
} from '@/data/posts';

// ============================================
// أيقونة Twitter (SVG مدمج)
// ============================================
function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ============================================
// أيقونة LinkedIn (SVG مدمج)
// ============================================
function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Article introuvable' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const similar = getSimilarPosts(post.id, post.category, 3);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    'fr-FR',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-navy-100">
          <div className="container-hall py-3">
            <nav className="flex items-center gap-1.5 text-xs text-navy-500 
                            flex-wrap">
              <Link href="/" className="hover:text-orange-500 transition">
                Accueil
              </Link>
              <ChevronRight size={12} />
              <Link href="/blog" className="hover:text-orange-500 transition">
                Actualités
              </Link>
              <ChevronRight size={12} />
              <span className="text-navy-900 font-medium truncate max-w-xs">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-10">
          <div className="container-hall max-w-3xl">
            <span className="inline-block bg-orange-100 text-orange-600 
                             text-xs font-bold px-3 py-1.5 rounded-full 
                             tracking-wider uppercase mb-4">
              {post.categoryLabel}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold 
                           text-navy-900 leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-navy-500 text-base sm:text-lg 
                          leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm 
                            text-navy-500">
              <span className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full ${post.author.color} 
                              flex items-center justify-center text-white 
                              text-xs font-bold`}
                >
                  {post.author.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-xs 
                                leading-tight">
                    {post.author.name}
                  </p>
                  <p className="text-[10px] text-navy-400">
                    {post.author.role}
                  </p>
                </div>
              </span>

              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>

              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} min de lecture
              </span>
            </div>

            {/* Share buttons */}
            <div className="mt-6 pt-6 border-t border-navy-100 flex 
                            items-center gap-3">
              <span className="text-xs font-semibold text-navy-500">
                Partager :
              </span>
              <button
                className="w-9 h-9 rounded-full bg-[#1da1f2] text-white 
                           flex items-center justify-center 
                           hover:opacity-90 transition"
                aria-label="Twitter"
              >
                <TwitterIcon size={14} />
              </button>
              <button
                className="w-9 h-9 rounded-full bg-[#0077b5] text-white 
                           flex items-center justify-center 
                           hover:opacity-90 transition"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={14} />
              </button>
              <button
                className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 
                           flex items-center justify-center transition 
                           text-navy-700"
                aria-label="Copier le lien"
              >
                <Link2 size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="pb-10">
          <div className="container-hall max-w-4xl">
            <div className="relative h-64 sm:h-96 lg:h-[480px] rounded-2xl 
                            overflow-hidden bg-navy-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-12">
          <div className="container-hall max-w-3xl">
            <article className="space-y-5">
              {post.content.map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={idx}
                      className="text-xl sm:text-2xl font-bold 
                                 text-navy-900 mt-8 mb-3 scroll-mt-24"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-navy-600 
                               leading-relaxed"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Author card */}
            <div className="mt-10 bg-navy-50/50 rounded-2xl p-6 
                            flex flex-col sm:flex-row items-start 
                            sm:items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full ${post.author.color} 
                            flex items-center justify-center text-white 
                            font-bold text-lg shrink-0`}
              >
                {post.author.initials}
              </div>
              <div className="flex-1">
                <p className="text-xs text-navy-400 uppercase tracking-wider 
                              font-semibold">
                  Écrit par
                </p>
                <p className="font-bold text-navy-900 mt-0.5">
                  {post.author.name}
                </p>
                <p className="text-xs text-navy-500 mt-0.5">
                  {post.author.role}
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-secondary text-sm shrink-0"
              >
                Contacter
              </Link>
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-orange-500 
                           hover:text-orange-600 font-semibold text-sm 
                           transition"
              >
                <ArrowLeft size={14} />
                Retour à tous les articles
              </Link>
            </div>
          </div>
        </section>

        {/* Similar articles */}
        <section className="py-12 bg-navy-50/30">
          <div className="container-hall">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="section-title">Articles similaires</h2>
                <p className="section-subtitle">
                  Continuez votre lecture avec ces articles.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 
                           text-orange-500 font-semibold text-sm 
                           hover:text-orange-600 transition"
              >
                Voir tout
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {similar.map((sPost) => (
                <Link
                  key={sPost.id}
                  href={`/blog/${sPost.slug}`}
                  className="group bg-white rounded-2xl border 
                             border-navy-100 overflow-hidden 
                             hover:shadow-card-hover transition-all"
                >
                  <div className="relative h-40 bg-navy-100">
                    <Image
                      src={sPost.image}
                      alt={sPost.title}
                      fill
                      className="object-cover group-hover:scale-105 
                                 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-wider 
                                  text-orange-500 font-bold">
                      {sPost.categoryLabel}
                    </p>
                    <h3 className="mt-1.5 font-bold text-navy-900 
                                   group-hover:text-orange-500 transition 
                                   text-sm leading-snug line-clamp-2">
                      {sPost.title}
                    </h3>
                    <p className="mt-2 text-xs text-navy-400 flex 
                                  items-center gap-1">
                      <Clock size={11} />
                      {sPost.readTime} min
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}