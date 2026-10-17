import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Building2,
  MapPin,
  Heart,
  Search,
  Briefcase,
  Store,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LISTINGS } from '@/data/listings';

export const metadata = {
  title: 'Immobilier professionnel',
  description:
    "Murs commerciaux, fonds de commerce, bureaux et locaux professionnels à la vente et à la location.",
};

const SUB_CATEGORIES = [
  {
    href: '/commercial/murs',
    icon: Store,
    title: 'Murs commerciaux',
    desc: 'Locaux avec fonds de commerce',
  },
  {
    href: '/commercial/bureaux',
    icon: Building2,
    title: 'Bureaux',
    desc: 'Locaux professionnels',
  },
  {
    href: '/commercial/entreprise',
    icon: Briefcase,
    title: 'Entreprises',
    desc: 'Cession et reprise',
  },
];

export default function CommercialPage() {
  const properties = LISTINGS.filter(
    (l) => l.category === 'commercial' || l.category === 'bureaux'
  );

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
              <span className="text-navy-900 font-medium">
                Immobilier professionnel
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-12 h-12 
                              rounded-2xl bg-orange-100 mb-4">
                <Building2 size={22} className="text-orange-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold 
                             text-navy-900">
                Immobilier <span className="text-orange-500">professionnel</span>
              </h1>
              <p className="mt-4 text-navy-500 text-base max-w-xl">
                Murs commerciaux, fonds de commerce, bureaux et locaux
                professionnels à la vente et à la location.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-categories */}
        <section className="py-8">
          <div className="container-hall">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SUB_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="group bg-white border border-navy-100 
                               rounded-2xl p-5 hover:border-orange-300 
                               hover:shadow-card transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange-50 
                                    flex items-center justify-center mb-3 
                                    group-hover:bg-orange-100 transition">
                      <Icon size={20} className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-navy-900 text-sm">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-navy-500 mt-1">{cat.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-4">
          <div className="container-hall">
            <div className="flex items-center justify-between">
              <p className="text-sm text-navy-500">
                <strong className="text-orange-500">{properties.length}</strong>{' '}
                biens disponibles
              </p>
              <Link
                href="/recherche"
                className="inline-flex items-center gap-2 
                           text-orange-500 font-semibold text-sm 
                           hover:text-orange-600 transition"
              >
                Voir plus
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Listings grid */}
        <section className="pb-14">
          <div className="container-hall">
            {properties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {properties.map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ListingCard({ listing }: { listing: any }) {
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(listing.price);

  return (
    <Link
      href={`/annonce/${listing.slug}`}
      className="group bg-white rounded-2xl overflow-hidden 
                 border border-navy-100 hover:shadow-card-hover 
                 transition-all duration-300"
    >
      <div className="relative h-48 bg-navy-100">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover group-hover:scale-105 
                     transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span
          className={`absolute top-3 left-3 ${listing.badge.color} 
                      text-white text-[10px] font-bold px-2.5 py-1 
                      rounded-md tracking-wider z-10`}
        >
          {listing.badge.label}
        </span>
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-wider text-navy-400 
                      font-semibold">
          {listing.type}
        </p>
        <h3 className="mt-1 font-bold text-navy-900 
                       group-hover:text-orange-500 transition 
                       text-sm line-clamp-2">
          {listing.title}
        </h3>
        <p className="mt-1 text-xs text-navy-500 flex items-center gap-1">
          <MapPin size={11} />
          {listing.location}
        </p>

        <div className="mt-3 flex items-center gap-2 text-[11px] 
                        text-navy-500 border-t border-navy-50 pt-2">
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

function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-12 
                    text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-navy-50 
                      flex items-center justify-center mb-4">
        <Search size={22} className="text-navy-400" />
      </div>
      <p className="text-navy-900 font-bold text-lg mb-2">
        Aucun bien professionnel pour le moment
      </p>
      <p className="text-sm text-navy-500 mb-4">
        Revenez bientôt ou consultez toutes nos annonces.
      </p>
      <Link href="/recherche" className="btn-primary text-sm inline-flex">
        Voir toutes les annonces
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}