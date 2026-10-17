'use client';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import Link from 'next/link';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchFilters, { type FilterState } from '@/components/SearchFilters';
import ResultCard from '@/components/ResultCard';
import { LISTINGS, type PropertyType } from '@/data/listings';

const INITIAL_FILTERS: FilterState = {
  transaction: 'all',
  types: [],
  category: '',
  minPrice: 0,
  maxPrice: 0,
  minSurface: 0,
  maxSurface: 0,
  location: '',
};

export default function RecherchePage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [sortBy, setSortBy] = useState('recent');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Lecture des URL params
  useEffect(() => {
    const type = searchParams.get('type');
    const location = searchParams.get('location');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const transaction = searchParams.get('transaction');
    const category = searchParams.get('category');

    setFilters({
      transaction:
        transaction === 'vente' || transaction === 'location'
          ? transaction
          : 'all',
      types: type ? [type as PropertyType] : [],
      category: category || '',
      location: location || '',
      minPrice: minPrice ? Number(minPrice) : 0,
      maxPrice: maxPrice ? Number(maxPrice) : 0,
      minSurface: 0,
      maxSurface: 0,
    });
  }, [searchParams]);

  // Filtrage
  const filteredListings = useMemo(() => {
    let result = [...LISTINGS];

    // Transaction
    if (filters.transaction !== 'all') {
      result = result.filter((l) => l.transaction === filters.transaction);
    }

    // Property Type
    if (filters.types.length > 0) {
      result = result.filter((l) =>
        filters.types.includes(l.propertyType)
      );
    }

    // Catégorie
    if (filters.category) {
      result = result.filter((l) => l.category === filters.category);
    }

    // Localisation
    if (filters.location) {
      const loc = filters.location.toLowerCase();
      result = result.filter(
        (l) =>
          l.city.toLowerCase().includes(loc) ||
          l.postalCode.includes(loc) ||
          l.location.toLowerCase().includes(loc)
      );
    }

    // Prix
    if (filters.minPrice > 0) {
      result = result.filter((l) => l.price >= filters.minPrice);
    }
    if (filters.maxPrice > 0) {
      result = result.filter((l) => l.price <= filters.maxPrice);
    }

    // Surface
    if (filters.minSurface > 0) {
      result = result.filter((l) => l.surface >= filters.minSurface);
    }
    if (filters.maxSurface > 0) {
      result = result.filter((l) => l.surface <= filters.maxSurface);
    }

    // Tri
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'surface-desc':
        result.sort((a, b) => b.surface - a.surface);
        break;
      case 'recent':
      default:
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
    }

    return result;
  }, [filters, sortBy]);

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  const hasActiveFilters =
    filters.transaction !== 'all' ||
    filters.types.length > 0 ||
    filters.category !== '' ||
    filters.minPrice > 0 ||
    filters.maxPrice > 0 ||
    filters.minSurface > 0 ||
    filters.maxSurface > 0 ||
    filters.location !== '';

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-navy-50/20 min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-navy-100 bg-white">
          <div className="container-hall py-3">
            <nav className="flex items-center gap-1.5 text-xs text-navy-500">
              <Link href="/" className="hover:text-orange-500 transition">
                Accueil
              </Link>
              <ChevronRight size={12} />
              <span className="text-navy-900 font-medium">Recherche</span>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="container-hall py-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Toutes les annonces
            </h1>
            <p className="mt-1 text-sm text-navy-500">
              <span className="font-semibold text-orange-500">
                {filteredListings.length}
              </span>{' '}
              bien{filteredListings.length !== 1 ? 's' : ''} trouvé
              {filteredListings.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden mb-4 w-full flex items-center justify-center 
                       gap-2 bg-white border border-navy-100 rounded-xl py-3 
                       font-semibold text-navy-700 text-sm"
          >
            <SlidersHorizontal size={16} />
            Filtres
            {hasActiveFilters && (
              <span className="ml-1 bg-orange-500 text-white text-[10px] 
                               rounded-full w-5 h-5 flex items-center 
                               justify-center">
                !
              </span>
            )}
          </button>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <SearchFilters
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                resultCount={filteredListings.length}
              />
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* Sort */}
              <div className="flex items-center justify-between mb-4 
                              bg-white rounded-xl px-4 py-3 
                              border border-navy-100">
                <p className="text-sm text-navy-500 hidden sm:block">
                  Trié par
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent font-semibold text-navy-700 
                             focus:outline-none cursor-pointer"
                >
                  <option value="recent">Plus récents</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="surface-desc">Surface (grande)</option>
                </select>
              </div>

              {/* Grid */}
              {filteredListings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
                                gap-4">
                  {filteredListings.map((l) => (
                    <ResultCard key={l.id} listing={l} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-navy-100 
                                p-12 text-center">
                  <p className="text-lg font-bold text-navy-900 mb-2">
                    Aucun résultat
                  </p>
                  <p className="text-sm text-navy-500 mb-4">
                    Essayez de modifier vos critères de recherche.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="btn-primary text-sm"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-900/50"
            onClick={() => setShowMobileFilters(false)}
          />

          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm 
                          bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 
                            border-b border-navy-100 sticky top-0 bg-white z-10">
              <h2 className="font-bold text-navy-900">Filtres</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-8 h-8 rounded-full bg-navy-50 flex items-center 
                           justify-center hover:bg-navy-100 transition"
                aria-label="Fermer"
              >
                <X size={16} className="text-navy-700" />
              </button>
            </div>
            <div className="p-4">
              <SearchFilters
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                resultCount={filteredListings.length}
              />
            </div>
            <div className="p-4 border-t border-navy-100 sticky bottom-0 bg-white">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Voir {filteredListings.length} résultat
                {filteredListings.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}