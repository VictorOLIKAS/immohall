import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Home,
  Maximize,
  Bed,
  Bath,
  ChevronRight,
  Check,
  Zap,
  Thermometer,
  Euro,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ListingGallery from '@/components/ListingGallery';
import LeadForm from '@/components/LeadForm';
import SimilarListings from '@/components/SimilarListings';

import {
  getListingBySlug,
  getSimilarListings,
  LISTINGS,
} from '@/data/listings';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    return { title: 'Bien introuvable' };
  }

  return {
    title: listing.title,
    description: listing.description.substring(0, 160),
  };
}

export default async function ListingPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const similarListings = getSimilarListings(listing.id, 4);
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(listing.price);
  const formattedCharges = new Intl.NumberFormat('fr-FR').format(listing.charges);
  const formattedTaxe = new Intl.NumberFormat('fr-FR').format(listing.taxeFonciere);

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
              <Link href="/recherche" className="hover:text-orange-500 transition">
                Annonces
              </Link>
              <ChevronRight size={12} />
              <span className="text-navy-900 font-medium truncate">
                {listing.title}
              </span>
            </nav>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <section className="py-8">
          <div className="container-hall">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* يسار: الصور + التفاصيل */}
              <div className="lg:col-span-2 space-y-6">
                {/* معرض الصور */}
                <ListingGallery images={listing.images} title={listing.title} />

                {/* العنوان + السعر */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <span
                      className={`inline-block ${listing.badge.color} text-white 
                                  text-[10px] font-bold px-2.5 py-1 rounded-md 
                                  tracking-wider mb-2`}
                    >
                      {listing.badge.label}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
                      {listing.title}
                    </h1>
                    <p className="mt-1 text-sm text-navy-500 flex items-center gap-1">
                      <MapPin size={13} />
                      {listing.location}
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <p className="text-2xl sm:text-3xl font-bold text-orange-500">
                      {formattedPrice} €
                    </p>
                    <p className="text-xs text-navy-400 mt-1">{listing.type}</p>
                  </div>
                </div>

                {/* الخصائص السريعة */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-navy-50/50 rounded-xl p-3 text-center">
                    <Maximize size={18} className="text-orange-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-navy-900">{listing.surface} m²</p>
                    <p className="text-[10px] text-navy-400 uppercase">Surface</p>
                  </div>
                  <div className="bg-navy-50/50 rounded-xl p-3 text-center">
                    <Home size={18} className="text-orange-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-navy-900">{listing.rooms}</p>
                    <p className="text-[10px] text-navy-400 uppercase">Pièces</p>
                  </div>
                  <div className="bg-navy-50/50 rounded-xl p-3 text-center">
                    <Bed size={18} className="text-orange-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-navy-900">{listing.beds}</p>
                    <p className="text-[10px] text-navy-400 uppercase">Chambres</p>
                  </div>
                  <div className="bg-navy-50/50 rounded-xl p-3 text-center">
                    <Bath size={18} className="text-orange-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-navy-900">{listing.dpe}</p>
                    <p className="text-[10px] text-navy-400 uppercase">DPE</p>
                  </div>
                </div>

                {/* الوصف */}
                <div>
                  <h2 className="text-lg font-bold text-navy-900 mb-3">Description</h2>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {listing.description}
                  </p>
                </div>

                {/* الميزات */}
                <div>
                  <h2 className="text-lg font-bold text-navy-900 mb-3">
                    Caractéristiques
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {listing.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm text-navy-700"
                      >
                        <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-orange-500" />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* التفاصيل المالية */}
                <div>
                  <h2 className="text-lg font-bold text-navy-900 mb-3">
                    Informations financières
                  </h2>
                  <div className="bg-navy-50/50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-500 flex items-center gap-2">
                        <Euro size={14} className="text-orange-500" />
                        Prix de vente
                      </span>
                      <span className="font-bold text-navy-900">
                        {formattedPrice} €
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-500 flex items-center gap-2">
                        <Thermometer size={14} className="text-orange-500" />
                        Charges annuelles
                      </span>
                      <span className="font-semibold text-navy-900">
                        {formattedCharges} €
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-500 flex items-center gap-2">
                        <Zap size={14} className="text-orange-500" />
                        Taxe foncière
                      </span>
                      <span className="font-semibold text-navy-900">
                        {formattedTaxe} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* يمين: نموذج Lead (Sticky) */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <LeadForm
                    listingTitle={listing.title}
                    agentName={listing.agent.name}
                    isTeam={listing.agent.isTeam}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biens similaires */}
        <SimilarListings listings={similarListings} />
      </main>

      <Footer />
    </>
  );
}