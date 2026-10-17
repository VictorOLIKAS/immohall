'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, User, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Acheter', href: '/residentiel/achat' },
  { label: 'Louer', href: '/residentiel/location' },
  { label: 'Immobilier professionnel', href: '/commercial' },
  { label: 'Terrains & investissement', href: '/foncier' },
  { label: 'Off-Market', href: '/off-market', isNew: true },
  { label: 'Actualités', href: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(245, 242, 234, 0.96)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(24, 58, 90, 0.10)',
      }}
    >
      <div className="container-hall">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '78px',
            gap: '20px',
          }}
          aria-label="Navigation principale"
        >
          {/* LOGO */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
            aria-label="ImmoHall - Accueil"
          >
            <Image
              src="/logo-immohall.png"
              alt="ImmoHall"
              width={132}
              height={50}
              priority
              style={{ width: '132px', height: 'auto' }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div
            className="header-nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              marginLeft: 'auto',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-hall"
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {link.label}
                {link.isNew && (
                  <span
                    style={{
                      background:
                        'linear-gradient(135deg, #f39a3e, #e87520)',
                      color: 'white',
                      fontSize: '0.58rem',
                      fontWeight: 900,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Nouveau
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* FAVORITES ICON */}
          <Link
            href="/mon-profil/favoris"
            className="header-fav-icon hidden lg:flex"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              color: '#183a5a',
              background: 'rgba(255, 255, 255, 0.55)',
              border: '1px solid rgba(24, 58, 90, 0.15)',
              transition: 'all 0.15s ease',
            }}
            aria-label="Favoris"
          >
            <Heart size={18} />
          </Link>

          {/* LOGIN BUTTON */}
          <div
            className="header-login-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: '9px' }}
          >
            <Link
              href="/connexion"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                minHeight: '44px',
                padding: '10px 18px',
                borderRadius: '9px',
                color: '#183a5a',
                border: '1px solid rgba(24, 58, 90, 0.20)',
                background: 'rgba(255, 255, 255, 0.55)',
                fontWeight: 750,
                fontSize: '0.88rem',
                transition: 'all 0.15s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}
            >
              <User size={16} />
              <span>Connexion</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="header-menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            style={{
              display: 'none',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid rgba(24, 58, 90, 0.20)',
              background: 'transparent',
              color: '#183a5a',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="header-mobile-menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '5px 0 18px',
              borderTop: '1px solid rgba(24, 58, 90, 0.08)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="header-mobile-link"
                style={{
                  padding: '12px 4px',
                  color: '#183a5a',
                  borderBottom: '1px solid rgba(24, 58, 90, 0.07)',
                  fontWeight: 650,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                {link.label}
                {link.isNew && (
                  <span
                    style={{
                      background: '#e87520',
                      color: 'white',
                      fontSize: '0.58rem',
                      fontWeight: 900,
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    Nouveau
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/connexion"
              onClick={() => setOpen(false)}
              className="header-mobile-link"
              style={{
                padding: '12px 4px',
                color: '#e87520',
                fontWeight: 750,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                marginTop: '4px',
              }}
            >
              <User size={16} />
              Connexion
            </Link>
          </div>
        )}
      </div>

      <style jsx global>{`
        .nav-link-hall {
          position: relative;
          padding: 28px 0;
          color: #183a5a;
          font-size: 0.88rem;
          font-weight: 650;
          white-space: nowrap;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link-hall::after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 19px;
          height: 2px;
          border-radius: 2px;
          background: #e87520;
          transition: right 0.2s ease;
        }

        .nav-link-hall:hover {
          color: #e87520;
        }

        .nav-link-hall:hover::after {
          right: 0;
        }

        .header-login-desktop a:hover {
          background: #183a5a !important;
          color: white !important;
        }

        .header-fav-icon:hover {
          background: #183a5a !important;
          color: white !important;
        }

        .header-menu-btn:hover {
          background: rgba(24, 58, 90, 0.05) !important;
        }

        .header-mobile-link:hover {
          color: #e87520 !important;
        }

        @media (max-width: 1024px) {
          .header-nav-desktop {
            display: none !important;
          }
          .header-login-desktop {
            display: none !important;
          }
          .header-fav-icon {
            display: none !important;
          }
          .header-menu-btn {
            display: inline-flex !important;
          }
        }

        @media (min-width: 1025px) {
          .header-menu-btn,
          .header-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}