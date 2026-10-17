import Link from 'next/link';
import {
  Home,
  Search,
  ArrowRight,
  Building2,
  FileText,
  Target,
  Briefcase,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SUGGESTED_LINKS = [
  {
    href: '/recherche',
    icon: Search,
    title: 'Rechercher un bien',
    desc: 'Parcourez nos annonces',
  },
  {
    href: '/offres',
    icon: Briefcase,
    title: 'Nos offres pro',
    desc: 'Découvrez nos formules',
  },
  {
    href: '/blog',
    icon: FileText,
    title: 'Actualités',
    desc: 'Conseils et articles',
  },
  {
    href: '/contact',
    icon: Target,
    title: 'Contact',
    desc: 'Nous sommes là pour vous',
  },
];

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b 
                       from-orange-50/60 to-white py-16">
        <div className="container-hall">
          <div className="max-w-3xl mx-auto text-center">
            {/* Illustration */}
            <div className="relative inline-block mb-6">
              <div className="text-[120px] sm:text-[160px] font-black 
                              text-navy-100 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-orange-500 
                                flex items-center justify-center shadow-lg">
                  <Building2 size={32} className="text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 
                           mt-4">
              Page introuvable
            </h1>
            <p className="mt-4 text-navy-500 text-base max-w-md mx-auto">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
              Vérifiez l&apos;URL ou retournez à l&apos;accueil.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 
                            justify-center">
              <Link href="/" className="btn-primary text-sm justify-center">
                <Home size={16} />
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/recherche"
                className="btn-secondary text-sm justify-center"
              >
                <Search size={16} />
                Rechercher un bien
              </Link>
            </div>
          </div>

          {/* Suggested links */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-center text-xs font-semibold text-navy-400 
                          uppercase tracking-wider mb-6">
              Vous cherchiez peut-être...
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {SUGGESTED_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group bg-white border border-navy-100 
                               rounded-2xl p-4 hover:border-orange-300 
                               hover:shadow-card transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 
                                    flex items-center justify-center mb-3 
                                    group-hover:bg-orange-100 transition">
                      <Icon size={18} className="text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-navy-900 text-sm">
                      {link.title}
                    </h3>
                    <p className="text-[11px] text-navy-400 mt-0.5">
                      {link.desc}
                    </p>
                    <ArrowRight
                      size={12}
                      className="text-orange-500 mt-2 
                                 group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}