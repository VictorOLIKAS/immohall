import Link from 'next/link';
import {
  ChevronRight,
  Check,
  X,
  Zap,
  Crown,
  Rocket,
  Gift,
  ArrowRight,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  icon: any;
  color: string;
  badge?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    id: 'gratuit',
    name: 'Gratuit',
    price: 0,
    period: 'pour toujours',
    description: 'Parfait pour tester la plateforme sans engagement.',
    icon: Gift,
    color: 'text-navy-500',
    features: [
      'Dépôt d\'annonces illimité',
      'Notification à chaque lead',
      'Déblocage des coordonnées à l\'unité',
      '19 € HT / lead résidentiel',
      '39 € HT / lead commercial',
      'Support par email',
    ],
    cta: 'Commencer gratuitement',
    ctaHref: '/inscription',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 49,
    period: '/ mois HT',
    description: 'Idéal pour les indépendants qui débutent.',
    icon: Rocket,
    color: 'text-orange-500',
    badge: 'POPULAIRE',
    highlighted: true,
    features: [
      '10 annonces publiées',
      '15 leads inclus / mois',
      'Badge "Professionnel vérifié"',
      'Support prioritaire',
      'Statistiques de base',
      'Sans engagement',
    ],
    cta: 'Choisir Starter',
    ctaHref: '/inscription?plan=starter',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 99,
    period: '/ mois HT',
    description: 'Pour les agences en croissance active.',
    icon: Zap,
    color: 'text-navy-700',
    features: [
      '50 annonces publiées',
      '50 leads inclus / mois',
      'Badge "Professionnel vérifié"',
      'Support prioritaire 24h',
      'Statistiques avancées',
      'Export des leads en CSV',
      'Multi-utilisateurs (3)',
    ],
    cta: 'Choisir Pro',
    ctaHref: '/inscription?plan=pro',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 199,
    period: '/ mois HT',
    description: 'Pour les agences établies et les réseaux.',
    icon: Crown,
    color: 'text-purple-600',
    features: [
      'Annonces illimitées',
      'Leads illimités',
      'Badge "Partenaire Premium"',
      'Support dédié 24/7',
      'Statistiques temps réel',
      'Export CSV + API',
      'Multi-utilisateurs illimité',
      'Mise en avant prioritaire',
    ],
    cta: 'Choisir Premium',
    ctaHref: '/inscription?plan=premium',
  },
];

const COMPARISON_FEATURES = [
  { label: 'Dépôt d\'annonces', gratuit: 'Illimité', starter: '10', pro: '50', premium: 'Illimité' },
  { label: 'Leads inclus / mois', gratuit: '0', starter: '15', pro: '50', premium: 'Illimité' },
  { label: 'Prix par lead (résidentiel)', gratuit: '19 €', starter: 'Inclus', pro: 'Inclus', premium: 'Inclus' },
  { label: 'Prix par lead (commercial)', gratuit: '39 €', starter: 'Inclus', pro: 'Inclus', premium: 'Inclus' },
  { label: 'Badge professionnel', gratuit: false, starter: true, pro: true, premium: true },
  { label: 'Statistiques', gratuit: false, starter: 'Base', pro: 'Avancées', premium: 'Temps réel' },
  { label: 'Export CSV', gratuit: false, starter: false, pro: true, premium: true },
  { label: 'API access', gratuit: false, starter: false, pro: false, premium: true },
  { label: 'Multi-utilisateurs', gratuit: false, starter: false, pro: '3', premium: 'Illimité' },
  { label: 'Support', gratuit: 'Email', starter: 'Prioritaire', pro: 'Prioritaire 24h', premium: 'Dédié 24/7' },
  { label: 'Mise en avant prioritaire', gratuit: false, starter: false, pro: false, premium: true },
];

const FAQ = [
  {
    q: 'Y a-t-il un engagement ?',
    a: 'Non, tous nos abonnements sont sans engagement. Vous pouvez annuler à tout moment depuis votre espace professionnel.',
  },
  {
    q: 'Comment fonctionne le modèle "au lead" ?',
    a: 'Avec l\'offre Gratuite, vous recevez une notification à chaque prospect. Vous payez uniquement 19 € (résidentiel) ou 39 € (commercial) pour débloquer ses coordonnées.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Nous acceptons toutes les cartes bancaires via Stripe (Visa, Mastercard, American Express). Le paiement est sécurisé et conforme aux normes PCI.',
  },
  {
    q: 'Puis-je changer d\'offre à tout moment ?',
    a: 'Oui. Vous pouvez passer à une offre supérieure ou inférieure à tout moment. Le prorata est calculé automatiquement.',
  },
  {
    q: 'Les leads non utilisés sont-ils reportés ?',
    a: 'Les leads inclus dans votre abonnement sont valables 30 jours. Les leads non débloqués ne sont pas reportés au mois suivant.',
  },
  {
    q: 'Y a-t-il des frais d\'installation ?',
    a: 'Non, aucun frais d\'installation. Vous payez uniquement votre abonnement mensuel ou les leads à l\'unité.',
  },
];

export default function OffresPage() {
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
              <span className="text-navy-900 font-medium">Offres & Tarifs</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <span className="inline-block bg-orange-100 text-orange-600 
                             text-xs font-bold px-3 py-1.5 rounded-full 
                             tracking-wider uppercase mb-4">
              Espace professionnels
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
              Nos offres pour les <span className="text-orange-500">professionnels</span>
            </h1>
            <p className="mt-4 text-navy-500 text-base sm:text-lg max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre activité. Sans engagement, sans frais cachés.
            </p>
          </div>
        </section>

        {/* Cartes des plans */}
        <section className="py-12">
          <div className="container-hall">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLANS.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.id}
                    className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-300 
                              ${plan.highlighted 
                                ? 'border-orange-500 shadow-card-hover lg:scale-105' 
                                : 'border-navy-100 hover:border-orange-200 hover:shadow-card'
                              }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 
                                       bg-orange-500 text-white text-[10px] font-bold 
                                       px-3 py-1 rounded-full tracking-wider">
                        {plan.badge}
                      </span>
                    )}

                    {/* Icon + Nom */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-navy-50 flex items-center 
                                      justify-center`}>
                        <Icon size={20} className={plan.color} />
                      </div>
                      <h3 className="font-bold text-navy-900 text-lg">{plan.name}</h3>
                    </div>

                    {/* Prix */}
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-navy-900">
                        {plan.price === 0 ? 'Gratuit' : `${plan.price} €`}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-xs text-navy-400 ml-1">{plan.period}</span>
                      )}
                    </div>

                    <p className="text-sm text-navy-500 leading-relaxed mb-5">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-navy-700"
                        >
                          <div className="w-4 h-4 rounded-full bg-orange-100 
                                          flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={10} className="text-orange-500" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={plan.ctaHref}
                      className={`w-full inline-flex items-center justify-center gap-2 
                                  py-2.5 px-4 rounded-lg font-semibold text-sm transition 
                                  ${plan.highlighted 
                                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                                    : 'bg-navy-50 hover:bg-navy-100 text-navy-700'
                                  }`}
                    >
                      {plan.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tableau de comparaison */}
        <section className="py-12 bg-navy-50/30">
          <div className="container-hall">
            <div className="text-center mb-8">
              <h2 className="section-title">Comparer les offres</h2>
              <p className="section-subtitle">
                Détail complet des fonctionnalités par formule.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-50/50 border-b border-navy-100">
                      <th className="text-left p-4 font-bold text-navy-900">
                        Fonctionnalités
                      </th>
                      <th className="text-center p-4 font-bold text-navy-700">
                        Gratuit
                      </th>
                      <th className="text-center p-4 font-bold text-orange-500">
                        Starter
                      </th>
                      <th className="text-center p-4 font-bold text-navy-700">
                        Pro
                      </th>
                      <th className="text-center p-4 font-bold text-purple-600">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_FEATURES.map((row, idx) => (
                      <tr
                        key={row.label}
                        className={`border-b border-navy-50 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-navy-50/20'
                        }`}
                      >
                        <td className="p-4 text-navy-700 font-medium">
                          {row.label}
                        </td>
                        <td className="p-4 text-center">
                          <CellValue value={row.gratuit} />
                        </td>
                        <td className="p-4 text-center bg-orange-50/30">
                          <CellValue value={row.starter} />
                        </td>
                        <td className="p-4 text-center">
                          <CellValue value={row.pro} />
                        </td>
                        <td className="p-4 text-center">
                          <CellValue value={row.premium} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container-hall">
            <div className="text-center mb-8">
              <h2 className="section-title">Questions fréquentes</h2>
              <p className="section-subtitle">
                Tout ce que vous devez savoir sur nos offres.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQ.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-navy-100 rounded-xl 
                             overflow-hidden hover:border-orange-200 transition"
                >
                  <summary className="flex items-center justify-between p-4 
                                      cursor-pointer list-none">
                    <span className="font-semibold text-navy-900 text-sm pr-4">
                      {item.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-navy-50 
                                     flex items-center justify-center shrink-0 
                                     group-open:bg-orange-500 transition">
                      <span className="text-navy-700 group-open:text-white 
                                       group-open:rotate-45 transition-transform 
                                       text-lg leading-none">+</span>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-navy-500 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 bg-gradient-to-r from-navy-900 to-navy-700 text-white">
          <div className="container-hall text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Prêt à développer votre activité ?
            </h2>
            <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
              Rejoignez plus de 5 000 professionnels qui utilisent ImmoHall au quotidien.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/inscription"
                className="btn-primary justify-center text-sm"
              >
                Créer mon compte gratuit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 
                           bg-white/10 hover:bg-white/20 text-white font-semibold 
                           px-5 py-3 rounded-lg transition text-sm"
              >
                Parler à un conseiller
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// مساعد لعرض قيمة الخلية
function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex w-5 h-5 rounded-full bg-orange-100 
                       items-center justify-center mx-auto">
        <Check size={12} className="text-orange-500" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex w-5 h-5 rounded-full bg-navy-50 
                       items-center justify-center mx-auto">
        <X size={12} className="text-navy-300" />
      </span>
    );
  }
  return <span className="text-navy-700 font-medium">{value}</span>;
}