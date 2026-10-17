'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Cookie,
  Lock,
  BarChart3,
  Target,
  Check,
  Save,
  RefreshCw,
  Info,
  Clock,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type CookiePrefs = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_TABLE = [
  {
    name: 'immohall-session',
    type: 'Essentiel',
    duration: 'Session',
    purpose: 'Authentification utilisateur',
  },
  {
    name: 'immohall-consent',
    type: 'Essentiel',
    duration: '13 mois',
    purpose: 'Mémorisation de vos choix cookies',
  },
  {
    name: '_vercel_analytics',
    type: 'Analytique',
    duration: '13 mois',
    purpose: 'Mesure d\'audience anonymisée',
  },
  {
    name: '_ga, _gid',
    type: 'Analytique',
    duration: '13 mois',
    purpose: 'Statistiques Google Analytics',
  },
  {
    name: '_fbp',
    type: 'Marketing',
    duration: '3 mois',
    purpose: 'Suivi publicitaire Facebook',
  },
  {
    name: 'stripe_mid',
    type: 'Essentiel',
    duration: '1 an',
    purpose: 'Paiement sécurisé Stripe',
  },
];

const FAQ = [
  {
    q: 'Qu\'est-ce qu\'un cookie ?',
    a: 'Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d\'un site web. Il permet de mémoriser vos préférences et d\'améliorer votre expérience de navigation.',
  },
  {
    q: 'Les cookies sont-ils obligatoires ?',
    a: 'Non. Seuls les cookies essentiels sont obligatoires pour le fonctionnement du site. Les cookies analytiques et marketing sont optionnels et nécessitent votre consentement.',
  },
  {
    q: 'Comment supprimer les cookies ?',
    a: 'Vous pouvez à tout moment modifier vos préférences sur cette page. Pour supprimer tous les cookies existants, utilisez les paramètres de votre navigateur.',
  },
  {
    q: 'Partagez-vous mes données avec des tiers ?',
    a: 'Certains cookies analytiques et marketing proviennent de tiers (Vercel, Google, Facebook). Ces données sont anonymisées lorsque c\'est possible.',
  },
  {
    q: 'Combien de temps les cookies sont-ils conservés ?',
    a: 'La durée varie selon le type : les cookies de session disparaissent à la fermeture du navigateur, les autres sont conservés entre 3 et 13 mois maximum.',
  },
  {
    q: 'Puis-je retirer mon consentement ?',
    a: 'Oui, à tout moment. Vos préférences sont enregistrées localement et vous pouvez les modifier sur cette page.',
  },
];

export default function CookiesPage() {
  const [prefs, setPrefs] = useState<CookiePrefs>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  // استرجاع التفضيلات المحفوظة
  useEffect(() => {
    try {
      const stored = localStorage.getItem('immohall-cookies');
      if (stored) {
        setPrefs(JSON.parse(stored));
      }
    } catch (e) {
      // silent fail
    }
  }, []);

  const savePrefs = (newPrefs: CookiePrefs) => {
    setPrefs(newPrefs);
    try {
      localStorage.setItem('immohall-cookies', JSON.stringify(newPrefs));
    } catch (e) {
      // silent fail
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => {
    savePrefs({ essential: true, analytics: true, marketing: true });
  };

  const refuseAll = () => {
    savePrefs({ essential: true, analytics: false, marketing: false });
  };

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
              <span className="text-navy-900 font-medium">Cookies</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 
                            rounded-2xl bg-orange-100 mb-4">
              <Cookie size={24} className="text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Gestion des <span className="text-orange-500">cookies</span>
            </h1>
            <p className="mt-3 text-sm text-navy-500 max-w-2xl mx-auto">
              Nous utilisons des cookies pour améliorer votre expérience.
              Choisissez vos préférences ci-dessous.
            </p>
          </div>
        </section>

        {/* Gestionnaire de cookies */}
        <section className="py-10">
          <div className="container-hall max-w-3xl">
            {/* Success message */}
            {saved && (
              <div className="mb-5 bg-green-50 border border-green-200 
                              rounded-lg p-4 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex 
                                items-center justify-center shrink-0">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-sm font-semibold text-green-700">
                  Vos préférences ont été enregistrées.
                </p>
              </div>
            )}

            <div className="bg-white border border-navy-100 rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-1">
                Gérez vos préférences
              </h2>
              <p className="text-sm text-navy-500 mb-6">
                Vous pouvez modifier vos choix à tout moment.
              </p>

              {/* Boutons rapides */}
              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                <button
                  onClick={acceptAll}
                  className="btn-primary flex-1 justify-center text-sm"
                >
                  <Check size={14} />
                  Tout accepter
                </button>
                <button
                  onClick={refuseAll}
                  className="btn-secondary flex-1 justify-center text-sm"
                >
                  <RefreshCw size={14} />
                  Tout refuser
                </button>
              </div>

              <div className="border-t border-navy-100 pt-6 space-y-4">
                {/* Essentiels */}
                <CookieCard
                  icon={Lock}
                  title="Cookies essentiels"
                  description="Nécessaires au fonctionnement du site. Ils permettent la navigation, l'authentification et la sécurité."
                  color="green"
                  checked={prefs.essential}
                  onChange={() => {}}
                  disabled
                  badge="Toujours actifs"
                />

                {/* Analytiques */}
                <CookieCard
                  icon={BarChart3}
                  title="Cookies analytiques"
                  description="Nous aident à mesurer l'audience et à améliorer nos services (Vercel Analytics, Google Analytics)."
                  color="navy"
                  checked={prefs.analytics}
                  onChange={(checked) =>
                    setPrefs({ ...prefs, analytics: checked })
                  }
                />

                {/* Marketing */}
                <CookieCard
                  icon={Target}
                  title="Cookies marketing"
                  description="Utilisés pour vous proposer des publicités personnalisées sur d'autres sites."
                  color="navy"
                  checked={prefs.marketing}
                  onChange={(checked) =>
                    setPrefs({ ...prefs, marketing: checked })
                  }
                />
              </div>

              <button
                onClick={() => savePrefs(prefs)}
                className="btn-primary w-full justify-center text-sm mt-6"
              >
                <Save size={14} />
                Enregistrer mes préférences
              </button>
            </div>
          </div>
        </section>

        {/* Tableau détaillé */}
        <section className="py-10 bg-navy-50/30">
          <div className="container-hall max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="section-title">Liste des cookies utilisés</h2>
              <p className="section-subtitle">
                Détail complet des cookies déposés sur notre site.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-navy-100 
                            overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-navy-50/50 border-b border-navy-100">
                    <tr>
                      <th className="text-left p-4 font-semibold text-navy-700 
                                     text-xs uppercase tracking-wider">
                        Nom
                      </th>
                      <th className="text-left p-4 font-semibold text-navy-700 
                                     text-xs uppercase tracking-wider">
                        Type
                      </th>
                      <th className="text-left p-4 font-semibold text-navy-700 
                                     text-xs uppercase tracking-wider">
                        Durée
                      </th>
                      <th className="text-left p-4 font-semibold text-navy-700 
                                     text-xs uppercase tracking-wider">
                        Finalité
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIE_TABLE.map((cookie, i) => (
                      <tr
                        key={cookie.name}
                        className={`border-b border-navy-50 ${
                          i % 2 === 0 ? 'bg-white' : 'bg-navy-50/20'
                        }`}
                      >
                        <td className="p-4 font-mono text-xs text-navy-900">
                          {cookie.name}
                        </td>
                        <td className="p-4">
                          <TypeBadge type={cookie.type} />
                        </td>
                        <td className="p-4 text-navy-500 text-xs">
                          {cookie.duration}
                        </td>
                        <td className="p-4 text-navy-500 text-xs">
                          {cookie.purpose}
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
        <section className="py-10">
          <div className="container-hall max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="section-title">Questions fréquentes</h2>
              <p className="section-subtitle">
                Tout ce que vous devez savoir sur les cookies.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-navy-100 
                             rounded-xl overflow-hidden hover:border-orange-200 
                             transition"
                >
                  <summary className="flex items-center justify-between p-4 
                                      cursor-pointer list-none">
                    <span className="font-semibold text-navy-900 text-sm pr-4">
                      {item.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-navy-50 flex 
                                     items-center justify-center shrink-0 
                                     group-open:bg-orange-500 transition">
                      <span className="text-navy-700 group-open:text-white 
                                       group-open:rotate-45 transition-transform 
                                       text-lg leading-none">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-navy-500 
                                  leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Info supplémentaire */}
        <section className="py-10">
          <div className="container-hall max-w-3xl">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl 
                            p-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-500 flex 
                                items-center justify-center shrink-0">
                  <Info size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-2">
                    Besoin de plus d&apos;informations ?
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    Consultez notre{' '}
                    <Link
                      href="/politique-confidentialite"
                      className="text-orange-500 underline font-semibold"
                    >
                      politique de confidentialité
                    </Link>{' '}
                    pour plus de détails sur la protection de vos données, ou
                    contactez notre DPO à{' '}
                    <a
                      href="mailto:rgpd@immohall.com"
                      className="text-orange-500 underline font-semibold"
                    >
                      rgpd@immohall.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CookieCard({
  icon: Icon,
  title,
  description,
  color,
  checked,
  onChange,
  disabled,
  badge,
}: {
  icon: any;
  title: string;
  description: string;
  color: 'green' | 'navy';
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  badge?: string;
}) {
  const colors = {
    green: 'bg-green-500 text-white',
    navy: 'bg-navy-500 text-white',
  };

  return (
    <div className="flex items-start gap-3 p-4 bg-navy-50/30 rounded-xl">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center 
                    shrink-0 ${colors[color]}`}
      >
        <Icon size={18} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="font-bold text-navy-900 text-sm">{title}</h3>
          {badge && (
            <span className="text-[10px] font-bold bg-green-100 text-green-700 
                             px-2 py-0.5 rounded uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-navy-500 leading-relaxed">{description}</p>
      </div>

      {/* Toggle */}
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`w-12 h-6 rounded-full transition relative shrink-0 
                    ${checked ? 'bg-orange-500' : 'bg-navy-200'} 
                    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
        aria-label={title}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white 
                      shadow-sm transition-transform ${
                        checked ? 'left-6' : 'left-0.5'
                      }`}
        />
      </button>
    </div>
  );
}

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Essentiel: 'bg-green-100 text-green-700',
    Analytique: 'bg-navy-100 text-navy-700',
    Marketing: 'bg-purple-100 text-purple-700',
  };

  return (
    <span
      className={`text-[10px] font-bold px-2 py-1 rounded uppercase 
                  tracking-wider ${colors[type] || 'bg-navy-100 text-navy-700'}`}
    >
      {type}
    </span>
  );
}