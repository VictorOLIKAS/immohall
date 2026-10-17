'use client';
import { useState, useMemo } from 'react';
import { Search, Filter, Download, Target } from 'lucide-react';

import LeadRow from '@/components/LeadRow';
import { LEADS, type LeadStatus } from '@/data/leads';

type Filter = 'all' | LeadStatus;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Tous' },
  { key: 'unlocked', label: 'Débloqués' },
  { key: 'locked', label: 'À débloquer' },
  { key: 'paid', label: 'Payés' },
];

export default function MesLeadsPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = [...LEADS];

    if (filter !== 'all') {
      result = result.filter((l) => l.status === filter);
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.name.toLowerCase().includes(s) ||
          l.listingTitle.toLowerCase().includes(s) ||
          l.email.toLowerCase().includes(s)
      );
    }

    return result;
  }, [filter, search]);

  const counts = {
    all: LEADS.length,
    unlocked: LEADS.filter((l) => l.status === 'unlocked').length,
    locked: LEADS.filter((l) => l.status === 'locked').length,
    paid: LEADS.filter((l) => l.status === 'paid').length,
  };

  const lockedValue = LEADS.filter((l) => l.status === 'locked').reduce(
    (sum, l) => sum + (l.price || 0),
    0
  );

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center 
                      justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Mes leads
          </h1>
          <p className="text-sm text-navy-500 mt-1">
            Tous les prospects intéressés par vos annonces.
          </p>
        </div>
        <button
          className="inline-flex items-center gap-2 bg-white border 
                     border-navy-100 hover:border-navy-200 px-4 py-2.5 
                     rounded-lg text-sm font-semibold text-navy-700 transition"
        >
          <Download size={16} />
          Exporter CSV
        </button>
      </div>

      {/* Alerte leads à débloquer */}
      {counts.locked > 0 && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 
                        rounded-2xl p-4 mb-6 flex items-start sm:items-center 
                        gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center 
                          justify-center shrink-0">
            <Target size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm">
              {counts.locked} lead{counts.locked > 1 ? 's' : ''} à débloquer
            </p>
            <p className="text-xs text-white/90 mt-0.5">
              Débloquez les coordonnées pour un total de {lockedValue} € HT.
            </p>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total leads" value={counts.all} color="navy" />
        <StatCard label="Débloqués" value={counts.unlocked} color="green" />
        <StatCard label="À débloquer" value={counts.locked} color="orange" />
        <StatCard label="Payés" value={counts.paid} color="purple" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
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

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
        />
        <input
          type="text"
          placeholder="Rechercher par nom, email ou bien..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-navy-100 
                     text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 
                     bg-white"
        />
      </div>

      {/* Leads list */}
      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((lead) => (
            <LeadRow key={lead.id} lead={lead} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-navy-100 p-12 
                        text-center">
          <p className="text-navy-900 font-bold text-lg mb-2">
            Aucun lead trouvé
          </p>
          <p className="text-sm text-navy-500">
            Essayez de modifier vos filtres.
          </p>
        </div>
      )}
    </main>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: 'navy' | 'green' | 'orange' | 'purple';
}) {
  const colors = {
    navy: 'text-navy-900',
    green: 'text-green-600',
    orange: 'text-orange-500',
    purple: 'text-purple-600',
  };

  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-4">
      <p className="text-xs text-navy-500">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${colors[color]}`}>{value}</p>
    </div>
  );
}