'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Search,
  ArrowRight,
  Clock,
  Calendar,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { POSTS, CATEGORIES } from '@/data/posts';

export default function BlogPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = [...POSTS];

    if (filter !== 'all') {
      result = result.filter((p) => p.category === filter);
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.excerpt.toLowerCase().includes(s)
      );
    }

    return result;
  }, [filter, search]);

  const featured = POSTS[0];
  const restPosts = filter === 'all' && !search ? POSTS.slice(1) : filtered;

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-navy-100">
          <div className="container-hall py-3">
            <nav className="flex items-center gap-1.5 text-xs text-navy-500">
              <Link href="/" className="hover:text-orange-500 transition">
                Accueil
              </Link>
              <ChevronRight size={12} />
              <span className="text-navy-900 font-medium">Actualités</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <span className="inline-block bg-orange-100 text-orange-600 
                             text-xs font-bold px-3 py-1.5 rounded-full 
                             tracking-wider uppercase mb-4">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
              Conseils & <span className="text-orange-500">actualités</span>
            </h1>
            <p className="mt-4 text-navy-500 text-base max-w-2xl mx-auto">
              Des contenus pratiques pour comprendre le marché et avancer dans
              votre projet immobilier.
            </p>
          </div>
        </section>

        {/* Filters + Search */}
        <section className="py-6">
          <div className="container-hall">
            <div className="flex flex-col lg:flex-row gap-4 items-start 
                            lg:items-center justify-between">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setFilter(cat.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold 
                                transition ${
                                  filter === cat.key
                                    ? 'bg-navy-900 text-white'
                                    : 'bg-white text-navy-600 border border-navy-100 hover:border-navy-200'
                                }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-64 shrink-0">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                             text-navy-400"
                />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg border 
                             border-navy-100 text-sm focus:outline-none 
                             focus:ring-2 focus:ring-orange-400 bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured article */}
        {filter === 'all' && !search && (
          <section className="pb-8">
            <div className="container-hall">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-2 gap-6 bg-white rounded-3xl 
                           border border-navy-100 overflow-hidden 
                           hover:shadow-card-hover transition-all"
              >
                <div className="relative h-64 md:h-auto md:min-h-[380px] 
                                bg-navy-100">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 
                               transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 
                                   text-white text-[10px] font-bold px-3 py-1 
                                   rounded-md tracking-wider">
                    À LA UNE
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-wider text-orange-500 
                                font-bold">
                    {featured.categoryLabel}
                  </p>
                  <h2 className="mt-2 text-xl sm:text-2xl font-bold 
                                 text-navy-900 group-hover:text-orange-500 
                                 transition leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm text-navy-500 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs 
                                  text-navy-400">
                    <span className="flex items-center gap-1.5">
                      <div
                        className={`w-6 h-6 rounded-full ${featured.author.color} 
                                    flex items-center justify-center 
                                    text-white text-[9px] font-bold`}
                      >
                        {featured.author.initials}
                      </div>
                      {featured.author.name}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featured.readTime} min
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 
                                   text-orange-500 font-semibold text-sm 
                                   group-hover:translate-x-1 transition-transform">
                    Lire l&apos;article
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Articles grid */}
        <section className="pb-14">
          <div className="container-hall">
            {filtered.length > 0 || (filter !== 'all' || search) ? (
              <>
                {restPosts.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restPosts.map((post) => (
                      <ArticleCard key={post.id} post={post} />
                    ))}
                  </div>
                )}

                {restPosts.length === 0 && filtered.length === 0 && (
                  <EmptyState search={search} filter={filter} />
                )}
              </>
            ) : (
              <EmptyState search={search} filter={filter} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ArticleCard({ post }: { post: any }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-navy-100 
                 overflow-hidden hover:shadow-card-hover transition-all"
    >
      <div className="relative h-48 bg-navy-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 
                     transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <p className="text-[10px] uppercase tracking-wider text-orange-500 
                      font-bold">
          {post.categoryLabel}
        </p>
        <h3 className="mt-2 font-bold text-navy-900 group-hover:text-orange-500 
                       transition leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-xs text-navy-500 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-navy-50 flex items-center 
                        justify-between text-xs text-navy-400">
          <span className="flex items-center gap-1.5">
            <div
              className={`w-6 h-6 rounded-full ${post.author.color} 
                          flex items-center justify-center text-white 
                          text-[9px] font-bold`}
            >
              {post.author.initials}
            </div>
            {post.author.name}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}

function EmptyState({ search, filter }: { search: string; filter: string }) {
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-12 
                    text-center">
      <p className="text-navy-900 font-bold text-lg mb-2">
        Aucun article trouvé
      </p>
      <p className="text-sm text-navy-500">
        {search
          ? `Aucun résultat pour « ${search} »`
          : 'Aucun article dans cette catégorie.'}
      </p>
    </div>
  );
}