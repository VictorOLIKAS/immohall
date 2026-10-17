import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Home,
  MapPin,
  Heart,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LISTINGS } from '@/data/listings';

export const metadata = {
  title: 'Acheter un bien immobilier en France',
  description:
    "Découvrez notre sélection d'appartements et maisons à vendre partout en France.",
};

export default function AchatPage() {
  const properties = LISTINGS.filter(
    (l) =>
      l.category === 'residentiel' &&
      (l.type.includes('Vente') || !l.type.includes('Location'))
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
              <Link
                href="/residentiel"
                className="hover:text-orange-500 transition"
              >
                Résidentiel
              </Link>
              <ChevronRight size={12} />
              <span className="text-navy-900 font-medium">Acheter</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-12 h-12 
                              rounded-2xl bg-orange-100 mb-4">
                <Home size={22} className="text-orange-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold 
                             text-navy-900">
                Acheter un <span className="text-orange-500">bien immobilier</span>
              </h1>
              <p className="mt-4 text-navy-500 text-base max-w-xl">
                Découvrez notre sélection d&apos;appartements et de maisons à
                vendre partout en France.
              </p>
            </div>
          </div>
        </section>

        {/* Stats + Search */}
        <section className="py-6">
          <div className="container-hall">
            <div className="flex flex-col sm:flex-row items-start 
                            sm:items-center justify-between gap-4">
              <p className="text-sm text-navy-500">
                <strong className="text-orange-500">{properties.length}</strong>{' '}
                bien{properties.length !== 1 ? 's' : ''} à vendre
              </p>
              <Link
                href="/recherche"
                className="inline-flex items-center gap-2 
                           bg-white border border-navy-100 
                           hover:border-orange-300 px-4 py-2 rounded-lg 
                           text-sm font-semibold text-navy-700 
                           hover:text-orange-500 transition"
              >
                <SlidersHorizontal size={14} />
                Filtres avancés
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
              <EmptyState category="à vendre" />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14">
          <div className="container-hall">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 
                            rounded-3xl p-8 sm:p-10 text-white 
                            flex flex-col sm:flex-row items-start 
                            sm:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Vous vendez un bien ?
                </h2>
                <p className="mt-2 text-white/70 text-sm">
                  Confiez-nous votre projet et bénéficiez de
                  l&apos;accompagnement de la Team L&apos;Enseigne Immo.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary text-sm shrink-0"
              >
                Demander une estimation
                <ChevronRight size={14} />
              </Link>
            </div>
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
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 
                     hover:bg-white rounded-full flex items-center 
                     justify-center transition z-10"
          aria-label="Ajouter aux favoris"
        >
          <Heart size={16} className="text-navy-500" />
        </button>
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

function EmptyState({ category }: { category: string }) {
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-12 
                    text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-navy-50 
                      flex items-center justify-center mb-4">
        <Search size={22} className="text-navy-400" />
      </div>
      <p className="text-navy-900 font-bold text-lg mb-2">
        Aucun bien {category} pour le moment
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