import Link from 'next/link';
import { Search, Handshake, Building } from 'lucide-react';

const CHOICES = [
  {
    icon: Search,
    title: 'Je recherche un bien',
    desc: 'Explorez les annonces, affinez vos critères et créez une alerte personnalisée.',
    cta: 'Rechercher un bien',
    href: '/recherche',
  },
  {
    icon: Handshake,
    title: 'Je veux vendre ou louer',
    desc: "Présentez votre projet et bénéficiez de l'accompagnement de la Team L'Enseigne Immo.",
    cta: 'Parler de mon projet',
    href: '/vendre',
  },
  {
    icon: Building,
    title: 'Je suis professionnel',
    desc: 'Déposez vos annonces gratuitement ou découvrez nos formules.',
    cta: 'Publier une annonce',
    href: '/espace-pro/mes-annonces/nouvelle',
  },
];

export default function ProjectChoice() {
  return (
    <section className="py-14">
      <div className="container-hall">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="section-title">Quel est votre projet immobilier ?</h2>
          <p className="section-subtitle">
            ImmoHall vous oriente vers la solution adaptée à votre besoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CHOICES.map(({ icon: Icon, title, desc, cta, href }) => (
            <div
              key={title}
              className="bg-white border border-navy-100 rounded-2xl p-6 
                         hover:border-orange-300 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center 
                              justify-center mb-4">
                <Icon size={22} className="text-orange-500" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-navy-500 leading-relaxed">{desc}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-1 text-orange-500 
                           font-semibold text-sm hover:text-orange-600 transition"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}