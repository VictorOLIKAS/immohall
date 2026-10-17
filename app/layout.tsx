import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://immohall.com'),
  title: {
    default: 'ImmoHall - Votre expert immobilier en France',
    template: '%s | ImmoHall',
  },
  description:
    "Trouvez votre prochain bien immobilier en France : maisons, appartements, commerces, bureaux, terrains. Portail national d'annonces résidentielles et professionnelles.",
  keywords: [
    'immobilier',
    'annonces immobilières',
    'acheter maison',
    'louer appartement',
    'murs commerciaux',
    'fonds de commerce',
    'bureaux',
    'terrains',
    'France',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://immohall.com',
    siteName: 'ImmoHall',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}