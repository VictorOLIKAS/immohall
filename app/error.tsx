'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  Home,
  RefreshCw,
  AlertCircle,
  Mail,
  ArrowRight,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erreur ImmoHall:', error);
  }, [error]);

  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b 
                       from-orange-50/60 to-white py-16">
        <div className="container-hall">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-red-100 
                            flex items-center justify-center mb-6">
              <AlertCircle size={36} className="text-red-500" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Une erreur est survenue
            </h1>
            <p className="mt-4 text-navy-500 text-base max-w-md mx-auto">
              Nous sommes désolés, une erreur inattendue s&apos;est produite.
              Notre équipe technique a été notifiée.
            </p>

            {/* Error details (dev only) */}
            {process.env.NODE_ENV === 'development' && error.message && (
              <div className="mt-6 bg-red-50 border border-red-200 
                              rounded-xl p-4 text-left">
                <p className="text-xs font-semibold text-red-700 mb-1">
                  Détails techniques :
                </p>
                <p className="text-[11px] text-red-600 font-mono 
                              break-all">
                  {error.message}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 
                            justify-center">
              <button
                onClick={reset}
                className="btn-primary text-sm justify-center"
              >
                <RefreshCw size={16} />
                Réessayer
              </button>
              <Link
                href="/"
                className="btn-secondary text-sm justify-center"
              >
                <Home size={16} />
                Retour à l&apos;accueil
              </Link>
            </div>

            {/* Support */}
            <div className="mt-12 bg-white border border-navy-100 
                            rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-orange-50 
                                flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-orange-500" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 text-sm">
                    Le problème persiste ?
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">
                    Contactez notre support technique.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-orange-500 
                               hover:text-orange-600 font-semibold text-xs 
                               mt-3 transition"
                  >
                    Contacter le support
                    <ArrowRight size={12} />
                  </Link>
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