import Link from 'next/link';
import {
  Download,
  CreditCard,
  Receipt,
  TrendingUp,
  Check,
  Clock,
  X as XIcon,
  ArrowRight,
} from 'lucide-react';

import { INVOICES, getBillingStats, type InvoiceStatus } from '@/data/invoices';

const STATUS_MAP: Record<
  InvoiceStatus,
  { label: string; color: string; icon: any }
> = {
  paid: { label: 'Payée', color: 'bg-green-100 text-green-700', icon: Check },
  pending: {
    label: 'En attente',
    color: 'bg-orange-100 text-orange-700',
    icon: Clock,
  },
  failed: { label: 'Échouée', color: 'bg-red-100 text-red-700', icon: XIcon },
};

export default function FacturationPage() {
  const stats = getBillingStats();
  const fmt = (n: number) => new Intl.NumberFormat('fr-FR').format(n);

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
          Facturation
        </h1>
        <p className="text-sm text-navy-500 mt-1">
          Gérez votre abonnement et vos factures.
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatCard
          icon={TrendingUp}
          label="Total dépensé"
          value={`${fmt(stats.total)} €`}
          color="text-navy-900"
        />
        <StatCard
          icon={Receipt}
          label="Ce mois"
          value={`${fmt(stats.thisMonth)} €`}
          color="text-orange-500"
        />
        <StatCard
          icon={CreditCard}
          label="Leads payés"
          value={`${fmt(stats.leadsTotal)} €`}
          color="text-purple-600"
        />
      </div>

      {/* Plan actuel */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl 
                      p-6 text-white mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center 
                        justify-between gap-4">
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1">
              Abonnement actuel
            </p>
            <h2 className="text-2xl font-bold">
              Formule <span className="text-orange-400">Pro</span>
            </h2>
            <p className="text-sm text-white/70 mt-1">
              50 annonces · 50 leads inclus / mois
            </p>
            <p className="text-xs text-white/50 mt-2">
              Prochain prélèvement : <strong className="text-white">1 novembre 2026</strong> · 99 € HT
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button className="inline-flex items-center justify-center gap-2 
                               bg-white/10 hover:bg-white/20 px-4 py-2.5 
                               rounded-lg text-sm font-semibold transition">
              Changer de formule
            </button>
            <button className="inline-flex items-center justify-center gap-2 
                               bg-white text-navy-900 hover:bg-white/90 
                               px-4 py-2.5 rounded-lg text-sm font-semibold 
                               transition">
              <CreditCard size={14} />
              Gérer le paiement
            </button>
          </div>
        </div>
      </div>

      {/* Historique */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-navy-900">Historique des factures</h2>
        <p className="text-xs text-navy-500">
          Toutes vos transactions des 6 derniers mois.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-navy-100 overflow-hidden">
        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-navy-50/50 border-b border-navy-100">
              <tr>
                <th className="text-left p-4 font-semibold text-navy-700 text-xs uppercase tracking-wider">
                  Facture
                </th>
                <th className="text-left p-4 font-semibold text-navy-700 text-xs uppercase tracking-wider">
                  Description
                </th>
                <th className="text-left p-4 font-semibold text-navy-700 text-xs uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left p-4 font-semibold text-navy-700 text-xs uppercase tracking-wider">
                  Statut
                </th>
                <th className="text-right p-4 font-semibold text-navy-700 text-xs uppercase tracking-wider">
                  Montant
                </th>
                <th className="p-4" />
              </tr>
            </thead>
            <tbody>
              {INVOICES.map((inv) => {
                const status = STATUS_MAP[inv.status];
                const Icon = status.icon;
                return (
                  <tr
                    key={inv.id}
                    className="border-b border-navy-50 hover:bg-navy-50/30 
                               transition"
                  >
                    <td className="p-4 font-mono text-xs text-navy-700">
                      {inv.id}
                    </td>
                    <td className="p-4 text-navy-700 max-w-xs">
                      <p className="truncate">{inv.description}</p>
                    </td>
                    <td className="p-4 text-navy-500 text-xs">
                      {new Date(inv.date).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] 
                                    font-bold px-2 py-1 rounded-md 
                                    tracking-wider ${status.color}`}
                      >
                        <Icon size={10} />
                        {status.label.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-right font-bold text-navy-900">
                      {fmt(inv.amount)} €
                    </td>
                    <td className="p-4 text-right">
                      <button
                        className="w-8 h-8 rounded-lg bg-navy-50 hover:bg-navy-100 
                                   flex items-center justify-center transition"
                        aria-label="Télécharger"
                      >
                        <Download size={14} className="text-navy-700" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-navy-50">
          {INVOICES.map((inv) => {
            const status = STATUS_MAP[inv.status];
            const Icon = status.icon;
            return (
              <div key={inv.id} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-navy-500">
                    {inv.id}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] 
                                font-bold px-2 py-0.5 rounded-md ${status.color}`}
                  >
                    <Icon size={9} />
                    {status.label}
                  </span>
                </div>
                <p className="text-sm text-navy-700 mb-2">{inv.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-navy-400">
                    {new Date(inv.date).toLocaleDateString('fr-FR')}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy-900">
                      {fmt(inv.amount)} €
                    </span>
                    <button
                      className="w-7 h-7 rounded-md bg-navy-50 flex 
                                 items-center justify-center"
                      aria-label="Télécharger"
                    >
                      <Download size={12} className="text-navy-700" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Support */}
      <div className="mt-6 bg-white border border-navy-100 rounded-2xl p-5 
                      flex flex-col sm:flex-row items-start sm:items-center 
                      gap-4">
        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center 
                        justify-center shrink-0">
          <Receipt size={18} className="text-orange-500" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-navy-900 text-sm">
            Besoin d&apos;une facture spécifique ?
          </p>
          <p className="text-xs text-navy-500 mt-0.5">
            Contactez notre équipe comptable pour toute demande particulière.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-orange-500 
                     hover:text-orange-600 font-semibold text-sm transition shrink-0"
        >
          Contacter
          <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: any;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-5">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={14} className="text-orange-500" />
        <p className="text-xs text-navy-500">{label}</p>
      </div>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}