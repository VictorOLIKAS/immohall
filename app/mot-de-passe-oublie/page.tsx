'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
  Send,
  ShieldCheck,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b 
                       from-orange-50/60 to-white py-12">
        <div className="container-hall">
          <div className="max-w-md mx-auto">
            {/* Back link */}
            <Link
              href="/connexion"
              className="inline-flex items-center gap-1 text-sm 
                         text-navy-500 hover:text-orange-500 transition 
                         mb-6"
            >
              <ArrowLeft size={14} />
              Retour à la connexion
            </Link>

            <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8">
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 mx-auto rounded-2xl 
                                    bg-orange-100 flex items-center 
                                    justify-center mb-4">
                      <Lock size={24} className="text-orange-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-navy-900">
                      Mot de passe oublié ?
                    </h1>
                    <p className="mt-2 text-sm text-navy-500">
                      Entrez votre adresse e-mail et nous vous enverrons un
                      lien pour réinitialiser votre mot de passe.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold 
                                        text-navy-700 mb-2">
                        Adresse e-mail
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3 top-1/2 
                                     -translate-y-1/2 text-navy-400"
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

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-sm 
                                 disabled:opacity-70"
                    >
                      {loading ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          <Send size={14} />
                          Envoyer le lien
                        </>
                      )}
                    </button>
                  </form>

                  {/* Info box */}
                  <div className="mt-6 bg-navy-50/50 rounded-xl p-4 
                                  flex items-start gap-3">
                    <ShieldCheck
                      size={16}
                      className="text-orange-500 shrink-0 mt-0.5"
                    />
                    <p className="text-[11px] text-navy-500 leading-relaxed">
                      Pour des raisons de sécurité, nous ne confirmons pas si
                      l&apos;adresse e-mail est bien enregistrée sur notre
                      site.
                    </p>
                  </div>

                  {/* Sign up link */}
                  <p className="mt-6 text-center text-sm text-navy-500">
                    Pas encore de compte ?{' '}
                    <Link
                      href="/inscription"
                      className="text-orange-500 font-semibold 
                                 hover:text-orange-600"
                    >
                      S&apos;inscrire
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  {/* Success */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full 
                                    bg-green-100 flex items-center 
                                    justify-center mb-4">
                      <Check size={28} className="text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-navy-900">
                      Email envoyé !
                    </h1>
                    <p className="mt-2 text-sm text-navy-500">
                      Si l&apos;adresse{' '}
                      <strong className="text-navy-900">{email}</strong>{' '}
                      est associée à un compte ImmoHall, vous recevrez
                      un e-mail avec les instructions.
                    </p>

                    <div className="mt-6 bg-navy-50/50 rounded-xl p-4 
                                    text-left space-y-2">
                      <p className="text-xs font-semibold text-navy-700">
                        📬 Que faire ensuite ?
                      </p>
                      <ol className="text-[11px] text-navy-500 space-y-1.5 
                                      list-decimal list-inside">
                        <li>Vérifiez votre boîte de réception</li>
                        <li>Regardez également vos spams</li>
                        <li>
                          Cliquez sur le lien reçu (valable 1 heure)
                        </li>
                        <li>Créez un nouveau mot de passe sécurisé</li>
                      </ol>
                    </div>

                    <div className="mt-6 space-y-2">
                      <Link
                        href="/connexion"
                        className="btn-primary w-full justify-center 
                                   text-sm"
                      >
                        Retour à la connexion
                        <ArrowRight size={14} />
                      </Link>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setEmail('');
                        }}
                        className="w-full text-xs text-navy-500 
                                   hover:text-orange-500 transition py-2"
                      >
                        Renvoyer l&apos;e-mail avec une autre adresse
                      </button>
                    </div>

                    {/* Contact support */}
                    <div className="mt-6 pt-6 border-t border-navy-100">
                      <p className="text-[11px] text-navy-400">
                        Toujours rien reçu ?{' '}
                        <Link
                          href="/contact"
                          className="text-orange-500 underline"
                        >
                          Contactez le support
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Help section */}
            <div className="mt-6 text-center">
              <p className="text-xs text-navy-400">
                Besoin d&apos;aide supplémentaire ?{' '}
                <Link
                  href="/contact"
                  className="text-orange-500 hover:text-orange-600 
                             underline"
                >
                  Notre équipe
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}