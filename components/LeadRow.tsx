'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import type { Lead } from '@/data/leads';

type LeadRowProps = {
  lead: Lead;
};

export default function LeadRow({ lead }: LeadRowProps) {
  const [showContact, setShowContact] = useState(false);

  const isLocked = lead.status === 'locked';
  const isTeam = lead.isTeam;
  const isUnlocked = lead.status === 'unlocked' || lead.status === 'paid';

  return (
    <div
      className={`bg-white rounded-2xl border p-4 transition-all 
                  hover:shadow-card ${
                    isLocked
                      ? 'border-navy-100'
                      : isTeam
                      ? 'border-orange-200'
                      : 'border-navy-100'
                  }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Avatar + Infos */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center 
                        text-white font-bold shrink-0 text-sm ${
                          isTeam ? 'bg-orange-500' : 'bg-navy-500'
                        }`}
          >
            {isLocked ? '?' : lead.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-semibold text-navy-900 text-sm truncate">
                {isLocked ? 'Prospect masqué' : lead.name}
              </p>
              {isTeam && (
                <span className="text-[9px] font-bold bg-orange-100 
                                 text-orange-600 px-1.5 py-0.5 rounded 
                                 tracking-wider">
                  TEAM
                </span>
              )}
              {lead.status === 'paid' && (
                <span className="text-[9px] font-bold bg-green-100 
                                 text-green-600 px-1.5 py-0.5 rounded 
                                 tracking-wider">
                  PAYÉ
                </span>
              )}
            </div>
            <p className="text-[11px] text-navy-400 mt-0.5">
              {lead.listingType} · {lead.createdAtLabel}
            </p>
          </div>
        </div>

        {/* Listing */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-navy-900 truncate flex items-center gap-1">
            <MapPin size={11} className="text-navy-400 shrink-0" />
            {lead.listingTitle}
          </p>
          {lead.budget && (
            <p className="text-[11px] text-navy-400 mt-0.5">
              Budget : {lead.budget}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {isLocked ? (
            <Link
              href={`/paiement-lead/${lead.id}`}
              className="inline-flex items-center gap-2 bg-orange-500 
                         hover:bg-orange-600 text-white text-xs font-semibold 
                         px-3 py-2 rounded-lg transition"
            >
              <Lock size={12} />
              Débloquer {lead.price} €
            </Link>
          ) : (
            <>
              <button
                onClick={() => setShowContact(!showContact)}
                className="w-9 h-9 rounded-lg bg-navy-50 hover:bg-navy-100 
                           flex items-center justify-center transition"
                aria-label="Afficher les coordonnées"
              >
                {showContact ? (
                  <EyeOff size={16} className="text-navy-700" />
                ) : (
                  <Eye size={16} className="text-navy-700" />
                )}
              </button>
              <Link
                href={`/annonce/${lead.listingSlug}`}
                className="w-9 h-9 rounded-lg bg-navy-50 hover:bg-navy-100 
                           flex items-center justify-center transition"
                aria-label="Voir l'annonce"
              >
                <ExternalLink size={16} className="text-navy-700" />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Contact reveal */}
      {showContact && isUnlocked && (
        <div className="mt-3 pt-3 border-t border-navy-100 grid sm:grid-cols-2 gap-2">
          <a
            href={`mailto:${lead.email}`}
            className="flex items-center gap-2 text-xs text-navy-700 
                       hover:text-orange-500 transition bg-navy-50 rounded-lg 
                       px-3 py-2"
          >
            <Mail size={14} className="text-orange-500 shrink-0" />
            <span className="truncate">{lead.email}</span>
          </a>
          <a
            href={`tel:${lead.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-xs text-navy-700 
                       hover:text-orange-500 transition bg-navy-50 rounded-lg 
                       px-3 py-2"
          >
            <Phone size={14} className="text-orange-500 shrink-0" />
            <span className="truncate">{lead.phone}</span>
          </a>
        </div>
      )}

      {/* Message */}
      {showContact && isUnlocked && lead.message && (
        <div className="mt-2 bg-navy-50/50 rounded-lg p-3">
          <p className="text-xs text-navy-600 italic">
            &ldquo;{lead.message}&rdquo;
          </p>
        </div>
      )}

      {/* Locked hint */}
      {isLocked && (
        <div className="mt-3 pt-3 border-t border-navy-100">
          <p className="text-[11px] text-navy-400 flex items-center gap-1.5">
            <Lock size={11} />
            Débloquez ce lead pour voir le nom, l&apos;email et le téléphone du prospect.
          </p>
        </div>
      )}
    </div>
  );
}