import Link from 'next/link';
import {
  ChevronRight,
  Target,
  Heart,
  Users,
  TrendingUp,
  Award,
  Shield,
  Zap,
  Handshake,
  Lightbulb,
  ArrowRight,
  Building2,
  BadgeCheck,
  MapPin,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ============================================
// أيقونة LinkedIn (SVG مدمج)
// ============================================
function LinkedInIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const STATS = [
  { value: '+15 000', label: 'Annonces actives' },
  { value: '+5 000', label: 'Professionnels' },
  { value: '100 %', label: 'Couverture France' },
  { value: '4,8/5', label: 'Satisfaction client' },
];

const TEAM = [
  {
    name: 'Omar Messaoudi',
    role: 'Fondateur & CEO',
    bio: "Expert en immobilier professionnel avec plus de 10 ans d'expérience dans les murs commerciaux et fonds de commerce.",
    initials: 'OM',
    color: 'bg-orange-500',
  },
  {
    name: 'Julie Goud',
    role: 'Co-fondatrice & Directrice',
    bio: "Spécialiste du résidentiel haut de gamme. Accompagne les propriétaires dans leurs projets de vente et d'acquisition.",
    initials: 'JG',
    color: 'bg-navy-700',
  },
  {
    name: "L'équipe L'Enseigne Immo",
    role: 'Réseau de professionnels',
    bio: "Une équipe d'agents immobiliers agréés qui couvrent toute la France et accompagnent nos clients au quotidien.",
    initials: 'TE',
    color: 'bg-purple-600',
  },
];

const VALUES = [
  {
    icon: Handshake,
    title: 'Proximité',
    desc: "Un interlocuteur unique, disponible et à l'écoute de chaque projet.",
  },
  {
    icon: Shield,
    title: 'Confiance',
    desc: 'Transparence totale sur les biens, les prix et les honoraires.',
  },
  {
    icon: Zap,
    title: 'Réactivité',
    desc: 'Réponse sous 24h et mise en relation rapide entre vendeurs et acheteurs.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: "Une plateforme moderne qui utilise la technologie pour simplifier l'immobilier.",
  },
];

const MILESTONES = [
  {
    year: '2018',
    title: "Naissance de L'Enseigne Immo",
    desc: "Création de l'équipe fondatrice à Paris, spécialisée dans l'immobilier professionnel.",
  },
  {
    year: '2021',
    title: '500 transactions réalisées',
    desc: 'Consolidation du réseau et extension à toute la France.',
  },
  {
    year: '2023',
    title: "Lancement d'ImmoHall",
    desc: "Création du portail national de diffusion d'annonces immobilières.",
  },
  {
    year: '2024',
    title: '5 000 professionnels partenaires',
    desc: 'ImmoHall devient une référence de la mise en relation immobilier.',
  },
];

export default function AProposPage() {
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
              <span className="text-navy-900 font-medium">À propos</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <span className="inline-block bg-orange-100 text-orange-600 
                             text-xs font-bold px-3 py-1.5 rounded-full 
                             tracking-wider uppercase mb-4">
              À propos
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
              Nous <span className="text-orange-500">connaître</span>
            </h1>
            <p className="mt-4 text-navy-500 text-base sm:text-lg max-w-2xl mx-auto">
              ImmoHall, le portail immobilier qui rapproche les projets des
              opportunités — porté par la Team L&apos;Enseigne Immo.
            </p>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-14">
          <div className="container-hall max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-orange-500 font-semibold text-xs uppercase 
                              tracking-wider mb-2">
                  Notre histoire
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 
                               leading-tight">
                  Une équipe passionnée par l&apos;immobilier
                </h2>
                <div className="mt-5 space-y-4 text-sm text-navy-600 
                                leading-relaxed">
                  <p>
                    <strong className="text-navy-900">
                      L&apos;Enseigne Immo
                    </strong>{' '}
                    est née en 2018 à Paris, portée par la conviction que
                    l&apos;immobilier mérite plus de proximité, de transparence
                    et de réactivité.
                  </p>
                  <p>
                    Face aux attentes grandissantes des vendeurs, acquéreurs et
                    professionnels, nous avons imaginé{' '}
                    <strong className="text-navy-900">ImmoHall</strong> : une
                    plateforme moderne qui rassemble les meilleures
                    opportunités immobilières partout en France.
                  </p>
                  <p>
                    Aujourd&apos;hui, nous accompagnons plus de{' '}
                    <strong className="text-navy-900">
                      5 000 professionnels
                    </strong>{' '}
                    et mettons en relation des milliers de projets chaque mois.
                  </p>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="relative h-80 rounded-3xl overflow-hidden 
                              bg-gradient-to-br from-navy-200 to-navy-100 
                              flex items-center justify-center">
                <div className="text-center text-navy-500">
                  <Building2 size={48} className="mx-auto mb-3 opacity-40" />
                  <p className="text-xs font-medium">Notre équipe à Paris</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-navy-50/30">
          <div className="container-hall">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl border border-navy-100 
                             p-5 text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-orange-500">
                    {stat.value}
                  </p>
                  <p className="text-xs text-navy-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-14">
          <div className="container-hall max-w-4xl text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 
                            flex items-center justify-center mb-4">
              <Target size={24} className="text-orange-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Notre mission
            </h2>
            <p className="mt-4 text-navy-600 text-base leading-relaxed 
                          max-w-2xl mx-auto">
              Simplifier la mise en relation entre vendeurs, acquéreurs et
              professionnels de l&apos;immobilier, en offrant une plateforme
              moderne, transparente et accessible à tous.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5 text-left">
              <MissionCard
                icon={TrendingUp}
                title="Développer la visibilité"
                desc="Offrir aux professionnels une vitrine nationale pour leurs biens."
              />
              <MissionCard
                icon={Users}
                title="Faciliter la mise en relation"
                desc="Connecter les bons prospects aux bonnes opportunités."
              />
              <MissionCard
                icon={Award}
                title="Garantir la qualité"
                desc="Vérifier chaque annonce et assurer une expérience irréprochable."
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 bg-navy-50/30">
          <div className="container-hall max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="section-title">Notre parcours</h2>
              <p className="section-subtitle">
                Les grandes étapes qui ont construit ImmoHall.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 
                              w-0.5 bg-navy-200 sm:-translate-x-1/2" />

              <div className="space-y-8">
                {MILESTONES.map((m, idx) => (
                  <div
                    key={m.year}
                    className={`relative flex flex-col sm:flex-row 
                                items-start gap-6 ${
                                  idx % 2 === 0 ? '' : 'sm:flex-row-reverse'
                                }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 top-2 
                                    -translate-x-1/2 w-8 h-8 rounded-full 
                                    bg-orange-500 text-white text-[10px] 
                                    font-bold flex items-center justify-center 
                                    z-10">
                      {m.year.slice(2)}
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden sm:block flex-1" />

                    {/* Card */}
                    <div className="flex-1 pl-12 sm:pl-0">
                      <div className="bg-white rounded-2xl border 
                                      border-navy-100 p-5">
                        <span className="text-xs font-bold text-orange-500">
                          {m.year}
                        </span>
                        <h3 className="font-bold text-navy-900 mt-1 text-sm">
                          {m.title}
                        </h3>
                        <p className="text-xs text-navy-500 mt-1.5 
                                      leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Équipe */}
        <section className="py-14">
          <div className="container-hall">
            <div className="text-center mb-10">
              <h2 className="section-title">L&apos;équipe</h2>
              <p className="section-subtitle">
                Des professionnels passionnés à votre service.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-navy-100 
                             rounded-2xl p-6 text-center 
                             hover:border-orange-200 hover:shadow-card 
                             transition-all"
                >
                  <div
                    className={`w-20 h-20 mx-auto rounded-full ${member.color} 
                                flex items-center justify-center text-white 
                                font-bold text-xl mb-4`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-navy-900">{member.name}</h3>
                  <p className="text-xs text-orange-500 font-semibold mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-navy-500 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#0077b5] 
                                 hover:opacity-90 text-white flex 
                                 items-center justify-center transition"
                      aria-label={`LinkedIn - ${member.name}`}
                    >
                      <LinkedInIcon size={12} />
                    </a>
                    <span className="text-[10px] font-bold bg-green-100 
                                     text-green-700 px-2 py-1 rounded 
                                     inline-flex items-center gap-1">
                      <BadgeCheck size={10} />
                      Vérifié
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-14 bg-navy-50/30">
          <div className="container-hall">
            <div className="text-center mb-10">
              <h2 className="section-title">Nos valeurs</h2>
              <p className="section-subtitle">
                Les principes qui guident chacune de nos actions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-2xl border 
                               border-navy-100 p-5 hover:shadow-card 
                               transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange-50 
                                    flex items-center justify-center mb-3">
                      <Icon size={20} className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-navy-900 text-sm">
                      {value.title}
                    </h3>
                    <p className="text-xs text-navy-500 mt-1.5 
                                  leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Adresse */}
        <section className="py-14">
          <div className="container-hall max-w-3xl">
            <div className="bg-navy-50/40 rounded-3xl p-8 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-500 
                              flex items-center justify-center mb-4">
                <MapPin size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">
                Notre siège social
              </h3>
              <p className="text-sm text-navy-600">
                1 rue de la Paix
                <br />
                75001 Paris, France
              </p>
              <p className="text-xs text-navy-400 mt-3">
                Ouvert du lundi au vendredi · 9h - 18h
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="container-hall">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 
                            rounded-3xl p-8 sm:p-12 text-white 
                            flex flex-col lg:flex-row items-start 
                            lg:items-center gap-6">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-2xl bg-white/10 
                                flex items-center justify-center mb-4">
                  <Heart size={22} className="text-orange-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Envie de rejoindre l&apos;aventure ?
                </h2>
                <p className="mt-3 text-white/70 text-sm max-w-lg">
                  Nous recherchons en permanence des agents immobiliers
                  passionnés pour rejoindre la Team L&apos;Enseigne Immo
                  partout en France.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
                <Link
                  href="/contact"
                  className="btn-primary justify-center text-sm"
                >
                  Rejoindre l&apos;équipe
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/offres"
                  className="inline-flex items-center justify-center gap-2 
                             bg-white/10 hover:bg-white/20 text-white 
                             font-semibold px-5 py-3 rounded-lg 
                             transition text-sm"
                >
                  Voir les offres pro
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

function MissionCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-5">
      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center 
                      justify-center mb-3">
        <Icon size={18} className="text-orange-500" />
      </div>
      <h3 className="font-bold text-navy-900 text-sm">{title}</h3>
      <p className="text-xs text-navy-500 mt-1.5 leading-relaxed">{desc}</p>
    </div>
  );
}