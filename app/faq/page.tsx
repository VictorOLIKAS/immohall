'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  HelpCircle,
  Search,
  Home,
  Briefcase,
  CreditCard,
  Target,
  Shield,
  Mail,
  ArrowRight,
  Plus,
  X,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type FAQCategory =
  | 'general'
  | 'pro'
  | 'paiement'
  | 'leads'
  | 'rgpd';

type FAQItem = {
  category: FAQCategory;
  q: string;
  a: string;
};

const CATEGORIES: {
  key: FAQCategory | 'all';
  label: string;
  icon: any;
}[] = [
  { key: 'all', label: 'Toutes', icon: HelpCircle },
  { key: 'general', label: 'Général', icon: Home },
  { key: 'pro', label: 'Espace Pro', icon: Briefcase },
  { key: 'paiement', label: 'Paiement', icon: CreditCard },
  { key: 'leads', label: 'Leads', icon: Target },
  { key: 'rgpd', label: 'RGPD', icon: Shield },
];

const FAQS: FAQItem[] = [
  // ============ GÉNÉRAL ============
  {
    category: 'general',
    q: 'Qu\'est-ce qu\'ImmoHall ?',
    a: 'ImmoHall est un portail national de diffusion d\'annonces immobilières qui couvre le résidentiel (maisons, appartements) et l\'immobilier professionnel (murs, fonds de commerce, droit au bail, bureaux, terrains). Nous mettons en relation vendeurs, acquéreurs et professionnels de l\'immobilier.',
  },
  {
    category: 'general',
    q: 'La consultation des annonces est-elle gratuite ?',
    a: 'Oui, la consultation de toutes les annonces est 100% gratuite et sans inscription. Vous pouvez rechercher, filtrer et contacter les annonceurs librement.',
  },
  {
    category: 'general',
    q: 'Dans quelles régions êtes-vous présents ?',
    a: 'ImmoHall couvre l\'ensemble du territoire français, y compris les DOM-TOM. Notre réseau de professionnels partenaires et la Team L\'Enseigne Immo sont présents dans toute la France.',
  },
  {
    category: 'general',
    q: 'Comment contacter un annonceur ?',
    a: 'Sur chaque fiche d\'annonce, vous trouverez un formulaire de demande d\'information. Remplissez-le et l\'annonceur recevra votre demande. Il vous recontactera directement.',
  },

  // ============ ESPACE PRO ============
  {
    category: 'pro',
    q: 'Comment publier une annonce en tant que professionnel ?',
    a: 'Créez un compte professionnel (gratuit), accédez à votre espace « Mes annonces », puis cliquez sur « Publier une annonce ». Remplissez le formulaire en 4 étapes : type de bien, détails, description et publication. Après validation par notre équipe (sous 24h), votre annonce sera visible.',
  },
  {
    category: 'pro',
    q: 'Y a-t-il un engagement sur les abonnements ?',
    a: 'Non, tous nos abonnements (Starter 49€, Pro 99€, Premium 199€) sont sans engagement. Vous pouvez annuler à tout moment depuis votre espace personnel.',
  },
  {
    category: 'pro',
    q: 'Combien d\'annonces puis-je publier ?',
    a: 'Cela dépend de votre formule : Gratuit (illimité), Starter (10 annonces), Pro (50 annonces), Premium (illimité). Voir toutes les offres sur notre page Tarifs.',
  },
  {
    category: 'pro',
    q: 'Qu\'est-ce que la Team L\'Enseigne Immo ?',
    a: 'C\'est notre équipe d\'agents immobiliers agréés. Les membres bénéficient d\'un affichage prioritaire de leurs annonces et d\'une transmission directe et gratuite des leads générés.',
  },
  {
    category: 'pro',
    q: 'Puis-je gérer plusieurs utilisateurs sur mon compte ?',
    a: 'Oui, à partir de la formule Pro vous pouvez ajouter jusqu\'à 3 utilisateurs. La formule Premium permet un nombre illimité d\'utilisateurs.',
  },

  // ============ PAIEMENT ============
  {
    category: 'paiement',
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via notre partenaire Stripe, certifié PCI-DSS. Le virement SEPA est également possible sur demande.',
  },
  {
    category: 'paiement',
    q: 'Y a-t-il des frais d\'installation ?',
    a: 'Non, aucun frais d\'installation. Vous payez uniquement votre abonnement mensuel ou les leads à l\'unité.',
  },
  {
    category: 'paiement',
    q: 'Comment fonctionne le modèle « au lead » ?',
    a: 'Avec l\'offre Gratuite, vous recevez une notification à chaque prospect intéressé. Vous payez uniquement 19 € (résidentiel) ou 39 € (commercial) pour débloquer ses coordonnées complètes. Aucun autre frais.',
  },
  {
    category: 'paiement',
    q: 'Les leads non utilisés sont-ils reportés ?',
    a: 'Les leads inclus dans votre abonnement sont valables 30 jours. Les leads non débloqués ne sont pas reportés au mois suivant.',
  },
  {
    category: 'paiement',
    q: 'Puis-je obtenir une facture ?',
    a: 'Oui, toutes les factures sont automatiquement disponibles dans votre espace « Facturation » au format PDF. Elles sont conformes aux exigences comptables françaises.',
  },

  // ============ LEADS ============
  {
    category: 'leads',
    q: 'Qu\'est-ce qu\'un lead ?',
    a: 'Un lead est un prospect qualifié qui a manifesté un intérêt pour l\'un de vos biens. Il contient ses coordonnées (nom, email, téléphone) et son message.',
  },
  {
    category: 'leads',
    q: 'Comment recevoir des leads ?',
    a: 'Dès qu\'un prospect remplit le formulaire sur une de vos annonces, vous recevez immédiatement une notification par email. Vous pouvez aussi consulter tous vos leads dans votre espace « Mes leads ».',
  },
  {
    category: 'leads',
    q: 'Les coordonnées sont-elles visibles immédiatement ?',
    a: 'Avec un abonnement (Starter, Pro, Premium), oui. Avec l\'offre Gratuite, les coordonnées sont masquées. Vous devez payer 19 € ou 39 € pour les débloquer.',
  },
  {
    category: 'leads',
    q: 'Un lead peut-il être vendu à plusieurs pros ?',
    a: 'Par défaut, un lead est exclusif : une fois débloqué par un professionnel, il ne peut plus être vendu à un autre. Cette politique garantit la qualité de service.',
  },
  {
    category: 'leads',
    q: 'Y a-t-il un remboursement si le lead ne répond pas ?',
    a: 'Non. Une fois les coordonnées débloquées, aucun remboursement n\'est possible, même si le prospect ne répond pas. Nous vous conseillons d\'appeler rapidement après réception.',
  },

  // ============ RGPD ============
  {
    category: 'rgpd',
    q: 'Comment mes données sont-elles protégées ?',
    a: 'Vos données sont chiffrées (HTTPS/TLS 1.3), les mots de passe hachés (bcrypt), les sauvegardes chiffrées quotidiennement. Nos serveurs sont situés dans l\'Union Européenne. Consultez notre Politique de confidentialité pour plus de détails.',
  },
  {
    category: 'rgpd',
    q: 'Puis-je supprimer mon compte ?',
    a: 'Oui, à tout moment depuis votre espace personnel ou en écrivant à rgpd@immohall.com. Vos données seront effacées sous 30 jours (sauf obligations légales de conservation).',
  },
  {
    category: 'rgpd',
    q: 'Utilisez-vous des cookies ?',
    a: 'Oui, uniquement ceux nécessaires au fonctionnement du site et, avec votre consentement, des cookies analytiques et marketing. Gérez vos préférences sur notre page Cookies.',
  },
  {
    category: 'rgpd',
    q: 'Comment exercer mes droits RGPD ?',
    a: 'Écrivez-nous à rgpd@immohall.com en précisant votre demande (accès, rectification, effacement, opposition, portabilité). Réponse garantie sous 30 jours.',
  },
];

export default function FAQPage() {
  const [filter, setFilter] = useState<FAQCategory | 'all'>('all');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let result = [...FAQS];

    if (filter !== 'all') {
      result = result.filter((f) => f.category === filter);
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (f) =>
          f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s)
      );
    }

    return result;
  }, [filter, search]);

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
              <span className="text-navy-900 font-medium">FAQ</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 
                            rounded-2xl bg-orange-100 mb-4">
              <HelpCircle size={24} className="text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold 
                           text-navy-900">
              Questions <span className="text-orange-500">fréquentes</span>
            </h1>
            <p className="mt-4 text-navy-500 text-base max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-6">
          <div className="container-hall max-w-2xl">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 
                           text-navy-400"
              />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border 
                           border-navy-100 text-sm focus:outline-none 
                           focus:ring-2 focus:ring-orange-400 bg-white 
                           shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-2">
          <div className="container-hall">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = filter === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setFilter(cat.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 
                                rounded-full text-sm font-semibold 
                                transition ${
                                  isActive
                                    ? 'bg-navy-900 text-white'
                                    : 'bg-white text-navy-600 border border-navy-100 hover:border-navy-200'
                                }`}
                  >
                    <Icon size={14} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-10">
          <div className="container-hall max-w-3xl">
            {filtered.length > 0 ? (
              <div className="space-y-3">
                {filtered.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`bg-white border rounded-2xl 
                                  transition-all ${
                                    isOpen
                                      ? 'border-orange-300 shadow-card'
                                      : 'border-navy-100 hover:border-navy-200'
                                  }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between 
                                   gap-4 p-5 text-left"
                      >
                        <span className="font-semibold text-navy-900 
                                         text-sm sm:text-base pr-4">
                          {faq.q}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center 
                                      justify-center shrink-0 transition ${
                                        isOpen
                                          ? 'bg-orange-500'
                                          : 'bg-navy-50'
                                      }`}
                        >
                          {isOpen ? (
                            <X size={14} className="text-white" />
                          ) : (
                            <Plus size={14} className="text-navy-700" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 -mt-1">
                          <p className="text-sm text-navy-500 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-navy-100 
                              p-12 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-navy-50 
                                flex items-center justify-center mb-4">
                  <Search size={22} className="text-navy-400" />
                </div>
                <p className="text-navy-900 font-bold text-lg mb-2">
                  Aucun résultat
                </p>
                <p className="text-sm text-navy-500">
                  Aucune question ne correspond à votre recherche.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Contact */}
        <section className="py-12">
          <div className="container-hall max-w-3xl">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 
                            rounded-3xl p-8 sm:p-10 text-white 
                            text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 
                              flex items-center justify-center mb-4">
                <Mail size={24} className="text-orange-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="mt-3 text-white/70 text-sm max-w-md mx-auto">
                Notre équipe est disponible pour répondre à toutes vos
                questions, du lundi au vendredi de 9h à 18h.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 
                              justify-center">
                <Link
                  href="/contact"
                  className="btn-primary justify-center text-sm"
                >
                  Nous contacter
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="mailto:contact@immohall.com"
                  className="inline-flex items-center justify-center gap-2 
                             bg-white/10 hover:bg-white/20 text-white 
                             font-semibold px-5 py-3 rounded-lg 
                             transition text-sm"
                >
                  <Mail size={14} />
                  contact@immohall.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}