'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Home,
  Store,
  Building2,
  Trees,
  Briefcase,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Check,
  Upload,
  X,
  Info,
  MapPin,
} from 'lucide-react';

type PropertyType = {
  id: string;
  label: string;
  icon: any;
};

const PROPERTY_TYPES: PropertyType[] = [
  { id: 'appartement', label: 'Appartement', icon: Home },
  { id: 'maison', label: 'Maison', icon: Home },
  { id: 'commerce', label: 'Commerce', icon: Store },
  { id: 'bureaux', label: 'Bureaux', icon: Building2 },
  { id: 'terrain', label: 'Terrain', icon: Trees },
  { id: 'entreprise', label: 'Entreprise', icon: Briefcase },
  { id: 'immeuble', label: 'Immeuble', icon: TrendingUp },
];

const STEPS = [
  { num: 1, label: 'Type de bien' },
  { num: 2, label: 'Détails' },
  { num: 3, label: 'Description' },
  { num: 4, label: 'Publication' },
];

export default function NouvelleAnnoncePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form data
  const [propertyType, setPropertyType] = useState('');
  const [transactionType, setTransactionType] = useState('vente');
  const [title, setTitle] = useState('');
  const [surface, setSurface] = useState('');
  const [rooms, setRooms] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [description, setDescription] = useState('');

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      router.push('/espace-pro/mes-annonces');
    }, 2000);
  };

  const canGoNext = () => {
    if (step === 1) return propertyType !== '';
    if (step === 2)
      return title && surface && price && city && postalCode;
    if (step === 3) return description.length >= 20;
    return true;
  };

  if (submitted) {
    return (
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border 
                        border-navy-100 p-12 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 
                          flex items-center justify-center mb-4">
            <Check size={28} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-navy-900 mb-2">
            Annonce soumise pour validation
          </h1>
          <p className="text-sm text-navy-500 mb-6">
            Votre annonce sera visible après validation par notre équipe 
            (sous 24h ouvrées).
          </p>
          <p className="text-xs text-navy-400">
            Redirection vers vos annonces...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/espace-pro/mes-annonces"
          className="inline-flex items-center gap-1 text-sm text-navy-500 
                     hover:text-orange-500 transition mb-2"
        >
          <ChevronLeft size={14} />
          Retour à mes annonces
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
          Publier une nouvelle annonce
        </h1>
        <p className="text-sm text-navy-500 mt-1">
          Remplissez le formulaire pour publier un nouveau bien.
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl border border-navy-100 p-5 mb-6">
        <div className="flex items-center justify-between">
          {STEPS.map((s, idx) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center 
                              justify-center font-bold text-sm transition ${
                                step > s.num
                                  ? 'bg-green-500 text-white'
                                  : step === s.num
                                  ? 'bg-orange-500 text-white'
                                  : 'bg-navy-100 text-navy-400'
                              }`}
                >
                  {step > s.num ? <Check size={16} /> : s.num}
                </div>
                <span
                  className={`text-[10px] font-semibold text-center 
                              hidden sm:block ${
                                step >= s.num ? 'text-navy-900' : 'text-navy-400'
                              }`}
                >
                  {s.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    step > s.num ? 'bg-green-500' : 'bg-navy-100'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl border border-navy-100 p-6">
        {step === 1 && (
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-1">
              Quel type de bien souhaitez-vous publier ?
            </h2>
            <p className="text-sm text-navy-500 mb-6">
              Sélectionnez la catégorie qui correspond le mieux.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {PROPERTY_TYPES.map((pt) => {
                const Icon = pt.icon;
                const isSelected = propertyType === pt.id;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setPropertyType(pt.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl 
                                border-2 transition ${
                                  isSelected
                                    ? 'border-orange-500 bg-orange-50'
                                    : 'border-navy-100 hover:border-navy-200'
                                }`}
                  >
                    <Icon
                      size={24}
                      className={
                        isSelected ? 'text-orange-500' : 'text-navy-500'
                      }
                    />
                    <span className="text-xs font-semibold text-navy-900">
                      {pt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-700 mb-2">
                Type de transaction
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['vente', 'location'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTransactionType(t)}
                    className={`py-3 px-4 rounded-lg border-2 font-semibold 
                                text-sm transition capitalize ${
                                  transactionType === t
                                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                                    : 'border-navy-100 text-navy-700 hover:border-navy-200'
                                }`}
                  >
                    {t === 'vente' ? 'Vente' : 'Location'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-1">
                Détails du bien
              </h2>
              <p className="text-sm text-navy-500 mb-4">
                Informations principales de votre annonce.
              </p>
            </div>

            <FormField label="Titre de l'annonce">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex : Appartement 3 pièces lumineux"
                className="w-full px-4 py-3 rounded-lg border border-navy-100 
                           text-sm focus:outline-none focus:ring-2 
                           focus:ring-orange-400"
              />
            </FormField>

            <div className="grid grid-cols-2 gap-4">
              <FormField label="Surface (m²)">
                <input
                  type="number"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                  placeholder="92"
                  className="w-full px-4 py-3 rounded-lg border border-navy-100 
                             text-sm focus:outline-none focus:ring-2 
                             focus:ring-orange-400"
                />
              </FormField>
              <FormField label="Nombre de pièces">
                <input
                  type="number"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="4"
                  className="w-full px-4 py-3 rounded-lg border border-navy-100 
                             text-sm focus:outline-none focus:ring-2 
                             focus:ring-orange-400"
                />
              </FormField>
            </div>

            <FormField label="Prix (€)">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="485000"
                className="w-full px-4 py-3 rounded-lg border border-navy-100 
                           text-sm focus:outline-none focus:ring-2 
                           focus:ring-orange-400"
              />
            </FormField>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <FormField label="Ville">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Lyon"
                    className="w-full px-4 py-3 rounded-lg border 
                               border-navy-100 text-sm focus:outline-none 
                               focus:ring-2 focus:ring-orange-400"
                  />
                </FormField>
              </div>
              <FormField label="Code postal">
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="69006"
                  className="w-full px-4 py-3 rounded-lg border 
                             border-navy-100 text-sm focus:outline-none 
                             focus:ring-2 focus:ring-orange-400"
                />
              </FormField>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-1">
                Description & Photos
              </h2>
              <p className="text-sm text-navy-500 mb-4">
                Décrivez votre bien et ajoutez des photos.
              </p>
            </div>

            <FormField label="Description du bien">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Décrivez votre bien en détail : points forts, environnement, équipements..."
                className="w-full px-4 py-3 rounded-lg border border-navy-100 
                           text-sm focus:outline-none focus:ring-2 
                           focus:ring-orange-400 resize-none"
              />
              <p className="text-[11px] text-navy-400 mt-1">
                {description.length} caractères (minimum 20)
              </p>
            </FormField>

            {/* Upload zone */}
            <FormField label="Photos">
              <div className="border-2 border-dashed border-navy-200 
                              rounded-xl p-8 text-center hover:border-orange-400 
                              transition cursor-pointer">
                <Upload size={32} className="text-navy-400 mx-auto mb-3" />
                <p className="text-sm font-semibold text-navy-700">
                  Glissez vos photos ici
                </p>
                <p className="text-xs text-navy-400 mt-1">
                  ou cliquez pour parcourir
                </p>
                <p className="text-[10px] text-navy-400 mt-3">
                  JPG, PNG · Max 5 Mo par photo
                </p>
              </div>
            </FormField>

            <div className="bg-navy-50/50 rounded-lg p-3 flex items-start gap-2">
              <Info size={14} className="text-orange-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-navy-500">
                Ajoutez au moins 3 photos de qualité pour maximiser vos chances 
                de recevoir des leads qualifiés.
              </p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-navy-900 mb-1">
                Récapitulatif
              </h2>
              <p className="text-sm text-navy-500 mb-4">
                Vérifiez les informations avant publication.
              </p>
            </div>

            <div className="bg-navy-50/30 rounded-xl p-5 space-y-3">
              <RecapRow label="Type de bien" value={propertyType} />
              <RecapRow label="Transaction" value={transactionType} />
              <RecapRow label="Titre" value={title} />
              <RecapRow label="Surface" value={surface ? `${surface} m²` : '-'} />
              <RecapRow label="Pièces" value={rooms || '-'} />
              <RecapRow
                label="Prix"
                value={
                  price
                    ? `${new Intl.NumberFormat('fr-FR').format(Number(price))} €`
                    : '-'
                }
              />
              <RecapRow
                label="Localisation"
                value={city && postalCode ? `${city} (${postalCode})` : '-'}
              />
              <RecapRow
                label="Description"
                value={
                  description
                    ? `${description.substring(0, 80)}...`
                    : '-'
                }
              />
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-orange-700 mb-1">
                ⏱️ Validation sous 24h
              </p>
              <p className="text-[11px] text-orange-600">
                Votre annonce sera vérifiée par notre équipe avant d&apos;être 
                publiée sur le site.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          disabled={step === 1}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg 
                     text-sm font-semibold text-navy-700 
                     hover:bg-navy-50 transition disabled:opacity-40 
                     disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} />
          Retour
        </button>

        {step < 4 ? (
          <button
            onClick={next}
            disabled={!canGoNext()}
            className="btn-primary text-sm disabled:opacity-50 
                       disabled:cursor-not-allowed"
          >
            Suivant
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="btn-primary text-sm"
          >
            <Check size={16} />
            Publier mon annonce
          </button>
        )}
      </div>
    </main>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy-700 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function RecapRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-navy-500">{label}</span>
      <span className="font-semibold text-navy-900 capitalize truncate 
                       max-w-xs text-right">
        {value}
      </span>
    </div>
  );
}