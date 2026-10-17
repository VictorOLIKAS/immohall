import Link from 'next/link';
import {
  ChevronRight,
  Briefcase,
  FileText,
  Target,
  TrendingUp,
  Users,
  Check,
  ArrowRight,
  Sparkles,
  BarChart3,
  Bell,
  Wallet,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FEATURES = [
  {
    icon: FileText,
    title: 'Publiez vos annonces',
    desc: 'Déposez gratuitement vos biens résidentiels et professionnels. Validation sous 24h.',
    points: [
      'Dépôt illimité selon formule',
      'Galerie photos HD',
      'Statut en temps réel',
    ],
  },
  {
    icon: Target,
    title: 'Recevez des leads qualifiés',
    desc: 'Notification immédiate à chaque prospect. Débloquez uniquement ce qui vous intéresse.',
    points: [
      'Notifications email + SMS',
      'Leads exclusifs',
      'Historique complet',
    ],
  },
  {
    icon: BarChart3,
    title: 'Suivez vos performances',
    desc: 'Tableau de bord complet : vues, leads, taux de conversion et revenus générés.',
    points: [
      'Statistiques temps réel',
      'Export CSV des leads',
      'Rapports mensuels',
    ],
  },
];

const PLANS_PREVIEW = [
  {
    name: 'Gratuit',
    price: '0 €',
    period: 'pour toujours',
    features: ['Annonces illimitées', 'Leads payants à l\'unité'],
    color: 'border-navy-100',
  },
  {
    name: 'Starter',
    price: '49 €',
    period: '/ mois HT',
    features: ['10 annonces', '15 leads inclus'],
    color: 'border-orange-300',
    highlighted: true,
    badge: 'POPULAIRE',
  },
  {
    name: 'Pro',
    price: '99 €',
    period: '/ mois HT',
    features: ['50 annonces', '50 leads inclus'],
    color: 'border-navy-100',
  },
];

export const metadata = {
  title: 'Espace professionnel',
  description:
    'Publiez vos annonces, recevez des leads qualifiés et développez votre activité immobilière avec ImmoHall.',
};

export default function EspaceProPage() {
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
                Espace professionnel
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-14 bg-gradient-to-b from-orange-50/60 
                            to-white">
          <div className="container-hall text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 
                            text-orange-600 text-xs font-bold px-3 py-1.5 
                            rounded-full tracking-wider uppercase mb-4">
              <Briefcase size={12} />
              Espace professionnel
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold 
                           text-navy-900 max-w-3xl mx-auto">
              Développez votre activité{' '}
              <span className="text-orange-500">immobilière</span>
            </h1>
            <p className="mt-4 text-navy-500 text-base sm:text-lg max-w-2xl 
                          mx-auto">
              Publiez vos annonces, recevez des leads qualifiés et suivez
              vos performances depuis une plateforme unique.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 
                            justify-center">
              <Link
                href="/inscription"
                className="btn-primary text-sm justify-center"
              >
                <Sparkles size={16} />
                Créer un compte pro
              </Link>
              <Link
                href="/connexion"
                className="btn-secondary text-sm justify-center"
              >
                Déjà inscrit ? Se connecter
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-14">
          <div className="container-hall">
            <div className="text-center mb-10">
              <h2 className="section-title">
                Tout ce dont vous avez besoin
              </h2>
              <p className="section-subtitle">
                Des outils pensés pour les professionnels de l&apos;immobilier.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white border border-navy-100 
                               rounded-2xl p-6 hover:border-orange-200 
                               hover:shadow-card transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 
                                    flex items-center justify-center mb-4">
                      <Icon size={22} className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-navy-900 text-base mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed mb-4">
                      {feature.desc}
                    </p>
                    <ul className="space-y-2">
                      {feature.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs 
                                     text-navy-600"
                        >
                          <div className="w-4 h-4 rounded-full bg-orange-100 
                                          flex items-center justify-center 
                                          shrink-0 mt-0.5">
                            <Check size={10} className="text-orange-500" />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing preview */}
        <section className="py-14 bg-navy-50/30">
          <div className="container-hall">
            <div className="text-center mb-10">
              <h2 className="section-title">
                Choisissez votre formule
              </h2>
              <p className="section-subtitle">
                Sans engagement · Annulation à tout moment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {PLANS_PREVIEW.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl border-2 
                              ${plan.color} p-6 transition-all 
                              hover:shadow-card ${
                                plan.highlighted ? 'md:scale-105' : ''
                              }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 
                                     -translate-x-1/2 bg-orange-500 
                                     text-white text-[10px] font-bold 
                                     px-3 py-1 rounded-full tracking-wider">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-navy-900 text-lg">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-navy-900">
                      {plan.price}
                    </span>
                    <span className="text-xs text-navy-400">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs 
                                   text-navy-600"
                      >
                        <Check
                          size={12}
                          className="text-orange-500 shrink-0 mt-0.5"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/offres"
                className="inline-flex items-center gap-2 
                           text-orange-500 font-semibold text-sm 
                           hover:text-orange-600 transition"
              >
                Voir toutes les formules et tarifs
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14">
          <div className="container-hall">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '+5 000', label: 'Professionnels partenaires' },
                { value: '+15 000', label: 'Annonces actives' },
                { value: '24h', label: 'Validation des annonces' },
                { value: '4,8/5', label: 'Satisfaction clients' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-navy-100 
                             rounded-2xl p-5 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold 
                                text-orange-500">
                    {stat.value}
                  </p>
                  <p className="text-xs text-navy-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-14">
          <div className="container-hall">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 
                            rounded-3xl p-8 sm:p-12 text-white 
                            text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 
                              flex items-center justify-center mb-4">
                <Wallet size={28} className="text-orange-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Prêt à commencer ?
              </h2>
              <p className="mt-3 text-white/70 text-sm max-w-lg mx-auto">
                Créez votre compte gratuitement en 2 minutes et publiez
                votre première annonce dès aujourd&apos;hui.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 
                              justify-center">
                <Link
                  href="/inscription"
                  className="btn-primary justify-center text-sm"
                >
                  Créer mon compte gratuit
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 
                             bg-white/10 hover:bg-white/20 text-white 
                             font-semibold px-5 py-3 rounded-lg 
                             transition text-sm"
                >
                  Parler à un conseiller
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}