'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  Bell,
  Save,
  Check,
  LogOut,
  FileText,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MonProfilPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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
              <span className="text-navy-900 font-medium">Mon profil</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 
                            to-white">
          <div className="container-hall">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start 
                              sm:items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-orange-500 
                                flex items-center justify-center text-white 
                                font-bold text-2xl shrink-0">
                  JD
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold 
                                 text-navy-900">
                    Mon profil
                  </h1>
                  <p className="text-sm text-navy-500 mt-1">
                    Gérez vos informations et vos préférences.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 
                                   bg-white border border-navy-100 
                                   hover:border-red-200 hover:text-red-500 
                                   text-navy-700 px-4 py-2.5 rounded-lg 
                                   text-sm font-semibold transition">
                  <LogOut size={14} />
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10">
          <div className="container-hall max-w-4xl">
            {saved && (
              <div className="mb-5 bg-green-50 border border-green-200 
                              rounded-lg p-4 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 
                                flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-sm font-semibold text-green-700">
                  Profil mis à jour avec succès.
                </p>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="bg-white border border-navy-100 rounded-2xl 
                                p-2 lg:sticky lg:top-24">
                  <ul className="space-y-1">
                    <SideLink
                      href="/mon-profil"
                      icon={User}
                      label="Mes informations"
                      active
                    />
                    <SideLink
                      href="/mon-profil/favoris"
                      icon={Heart}
                      label="Mes favoris"
                    />
                    <SideLink
                      href="/mon-profil/alertes"
                      icon={Bell}
                      label="Mes alertes"
                    />
                    <SideLink
                      href="/mon-profil/demandes"
                      icon={FileText}
                      label="Mes demandes"
                    />
                  </ul>
                </div>
              </aside>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-navy-100 rounded-2xl 
                                p-6 sm:p-8">
                  <h2 className="text-lg font-bold text-navy-900 mb-1">
                    Mes informations
                  </h2>
                  <p className="text-sm text-navy-500 mb-6">
                    Mettez à jour vos coordonnées.
                  </p>

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Prénom">
                        <input
                          type="text"
                          defaultValue="Jean"
                          className="input-base"
                        />
                      </Field>
                      <Field label="Nom">
                        <input
                          type="text"
                          defaultValue="Dupont"
                          className="input-base"
                        />
                      </Field>
                    </div>

                    <Field label="Email" icon={Mail}>
                      <input
                        type="email"
                        defaultValue="jean.dupont@email.com"
                        className="input-base pl-9"
                      />
                    </Field>

                    <Field label="Téléphone" icon={Phone}>
                      <input
                        type="tel"
                        defaultValue="06 12 34 56 78"
                        className="input-base pl-9"
                      />
                    </Field>

                    <Field label="Ville" icon={MapPin}>
                      <input
                        type="text"
                        defaultValue="Paris"
                        className="input-base pl-9"
                      />
                    </Field>

                    <div className="pt-4 border-t border-navy-100">
                      <h3 className="font-bold text-navy-900 text-sm mb-3">
                        Préférences de notification
                      </h3>
                      <label className="flex items-start gap-2 text-xs 
                                        text-navy-600 cursor-pointer mb-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="mt-0.5 rounded border-navy-200 
                                     text-orange-500 focus:ring-orange-400"
                        />
                        <span>
                          Recevoir les alertes de nouvelles annonces 
                          correspondant à mes critères
                        </span>
                      </label>
                      <label className="flex items-start gap-2 text-xs 
                                        text-navy-600 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="mt-0.5 rounded border-navy-200 
                                     text-orange-500 focus:ring-orange-400"
                        />
                        <span>
                          Recevoir la newsletter ImmoHall (1×/mois)
                        </span>
                      </label>
                    </div>

                    <button
                      onClick={handleSave}
                      className="btn-primary w-full justify-center text-sm"
                    >
                      <Save size={14} />
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>

                {/* Danger zone */}
                <div className="mt-6 bg-white border border-navy-100 
                                rounded-2xl p-6">
                  <h3 className="font-bold text-navy-900 text-sm mb-1">
                    Supprimer mon compte
                  </h3>
                  <p className="text-xs text-navy-500 mb-4">
                    Cette action est irréversible. Toutes vos données seront
                    définitivement supprimées.
                  </p>
                  <button className="text-xs font-semibold bg-red-50 
                                     hover:bg-red-100 text-red-600 px-3 py-2 
                                     rounded-lg transition">
                    Supprimer mon compte
                  </button>
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

function SideLink({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg 
                  transition text-sm ${
                    active
                      ? 'bg-orange-500 text-white font-medium'
                      : 'text-navy-700 hover:bg-navy-50'
                  }`}
    >
      <Icon size={16} />
      {label}
    </Link>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: any;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 
                       text-navy-400"
          />
        )}
        {children}
      </div>
    </div>
  );
}