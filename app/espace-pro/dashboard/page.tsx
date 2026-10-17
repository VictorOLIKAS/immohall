import Link from 'next/link';
import {
  FileText,
  Target,
  TrendingUp,
  Euro,
  Plus,
  ArrowRight,
  Bell,
  ChevronRight,
} from 'lucide-react';

import KpiCard from '@/components/KpiCard';
import LeadRow from '@/components/LeadRow';
import { LEADS, getDashboardStats } from '@/data/leads';

export default function DashboardPage() {
  const stats = getDashboardStats();
  const recentLeads = LEADS.slice(0, 4);
  const formattedRevenue = new Intl.NumberFormat('fr-FR').format(stats.revenue);

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* Welcome Banner */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center 
                        justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Bonjour, L&apos;Enseigne Immo 👋
            </h1>
            <p className="text-sm text-navy-500 mt-1">
              Dimanche 4 octobre 2026
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/espace-pro/mes-annonces/nouvelle"
              className="btn-primary text-sm"
            >
              <Plus size={16} />
              Publier une annonce
            </Link>
          </div>
        </div>

        {/* Team Badge Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 
                        rounded-2xl p-4 flex items-center gap-3 text-white 
                        shadow-card">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center 
                          justify-center shrink-0">
            <Bell size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm">
              Vous êtes membre de la Team L&apos;Enseigne Immo
            </p>
            <p className="text-xs text-white/90 mt-0.5">
              Vos leads sont transmis directement et gratuitement. Vous bénéficiez d&apos;un affichage prioritaire.
            </p>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KpiCard
          icon={FileText}
          label="Annonces actives"
          value={stats.activeListings}
          color="navy"
        />
        <KpiCard
          icon={Target}
          label="Leads ce mois"
          value={stats.totalLeads}
          trend={{ value: '+15%', direction: 'up', label: 'vs mois dernier' }}
          color="orange"
        />
        <KpiCard
          icon={TrendingUp}
          label="Taux de conversion"
          value={`${stats.conversionRate}%`}
          trend={{ value: '+5%', direction: 'up', label: 'vs mois dernier' }}
          color="green"
        />
        <KpiCard
          icon={Euro}
          label="Revenus générés"
          value={`${formattedRevenue} €`}
          trend={{ value: '+8%', direction: 'up', label: 'vs mois dernier' }}
          color="purple"
        />
      </div>

      {/* Grille principale */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Leads récents (2/3) */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-navy-900">
                Leads récents
              </h2>
              <p className="text-xs text-navy-500">
                Les dernières demandes sur vos annonces
              </p>
            </div>
            <Link
              href="/espace-pro/mes-leads"
              className="text-orange-500 text-sm font-semibold 
                         hover:text-orange-600 transition inline-flex 
                         items-center gap-1"
            >
              Voir tout
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-3">
            {recentLeads.map((lead) => (
              <LeadRow key={lead.id} lead={lead} />
            ))}
          </div>
        </div>

        {/* Actions rapides (1/3) */}
        <div>
          <h2 className="text-lg font-bold text-navy-900 mb-4">
            Actions rapides
          </h2>

          <div className="space-y-2">
            <QuickAction
              href="/espace-pro/mes-annonces/nouvelle"
              icon={Plus}
              title="Publier une annonce"
              desc="Ajouter un nouveau bien"
            />
            <QuickAction
              href="/espace-pro/mes-annonces"
              icon={FileText}
              title="Gérer mes annonces"
              desc="12 annonces actives"
            />
            <QuickAction
              href="/espace-pro/mes-leads"
              icon={Target}
              title="Voir tous les leads"
              desc="3 nouveaux aujourd'hui"
            />
            <QuickAction
              href="/espace-pro/facturation"
              icon={Euro}
              title="Consulter mes factures"
              desc="Historique de paiement"
            />
          </div>

          {/* Support */}
          <div className="mt-4 bg-gradient-to-br from-navy-900 to-navy-700 
                          rounded-2xl p-4 text-white">
            <p className="font-bold text-sm mb-1">
              Besoin d&apos;aide ?
            </p>
            <p className="text-xs text-white/70 mb-3">
              Notre équipe est là pour vous accompagner.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-orange-400 
                         hover:text-orange-300 text-xs font-semibold transition"
            >
              Contacter le support
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function QuickAction({
  href,
  icon: Icon,
  title,
  desc,
}: {
  href: string;
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 bg-white border 
                 border-navy-100 rounded-xl p-3 hover:border-orange-300 
                 hover:shadow-card transition-all"
    >
      <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center 
                      justify-center shrink-0 group-hover:bg-orange-50 transition">
        <Icon size={16} className="text-navy-700 group-hover:text-orange-500 transition" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-navy-900 text-sm truncate">
          {title}
        </p>
        <p className="text-[11px] text-navy-400 truncate">{desc}</p>
      </div>
      <ChevronRight
        size={14}
        className="text-navy-300 group-hover:text-orange-500 
                   group-hover:translate-x-0.5 transition"
      />
    </Link>
  );
}