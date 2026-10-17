'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  User,
  Send,
  Check,
  Clock,
  Building2,
  Globe,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ============================================
// أيقونات الشبكات الاجتماعية (SVG مدمج - بدون مكتبات)
// ============================================
function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@immohall.com',
    description: 'Réponse sous 24h',
    href: 'mailto:contact@immohall.com',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '01 23 45 67 89',
    description: 'Lun-Ven · 9h-18h',
    href: 'tel:+33123456789',
    color: 'bg-navy-50 text-navy-700',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: 'Paris, France',
    description: 'Notre siège social',
    href: '#map',
    color: 'bg-purple-50 text-purple-600',
  },
];

const SOCIALS = [
  {
    Icon: IconLinkedIn,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'bg-[#0077b5] hover:bg-[#006699]',
  },
  {
    Icon: IconFacebook,
    label: 'Facebook',
    href: 'https://facebook.com',
    color: 'bg-[#1877f2] hover:bg-[#0d65d9]',
  },
  {
    Icon: IconInstagram,
    label: 'Instagram',
    href: 'https://instagram.com',
    color: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]',
  },
];

const SUBJECTS = [
  { value: '', label: 'Sélectionnez un sujet' },
  { value: 'general', label: 'Renseignement général' },
  { value: 'pro', label: 'Espace professionnel' },
  { value: 'particulier', label: 'Projet particulier' },
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'presse', label: 'Presse & médias' },
  { value: 'rgpd', label: 'RGPD / Données personnelles' },
  { value: 'autre', label: 'Autre demande' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    acceptRGPD: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        acceptRGPD: false,
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
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
              <span className="text-navy-900 font-medium">Contact</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-50/60 to-white">
          <div className="container-hall text-center">
            <span className="inline-block bg-orange-100 text-orange-600 
                             text-xs font-bold px-3 py-1.5 rounded-full 
                             tracking-wider uppercase mb-4">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
              Nous <span className="text-orange-500">contacter</span>
            </h1>
            <p className="mt-4 text-navy-500 text-base max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe vous répond sous 24h ouvrées.
            </p>
          </div>
        </section>

        {/* Cartes de contact */}
        <section className="py-8">
          <div className="container-hall">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className="group bg-white border border-navy-100 
                               rounded-2xl p-5 hover:border-orange-200 
                               hover:shadow-card transition-all"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${card.color} 
                                  flex items-center justify-center mb-3`}
                    >
                      <Icon size={20} />
                    </div>
                    <p className="text-[11px] uppercase tracking-wider 
                                  text-navy-400 font-semibold">
                      {card.title}
                    </p>
                    <p className="mt-1 font-bold text-navy-900 text-sm">
                      {card.value}
                    </p>
                    <p className="text-xs text-navy-500 mt-1">
                      {card.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-10">
          <div className="container-hall">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white border border-navy-100 rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy-900 mb-1">
                  Envoyez-nous un message
                </h2>
                <p className="text-sm text-navy-500 mb-6">
                  Remplissez le formulaire ci-dessous.
                </p>

                {submitted && (
                  <div className="mb-5 bg-green-50 border border-green-200 
                                  rounded-lg p-4 flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500 
                                    flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-700">
                        Message envoyé !
                      </p>
                      <p className="text-xs text-green-600 mt-0.5">
                        Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold 
                                      text-navy-700 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 
                                   text-navy-400"
                      />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jean Dupont"
                        required
                        className="w-full pl-10 pr-3 py-3 rounded-lg border 
                                   border-navy-100 text-sm focus:outline-none 
                                   focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold 
                                      text-navy-700 mb-2">
                      Adresse e-mail
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 
                                   text-navy-400"
                      />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="votre@email.com"
                        required
                        className="w-full pl-10 pr-3 py-3 rounded-lg border 
                                   border-navy-100 text-sm focus:outline-none 
                                   focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold 
                                      text-navy-700 mb-2">
                      Sujet
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full px-3 py-3 rounded-lg border 
                                 border-navy-100 text-sm focus:outline-none 
                                 focus:ring-2 focus:ring-orange-400 bg-white"
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold 
                                      text-navy-700 mb-2">
                      Votre message
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={16}
                        className="absolute left-3 top-3 text-navy-400"
                      />
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Décrivez votre demande..."
                        required
                        rows={5}
                        className="w-full pl-10 pr-3 py-3 rounded-lg border 
                                   border-navy-100 text-sm focus:outline-none 
                                   focus:ring-2 focus:ring-orange-400 
                                   resize-none"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 text-xs 
                                    text-navy-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.acceptRGPD}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          acceptRGPD: e.target.checked,
                        })
                      }
                      required
                      className="mt-0.5 rounded border-navy-200 
                                 text-orange-500 focus:ring-orange-400"
                    />
                    <span>
                      J&apos;accepte que mes données soient utilisées pour 
                      traiter ma demande, conformément à la{' '}
                      <Link
                        href="/politique-confidentialite"
                        className="text-orange-500 underline"
                      >
                        politique de confidentialité
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading || !formData.acceptRGPD}
                    className="btn-primary w-full justify-center text-sm 
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        <Send size={14} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info + Social + Map */}
              <div className="space-y-6">
                {/* Horaires */}
                <div className="bg-navy-50/40 rounded-3xl p-6">
                  <h3 className="font-bold text-navy-900 mb-4 flex 
                                 items-center gap-2">
                    <Clock size={16} className="text-orange-500" />
                    Nos horaires
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-navy-500">Lundi - Vendredi</span>
                      <span className="font-semibold text-navy-900">
                        9h - 18h
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-500">Samedi</span>
                      <span className="font-semibold text-navy-900">
                        10h - 13h
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-500">Dimanche</span>
                      <span className="font-semibold text-navy-400">
                        Fermé
                      </span>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="bg-white border border-navy-100 rounded-3xl p-6">
                  <h3 className="font-bold text-navy-900 mb-4 flex 
                                 items-center gap-2">
                    <Globe size={16} className="text-orange-500" />
                    Suivez-nous
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {SOCIALS.map((social) => {
                      const { Icon } = social;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} text-white rounded-xl 
                                      p-3 flex flex-col items-center gap-1 
                                      transition`}
                          aria-label={social.label}
                        >
                          <Icon size={20} />
                          <span className="text-[10px] font-semibold">
                            {social.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Map */}
                <div
                  id="map"
                  className="bg-gradient-to-br from-navy-100 to-navy-50 
                              rounded-3xl h-64 flex items-center justify-center 
                              border border-navy-100 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 h-full">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-navy-300" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-orange-500 
                                    flex items-center justify-center mb-3 
                                    animate-pulse">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <p className="font-bold text-navy-900 text-sm">
                      ImmoHall
                    </p>
                    <p className="text-xs text-navy-500 mt-1">
                      Paris, France
                    </p>
                    <button
                      className="mt-3 text-xs text-orange-500 font-semibold 
                                 hover:text-orange-600 transition"
                    >
                      Ouvrir dans Google Maps →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA entreprise */}
        <section className="py-10">
          <div className="container-hall">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 
                            rounded-3xl p-8 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row items-start 
                              sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 
                                flex items-center justify-center shrink-0">
                  <Building2 size={24} className="text-orange-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Vous êtes un professionnel ?
                  </h2>
                  <p className="mt-2 text-white/70 text-sm">
                    Découvrez nos offres dédiées aux agences, agents et 
                    partenaires immobiliers.
                  </p>
                </div>
                <Link
                  href="/offres"
                  className="btn-primary text-sm shrink-0"
                >
                  Voir les offres pro
                  <ChevronRight size={14} />
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