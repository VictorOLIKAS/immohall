'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Plus, Search, LayoutGrid, List } from 'lucide-react';

import ListingManageCard from '@/components/ListingManageCard';
import { LISTINGS, type ListingStatus } from '@/data/listings';

type Filter = 'all' | ListingStatus;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Toutes' },
  { key: 'published', label: 'Publiées' },
  { key: 'pending', label: 'En attente' },
  { key: 'expired', label: 'Expirées' },
];

export default function MesAnnoncesPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => {
    let result = [...LISTINGS];

    if (filter !== 'all') {
      result = result.filter((l) => l.status === filter);
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(s) ||
          l.city.toLowerCase().includes(s)
      );
    }

    return result;
  }, [filter, search]);

  const counts = {
    all: LISTINGS.length,
    published: LISTINGS.filter((l) => l.status === 'published').length,
    pending: LISTINGS.filter((l) => l.status === 'pending').length,
    expired: LISTINGS.filter((l) => l.status === 'expired').length,
  };

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center 
                      justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Mes annonces
          </h1>
          <p className="text-sm text-navy-500 mt-1">
            Gérez et suivez les performances de vos biens.
          </p>
        </div>
        <Link
          href="/espace-pro/mes-annonces/nouvelle"
          className="btn-primary text-sm shrink-0"
        >
          <Plus size={16} />
          Nouvelle annonce
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold 
                        transition ${
                          filter === f.key
                            ? 'bg-navy-900 text-white'
                            : 'bg-white text-navy-600 border border-navy-100 hover:border-navy-200'
                        }`}
          >
            {f.label}
            <span className="ml-1.5 opacity-70">({counts[f.key]})</span>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
          />
          <input
            type="text"
            placeholder="Rechercher par titre ou ville..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-lg border 
                       border-navy-100 text-sm focus:outline-none 
                       focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex items-center gap-1 bg-white border border-navy-100 
                        rounded-lg p-1">
          <button
            onClick={() => setView('grid')}
            className={`w-9 h-9 rounded-md flex items-center justify-center 
                        transition ${
                          view === 'grid'
                            ? 'bg-navy-900 text-white'
                            : 'text-navy-500 hover:bg-navy-50'
                        }`}
            aria-label="Vue grille"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`w-9 h-9 rounded-md flex items-center justify-center 
                        transition ${
                          view === 'list'
                            ? 'bg-navy-900 text-white'
                            : 'text-navy-500 hover:bg-navy-50'
                        }`}
            aria-label="Vue liste"
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div
          className={
            view === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'
              : 'space-y-3'
          }
        >
          {filtered.map((listing) => (
            <ListingManageCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-navy-100 p-12 
                        text-center">
          <p className="text-navy-900 font-bold text-lg mb-2">
            Aucune annonce trouvée
          </p>
          <p className="text-sm text-navy-500 mb-4">
            Essayez de modifier vos filtres ou créez une nouvelle annonce.
          </p>
          <Link
            href="/espace-pro/mes-annonces/nouvelle"
            className="btn-primary text-sm inline-flex"
          >
            <Plus size={16} />
            Créer une annonce
          </Link>
        </div>
      )}
    </main>
  );
}