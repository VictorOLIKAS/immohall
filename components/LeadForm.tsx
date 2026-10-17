'use client';
import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

type LeadFormProps = {
  listingTitle: string;
  agentName: string;
  isTeam: boolean;
};

export default function LeadForm({ listingTitle, agentName, isTeam }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-white border border-navy-100 rounded-2xl p-5 shadow-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center 
                        justify-center">
          <User size={18} className="text-orange-500" />
        </div>
        <div>
          <p className="font-bold text-navy-900 text-sm">{agentName}</p>
          <p className="text-[11px] text-navy-400">
            {isTeam ? 'Votre interlocuteur privilégié' : 'Professionnel partenaire'}
          </p>
        </div>
      </div>

      <h3 className="font-bold text-navy-900 text-base mb-1">
        Demander plus d&apos;informations
      </h3>
      <p className="text-xs text-navy-500 mb-4">
        Réponse sous 24h. Vos coordonnées sont confidentielles.
      </p>

      {submitted ? (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <p className="font-semibold text-orange-600 text-sm">✓ Demande envoyée !</p>
          <p className="text-xs text-navy-500 mt-1">
            L&apos;agence vous contactera bientôt.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              placeholder="Votre nom complet"
              required
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-navy-100 
                         text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="relative">
            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              type="email"
              placeholder="Votre e-mail"
              required
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-navy-100 
                         text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="relative">
            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              type="tel"
              placeholder="Votre téléphone"
              required
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-navy-100 
                         text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="relative">
            <MessageSquare size={14} className="absolute left-3 top-3 text-navy-400" />
            <textarea
              placeholder={`Je suis intéressé(e) par "${listingTitle}". Merci de me contacter.`}
              rows={3}
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-navy-100 
                         text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 
                         resize-none"
            />
          </div>

          <label className="flex items-start gap-2 text-[11px] text-navy-500">
            <input type="checkbox" required className="mt-0.5" />
            <span>
              J&apos;accepte la{' '}
              <a href="/politique-confidentialite" className="text-orange-500 underline">
                politique de confidentialité
              </a>
            </span>
          </label>

          <button type="submit" className="btn-primary w-full justify-center text-sm">
            <Send size={14} />
            Envoyer ma demande
          </button>
        </form>
      )}

      <p className="text-[10px] text-navy-400 text-center mt-3">
        Aucun frais. Aucune obligation.
      </p>
    </div>
  );
}