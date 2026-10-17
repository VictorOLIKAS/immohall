'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DEMO_ACCOUNTS = [
  {
    role: 'Agent Pro',
    email: 'pro@immohall.com',
    password: 'demo123',
    color: 'bg-orange-500',
  },
  {
    role: 'Client',
    email: 'client@immohall.com',
    password: 'demo123',
    color: 'bg-navy-700',
  },
];

export default function ConnexionPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulation d'authentification
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Redirection après 1.5s
      setTimeout(() => {
        // Si c'est un compte pro → dashboard
        if (email.includes('pro')) {
          router.push('/espace-pro/dashboard');
        } else {
          router.push('/');
        }
      }, 1500);
    }, 800);
  };

  const fillDemo = (demo: typeof DEMO_ACCOUNTS[0]) => {
    setEmail(demo.email);
    setPassword(demo.password);
  };

  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-orange-50/60 to-white py-12">
        <div className="container-hall">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Colonne gauche: Illustration */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 
                              rounded-3xl p-10 text-white h-full min-h-[500px] 
                              flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold leading-tight">
                    Bienvenue sur{' '}
                    <span className="text-orange-400">ImmoHall</span>
                  </h2>
                  <p className="mt-4 text-white/70 text-sm leading-relaxed">
                    Votre espace professionnel pour gérer vos annonces,
                    suivre vos leads et développer votre activité.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    'Gérez vos annonces en un clic',
                    'Recevez vos leads en temps réel',
                    'Statistiques détaillées',
                    'Support dédié 24/7',
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 
                                      flex items-center justify-center shrink-0">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-sm text-white/90">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-white/50">
                    Vous n&apos;avez pas encore de compte ?
                  </p>
                  <Link
                    href="/inscription"
                    className="mt-2 inline-flex items-center gap-2 text-orange-400 
                               hover:text-orange-300 font-semibold text-sm transition"
                  >
                    Créer un compte gratuitement
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Colonne droite: Formulaire */}
            <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8">
              <div className="text-center lg:text-left mb-6">
                <h1 className="text-2xl font-bold text-navy-900">
                  Bon retour !
                </h1>
                <p className="mt-2 text-sm text-navy-500">
                  Connectez-vous à votre compte ImmoHall.
                </p>
              </div>

              {success && (
                <div className="mb-4 bg-green-50 border border-green-200 
                                rounded-lg p-3 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <p className="text-sm font-medium text-green-700">
                    Connexion réussie ! Redirection...
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
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
                                 focus:ring-orange-400 focus:border-orange-300"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-navy-700">
                      Mot de passe
                    </label>
                    <Link
                      href="/mot-de-passe-oublie"
                      className="text-xs text-orange-500 hover:text-orange-600 
                                 font-medium transition"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
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
                                 focus:ring-orange-400 focus:border-orange-300"
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
                </div>

                {/* Remember me */}
                <label className="flex items-center gap-2 text-sm text-navy-600 
                                  cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-navy-200 text-orange-500 
                               focus:ring-orange-400"
                  />
                  Se souvenir de moi
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || success}
                  className="btn-primary w-full justify-center text-sm 
                             disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Connexion en cours...'
                  ) : success ? (
                    '✓ Connecté'
                  ) : (
                    <>
                      Se connecter
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>

              {/* Demo accounts */}
              <div className="mt-6 pt-6 border-t border-navy-100">
                <p className="text-[11px] text-navy-400 text-center mb-3 
                              uppercase tracking-wider font-semibold">
                  Comptes de démonstration
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {DEMO_ACCOUNTS.map((demo) => (
                    <button
                      key={demo.role}
                      type="button"
                      onClick={() => fillDemo(demo)}
                      className="text-xs py-2 px-3 rounded-lg bg-navy-50 
                                 hover:bg-navy-100 text-navy-700 font-medium 
                                 transition"
                    >
                      <span className={`inline-block w-2 h-2 rounded-full 
                                       ${demo.color} mr-1.5`} />
                      {demo.role}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-navy-400 text-center mt-3">
                  Cliquez pour pré-remplir les identifiants.
                </p>
              </div>

              {/* Sign up link (mobile) */}
              <div className="lg:hidden mt-6 text-center text-sm">
                <span className="text-navy-500">Pas de compte ? </span>
                <Link
                  href="/inscription"
                  className="text-orange-500 font-semibold hover:text-orange-600"
                >
                  S&apos;inscrire
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