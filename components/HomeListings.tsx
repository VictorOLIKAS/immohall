'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Heart, Lock } from 'lucide-react';

import { LISTINGS, type Listing } from '@/data/listings';

type FilterKey = 'all' | 'market' | 'offmarket';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Tous les biens' },
  { key: 'market', label: 'Sur le marché' },
  { key: 'offmarket', label: 'Off-Market' },
];

export default function HomeListings() {
  const [filter, setFilter] = useState<FilterKey>('all');

  const displayedListings = useMemo(() => {
    let results = LISTINGS.filter((l) => l.status === 'published');

    if (filter === 'market') {
      results = results.filter((l) => !l.isOffMarket);
    } else if (filter === 'offmarket') {
      results = results.filter((l) => l.isOffMarket);
    }

    return results
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 4);
  }, [filter]);

  return (
    <section className="home-listings-section">
      <div className="container-hall">
        {/* Header */}
        <div className="home-listings-head">
          <div>
            <h2 className="home-listings-title">
              Les dernières opportunités
            </h2>
            <p className="home-listings-subtitle">
              Une sélection de biens sur le marché et de biens Off-Market
              proposés par la Team L&apos;Enseigne Immo et nos partenaires.
            </p>
          </div>

          <div className="home-listings-actions">
            <div className="home-listings-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`home-filter-btn ${
                    filter === f.key ? 'is-active' : ''
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <Link href="/recherche" className="home-listings-link">
              Voir toutes les annonces →
            </Link>
          </div>
        </div>

        {/* Grid */}
        {displayedListings.length > 0 ? (
          <div className="home-listings-grid">
            {displayedListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="home-listings-empty">
            <p>Aucun bien dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(listing.price);
  const isRental = listing.transaction === 'location';
  const isOffMarket = listing.isOffMarket;

  return (
    <Link
      href={`/annonce/${listing.slug}`}
      className={`home-listing-card ${isOffMarket ? 'is-offmarket' : ''}`}
    >
      {/* Image */}
      <div className="home-listing-image">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
        />

        {isOffMarket ? (
          <>
            <div className="home-listing-offmarket-overlay" />
            <span className="home-listing-badge is-offmarket">
              <Lock size={10} />
              OFF-MARKET
            </span>
            <div className="home-listing-lock-center">
              <Lock size={28} />
            </div>
          </>
        ) : (
          <span
            className="home-listing-badge"
            style={{
              background:
                listing.badge.color === 'bg-purple-600'
                  ? '#9333ea'
                  : listing.badge.color === 'bg-navy-700'
                  ? '#183a5a'
                  : 'linear-gradient(135deg, #f39a3e, #e87520)',
            }}
          >
            {listing.badge.label}
          </span>
        )}

        <button
          type="button"
          className="home-listing-favorite"
          aria-label="Ajouter aux favoris"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={14} />
        </button>
      </div>

      {/* Body */}
      <div className="home-listing-body">
        <p className="home-listing-type">{listing.type}</p>

        <h3 className="home-listing-title">
          {isOffMarket ? 'Bien confidentiel' : listing.title}
        </h3>

        <p className="home-listing-location">
          <MapPin size={11} />
          {listing.location}
        </p>

        {!isOffMarket ? (
          <>
            <div className="home-listing-meta">
              <span>{listing.surface} m²</span>
              <span>·</span>
              <span>{listing.rooms}</span>
              <span>·</span>
              <span>{listing.beds}</span>
            </div>

            <div className="home-listing-footer">
              <span className="home-listing-price">
                {formattedPrice} €
                {isRental && (
                  <span className="home-listing-period">/mois</span>
                )}
              </span>
              <span className="home-listing-cta">
                Voir l&apos;annonce →
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="home-listing-meta">
              <span>{listing.surface} m²</span>
              <span>·</span>
              <span>{listing.rooms}</span>
            </div>

            <div className="home-listing-footer">
              <span className="home-listing-cta is-offmarket">
                Accès sur sélection →
              </span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}