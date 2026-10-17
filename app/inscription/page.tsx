'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
  Building2,
  UserCircle,
  Check,
  X,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type AccountType = 'particulier' | 'professionnel';

export default function InscriptionPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<AccountType>('professionnel');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptCGU, setAcceptCGU] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Validation de mot de passe
  const passwordChecks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const passwordStrength = Object.values(passwordChecks).filter(Boolean).length;

  const validate = (): string[] => {
    const errs: string[] = [];
    if (!fullName.trim()) errs.push('Le nom complet est requis');
    if (!email.includes('@')) errs.push('Email invalide');
    if (passwordStrength < 3) errs.push('Le mot de passe est trop faible');
    if (password !== confirmPassword) errs.push('Les mots de passe ne correspondent pas');
    if (!acceptCGU) errs.push('Vous devez accepter les CGU');
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (errs.length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push(
          accountType === 'professionnel'
            ? '/espace-pro/dashboard'
            : '/'
        );
      }, 1500);
    }, 800);
  };

  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-orange-50/60 to-white py-12">
        <div className="container-hall">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            {/* Colonne gauche: Illustration */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 
                              rounded-3xl p-10 text-white sticky top-24">
                <h2 className="text-3xl font-bold leading-tight">
                  Rejoignez{' '}
                  <span className="text-orange-400">ImmoHall</span>
                </h2>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  Créez votre compte gratuitement en moins de 2 minutes et
                  commencez à publier vos annonces.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: 'Publication gratuite',
                      desc: 'Déposez vos annonces sans engagement.',
                    },
                    {
                      title: 'Leads qualifiés',
                      desc: 'Recevez des prospects sérieux.',
                    },
                    {
                      title: 'Statistiques',
                      desc: 'Suivez vos performances.',
                    },
                  ].map((f) => (
                    <div key={f.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500 
                                      flex items-center justify-center shrink-0">
                        <Check size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{f.title}</p>
                        <p className="text-xs text-white/60 mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs text-white/50">
                    Vous avez déjà un compte ?
                  </p>
                  <Link
                    href="/connexion"
                    className="mt-2 inline-flex items-center gap-2 text-orange-400 
                               hover:text-orange-300 font-semibold text-sm transition"
                  >
                    Se connecter
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Colonne droite: Formulaire */}
            <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-navy-900">
                  Créer un compte
                </h1>
                <p className="mt-2 text-sm text-navy-500">
                  Rejoignez ImmoHall en quelques étapes.
                </p>
              </div>

              {success && (
                <div className="mb-4 bg-green-50 border border-green-200 
                                rounded-lg p-3 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <p className="text-sm font-medium text-green-700">
                    Compte créé ! Redirection...
                  </p>
                </div>
              )}

              {errors.length > 0 && (
                <div className="mb-4 bg-red-50 border border-red-200 
                                rounded-lg p-3">
                  <p className="text-xs font-semibold text-red-700 mb-1">
                    Veuillez corriger :
                  </p>
                  <ul className="text-xs text-red-600 space-y-0.5">
                    {errors.map((err) => (
                      <li key={err}>• {err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Type de compte */}
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2">
                    Je suis...
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setAccountType('particulier')}
                      className={`flex items-center gap-2 p-3 rounded-lg border-2 
                                  transition text-left ${
                                    accountType === 'particulier'
                                      ? 'border-orange-500 bg-orange-50'
                                      : 'border-navy-100 hover:border-navy-200'
                                  }`}
                    >
                      <UserCircle
                        size={18}
                        className={
                          accountType === 'particulier'
                            ? 'text-orange-500'
                            : 'text-navy-400'
                        }
                      />
                      <div>
                        <p className="font-semibold text-navy-900 text-xs">
                          Particulier
                        </p>
                        <p className="text-[10px] text-navy-400">
                          Recherche / Vente
                        </p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccountType('professionnel')}
                      className={`flex items-center gap-2 p-3 rounded-lg border-2 
                                  transition text-left ${
                                    accountType === 'professionnel'
                                      ? 'border-orange-500 bg-orange-50'
                                      : 'border-navy-100 hover:border-navy-200'
                                  }`}
                    >
                      <Building2
                        size={18}
                        className={
                          accountType === 'professionnel'
                            ? 'text-orange-500'
                            : 'text-navy-400'
                        }
                      />
                      <div>
                        <p className="font-semibold text-navy-900 text-xs">
                          Professionnel
                        </p>
                        <p className="text-[10px] text-navy-400">
                          Agence / Agent
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Nom */}
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
                    />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jean Dupont"
                      required
                      className="w-full pl-10 pr-3 py-3 rounded-lg border 
                                 border-navy-100 text-sm 
                                 focus:outline-none focus:ring-2 
                                 focus:ring-orange-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2">
                    Adresse e-mail
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="w-full pl-10 pr-3 py-3 rounded-lg border 
                                 border-navy-100 text-sm 
                                 focus:outline-none focus:ring-2 
                                 focus:ring-orange-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-10 py-3 rounded-lg border 
                                 border-navy-100 text-sm 
                                 focus:outline-none focus:ring-2 
                                 focus:ring-orange-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 
                                 text-navy-400 hover:text-navy-700 transition"
                      aria-label={showPassword ? 'Masquer' : 'Afficher'}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {/* Force du mot de passe */}
                  {password && (
                    <div className="mt-2">
                      <div className="flex gap-1 mb-2">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition ${
                              i < passwordStrength
                                ? passwordStrength <= 2
                                  ? 'bg-red-400'
                                  : passwordStrength === 3
                                  ? 'bg-orange-400'
                                  : 'bg-green-500'
                                : 'bg-navy-100'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[10px]">
                        <CheckItem ok={passwordChecks.length} label="8 caractères" />
                        <CheckItem ok={passwordChecks.upper} label="1 majuscule" />
                        <CheckItem ok={passwordChecks.lower} label="1 minuscule" />
                        <CheckItem ok={passwordChecks.number} label="1 chiffre" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-semibold text-navy-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className={`w-full pl-10 pr-3 py-3 rounded-lg border 
                                 text-sm focus:outline-none focus:ring-2 
                                 focus:ring-orange-400 ${
                                   confirmPassword && confirmPassword !== password
                                     ? 'border-red-300'
                                     : 'border-navy-100'
                                 }`}
                    />
                    {confirmPassword && confirmPassword === password && (
                      <Check
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 
                                   text-green-500"
                      />
                    )}
                  </div>
                </div>

                {/* CGU */}
                <label className="flex items-start gap-2 text-xs text-navy-600 
                                  cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptCGU}
                    onChange={(e) => setAcceptCGU(e.target.checked)}
                    className="mt-0.5 rounded border-navy-200 text-orange-500 
                               focus:ring-orange-400"
                  />
                  <span>
                    J&apos;accepte les{' '}
                    <Link href="/cgv-cgu" className="text-orange-500 underline">
                      CGU
                    </Link>{' '}
                    et la{' '}
                    <Link
                      href="/politique-confidentialite"
                      className="text-orange-500 underline"
                    >
                      politique de confidentialité
                    </Link>
                  </span>
                </label>

                {/* Newsletter */}
                <label className="flex items-start gap-2 text-xs text-navy-600 
                                  cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-0.5 rounded border-navy-200 text-orange-500 
                               focus:ring-orange-400"
                  />
                  <span>
                    Je souhaite recevoir les actualités et conseils d&apos;ImmoHall.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || success}
                  className="btn-primary w-full justify-center text-sm 
                             disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Création en cours...'
                  ) : success ? (
                    '✓ Compte créé'
                  ) : (
                    <>
                      Créer mon compte
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>

              {/* Login link (mobile) */}
              <div className="lg:hidden mt-6 text-center text-sm">
                <span className="text-navy-500">Déjà un compte ? </span>
                <Link
                  href="/connexion"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function CheckItem({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`flex items-center gap-1 ${
        ok ? 'text-green-600' : 'text-navy-400'
      }`}
    >
      {ok ? <Check size={10} /> : <X size={10} />}
      {label}
    </span>
  );
}