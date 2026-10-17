'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  FileText,
  Scale,
  ShoppingBag,
  CreditCard,
  RefreshCw,
  AlertCircle,
  Mail,
  Check,
  Users,
  Lock,
  Ban,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Tab = 'cgu' | 'cgv';

export default function CgvCguPage() {
  const [tab, setTab] = useState<Tab>('cgu');

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
                CGV / CGU
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 
                            rounded-2xl bg-orange-100 mb-4">
              <Scale size={24} className="text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Conditions <span className="text-orange-500">générales</span>
            </h1>
            <p className="mt-3 text-sm text-navy-500">
              Dernière mise à jour : 4 octobre 2026
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8">
          <div className="container-hall max-w-3xl">
            <div className="flex gap-2 mb-8 bg-navy-50 p-1.5 rounded-xl">
              <button
                onClick={() => setTab('cgu')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 
                            px-4 rounded-lg text-sm font-semibold transition ${
                              tab === 'cgu'
                                ? 'bg-white text-navy-900 shadow-sm'
                                : 'text-navy-500 hover:text-navy-700'
                            }`}
              >
                <Users size={16} />
                CGU
                <span className="hidden sm:inline text-[10px] font-normal 
                                 opacity-70">
                  (Utilisation)
                </span>
              </button>
              <button
                onClick={() => setTab('cgv')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 
                            px-4 rounded-lg text-sm font-semibold transition ${
                              tab === 'cgv'
                                ? 'bg-white text-navy-900 shadow-sm'
                                : 'text-navy-500 hover:text-navy-700'
                            }`}
              >
                <ShoppingBag size={16} />
                CGV
                <span className="hidden sm:inline text-[10px] font-normal 
                                 opacity-70">
                  (Vente)
                </span>
              </button>
            </div>

            {/* Content */}
            {tab === 'cgu' ? <CGUContent /> : <CGVContent />}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ============================================
// CGU - Conditions Générales d'Utilisation
// ============================================
function CGUContent() {
  return (
    <div className="space-y-8">
      <InfoBox>
        Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent
        l&apos;accès et l&apos;utilisation du site ImmoHall par tout utilisateur
        (visiteur, particulier, professionnel). En accédant au site, vous
        acceptez sans réserve les présentes CGU.
      </InfoBox>

      <Section icon={FileText} title="1. Objet" id="objet">
        <p>
          ImmoHall est un portail national de diffusion d&apos;annonces
          immobilières couvrant le résidentiel et l&apos;immobilier
          professionnel (murs, fonds de commerce, droit au bail, bureaux,
          terrains).
        </p>
        <p className="mt-3">
          Le site met en relation des vendeurs, acquéreurs et professionnels de
          l&apos;immobilier. ImmoHall agit en qualité d&apos;intermédiaire
          technique et n&apos;est pas partie aux transactions réalisées.
        </p>
      </Section>

      <Section icon={Lock} title="2. Accès au service" id="acces">
        <p>L&apos;accès au site est gratuit et ouvert à tout utilisateur.</p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>L&apos;accès peut être suspendu pour maintenance.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Certaines fonctionnalités (dépôt d&apos;annonces, accès aux
              leads) nécessitent la création d&apos;un compte.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Les frais d&apos;accès à Internet sont à la charge de
              l&apos;utilisateur.
            </span>
          </li>
        </ul>
      </Section>

      <Section icon={Users} title="3. Compte utilisateur" id="compte">
        <p>
          La création d&apos;un compte est gratuite. L&apos;utilisateur
          s&apos;engage à :
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Fournir des informations exactes et à jour.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Préserver la confidentialité de ses identifiants de connexion.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Ne pas partager son compte avec des tiers.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Nous informer immédiatement en cas d&apos;utilisation non
              autorisée.
            </span>
          </li>
        </ul>
      </Section>

      <Section icon={Ban} title="4. Obligations de l'utilisateur" id="obligations">
        <p>Il est strictement interdit de :</p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Publier des annonces frauduleuses, trompeuses ou illégales.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Utiliser le site à des fins illicites ou malveillantes.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Tenter de contourner les mesures de sécurité ou d&apos;accéder aux
              données d&apos;autres utilisateurs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Extraire massivement des données (scraping) sans autorisation.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Porter atteinte aux droits de propriété intellectuelle
              d&apos;ImmoHall ou de tiers.
            </span>
          </li>
        </ul>
        <p className="mt-3 text-xs text-navy-500">
          ⚠️ Tout manquement peut entraîner la suspension ou la suppression du
          compte, sans préavis ni indemnité.
        </p>
      </Section>

      <Section icon={AlertCircle} title="5. Responsabilité" id="responsabilite">
        <p>
          ImmoHall met tout en œuvre pour assurer la disponibilité et la
          fiabilité du service, sans garantie absolue.
        </p>
        <p className="mt-3">ImmoHall ne peut être tenu responsable :</p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Des interruptions de service, bugs ou erreurs techniques.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Du contenu des annonces publiées par des tiers.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Des transactions réalisées entre utilisateurs.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Des dommages indirects résultant de l&apos;utilisation du site.</span>
          </li>
        </ul>
      </Section>

      <Section icon={RefreshCw} title="6. Modification des CGU" id="modification">
        <p>
          ImmoHall se réserve le droit de modifier les présentes CGU à tout
          moment. Les utilisateurs seront informés par email ou notification
          sur le site.
        </p>
        <p className="mt-3">
          L&apos;utilisation continue du site après modification vaut
          acceptation des nouvelles CGU.
        </p>
      </Section>

      <Section icon={Scale} title="7. Droit applicable" id="droit">
        <p>
          Les présentes CGU sont régies par le droit français. En cas de
          litige, une solution amiable sera recherchée avant toute action
          judiciaire.
        </p>
        <p className="mt-3">
          À défaut, les tribunaux compétents de Paris seront seuls saisis.
        </p>
      </Section>
    </div>
  );
}

// ============================================
// CGV - Conditions Générales de Vente
// ============================================
function CGVContent() {
  return (
    <div className="space-y-8">
      <InfoBox>
        Les présentes Conditions Générales de Vente (CGV) régissent les
        relations contractuelles entre ImmoHall et ses clients professionnels
        dans le cadre des services payants proposés (abonnements, achat de
        leads à l&apos;unité).
      </InfoBox>

      <Section icon={ShoppingBag} title="1. Services proposés" id="services">
        <p>ImmoHall propose deux types de services payants :</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="bg-navy-50/50 rounded-lg p-4">
            <h4 className="font-bold text-navy-900 text-sm mb-2">
              📦 Abonnements mensuels
            </h4>
            <ul className="text-xs text-navy-600 space-y-1">
              <li>• Starter : 49 € HT/mois</li>
              <li>• Pro : 99 € HT/mois</li>
              <li>• Premium : 199 € HT/mois</li>
            </ul>
          </div>
          <div className="bg-navy-50/50 rounded-lg p-4">
            <h4 className="font-bold text-navy-900 text-sm mb-2">
              🎯 Achat de leads à l&apos;unité
            </h4>
            <ul className="text-xs text-navy-600 space-y-1">
              <li>• Lead résidentiel : 19 € HT</li>
              <li>• Lead commercial : 39 € HT</li>
              <li>• Déblocage immédiat</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section icon={CreditCard} title="2. Prix et paiement" id="prix">
        <p>
          Les prix sont indiqués en euros hors taxes (HT). La TVA au taux en
          vigueur (20 %) est ajoutée lors du paiement.
        </p>
        <p className="mt-3">
          Le paiement s&apos;effectue par carte bancaire via la plateforme
          sécurisée <strong>Stripe</strong>. Aucune donnée bancaire n&apos;est
          stockée sur nos serveurs.
        </p>
        <p className="mt-3">Moyens de paiement acceptés :</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li className="flex items-center gap-2">
            <Check size={14} className="text-green-600" />
            <span>Visa, Mastercard, American Express</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={14} className="text-green-600" />
            <span>Virement SEPA (sur demande)</span>
          </li>
        </ul>
      </Section>

      <Section icon={RefreshCw} title="3. Abonnements" id="abonnements">
        <p>
          Les abonnements sont <strong>sans engagement</strong> et
          renouvelables automatiquement chaque mois.
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Le renouvellement est automatique à date anniversaire.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              L&apos;utilisateur peut résilier à tout moment depuis son espace
              personnel.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              La résiliation prend effet à la fin de la période en cours.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Aucun remboursement prorata temporis.</span>
          </li>
        </ul>
      </Section>

      <Section icon={Lock} title="4. Achat de leads à l'unité" id="leads">
        <p>
          Les leads sont débloqués immédiatement après paiement. Une fois les
          coordonnées révélées :
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Le lead est définitivement attribué à l&apos;acheteur.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Aucun remboursement n&apos;est possible, même si le prospect ne
              répond pas.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Le lead reste accessible dans l&apos;historique indéfiniment.
            </span>
          </li>
        </ul>
        <p className="mt-3 text-xs text-navy-500">
          ⚠️ Le même lead peut être vendu à plusieurs professionnels
          simultanément (sauf mention contraire).
        </p>
      </Section>

      <Section icon={RefreshCw} title="5. Droit de rétractation" id="retractation">
        <p>
          Conformément à l&apos;article L.221-28 du Code de la consommation, le
          droit de rétractation <strong>ne s&apos;applique pas</strong> :
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Aux services numériques fournis immédiatement (déblocage de
              leads).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>
              Aux contrats conclus entre professionnels (B2B).
            </span>
          </li>
        </ul>
        <p className="mt-3">
          Pour les particuliers, un délai de 14 jours s&apos;applique sur les
          abonnements non encore utilisés.
        </p>
      </Section>

      <Section icon={Ban} title="6. Résiliation" id="resiliation">
        <p>
          ImmoHall se réserve le droit de résilier un compte en cas de :
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Non-paiement des sommes dues.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Violation des CGU ou CGV.</span>
          </li>
          <li className="flex items-start gap-2">
            <Bullet />
            <span>Comportement frauduleux ou abusif.</span>
          </li>
        </ul>
        <p className="mt-3">
          En cas de résiliation pour faute, aucun remboursement ne sera
          effectué.
        </p>
      </Section>

      <Section icon={AlertCircle} title="7. Litiges" id="litiges">
        <p>
          En cas de litige, une solution amiable sera recherchée en priorité.
          À défaut, les tribunaux compétents de Paris seront seuls saisis.
        </p>
        <p className="mt-3">
          Pour toute réclamation, contactez-nous à{' '}
          <a
            href="mailto:contact@immohall.com"
            className="text-orange-500 underline font-semibold"
          >
            contact@immohall.com
          </a>
        </p>
      </Section>

      <div className="bg-navy-900 text-white rounded-2xl p-6 mt-8">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex 
                          items-center justify-center shrink-0">
            <Mail size={18} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">
              Une question sur nos CGV ?
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Notre équipe commerciale est à votre disposition.
            </p>
            <a
              href="mailto:contact@immohall.com"
              className="inline-flex items-center gap-2 bg-orange-500 
                         hover:bg-orange-600 text-white font-semibold 
                         px-4 py-2.5 rounded-lg text-sm transition"
            >
              <Mail size={14} />
              contact@immohall.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Composants réutilisables
// ============================================
function Section({
  icon: Icon,
  title,
  id,
  children,
}: {
  icon: any;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center 
                        justify-center shrink-0">
          <Icon size={16} className="text-orange-500" />
        </div>
        <h2 className="text-xl font-bold text-navy-900">{title}</h2>
      </div>
      <div className="text-sm text-navy-600 leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
      <p className="text-sm text-navy-700 leading-relaxed">{children}</p>
    </div>
  );
}

function Bullet() {
  return (
    <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center 
                    justify-center shrink-0 mt-0.5">
      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
    </div>
  );
}