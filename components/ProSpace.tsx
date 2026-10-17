import Link from 'next/link';
import Image from 'next/image';
import { FileText, Bell, Unlock, CreditCard } from 'lucide-react';

const FEATURES = [
  {
    icon: FileText,
    title: 'Publication gratuite',
    desc: 'Déposez vos annonces sans abonnement.',
  },
  {
    icon: Bell,
    title: 'Notification des leads',
    desc: "Recevez une notification lorsqu'un prospect vous contacte.",
  },
  {
    icon: Unlock,
    title: 'Leads à la demande',
    desc: 'Débloquez les coordonnées uniquement lorsque vous le souhaitez.',
  },
  {
    icon: CreditCard,
    title: 'Abonnements partenaires',
    desc: 'Accédez illimité aux leads selon votre formule.',
  },
];

export default function ProSpace() {
  return (
    <section className="py-12 bg-navy-50/40">
      <div className="container-hall">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* صورة المكتب */}
          <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden 
                          shadow-card order-2 lg:order-1">
            <Image
              src="/images/pro-office.jpg"
              alt="Espace professionnel ImmoHall"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* المحتوى */}
          <div className="order-1 lg:order-2">
            <p className="text-orange-500 font-semibold text-xs uppercase tracking-wider">
              Espace professionnels
            </p>
            <h2 className="section-title mt-2">
              Publiez vos annonces et développez votre visibilité.
            </h2>
            <p className="section-subtitle mt-3 text-sm">
              ImmoHall permet aux professionnels de publier leurs biens sans engagement,
              de recevoir des prospects et de choisir le modèle d&apos;accès aux leads adapté à
              leur activité.
            </p>

            <Link href="/offres" className="btn-primary mt-5 inline-flex text-sm">
              Découvrir les offres →
            </Link>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-white shadow-sm 
                                  flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm">{title}</h4>
                    <p className="text-xs text-navy-500 mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}