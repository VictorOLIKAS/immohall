'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';

import { supabase } from '@/lib/supabase';

type Listing = {
  id: number;
  slug: string;
  title: string;
  type: string;
  transaction: string;
  location: string;
  city: string;
  surface: number;
  rooms: string;
  beds: string | null;
  price: number;
  badge_label: string;
  badge_color: string;
  images: string[];
};

export default function FeaturedListings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      console.log('🔄 Fetching from Supabase...');
      
      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('status', 'published')
        .eq('is_off_market', false)
        .order('created_at', { ascending: false })
        .limit(4);

      console.log('📦 Data:', data);
      console.log('❌ Error:', error);

      if (error) {
        console.error('Supabase error:', error);
        setLoading(false);
        return;
      }

      if (data) {
        setListings(data);
      }
      setLoading(false);
    }
    
    fetchFeatured();
  }, []);

  return (
    <section className="featured-section">
      <div className="container-hall">
        <div className="featured-head">
          <div>
            <h2 className="featured-title">Les annonces à la une</h2>
            <p className="featured-subtitle">
              Découvrez une sélection d&apos;opportunités proposées par la
              Team L&apos;Enseigne Immo et nos professionnels partenaires.
            </p>
          </div>
          <Link href="/recherche" className="featured-link">
            Toutes les annonces →
          </Link>
        </div>

        {loading ? (
          <div className="featured-loading">Chargement...</div>
        ) : (
          <div className="featured-grid">
            {listings.map((listing) => (
              <FeaturedCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ listing }: { listing: Listing }) {
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(listing.price);
  const isRental = listing.transaction === 'location';

  let badgeBg = 'linear-gradient(135deg, #f39a3e, #e87520)';
  if (listing.badge_color === 'bg-purple-600') badgeBg = '#9333ea';
  if (listing.badge_color === 'bg-navy-700') badgeBg = '#183a5a';

  return (
    <Link href={`/annonce/${listing.slug}`} className="featured-card">
      <div className="featured-image">
        <Image
          src={listing.images[0] || '/images/hero-property.jpg'}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
        />
        <span className="featured-badge" style={{ background: badgeBg }}>
          {listing.badge_label}
        </span>
        <button
          type="button"
          className="featured-favorite"
          aria-label="Ajouter aux favoris"
          onClick={(e) => e.preventDefault()}
        >
          <Heart size={14} />
        </button>
      </div>

      <div className="featured-body">
        <p className="featured-type">{listing.type}</p>
        <h3 className="featured-card-title">{listing.title}</h3>
        <p className="featured-location">
          <MapPin size={11} />
          {listing.location}
        </p>
        <div className="featured-meta">
          <span>{listing.surface} m²</span>
          <span>·</span>
          <span>{listing.rooms}</span>
          {listing.beds && (
            <>
              <span>·</span>
              <span>{listing.beds}</span>
            </>
          )}
        </div>
        <div className="featured-footer">
          <span className="featured-price">
            {formattedPrice} €
            {isRental && <span className="featured-period">/mois</span>}
          </span>
          <span className="featured-cta">Voir l&apos;annonce →</span>
        </div>
      </div>
    </Link>
  );
}