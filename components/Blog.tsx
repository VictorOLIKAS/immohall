import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    slug: 'acheter-appartement-france-etapes',
    category: 'Résidentiel',
    title: "Acheter un appartement en France : les étapes essentielles",
    excerpt:
      "Découvrez les principales étapes à connaître avant l'achat d'un logement.",
    image: '/images/blog-1.jpg',
  },
  {
    slug: 'fonds-commerce-verifier',
    category: 'Immobilier professionnel',
    title: 'Fonds de commerce : quels éléments vérifier ?',
    excerpt:
      "Les principaux critères à analyser avant d'acquérir un fonds de commerce.",
    image: '/images/blog-2.jpg',
  },
  {
    slug: 'analyser-investissement-immobilier',
    category: 'Investissement',
    title: 'Comment analyser un investissement immobilier ?',
    excerpt:
      'Emplacement, prix, surface, rendement et potentiel du bien.',
    image: '/images/blog-3.jpg',
  },
];

export default function Blog() {
  return (
    <section className="py-10">
      <div className="container-hall">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <h2 className="section-title">Conseils & actualités immobilières</h2>
            <p className="section-subtitle">
              Des contenus pratiques pour comprendre le marché et avancer dans votre projet immobilier.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold 
                       hover:text-orange-600 transition text-sm shrink-0"
          >
            Toutes les actualités
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="relative h-40 rounded-xl overflow-hidden mb-4 
                              shadow-card group-hover:shadow-card-hover 
                              transition-all duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xs uppercase tracking-wider text-orange-500 font-bold">
                {post.category}
              </p>
              <h3 className="mt-2 font-bold text-navy-900 group-hover:text-orange-500 
                             transition leading-snug text-base">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-3 text-sm font-semibold text-orange-500 
                             group-hover:translate-x-1 transition-transform inline-block">
                Lire l&apos;article →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}