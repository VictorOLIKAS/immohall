import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';

const LISTINGS = [
  {
    id: 1,
    slug: 'appartement-4p-lyon-6',
    type: 'Appartement · Vente',
    title: 'Appartement 4 pièces',
    location: 'Lyon - Rhône (69)',
    surface: '92 m²',
    rooms: '4 pièces',
    extra: '3 chambres',
    price: '485 000 €',
    badge: { label: "TEAM L'ENSEIGNE IMMO", color: 'bg-orange-500' },
    image: '/images/listing-1.jpg',
  },
  {
    id: 2,
    slug: 'plateau-bureaux-bordeaux',
    type: 'Bureaux · Vente',
    title: 'Plateau de bureaux',
    location: 'Bordeaux - Gironde (33)',
    surface: '180 m²',
    rooms: '6 bureaux',
    extra: 'Parking',
    price: '620 000 €',
    badge: { label: "TEAM COMMERC'IMMO", color: 'bg-orange-500' },
    image: '/images/listing-2.jpg',
  },
  {
    id: 3,
    slug: 'fonds-commerce-marseille',
    type: 'Commerce · Fonds',
    title: 'Fonds de commerce',
    location: 'Marseille - Bouches-du-Rhône (13)',
    surface: '125 m²',
    rooms: 'Centre-ville',
    extra: '',
    price: '295 000 €',
    badge: { label: 'PROFESSIONNEL', color: 'bg-navy-700' },
    image: '/images/listing-3.jpg',
  },
  {
    id: 4,
    slug: 'maison-piscine-ain',
    type: 'Maison · Vente',
    title: 'Maison avec piscine',
    location: "Aix-en-Provence - Bouches-du-Rhône (13)",
    surface: '165 m²',
    rooms: '6 pièces',
    extra: '4 chambres',
    price: '890 000 €',
    badge: { label: 'EXCLUSIVITÉ', color: 'bg-purple-600' },
    image: '/images/listing-4.jpg',
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-10 bg-navy-50/30">
      <div className="container-hall">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <h2 className="section-title">Les annonces à la une</h2>
<p className="section-subtitle">
  Découvrez une sélection d&apos;opportunités proposées par la Team L'Enseigne Immo et nos professionnels partenaires.
</p>
          </div>
          <Link
            href="/recherche"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold 
                       hover:text-orange-600 transition text-sm shrink-0"
          >
            Toutes les annonces →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LISTINGS.map((l) => (
            <Link
              key={l.id}
              href={`/annonce/${l.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card 
                         hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-44 bg-navy-100">
                <Image
                  src={l.image}
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
                             flex items-center justify-center hover:bg-white 
                             transition z-10"
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

                <div className="mt-2 flex items-center gap-2 text-[11px] text-navy-500 
                                border-t border-navy-50 pt-2">
                  <span>{l.surface}</span>
                  <span>·</span>
                  <span>{l.rooms}</span>
                  {l.extra && (
                    <>
                      <span>·</span>
                      <span>{l.extra}</span>
                    </>
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-bold text-navy-900">{l.price}</span>
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