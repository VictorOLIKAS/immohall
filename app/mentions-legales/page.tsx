import Link from 'next/link';
import {
  ChevronRight,
  Building2,
  Mail,
  Phone,
  MapPin,
  Server,
  FileText,
  AlertCircle,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales d\'ImmoHall, portail national d\'annonces immobilières.',
};

export default function MentionsLegalesPage() {
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
              <span className="text-navy-900 font-medium">Mentions légales</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 
                            rounded-2xl bg-orange-100 mb-4">
              <FileText size={24} className="text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Mentions <span className="text-orange-500">légales</span>
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
              {/* Éditeur */}
              <Section
                icon={Building2}
                title="1. Éditeur du site"
                id="editeur"
              >
                <p>
                  Le site <strong>ImmoHall</strong> (accessible à l&apos;adresse{' '}
                  <a
                    href="https://immohall.com"
                    className="text-orange-500 underline"
                  >
                    www.immohall.com
                  </a>
                  ) est édité par :
                </p>
                <div className="mt-4 bg-navy-50/50 rounded-lg p-4 space-y-2 
                                text-sm">
                  <InfoRow label="Raison sociale" value="ImmoHall SAS" />
                  <InfoRow label="Capital social" value="10 000 €" />
                  <InfoRow label="SIREN" value="123 456 789" />
                  <InfoRow label="SIRET" value="123 456 789 00012" />
                  <InfoRow label="RCS" value="RCS Paris B 123 456 789" />
                  <InfoRow label="TVA intracommunautaire" value="FR 12 123456789" />
                  <InfoRow
                    label="Siège social"
                    value="1 rue de la Paix, 75001 Paris, France"
                  />
                  <InfoRow label="Directeur de publication" value="Omar Messaoudi" />
                  <InfoRow label="Contact" value="contact@immohall.com" />
                </div>
              </Section>

              {/* Hébergeur */}
              <Section icon={Server} title="2. Hébergement" id="hebergeur">
                <p>
                  Le site ImmoHall est hébergé par :
                </p>
                <div className="mt-4 bg-navy-50/50 rounded-lg p-4 space-y-2 
                                text-sm">
                  <InfoRow label="Hébergeur" value="Vercel Inc." />
                  <InfoRow label="Adresse" value="340 S Lemon Ave #4133, Walnut, CA 91789, USA" />
                  <InfoRow label="Site" value="vercel.com" />
                  <InfoRow label="Base de données" value="Supabase (Frankfurt, Allemagne)" />
                  <InfoRow label="Stockage images" value="Supabase Storage (CDN mondial)" />
                </div>
              </Section>

              {/* Propriété intellectuelle */}
              <Section
                icon={AlertCircle}
                title="3. Propriété intellectuelle"
                id="propriete"
              >
                <p>
                  L&apos;ensemble du contenu du site ImmoHall (textes, images,
                  logos, vidéos, bases de données, structure) est protégé par le
                  Code de la propriété intellectuelle.
                </p>
                <p className="mt-3">
                  Toute reproduction, représentation, modification, publication
                  ou adaptation, totale ou partielle, par quelque procédé que ce
                  soit, est interdite sans autorisation écrite préalable.
                </p>
                <p className="mt-3">
                  La marque <strong>ImmoHall</strong> et son logo sont des
                  marques déposées à l&apos;INPI (Institut National de la
                  Propriété Industrielle).
                </p>
              </Section>

              {/* Responsabilité */}
              <Section
                icon={AlertCircle}
                title="4. Limitation de responsabilité"
                id="responsabilite"
              >
                <p>
                  ImmoHall s&apos;efforce de fournir des informations aussi
                  précises que possible. Toutefois, il ne pourra être tenu
                  responsable des omissions, des inexactitudes ou des carences
                  dans la mise à jour.
                </p>
                <p className="mt-3">
                  Les annonces immobilières publiées sur la plateforme sont
                  fournies par des professionnels partenaires et la Team
                  L&apos;Enseigne Immo. ImmoHall ne saurait être tenu
                  responsable de la véracité des informations contenues dans
                  ces annonces.
                </p>
              </Section>

              {/* Données personnelles */}
              <Section
                icon={FileText}
                title="5. Données personnelles"
                id="donnees"
              >
                <p>
                  Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
                  de rectification, de suppression et d&apos;opposition au
                  traitement de vos données personnelles.
                </p>
                <p className="mt-3">
                  Pour exercer ces droits, contactez :{' '}
                  <a
                    href="mailto:rgpd@immohall.com"
                    className="text-orange-500 underline"
                  >
                    rgpd@immohall.com
                  </a>
                </p>
                <p className="mt-3">
                  Pour plus d&apos;informations, consultez notre{' '}
                  <Link
                    href="/politique-confidentialite"
                    className="text-orange-500 underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </Section>

              {/* Contact */}
              <Section icon={Mail} title="6. Contact" id="contact">
                <p>Pour toute question relative au site :</p>
                <div className="mt-4 space-y-3">
                  <a
                    href="mailto:contact@immohall.com"
                    className="flex items-center gap-3 p-3 bg-navy-50/50 
                               rounded-lg hover:bg-navy-50 transition text-sm"
                  >
                    <Mail size={16} className="text-orange-500 shrink-0" />
                    <span className="text-navy-700">contact@immohall.com</span>
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="flex items-center gap-3 p-3 bg-navy-50/50 
                               rounded-lg hover:bg-navy-50 transition text-sm"
                  >
                    <Phone size={16} className="text-orange-500 shrink-0" />
                    <span className="text-navy-700">01 23 45 67 89</span>
                  </a>
                  <div className="flex items-center gap-3 p-3 bg-navy-50/50 
                                  rounded-lg text-sm">
                    <MapPin size={16} className="text-orange-500 shrink-0" />
                    <span className="text-navy-700">
                      1 rue de la Paix, 75001 Paris, France
                    </span>
                  </div>
                </div>
              </Section>
            </div>

            {/* Footer info */}
            <div className="mt-12 bg-orange-50 border border-orange-200 
                            rounded-2xl p-6 text-center">
              <p className="text-sm text-navy-700">
                <strong>Droit applicable :</strong> Le présent site est soumis
                au droit français. En cas de litige, les tribunaux français
                seront seuls compétents.
              </p>
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
      <span className="text-navy-500">{label}</span>
      <span className="font-medium text-navy-900 text-right">{value}</span>
    </div>
  );
}