'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ChevronRight,
  Lock,
  Mail,
  User,
  Briefcase,
  Check,
  ArrowRight,
  Eye,
  Users,
  Gem,
  Shield,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LISTINGS } from '@/data/listings';

// ==========================================
// OFFSHORE LISTINGS (only Off-Market)
// ==========================================
const OFF_MARKET_LISTINGS = LISTINGS.filter(
  (l) => l.isOffMarket && l.status === 'published'
).slice(0, 6);

// ==========================================
// FEATURES
// ==========================================
const FEATURES = [
  {
    icon: Eye,
    title: 'Discrétion totale',
    desc: 'Biens non diffusés sur les portails publics. Aucune trace sur internet.',
  },
  {
    icon: Users,
    title: 'Accès sur sélection',
    desc: 'Réservé aux acquéreurs sérieux et aux investisseurs qualifiés.',
  },
  {
    icon: Gem,
    title: 'Exclusivité garantie',
    desc: 'Opportunités uniques négociées par la Team L\'Enseigne Immo.',
  },
];

// ==========================================
// PAGE
// ==========================================
export default function OffMarketPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    acceptRGPD: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // ==========================================
  // FORM VALIDATION
  // ==========================================
  const validate = (): string[] => {
    const errs: string[] = [];
    if (!formData.name.trim()) errs.push('Le nom est requis');
    if (!formData.email.includes('@')) errs.push('Email invalide');
    if (!formData.project.trim())
      errs.push('Veuillez décrire votre projet');
    if (!formData.acceptRGPD) errs.push('Vous devez accepter la politique RGPD');
    return errs;
  };

  // ==========================================
  // SUBMIT
  // ==========================================
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (errs.length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/off-market/merci');
    }, 1200);
  };

  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-white">
        {/* ==========================================
            BREADCRUMB
            ========================================== */}
        <div className="border-b border-navy-100">
          <div className="container-hall py-3">
            <nav className="flex items-center gap-1.5 text-xs text-navy-500">
              <Link href="/" className="hover:text-orange-500 transition">
                Accueil
              </Link>
              <ChevronRight size={12} />
              <span className="text-navy-900 font-medium">Off-Market</span>
            </nav>
          </div>
        </div>

        {/* ==========================================
            HERO
            ========================================== */}
        <section className="offmarket-hero">
          <div className="container-hall">
            <div className="offmarket-hero-content">
              <div className="offmarket-hero-badge">
                <Lock size={12} />
                Off-Market
              </div>
              <h1 className="offmarket-hero-title">
                Biens exclusifs &{' '}
                <span>confidentiels</span>
              </h1>
              <p className="offmarket-hero-desc">
                Accédez à des opportunités immobilières uniques, non diffusées
                publiquement. Ces biens sont réservés à une sélection
                d&apos;acquéreurs et d&apos;investisseurs qualifiés.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================
            FORMULAIRE D'ACCÈS
            ========================================== */}
        <section className="offmarket-form-section">
          <div className="container-hall">
            <div className="offmarket-form-wrapper">
              {/* Left: Info */}
              <div className="offmarket-form-info">
                <div className="offmarket-form-icon">
                  <Lock size={24} />
                </div>
                <h2 className="offmarket-form-title">
                  Demander l&apos;accès
                </h2>
                <p className="offmarket-form-subtitle">
                  Remplissez ce formulaire pour recevoir une sélection
                  personnalisée de biens Off-Market correspondant à votre
                  projet.
                </p>

                <ul className="offmarket-form-benefits">
                  {[
                    'Sélection personnalisée sous 48h',
                    'Aucun engagement',
                    'Confidentialité garantie',
                    'Accompagnement dédié',
                  ].map((benefit) => (
                    <li key={benefit}>
                      <div className="offmarket-benefit-icon">
                        <Check size={12} />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Form */}
              <form
                onSubmit={handleSubmit}
                className="offmarket-form-card"
              >
                <h3 className="offmarket-form-card-title">
                  Formulaire d&apos;accès
                </h3>

                {errors.length > 0 && (
                  <div className="offmarket-form-errors">
                    <p className="offmarket-form-errors-title">
                      Veuillez corriger :
                    </p>
                    <ul>
                      {errors.map((err) => (
                        <li key={err}>• {err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Nom */}
                <div className="offmarket-field">
                  <label htmlFor="name">Nom complet</label>
                  <div className="offmarket-field-input">
                    <User size={16} />
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="offmarket-field">
                  <label htmlFor="email">Adresse e-mail</label>
                  <div className="offmarket-field-input">
                    <Mail size={16} />
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Projet */}
                <div className="offmarket-field">
                  <label htmlFor="project">Votre projet</label>
                  <div className="offmarket-field-input offmarket-field-textarea">
                    <Briefcase size={16} />
                    <textarea
                      id="project"
                      value={formData.project}
                      onChange={(e) =>
                        setFormData({ ...formData, project: e.target.value })
                      }
                      placeholder="Décrivez brièvement votre projet (budget, localisation, type de bien...)"
                      rows={4}
                      required
                    />
                  </div>
                </div>

                {/* RGPD */}
                <label className="offmarket-checkbox">
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
                  />
                  <span>
                    J&apos;accepte la{' '}
                    <Link
                      href="/politique-confidentialite"
                      className="offmarket-link"
                    >
                      politique de confidentialité
                    </Link>{' '}
                    et le traitement de mes données.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="offmarket-submit-btn"
                >
                  {loading ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Lock size={16} />
                      Demander l&apos;accès
                    </>
                  )}
                </button>

                <p className="offmarket-form-footer">
                  Réponse sous 48h · Aucun engagement · 100% confidentiel
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ==========================================
            BIENS OFF-MARKET
            ========================================== */}
        <section className="offmarket-listings-section">
          <div className="container-hall">
            <div className="offmarket-listings-head">
              <div>
                <h2 className="offmarket-listings-title">
                  Biens Off-Market disponibles
                </h2>
                <p className="offmarket-listings-subtitle">
                  Un aperçu de nos opportunités confidentielles. Les
                  informations complètes sont révélées après validation de
                  votre demande.
                </p>
              </div>
            </div>

            <div className="offmarket-listings-grid">
              {OFF_MARKET_LISTINGS.map((listing) => (
                <div
                  key={listing.id}
                  className="offmarket-listing-card"
                >
                  {/* Image */}
                  <div className="offmarket-listing-image">
                    <Image
                      src={listing.images[0]}
                      alt={listing.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="offmarket-listing-overlay" />
                    <div className="offmarket-listing-lock">
                      <Lock size={32} />
                    </div>
                    <span className="offmarket-listing-badge">
                      <Lock size={10} />
                      OFF-MARKET
                    </span>
                  </div>

                  {/* Body */}
                  <div className="offmarket-listing-body">
                    <p className="offmarket-listing-type">
                      {listing.type}
                    </p>
                    <h3 className="offmarket-listing-title">
                      Bien confidentiel
                    </h3>
                    <p className="offmarket-listing-location">
                      {listing.location}
                    </p>

                    <div className="offmarket-listing-meta">
                      <span>{listing.surface} m²</span>
                      <span>·</span>
                      <span>{listing.rooms}</span>
                    </div>

                    <div className="offmarket-listing-cta">
                      Accès sur sélection
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            POURQUOI OFF-MARKET ?
            ========================================== */}
        <section className="offmarket-why-section">
          <div className="container-hall">
            <div className="offmarket-why-head">
              <h2 className="offmarket-why-title">
                Pourquoi choisir l&apos;Off-Market ?
              </h2>
              <p className="offmarket-why-subtitle">
                3 avantages exclusifs qui font la différence.
              </p>
            </div>

            <div className="offmarket-why-grid">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="offmarket-why-card">
                    <div className="offmarket-why-icon">
                      <Icon size={22} />
                    </div>
                    <h3 className="offmarket-why-card-title">
                      {feature.title}
                    </h3>
                    <p className="offmarket-why-card-desc">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================
            CTA FINAL
            ========================================== */}
        <section className="offmarket-cta-section">
          <div className="container-hall">
            <div className="offmarket-cta-box">
              <Shield
                size={32}
                style={{ color: '#f39a3e' }}
                className="offmarket-cta-shield"
              />
              <h2 className="offmarket-cta-title">
                Prêt à découvrir l&apos;Off-Market ?
              </h2>
              <p className="offmarket-cta-desc">
                Rejoignez notre cercle privé d&apos;acquéreurs et
                d&apos;investisseurs. Accédez à des biens que vous ne verrez
                nulle part ailleurs.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById('offmarket-form-top')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="offmarket-cta-btn"
              >
                <Lock size={16} />
                Demander l&apos;accès maintenant
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}