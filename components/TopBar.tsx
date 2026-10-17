import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function TopBar() {
  return (
    <div
      className="text-white text-xs sm:text-sm"
      style={{ background: '#183a5a' }}
    >
      <div
        className="container-hall flex items-center justify-between"
        style={{ minHeight: '38px', gap: '20px' }}
      >
        <p
          className="hidden sm:block"
          style={{
            margin: 0,
            color: '#ffffff',
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          Le portail immobilier qui rapproche les projets des opportunités
        </p>

        <div
          className="flex items-center ml-auto"
          style={{ gap: '20px', fontSize: '0.80rem' }}
        >
          <Link
            href="/espace-pro"
            className="hover:text-orange-400 transition"
            style={{ color: '#ffffff' }}
          >
            Espace professionnels
          </Link>

          <span style={{ opacity: 0.3 }}>|</span>

          <a
            href="https://lenseigneimmo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-orange-400"
            style={{ color: '#ffffff' }}
          >
            L&apos;Enseigne Immo
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}