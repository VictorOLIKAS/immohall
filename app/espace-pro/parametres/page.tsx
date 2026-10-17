'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Building2,
  Bell,
  Shield,
  AlertTriangle,
  Save,
  Camera,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Check,
  Trash2,
} from 'lucide-react';

type Tab = 'profil' | 'agence' | 'notifications' | 'securite' | 'danger';

const TABS: { key: Tab; label: string; icon: any }[] = [
  { key: 'profil', label: 'Profil', icon: User },
  { key: 'agence', label: 'Agence', icon: Building2 },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'securite', label: 'Sécurité', icon: Shield },
  { key: 'danger', label: 'Zone danger', icon: AlertTriangle },
];

export default function ParametresPage() {
  const [tab, setTab] = useState<Tab>('profil');
  const [saved, setSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900">
          Paramètres
        </h1>
        <p className="text-sm text-navy-500 mt-1">
          Gérez votre compte et vos préférences.
        </p>
      </div>

      {saved && (
        <div className="mb-5 bg-green-50 border border-green-200 rounded-lg 
                        p-4 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center 
                          justify-center shrink-0">
            <Check size={14} className="text-white" />
          </div>
          <p className="text-sm font-semibold text-green-700">
            Modifications enregistrées avec succès.
          </p>
        </div>
      )}

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <nav className="bg-white border border-navy-100 rounded-2xl p-2 
                          lg:sticky lg:top-24">
            <ul className="space-y-1">
              {TABS.map((t) => {
                const Icon = t.icon;
                const isActive = tab === t.key;
                const isDanger = t.key === 'danger';
                return (
                  <li key={t.key}>
                    <button
                      onClick={() => setTab(t.key)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 
                                  rounded-lg transition text-left ${
                                    isActive
                                      ? isDanger
                                        ? 'bg-red-500 text-white'
                                        : 'bg-orange-500 text-white'
                                      : isDanger
                                      ? 'text-red-500 hover:bg-red-50'
                                      : 'text-navy-700 hover:bg-navy-50'
                                  }`}
                    >
                      <Icon size={16} />
                      <span className="text-sm font-medium">{t.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-navy-100 rounded-2xl p-6 
                          sm:p-8">
            {tab === 'profil' && <ProfilTab />}
            {tab === 'agence' && <AgenceTab />}
            {tab === 'notifications' && <NotificationsTab />}
            {tab === 'securite' && <SecuriteTab />}
            {tab === 'danger' && <DangerTab />}
          </div>

          {/* Save button */}
          {tab !== 'danger' && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                className="btn-primary text-sm"
              >
                <Save size={14} />
                Enregistrer les modifications
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// ============================================
// Tab 1: Profil
// ============================================
function ProfilTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-navy-900 mb-1">
          Informations personnelles
        </h2>
        <p className="text-sm text-navy-500">
          Mettez à jour vos informations personnelles.
        </p>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-orange-500 flex 
                        items-center justify-center text-white font-bold 
                        text-2xl shrink-0">
          LI
        </div>
        <div>
          <button className="inline-flex items-center gap-2 bg-navy-50 
                             hover:bg-navy-100 px-3 py-2 rounded-lg 
                             text-xs font-semibold text-navy-700 transition">
            <Camera size={14} />
            Changer la photo
          </button>
          <p className="text-[10px] text-navy-400 mt-1">
            JPG ou PNG · Max 2 Mo
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nom complet">
          <input
            type="text"
            defaultValue="L'Enseigne Immo"
            className="input-base"
          />
        </Field>
        <Field label="Fonction">
          <input
            type="text"
            defaultValue="Agent immobilier agréé"
            className="input-base"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Email" icon={Mail}>
          <input
            type="email"
            defaultValue="contact@immohall.com"
            className="input-base pl-9"
          />
        </Field>
        <Field label="Téléphone" icon={Phone}>
          <input
            type="tel"
            defaultValue="01 23 45 67 89"
            className="input-base pl-9"
          />
        </Field>
      </div>

      <Field label="Bio" hint="Maximum 200 caractères">
        <textarea
          rows={3}
          defaultValue="Agent immobilier spécialisé dans le résidentiel et l'immobilier professionnel à Paris."
          className="input-base resize-none"
        />
      </Field>
    </div>
  );
}

// ============================================
// Tab 2: Agence
// ============================================
function AgenceTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-navy-900 mb-1">
          Informations de l&apos;agence
        </h2>
        <p className="text-sm text-navy-500">
          Ces informations apparaissent sur vos annonces.
        </p>
      </div>

      <Field label="Nom commercial de l'agence">
        <input
          type="text"
          defaultValue="L'Enseigne Immo"
          className="input-base"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Numéro SIRET">
          <input
            type="text"
            defaultValue="123 456 789 00012"
            className="input-base"
          />
        </Field>
        <Field label="Carte professionnelle">
          <input
            type="text"
            defaultValue="CPI 7501 2024 000 012 345"
            className="input-base"
          />
        </Field>
      </div>

      <Field label="Adresse de l'agence" icon={MapPin}>
        <input
          type="text"
          defaultValue="1 rue de la Paix, 75001 Paris"
          className="input-base pl-9"
        />
      </Field>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Site web">
          <input
            type="text"
            placeholder="www.exemple.fr"
            className="input-base"
          />
        </Field>
        <Field label="Instagram">
          <input
            type="text"
            placeholder="@votre_agence"
            className="input-base"
          />
        </Field>
        <Field label="LinkedIn">
          <input
            type="text"
            placeholder="linkedin.com/company/..."
            className="input-base"
          />
        </Field>
      </div>
    </div>
  );
}

// ============================================
// Tab 3: Notifications
// ============================================
function NotificationsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-navy-900 mb-1">
          Préférences de notification
        </h2>
        <p className="text-sm text-navy-500">
          Choisissez comment vous souhaitez être contacté.
        </p>
      </div>

      <div className="space-y-3">
        <ToggleRow
          title="Nouveaux leads par email"
          desc="Recevez un email immédiat à chaque nouveau prospect."
          defaultChecked
        />
        <ToggleRow
          title="Notifications SMS"
          desc="Recevez un SMS pour les leads urgents."
        />
        <ToggleRow
          title="Newsletter ImmoHall"
          desc="Actualités, conseils et nouveautés (1× par mois)."
          defaultChecked
        />
        <ToggleRow
          title="Alertes d'annonces similaires"
          desc="Soyez notifié quand un bien similaire est publié."
        />
        <ToggleRow
          title="Rappels de rendez-vous"
          desc="Recevez un rappel par email avant vos rendez-vous."
          defaultChecked
        />
      </div>
    </div>
  );
}

// ============================================
// Tab 4: Sécurité
// ============================================
function SecuriteTab() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-navy-900 mb-1">
          Sécurité du compte
        </h2>
        <p className="text-sm text-navy-500">
          Protégez votre compte avec un mot de passe fort.
        </p>
      </div>

      <Field label="Mot de passe actuel" icon={Lock}>
        <input
          type={showPwd ? 'text' : 'password'}
          placeholder="••••••••"
          className="input-base pl-9"
        />
      </Field>

      <Field label="Nouveau mot de passe" icon={Lock}>
        <div className="relative">
          <input
            type={showPwd ? 'text' : 'password'}
            placeholder="••••••••"
            className="input-base pl-9 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="absolute right-3 top-1/2 -translate-y-1/2 
                       text-navy-400 hover:text-navy-700 transition"
            aria-label="Afficher"
          >
            {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </Field>

      <Field label="Confirmer le nouveau mot de passe" icon={Lock}>
        <input
          type={showPwd ? 'text' : 'password'}
          placeholder="••••••••"
          className="input-base pl-9"
        />
      </Field>

      <div className="pt-4 border-t border-navy-100">
        <h3 className="font-bold text-navy-900 text-sm mb-1">
          Authentification à deux facteurs (2FA)
        </h3>
        <p className="text-xs text-navy-500 mb-3">
          Ajoutez une couche de sécurité supplémentaire à votre compte.
        </p>
        <button className="btn-secondary text-sm">
          <Shield size={14} />
          Activer la 2FA
        </button>
      </div>

      <div className="pt-4 border-t border-navy-100">
        <h3 className="font-bold text-navy-900 text-sm mb-1">
          Sessions actives
        </h3>
        <p className="text-xs text-navy-500 mb-3">
          Vous êtes actuellement connecté sur 2 appareils.
        </p>
        <button className="text-xs text-orange-500 hover:text-orange-600 
                           font-semibold transition">
          Déconnecter toutes les autres sessions →
        </button>
      </div>
    </div>
  );
}

// ============================================
// Tab 5: Danger
// ============================================
function DangerTab() {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 
                      flex items-start gap-3">
        <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-red-700">
            Zone de danger
          </p>
          <p className="text-xs text-red-600 mt-1">
            Ces actions sont irréversibles. Soyez prudent.
          </p>
        </div>
      </div>

      {/* Désactiver compte */}
      <div className="border border-navy-100 rounded-xl p-5">
        <h3 className="font-bold text-navy-900 text-sm mb-1">
          Désactiver mon compte
        </h3>
        <p className="text-xs text-navy-500 mb-3">
          Votre compte sera masqué mais conservé. Vous pouvez le réactiver
          à tout moment en vous reconnectant.
        </p>
        <button className="text-xs font-semibold bg-navy-50 
                           hover:bg-navy-100 text-navy-700 px-3 py-2 
                           rounded-lg transition">
          Désactiver temporairement
        </button>
      </div>

      {/* Supprimer compte */}
      <div className="border border-red-200 rounded-xl p-5 bg-red-50/30">
        <h3 className="font-bold text-red-700 text-sm mb-1">
          Supprimer définitivement mon compte
        </h3>
        <p className="text-xs text-navy-500 mb-3">
          Toutes vos données (annonces, leads, factures) seront supprimées
          définitivement. Cette action est <strong>irréversible</strong>.
        </p>
        <button className="inline-flex items-center gap-2 text-xs 
                           font-semibold bg-red-500 hover:bg-red-600 
                           text-white px-3 py-2 rounded-lg transition">
          <Trash2 size={14} />
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
}

// ============================================
// Composants réutilisables
// ============================================
function Field({
  label,
  hint,
  icon: Icon,
  children,
}: {
  label: string;
  hint?: string;
  icon?: any;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 
                       text-navy-400 z-10"
          />
        )}
        {children}
      </div>
      {hint && (
        <p className="text-[10px] text-navy-400 mt-1">{hint}</p>
      )}
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  defaultChecked,
}: {
  title: string;
  desc: string;
  defaultChecked?: boolean;
}) {
  const [on, setOn] = useState(defaultChecked || false);

  return (
    <div className="flex items-start justify-between gap-4 p-4 
                    bg-navy-50/30 rounded-xl">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-navy-900 text-sm">{title}</p>
        <p className="text-xs text-navy-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className={`w-11 h-6 rounded-full transition relative shrink-0 
                    ${on ? 'bg-orange-500' : 'bg-navy-200'}`}
        aria-label={title}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white 
                      shadow-sm transition-transform ${
                        on ? 'left-5' : 'left-0.5'
                      }`}
        />
      </button>
    </div>
  );
}