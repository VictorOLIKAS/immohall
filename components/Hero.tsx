'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Lock, ArrowRight, Info } from 'lucide-react';

const TABS = [
  { key: 'acheter', label: 'Acheter' },
  { key: 'louer', label: 'Louer' },
  { key: 'commerce', label: 'Commerce' },
  { key: 'bureau', label: 'Bureaux' },
  { key: 'terrain', label: 'Terrains' },
  { key: 'investir', label: 'Investir' },
  { key: 'off-market', label: 'Off-Market', highlight: true },
];

const PROPERTY_TYPES = [
  { value: '', label: 'Tous les biens' },
  { value: 'appartement', label: 'Appartement' },
  { value: 'maison', label: 'Maison' },
  { value: 'villa', label: 'Villa' },
  { value: 'immeuble', label: 'Immeuble' },
  { value: 'local-commercial', label: 'Local commercial' },
  { value: 'fonds-commerce', label: 'Fonds de commerce' },
  { value: 'bureau', label: 'Bureau' },
  { value: 'terrain', label: 'Terrain' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('acheter');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [includeOffMarket, setIncludeOffMarket] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('tab', activeTab);
    if (propertyType) params.set('type', propertyType);
    if (location) params.set('location', location);
    if (minPrice) params.set('min', minPrice);
    if (maxPrice) params.set('max', maxPrice);
    if (includeOffMarket) params.set('offmarket', 'true');
    window.location.href = `/recherche?${params.toString()}`;
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF8F3, #F5F2EA)',
        paddingTop: '40px',
        paddingBottom: '60px',
      }}
    >
      <div className="container-hall" style={{ position: 'relative', zIndex: 2 }}>
        {/* =========================================================
            MAIN GRID: Text + Image
            ========================================================= */}
        <div
          className="hero-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '36px',
          }}
        >
          {/* LEFT: Text */}
          <div>
            {/* Top badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #f39a3e, #e87520)',
                  color: 'white',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  padding: '5px 10px',
                  borderRadius: '5px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Nouveau
              </span>
              <span
                className="eyebrow"
                style={{ margin: 0 }}
              >
                Accès Off-Market
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 800,
                color: '#183a5a',
                margin: '0 0 18px',
              }}
            >
              Trouvez votre prochain{' '}
              <span style={{ color: '#e87520' }}>bien immobilier</span>
            </h1>

            <p
              style={{
                color: '#657684',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)',
                maxWidth: '520px',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Maisons, appartements, commerces, bureaux, terrains et biens
              off-market : des opportunités uniques partout en France.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              aspectRatio: '16 / 11',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(24, 58, 90, 0.15)',
            }}
          >
            <Image
              src="/images/hero-property.jpg"
              alt="Bien immobilier moderne"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />

            {/* Off-Market floating card */}
            <div
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'white',
                borderRadius: '14px',
                padding: '14px 16px',
                boxShadow: '0 10px 30px rgba(24, 58, 90, 0.20)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                maxWidth: '260px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(232, 117, 32, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Lock size={18} style={{ color: '#e87520' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 800,
                    color: '#183a5a',
                    fontSize: '0.85rem',
                  }}
                >
                  Biens Off-Market
                </p>
                <p
                  style={{
                    margin: '2px 0 0',
                    color: '#657684',
                    fontSize: '0.7rem',
                    lineHeight: 1.3,
                  }}
                >
                  Des opportunités exclusives non diffusées publiquement.
                </p>
              </div>
              <ArrowRight size={16} style={{ color: '#e87520' }} />
            </div>
          </div>
        </div>

        {/* =========================================================
            SEARCH BOX
            ========================================================= */}
        <form
          onSubmit={handleSearch}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '12px',
            boxShadow: '0 15px 40px rgba(24, 58, 90, 0.10)',
            border: '1px solid rgba(24, 58, 90, 0.08)',
          }}
        >
          {/* TABS */}
          <div
            className="search-tabs-row"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '4px',
              padding: '4px',
              marginBottom: '10px',
              overflowX: 'auto',
            }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: '10px 18px',
                    border: 0,
                    borderRadius: '8px',
                    background: isActive
                      ? tab.highlight
                        ? '#183a5a'
                        : '#e87520'
                      : 'transparent',
                    color: isActive ? 'white' : '#657684',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* FIELDS */}
          <div
            className="search-fields-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.5fr 1fr 1fr auto',
              gap: '10px',
              alignItems: 'end',
            }}
          >
            {/* Type */}
            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#183a5a',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                Type de bien
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '48px',
                  padding: '0 14px',
                  borderRadius: '9px',
                  border: '1px solid #d8dee2',
                  background: 'white',
                  color: '#183247',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#183a5a',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                Localisation
              </label>
              <div style={{ position: 'relative' }}>
                <MapPin
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#657684',
                  }}
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ville, département ou code postal"
                  style={{
                    width: '100%',
                    minHeight: '48px',
                    padding: '0 14px 0 38px',
                    borderRadius: '9px',
                    border: '1px solid #d8dee2',
                    background: 'white',
                    color: '#183247',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Min */}
            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#183a5a',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                Budget min.
              </label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="100 000 €"
                style={{
                  width: '100%',
                  minHeight: '48px',
                  padding: '0 14px',
                  borderRadius: '9px',
                  border: '1px solid #d8dee2',
                  background: 'white',
                  color: '#183247',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Max */}
            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  color: '#183a5a',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                Budget max.
              </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="500 000 €"
                style={{
                  width: '100%',
                  minHeight: '48px',
                  padding: '0 14px',
                  borderRadius: '9px',
                  border: '1px solid #d8dee2',
                  background: 'white',
                  color: '#183247',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{
                minHeight: '48px',
                padding: '10px 22px',
                border: 0,
                borderRadius: '9px',
                color: 'white',
                background: 'linear-gradient(135deg, #f39a3e, #e87520)',
                boxShadow: '0 7px 20px rgba(232, 117, 32, 0.20)',
                fontWeight: 750,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                whiteSpace: 'nowrap',
              }}
            >
              <Search size={16} />
              Rechercher
            </button>
          </div>

          {/* OFF-MARKET TOGGLE + FEATURES */}
          <div
            style={{
              marginTop: '14px',
              paddingTop: '14px',
              borderTop: '1px solid #e3e0d8',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {/* Toggle */}
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#183a5a',
              }}
            >
              <span
                onClick={() => setIncludeOffMarket(!includeOffMarket)}
                style={{
                  position: 'relative',
                  width: '40px',
                  height: '22px',
                  borderRadius: '11px',
                  background: includeOffMarket ? '#e87520' : '#d8dee2',
                  transition: 'background 0.2s ease',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: includeOffMarket ? '20px' : '2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'white',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                    transition: 'left 0.2s ease',
                  }}
                />
              </span>
              Inclure les biens Off-Market dans la recherche
              <Info size={14} style={{ color: '#657684' }} />
            </label>

            {/* Features */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginLeft: 'auto',
              }}
            >
              {[
                'Biens exclusifs et confidentiels',
                'Accès sur sélection',
                'Accompagnement personnalisé',
              ].map((feature) => (
                <span
                  key={feature}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    color: '#657684',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#32a1c9" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center;
          }
          .hero-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
          }
          .search-fields-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .search-fields-row {
            grid-template-columns: 1fr !important;
          }
          .search-tabs-row {
            padding: 4px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}