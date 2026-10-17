import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';
import type { Listing } from '@/data/listings';

type ResultCardProps = {
  listing: Listing;
};

export default function ResultCard({ listing }: ResultCardProps) {
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(listing.price);

  return (
    <Link
      href={`/annonce/${listing.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-card 
                 hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative h-44 bg-navy-100">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className={`absolute top-3 left-3 ${listing.badge.color} text-white 
                      text-[10px] font-bold px-2.5 py-1 rounded-md 
                      tracking-wider z-10`}
        >
          {listing.badge.label}
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
          {listing.type}
        </p>
        <h3 className="mt-1 font-bold text-navy-900 group-hover:text-orange-500 
                       transition text-sm line-clamp-2">
          {listing.title}
        </h3>
        <p className="mt-1 text-xs text-navy-500 flex items-center gap-1">
          <MapPin size={11} />
          {listing.location}
        </p>

        <div className="mt-3 flex items-center gap-2 text-[11px] text-navy-500 
                        border-t border-navy-50 pt-2">
          <span>{listing.surface} m²</span>
          <span>·</span>
          <span>{listing.rooms}</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-bold text-navy-900">
            {formattedPrice} €
          </span>
          <span className="text-orange-500 text-xs font-semibold 
                           group-hover:translate-x-1 transition-transform">
            Voir →
          </span>
        </div>
      </div>
    </Link>
  );
}