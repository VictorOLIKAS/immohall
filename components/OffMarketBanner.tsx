import Link from 'next/link';
import Image from 'next/image';
import { Lock, Users, Gem, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Lock,
    title: 'Opportunités rares',
    desc: 'Biens non visibles sur le marché public',
  },
  {
    icon: Users,
    title: 'Accès sur sélection',
    desc: 'Pour acquéreurs sérieux et professionnels',
  },
  {
    icon: Gem,
    title: 'Accompagnement dédié',
    desc: "Par la Team L'Enseigne Immo",
  },
];

export default function OffMarketBanner() {
  return (
    <section className="offmarket-section">
      <div className="container-hall">
        <div className="offmarket-banner">
          {/* ==========================================
              TOP: Main content (Text + Image)
              ========================================== */}
          <div className="offmarket-top">
            {/* LEFT: Content */}
            <div className="offmarket-content">
              <div className="offmarket-badge">
                <Lock size={12} />
                Off-Market
              </div>

              <h2 className="offmarket-title">
                Des opportunités exclusives, avant tout le monde.
              </h2>

              <p className="offmarket-description">
                Accédez à des biens non diffusés publiquement : biens
                confidentiels, ventes discrètes, opportunités institutionnelles
                et projets en avant-première.
              </p>

              <Link href="/off-market" className="offmarket-cta">
                Découvrir les biens Off-Market
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* RIGHT: Image */}
            <div className="offmarket-image-wrapper">
              <Image
                src="/images/pro-office.jpg"
                alt="Off-Market - Accès confidentiel"
                fill
                style={{ objectFit: 'cover' }}
              />

              <div className="offmarket-image-overlay" />

              {/* Labels */}
              <div className="offmarket-labels">
                {['DISCRÉTION', 'CONFIANCE', 'OPPORTUNITÉS'].map((label) => (
                  <span key={label} className="offmarket-label">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ==========================================
              BOTTOM: Features (séparé, en bas)
              ========================================== */}
          <div className="offmarket-features">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="offmarket-feature">
                  <div className="offmarket-feature-icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="offmarket-feature-title">{feature.title}</p>
                    <p className="offmarket-feature-desc">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}