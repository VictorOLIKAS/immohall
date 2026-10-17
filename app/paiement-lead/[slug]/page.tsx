'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  Lock,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Check,
  CreditCard,
  ArrowLeft,
  Info,
  Clock,
  User as UserIcon,
  Briefcase,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LEADS } from '@/data/leads';

export default function PaiementLeadPage() {
  const params = useParams();
  const router = useRouter();
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'sepa'>('card');

  const lead = LEADS.find((l) => l.id === Number(params.slug));

  if (!lead) {
    return (
      <>
        <TopBar />
        <Header />
        <main className="min-h-[60vh] flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-navy-900 mb-2">
              Lead introuvable
            </h1>
            <p className="text-sm text-navy-500 mb-6">
              Ce lead n&apos;existe pas ou a expiré.
            </p>
            <Link href="/espace-pro/mes-leads" className="btn-primary">
              Retour à mes leads
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const price = lead.price || 19;
  const vat = price * 0.2;
  const totalHT = price;
  const totalTTC = price + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaid(true);
      setTimeout(() => {
        router.push('/espace-pro/mes-leads');
      }, 3000);
    }, 1200);
  };

  // ==================== Success ====================
  if (paid) {
    return (
      <>
        <TopBar />
        <Header />
        <main className="min-h-[60vh] flex items-center justify-center py-16 
                         bg-navy-50/20">
          <div className="max-w-lg w-full mx-4 bg-white rounded-3xl 
                          shadow-card p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 
                            flex items-center justify-center mb-4">
              <Check size={32} className="text-green-600" />
            </div>

            <h1 className="text-2xl font-bold text-navy-900 mb-2">
              Paiement confirmé !
            </h1>
            <p className="text-sm text-navy-500 mb-6">
              Les coordonnées du prospect ont été débloquées. Vous les trouverez 
              dans votre espace « Mes leads ».
            </p>

            <div className="bg-navy-50/50 rounded-xl p-4 text-left mb-6">
              <p className="text-xs font-semibold text-navy-700 mb-3">
                Coordonnées débloquées :
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-navy-900">
                  <UserIcon size={14} className="text-orange-500 shrink-0" />
                  <span className="font-semibold">{lead.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <Mail size={14} className="text-orange-500 shrink-0" />
                  <span>{lead.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <Phone size={14} className="text-orange-500 shrink-0" />
                  <span>{lead.phone}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-navy-400 mb-4">
              Redirection vers mes leads...
            </p>

            <Link
              href="/espace-pro/mes-leads"
              className="btn-primary w-full justify-center text-sm"
            >
              Voir mes leads
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ==================== Payment Form ====================
  return (
    <>
      <TopBar />
      <Header />

      <main className="bg-navy-50/20 py-8">
        <div className="container-hall max-w-4xl">
          {/* Back link */}
          <Link
            href="/espace-pro/mes-leads"
            className="inline-flex items-center gap-1 text-sm text-navy-500 
                       hover:text-orange-500 transition mb-6"
          >
            <ArrowLeft size={14} />
            Retour à mes leads
          </Link>

          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 
                            text-orange-600 text-xs font-bold px-3 py-1.5 
                            rounded-full tracking-wider mb-3">
              <Lock size={12} />
              LEAD VERROUILLÉ
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Débloquer ce lead
            </h1>
            <p className="text-sm text-navy-500 mt-2">
              Accédez aux coordonnées complètes de ce prospect qualifié.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Colonne gauche: Lead info + Form */}
            <div className="lg:col-span-3 space-y-6">
              {/* Lead Card */}
              <div className="bg-white rounded-2xl border border-navy-100 p-5">
                <p className="text-xs font-semibold text-navy-500 uppercase 
                              tracking-wider mb-3">
                  Informations du prospect
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-navy-100 
                                  flex items-center justify-center shrink-0">
                    <UserIcon size={20} className="text-navy-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-navy-900 text-sm flex 
                                  items-center gap-2">
                      Prospect masqué
                      <span className="text-[10px] font-bold bg-navy-100 
                                       text-navy-500 px-1.5 py-0.5 rounded">
                        MASQUÉ
                      </span>
                    </p>
                    <p className="text-xs text-navy-400">
                      Coordonnées visibles après paiement
                    </p>
                  </div>
                </div>

                <div className="border-t border-navy-50 pt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-orange-500 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-xs text-navy-400">Bien concerné</p>
                      <p className="text-sm font-semibold text-navy-900">
                        {lead.listingTitle}
                      </p>
                      <p className="text-xs text-navy-500">{lead.listingType}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-navy-500">
                    <Clock size={12} />
                    <span>Reçu {lead.createdAtLabel}</span>
                  </div>

                  {lead.budget && (
                    <div className="flex items-center gap-2 text-xs text-navy-500">
                      <Briefcase size={12} />
                      <span>Budget : <strong className="text-navy-700">{lead.budget}</strong></span>
                    </div>
                  )}
                </div>

                {/* Message preview */}
                {lead.message && (
                  <div className="mt-4 bg-navy-50/50 rounded-lg p-3">
                    <p className="text-[10px] font-semibold text-navy-500 
                                  uppercase tracking-wider mb-1">
                      Message du prospect
                    </p>
                    <p className="text-xs text-navy-600 italic">
                      &ldquo;{lead.message}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Payment Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-navy-100 p-5"
              >
                <h2 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <CreditCard size={16} className="text-orange-500" />
                  Informations de paiement
                </h2>

                {/* Method selector */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 
                                transition text-left ${
                                  paymentMethod === 'card'
                                    ? 'border-orange-500 bg-orange-50'
                                    : 'border-navy-100 hover:border-navy-200'
                                }`}
                  >
                    <CreditCard
                      size={16}
                      className={
                        paymentMethod === 'card'
                          ? 'text-orange-500'
                          : 'text-navy-400'
                      }
                    />
                    <div>
                      <p className="text-xs font-semibold text-navy-900">
                        Carte bancaire
                      </p>
                      <p className="text-[10px] text-navy-400">Visa, Mastercard</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('sepa')}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 
                                transition text-left ${
                                  paymentMethod === 'sepa'
                                    ? 'border-orange-500 bg-orange-50'
                                    : 'border-navy-100 hover:border-navy-200'
                                }`}
                  >
                    <ShieldCheck
                      size={16}
                      className={
                        paymentMethod === 'sepa'
                          ? 'text-orange-500'
                          : 'text-navy-400'
                      }
                    />
                    <div>
                      <p className="text-xs font-semibold text-navy-900">
                        SEPA
                      </p>
                      <p className="text-[10px] text-navy-400">
                        Virement bancaire
                      </p>
                    </div>
                  </button>
                </div>

                {/* Card fields */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold 
                                        text-navy-700 mb-2">
                        Numéro de carte
                      </label>
                      <div className="relative">
                        <CreditCard
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 
                                     text-navy-400"
                        />
                        <input
                          type="text"
                          placeholder="4242 4242 4242 4242"
                          required
                          className="w-full pl-10 pr-3 py-3 rounded-lg border 
                                     border-navy-100 text-sm focus:outline-none 
                                     focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold 
                                          text-navy-700 mb-2">
                          Expiration
                        </label>
                        <input
                          type="text"
                          placeholder="MM / AA"
                          required
                          className="w-full px-3 py-3 rounded-lg border 
                                     border-navy-100 text-sm focus:outline-none 
                                     focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold 
                                          text-navy-700 mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          required
                          className="w-full px-3 py-3 rounded-lg border 
                                     border-navy-100 text-sm focus:outline-none 
                                     focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold 
                                        text-navy-700 mb-2">
                        Nom sur la carte
                      </label>
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        required
                        className="w-full px-3 py-3 rounded-lg border 
                                   border-navy-100 text-sm focus:outline-none 
                                   focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  </div>
                )}

                {/* SEPA info */}
                {paymentMethod === 'sepa' && (
                  <div className="bg-navy-50/50 rounded-lg p-4 text-xs 
                                  text-navy-600">
                    Un IBAN vous sera communiqué après validation pour effectuer 
                    le virement. Le lead sera débloqué dès réception du paiement 
                    (1-2 jours ouvrés).
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm mt-5 
                             disabled:opacity-70"
                >
                  {loading ? (
                    'Traitement du paiement...'
                  ) : (
                    <>
                      <Lock size={14} />
                      Payer {totalTTC.toFixed(2)} € TTC
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-3">
                  <ShieldCheck size={12} className="text-green-600" />
                  <p className="text-[10px] text-navy-400">
                    Paiement 100% sécurisé par Stripe
                  </p>
                </div>
              </form>
            </div>

            {/* Colonne droite: Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-navy-100 p-5 
                              lg:sticky lg:top-24">
                <h2 className="font-bold text-navy-900 mb-4">
                  Récapitulatif
                </h2>

                <div className="space-y-3 pb-4 border-b border-navy-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-500">Prix du lead</span>
                    <span className="font-semibold text-navy-900">
                      {totalHT} € HT
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-500">TVA (20%)</span>
                    <span className="font-semibold text-navy-900">
                      {vat.toFixed(2)} €
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="font-bold text-navy-900">Total TTC</span>
                  <span className="text-2xl font-bold text-orange-500">
                    {totalTTC.toFixed(2)} €
                  </span>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg 
                                p-3 flex items-start gap-2 mb-4">
                  <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-green-700">
                    <strong>Paiement unique</strong> · Aucun engagement · Le lead 
                    reste dans votre historique.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-navy-500">
                    <Info size={12} className="shrink-0 mt-0.5" />
                    <span>
                      Les coordonnées sont immédiatement disponibles après paiement.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-navy-500">
                    <ShieldCheck size={12} className="shrink-0 mt-0.5" />
                    <span>
                      Conforme RGPD · Données protégées · Facturation automatique.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}