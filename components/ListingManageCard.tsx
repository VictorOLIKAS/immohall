'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Eye,
  Users,
  MoreVertical,
  Edit,
  Copy,
  Trash2,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import type { Listing } from '@/data/listings';

type ListingManageCardProps = {
  listing: Listing;
};

const STATUS_MAP = {
  published: { label: 'Publiée', color: 'bg-green-100 text-green-700' },
  pending: { label: 'En attente', color: 'bg-orange-100 text-orange-700' },
  expired: { label: 'Expirée', color: 'bg-navy-100 text-navy-600' },
};

export default function ListingManageCard({ listing }: ListingManageCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const status = STATUS_MAP[listing.status];
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(listing.price);

  return (
    <div className="bg-white rounded-2xl border border-navy-100 overflow-hidden 
                    hover:shadow-card transition-all group">
      {/* Image + Status */}
      <div className="relative h-40 bg-navy-100">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-md 
                        tracking-wider ${status.color}`}
          >
            {status.label.toUpperCase()}
          </span>
          {listing.agent.isTeam && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-md 
                             bg-orange-500 text-white tracking-wider">
              TEAM
            </span>
          )}
        </div>

        {/* Menu dropdown */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white 
                       flex items-center justify-center transition"
            aria-label="Menu"
          >
            <MoreVertical size={14} className="text-navy-700" />
          </button>

          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-0 top-10 bg-white rounded-lg 
                              shadow-card-hover border border-navy-100 
                              py-1 w-40 z-20">
                <Link
                  href={`/espace-pro/mes-annonces/${listing.id}/editer`}
                  className="flex items-center gap-2 px-3 py-2 text-xs 
                             text-navy-700 hover:bg-navy-50 transition"
                >
                  <Edit size={12} />
                  Modifier
                </Link>
                <button className="flex items-center gap-2 px-3 py-2 text-xs 
                                   text-navy-700 hover:bg-navy-50 transition 
                                   w-full text-left">
                  <Copy size={12} />
                  Dupliquer
                </button>
                <Link
                  href={`/annonce/${listing.slug}`}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 text-xs 
                             text-navy-700 hover:bg-navy-50 transition"
                >
                  <ExternalLink size={12} />
                  Voir l&apos;annonce
                </Link>
                <hr className="my-1 border-navy-100" />
                <button className="flex items-center gap-2 px-3 py-2 text-xs 
                                   text-red-500 hover:bg-red-50 transition 
                                   w-full text-left">
                  <Trash2 size={12} />
                  Supprimer
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-wider text-navy-400 font-semibold">
          {listing.type}
        </p>
        <h3 className="mt-1 font-bold text-navy-900 text-sm line-clamp-1">
          {listing.title}
        </h3>
        <p className="mt-1 text-xs text-navy-500 flex items-center gap-1">
          <MapPin size={11} />
          {listing.location}
        </p>

        <p className="mt-3 text-base font-bold text-navy-900">
          {formattedPrice} €
        </p>

        {/* Stats */}
        <div className="mt-3 pt-3 border-t border-navy-50 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-1.5 text-xs text-navy-500">
            <Eye size={12} className="text-navy-400" />
            <span className="font-semibold text-navy-900">{listing.views}</span>
            <span className="text-navy-400">vues</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-navy-500">
            <Users size={12} className="text-orange-500" />
            <span className="font-semibold text-navy-900">
              {listing.leadsCount}
            </span>
            <span className="text-navy-400">leads</span>
          </div>
        </div>
      </div>
    </div>
  );
}