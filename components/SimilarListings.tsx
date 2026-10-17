import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';
import type { Listing } from '@/data/listings';

type SimilarListingsProps = {
  listings: Listing[];
};

export default function SimilarListings({ listings }: SimilarListingsProps) {
  return (
    <section className="py-10 bg-navy-50/30">
      <div className="container-hall">
        <div className="mb-6">
          <h2 className="section-title">Biens similaires</h2>
          <p className="section-subtitle">
            D&apos;autres opportunités qui pourraient vous intéresser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {listings.map((l) => (
            <Link
              key={l.id}
              href={`/annonce/${l.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card 
                         hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-44 bg-navy-100">
                <Image
                  src={l.images[0]}
                  alt={l.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className={`absolute top-3 left-3 ${l.badge.color} text-white 
                              text-[10px] font-bold px-2.5 py-1 rounded-md 
                              tracking-wider z-10`}
                >
                  {l.badge.label}
                </span>
                <button
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full 
                             flex items-center justify-center hover:bg-white transition z-10"
                  aria-label="Ajouter aux favoris"
                >
                  <Heart size={16} className="text-navy-500" />
                </button>
              </div>

              <div className="p-3">
                <p className="text-[10px] uppercase tracking-wider text-navy-400 font-semibold">
                  {l.type}
                </p>
                <h3 className="mt-1 font-bold text-navy-900 group-hover:text-orange-500 transition text-sm">
                  {l.title}
                </h3>
                <p className="mt-1 text-xs text-navy-500 flex items-center gap-1">
                  <MapPin size={11} />
                  {l.location}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-base font-bold text-navy-900">
                    {new Intl.NumberFormat('fr-FR').format(l.price)} €
                  </span>
                  <span className="text-orange-500 text-xs font-semibold 
                                   group-hover:translate-x-1 transition-transform">
                    Voir →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}