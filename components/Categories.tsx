import Link from 'next/link';
import Image from 'next/image';
import { Lock } from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Résidentiel',
    sub: 'Maisons & appartements',
    image: '/images/cat-residentiel.jpg',
    href: '/residentiel/achat',
    isOffMarket: false,
  },
  {
    label: 'Commerces',
    sub: 'Murs & fonds',
    image: '/images/cat-commerces.jpg',
    href: '/commercial',
    isOffMarket: false,
  },
  {
    label: 'Bureaux',
    sub: 'Locaux professionnels',
    image: '/images/cat-bureaux.jpg',
    href: '/commercial',
    isOffMarket: false,
  },
  {
    label: 'Terrains',
    sub: 'Foncier & projets',
    image: '/images/cat-terrains.jpg',
    href: '/foncier',
    isOffMarket: false,
  },
  {
    label: 'Investissement',
    sub: 'Immeubles & rendement',
    image: '/images/hero-property.jpg',
    href: '/recherche?tab=investir',
    isOffMarket: false,
  },
  {
    label: 'Off-Market',
    sub: 'Biens exclusifs',
    image: '/images/pro-office.jpg',
    href: '/off-market',
    isOffMarket: true,
  },
];

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="container-hall">
        {/* Header */}
        <div className="categories-head">
          <div>
            <h2 className="categories-title">
              Explorez nos univers immobiliers
            </h2>
            <p className="categories-subtitle">
              Résidentiel, immobilier professionnel, commerces, bureaux,
              foncier, investissement et Off-Market.
            </p>
          </div>
          <Link href="/recherche" className="categories-link">
            Voir tous les univers →
          </Link>
        </div>

        {/* Grid */}
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={`category-card-hall ${
                cat.isOffMarket ? 'is-offmarket' : ''
              }`}
            >
              {/* Image */}
              <div className="category-image">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  style={{ objectFit: 'cover' }}
                />
                {cat.isOffMarket && (
                  <div className="category-offmarket-overlay">
                    <Lock size={22} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="category-content">
                <div
                  className={`category-icon-box ${
                    cat.isOffMarket ? 'is-offmarket' : ''
                  }`}
                >
                  {cat.isOffMarket ? (
                    <Lock size={14} />
                  ) : (
                    <div className="category-icon-dot" />
                  )}
                </div>
                <div className="category-text">
                  <p className="category-label">{cat.label}</p>
                  <p className="category-sublabel">{cat.sub}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}