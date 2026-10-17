import Link from 'next/link';
import {
  ChevronRight,
  Shield,
  Database,
  Target,
  Clock,
  UserCheck,
  Cookie,
  Globe,
  AlertCircle,
  Mail,
  FileText,
  Lock,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et protection des données personnelles (RGPD) d\'ImmoHall.',
};

type DataRow = {
  type: string;
  purpose: string;
  duration: string;
};

const DATA_TABLE: DataRow[] = [
  {
    type: 'Nom, prénom',
    purpose: 'Identification, communication',
    duration: '3 ans après dernier contact',
  },
  {
    type: 'Adresse e-mail',
    purpose: 'Communication, notifications',
    duration: '3 ans après dernier contact',
  },
  {
    type: 'Numéro de téléphone',
    purpose: 'Contact commercial',
    duration: '3 ans après dernier contact',
  },
  {
    type: 'Adresse postale',
    purpose: 'Estimation, localisation du bien',
    duration: '3 ans après dernier contact',
  },
  {
    type: 'Données de navigation',
    purpose: 'Statistiques, amélioration du service',
    duration: '13 mois maximum',
  },
  {
    type: 'Cookies',
    purpose: 'Fonctionnement, mesure d\'audience',
    duration: '13 mois maximum',
  },
  {
    type: 'Données bancaires',
    purpose: 'Paiement des abonnements et leads',
    duration: 'Conservées par Stripe (PCI-DSS)',
  },
];

export default function PolitiqueConfidentialitePage() {
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
                Politique de confidentialité
              </span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 
                            rounded-2xl bg-orange-100 mb-4">
              <Shield size={24} className="text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Politique de{' '}
              <span className="text-orange-500">confidentialité</span>
            </h1>
            <p className="mt-3 text-sm text-navy-500">
              Dernière mise à jour : 4 octobre 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-hall max-w-3xl">
            <div className="space-y-8">
              {/* Intro */}
              <div className="bg-orange-50 border border-orange-200 
                              rounded-2xl p-5">
                <p className="text-sm text-navy-700 leading-relaxed">
                  ImmoHall accorde une importance particulière à la protection
                  de vos données personnelles. Cette politique explique quelles
                  données nous collectons, pourquoi, comment et pendant combien
                  de temps. Elle est conforme au <strong>Règlement Général sur
                  la Protection des Données (RGPD)</strong> et à la loi
                  Informatique et Libertés.
                </p>
              </div>

              {/* 1. Responsable */}
              <Section
                icon={UserCheck}
                title="1. Responsable du traitement"
                id="responsable"
              >
                <p>Le responsable du traitement des données est :</p>
                <div className="mt-4 bg-navy-50/50 rounded-lg p-4 space-y-2 
                                text-sm">
                  <InfoRow label="Société" value="ImmoHall SAS" />
                  <InfoRow label="Adresse" value="1 rue de la Paix, 75001 Paris" />
                  <InfoRow label="Email DPO" value="rgpd@immohall.com" />
                  <InfoRow label="Téléphone" value="01 23 45 67 89" />
                </div>
              </Section>

              {/* 2. Données collectées */}
              <Section
                icon={Database}
                title="2. Données collectées"
                id="donnees"
              >
                <p>
                  Nous collectons uniquement les données strictement nécessaires
                  à la fourniture de nos services :
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border 
                                    border-navy-100 rounded-lg overflow-hidden">
                    <thead className="bg-navy-50/70">
                      <tr>
                        <th className="text-left p-3 font-semibold text-navy-700">
                          Type de donnée
                        </th>
                        <th className="text-left p-3 font-semibold text-navy-700">
                          Finalité
                        </th>
                        <th className="text-left p-3 font-semibold text-navy-700">
                          Durée
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {DATA_TABLE.map((row, i) => (
                        <tr
                          key={row.type}
                          className={`border-t border-navy-50 ${
                            i % 2 === 0 ? 'bg-white' : 'bg-navy-50/20'
                          }`}
                        >
                          <td className="p-3 text-navy-900 font-medium">
                            {row.type}
                          </td>
                          <td className="p-3 text-navy-500">{row.purpose}</td>
                          <td className="p-3 text-navy-500 text-xs">
                            {row.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              {/* 3. Finalités */}
              <Section icon={Target} title="3. Finalités du traitement" id="finalites">
                <p>Vos données sont utilisées pour :</p>
                <ul className="mt-3 space-y-2">
                  {[
                    'Créer et gérer votre compte utilisateur',
                    'Mettre en relation vendeurs et acheteurs',
                    'Transmettre les coordonnées de prospects aux professionnels',
                    'Gérer les paiements (abonnements, achats de leads)',
                    'Vous envoyer des notifications et alertes personnalisées',
                    'Améliorer nos services et mesurer l\'audience',
                    'Respecter nos obligations légales et comptables',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-orange-100 
                                      flex items-center justify-center 
                                      shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 4. Base légale */}
              <Section
                icon={FileText}
                title="4. Base légale du traitement"
                id="base-legale"
              >
                <p>Conformément à l&apos;article 6 du RGPD, nos traitements reposent sur :</p>
                <ul className="mt-3 space-y-3 text-sm">
                  <li>
                    <strong className="text-navy-900">Consentement :</strong>{' '}
                    pour l&apos;envoi de newsletters et cookies non essentiels.
                  </li>
                  <li>
                    <strong className="text-navy-900">Exécution d&apos;un contrat :</strong>{' '}
                    pour la fourniture des services (compte, dépôt d&apos;annonces).
                  </li>
                  <li>
                    <strong className="text-navy-900">Obligation légale :</strong>{' '}
                    pour la conservation des factures (10 ans).
                  </li>
                  <li>
                    <strong className="text-navy-900">Intérêt légitime :</strong>{' '}
                    pour l&apos;amélioration de nos services et la sécurité.
                  </li>
                </ul>
              </Section>

              {/* 5. Durée de conservation */}
              <Section icon={Clock} title="5. Durée de conservation" id="duree">
                <p>
                  Les données sont conservées pendant la durée strictement
                  nécessaire aux finalités décrites :
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <strong className="text-navy-900 shrink-0">Compte actif :</strong>
                    <span>tant que le compte n&apos;est pas supprimé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <strong className="text-navy-900 shrink-0">Compte inactif :</strong>
                    <span>suppression après 3 ans d&apos;inactivité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <strong className="text-navy-900 shrink-0">Factures :</strong>
                    <span>10 ans (obligation comptable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <strong className="text-navy-900 shrink-0">Cookies :</strong>
                    <span>13 mois maximum</span>
                  </li>
                </ul>
              </Section>

              {/* 6. Vos droits */}
              <Section icon={UserCheck} title="6. Vos droits (RGPD)" id="droits">
                <p>
                  Conformément aux articles 15 à 22 du RGPD, vous disposez des
                  droits suivants :
                </p>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: 'Droit d\'accès',
                      desc: 'Consulter les données que nous détenons sur vous.',
                    },
                    {
                      title: 'Droit de rectification',
                      desc: 'Corriger les données inexactes ou incomplètes.',
                    },
                    {
                      title: 'Droit à l\'effacement',
                      desc: 'Demander la suppression de vos données.',
                    },
                    {
                      title: 'Droit à la limitation',
                      desc: 'Limiter l\'utilisation de vos données.',
                    },
                    {
                      title: 'Droit d\'opposition',
                      desc: 'Vous opposer au traitement de vos données.',
                    },
                    {
                      title: 'Droit à la portabilité',
                      desc: 'Recevoir vos données dans un format standard.',
                    },
                  ].map((droit) => (
                    <div
                      key={droit.title}
                      className="bg-navy-50/50 rounded-lg p-3"
                    >
                      <p className="font-semibold text-navy-900 text-xs mb-1">
                        {droit.title}
                      </p>
                      <p className="text-xs text-navy-500">{droit.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  Pour exercer ces droits, écrivez à{' '}
                  <a
                    href="mailto:rgpd@immohall.com"
                    className="text-orange-500 underline"
                  >
                    rgpd@immohall.com
                  </a>
                  . Réponse sous 30 jours.
                </p>
              </Section>

              {/* 7. Cookies */}
              <Section icon={Cookie} title="7. Cookies" id="cookies">
                <p>Nous utilisons 3 catégories de cookies :</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-50 
                                  border border-green-100 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 
                                    flex items-center justify-center shrink-0 
                                    mt-0.5">
                      <Lock size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 text-sm">
                        Cookies essentiels
                      </p>
                      <p className="text-xs text-green-600 mt-0.5">
                        Nécessaires au fonctionnement du site (session,
                        authentification). Toujours actifs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-navy-50/50 
                                  rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-navy-500 
                                    flex items-center justify-center shrink-0 
                                    mt-0.5">
                      <Target size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-700 text-sm">
                        Cookies analytiques
                      </p>
                      <p className="text-xs text-navy-500 mt-0.5">
                        Mesure d&apos;audience anonymisée (Vercel Analytics).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-navy-50/50 
                                  rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-navy-500 
                                    flex items-center justify-center shrink-0 
                                    mt-0.5">
                      <Globe size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-700 text-sm">
                        Cookies marketing
                      </p>
                      <p className="text-xs text-navy-500 mt-0.5">
                        Publicités ciblées (désactivés par défaut).
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4">
                  Vous pouvez gérer vos préférences à tout moment depuis notre{' '}
                  <Link
                    href="/cookies"
                    className="text-orange-500 underline"
                  >
                    page de gestion des cookies
                  </Link>
                  .
                </p>
              </Section>

              {/* 8. Transferts */}
              <Section
                icon={Globe}
                title="8. Transferts hors UE"
                id="transferts"
              >
                <p>
                  Certains de nos prestataires sont situés hors de l&apos;Union
                  Européenne. Ces transferts sont encadrés par :
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <strong className="text-navy-900">Vercel (USA) :</strong>{' '}
                    hébergement · Clauses Contractuelles Types
                  </li>
                  <li>
                    <strong className="text-navy-900">Stripe (Irlande/USA) :</strong>{' '}
                    paiement · Certifié PCI-DSS
                  </li>
                  <li>
                    <strong className="text-navy-900">Supabase (Allemagne) :</strong>{' '}
                    base de données · Serveurs dans l&apos;UE
                  </li>
                </ul>
              </Section>

              {/* 9. Sécurité */}
              <Section icon={Lock} title="9. Sécurité" id="securite">
                <p>
                  Nous mettons en œuvre les mesures techniques et
                  organisationnelles appropriées :
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'Chiffrement HTTPS/TLS 1.3',
                    'Hachage des mots de passe (bcrypt)',
                    'Sauvegardes chiffrées quotidiennes',
                    'Accès restreint aux données sensibles',
                    'Authentification à deux facteurs (2FA) pour les admins',
                    'Surveillance continue des incidents',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-orange-100 
                                      flex items-center justify-center 
                                      shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 10. Réclamation */}
              <Section
                icon={AlertCircle}
                title="10. Réclamation CNIL"
                id="reclamation"
              >
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous
                  pouvez introduire une réclamation auprès de la{' '}
                  <strong>CNIL</strong> :
                </p>
                <div className="mt-4 bg-navy-50/50 rounded-lg p-4 space-y-2 
                                text-sm">
                  <InfoRow label="Site web" value="www.cnil.fr" />
                  <InfoRow label="Adresse" value="3 Place de Fontenoy, 75007 Paris" />
                  <InfoRow label="Téléphone" value="01 53 73 22 22" />
                </div>
              </Section>

              {/* Contact DPO */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 
                                  flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      Contacter notre DPO
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      Pour toute question relative à vos données personnelles.
                    </p>
                    <a
                      href="mailto:rgpd@immohall.com"
                      className="inline-flex items-center gap-2 bg-orange-500 
                                 hover:bg-orange-600 text-white font-semibold 
                                 px-4 py-2.5 rounded-lg text-sm transition"
                    >
                      <Mail size={14} />
                      rgpd@immohall.com
                    </a>
                  </div>
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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-navy-500 shrink-0">{label}</span>
      <span className="font-medium text-navy-900 text-right">{value}</span>
    </div>
  );
}