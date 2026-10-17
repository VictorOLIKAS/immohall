'use client';
import { X, Search } from 'lucide-react';
import type { PropertyType } from '@/data/listings';

export type FilterState = {
  transaction: 'all' | 'vente' | 'location';
  types: PropertyType[];
  category: string;
  minPrice: number;
  maxPrice: number;
  minSurface: number;
  maxSurface: number;
  location: string;
};

type SearchFiltersProps = {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  resultCount: number;
};

const TRANSACTION_OPTIONS = [
  { value: 'all', label: 'Tout' },
  { value: 'vente', label: 'Acheter' },
  { value: 'location', label: 'Louer' },
] as const;

const TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
  { value: 'appartement', label: 'Appartement' },
  { value: 'maison', label: 'Maison' },
  { value: 'villa', label: 'Villa' },
  { value: 'immeuble', label: 'Immeuble' },
  { value: 'local-commercial', label: 'Local commercial' },
  { value: 'fonds-commerce', label: 'Fonds de commerce' },
  { value: 'droit-bail', label: 'Droit au bail' },
  { value: 'bureau', label: 'Bureau' },
  { value: 'entrepot', label: 'Entrepôt' },
  { value: 'terrain', label: 'Terrain' },
];

const CATEGORY_OPTIONS = [
  { value: '', label: 'Toutes catégories' },
  { value: 'residentiel', label: 'Résidentiel' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'bureaux', label: 'Bureaux' },
  { value: 'terrains', label: 'Terrains' },
  { value: 'investissement', label: 'Investissement' },
];

export default function SearchFilters({
  filters,
  onChange,
  onReset,
  resultCount,
}: SearchFiltersProps) {
  const toggleType = (type: PropertyType) => {
    const types = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    onChange({ ...filters, types });
  };

  return (
    <aside className="bg-white border border-navy-100 rounded-2xl p-5 
                      lg:sticky lg:top-24 max-h-[calc(100vh-7rem)] 
                      overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Search size={18} className="text-orange-500" />
          <h2 className="font-bold text-navy-900">Filtres</h2>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-navy-400 hover:text-orange-500 
                     transition inline-flex items-center gap-1"
        >
          <X size={12} />
          Réinitialiser
        </button>
      </div>

      {/* Résultats (mobile) */}
      <div className="lg:hidden mb-4 bg-orange-50 text-orange-600 text-sm 
                      font-semibold px-3 py-2 rounded-lg text-center">
        {resultCount} résultat{resultCount !== 1 ? 's' : ''}
      </div>

      {/* Transaction */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-navy-700 mb-2">
          Transaction
        </label>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-navy-50 rounded-lg">
          {TRANSACTION_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() =>
                onChange({ ...filters, transaction: opt.value })
              }
              className={`text-xs font-semibold py-1.5 px-2 rounded-md 
                          transition ${
                            filters.transaction === opt.value
                              ? 'bg-white text-navy-900 shadow-sm'
                              : 'text-navy-500 hover:text-navy-700'
                          }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Localisation */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-navy-700 mb-2">
          Localisation
        </label>
        <input
          type="text"
          placeholder="Ville ou code postal"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-navy-100 
                     focus:outline-none focus:ring-2 focus:ring-orange-400 
                     text-sm"
        />
      </div>

      {/* Catégorie */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-navy-700 mb-2">
          Catégorie
        </label>
        <select
          value={filters.category}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-navy-100 
                     focus:outline-none focus:ring-2 focus:ring-orange-400 
                     text-sm bg-white"
        >
          {CATEGORY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Type de bien */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-navy-700 mb-2">
          Type de bien
        </label>
        <div className="space-y-1.5">
          {TYPE_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 text-sm text-navy-700 
                         cursor-pointer hover:text-orange-500 transition"
            >
              <input
                type="checkbox"
                checked={filters.types.includes(opt.value)}
                onChange={() => toggleType(opt.value)}
                className="rounded border-navy-200 text-orange-500 
                           focus:ring-orange-400"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-navy-700 mb-2">
          Budget (€)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) =>
              onChange({ ...filters, minPrice: Number(e.target.value) || 0 })
            }
            className="w-full px-3 py-2 rounded-lg border border-navy-100 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) =>
              onChange({ ...filters, maxPrice: Number(e.target.value) || 0 })
            }
            className="w-full px-3 py-2 rounded-lg border border-navy-100 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       text-sm"
          />
        </div>
      </div>

      {/* Surface */}
      <div className="mb-2">
        <label className="block text-xs font-semibold text-navy-700 mb-2">
          Surface (m²)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minSurface || ''}
            onChange={(e) =>
              onChange({ ...filters, minSurface: Number(e.target.value) || 0 })
            }
            className="w-full px-3 py-2 rounded-lg border border-navy-100 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxSurface || ''}
            onChange={(e) =>
              onChange({ ...filters, maxSurface: Number(e.target.value) || 0 })
            }
            className="w-full px-3 py-2 rounded-lg border border-navy-100 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       text-sm"
          />
        </div>
      </div>
    </aside>
  );
}