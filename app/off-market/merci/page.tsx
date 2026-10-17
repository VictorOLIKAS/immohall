import Link from 'next/link';
import {
  CheckCircle2,
  Mail,
  Clock,
  Lock,
  ArrowRight,
  Home,
} from 'lucide-react';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OffMarketMerciPage() {
  return (
    <>
      <TopBar />
      <Header />

      <main className="offmarket-merci-page">
        <div className="container-hall">
          <div className="offmarket-merci-card">
            {/* Icon */}
            <div className="offmarket-merci-icon">
              <CheckCircle2 size={40} />
            </div>

            {/* Title */}
            <h1 className="offmarket-merci-title">
              Demande reçue !
            </h1>

            {/* Description */}
            <p className="offmarket-merci-desc">
              Merci pour votre demande d&apos;accès aux biens Off-Market.
              Notre équipe va étudier votre projet et vous recontactera
              <strong> sous 48h ouvrées</strong>.
            </p>

            {/* Next steps */}
            <div className="offmarket-merci-steps">
              <h2 className="offmarket-merci-steps-title">
                Prochaines étapes
              </h2>

              <div className="offmarket-merci-step">
                <div className="offmarket-merci-step-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="offmarket-merci-step-title">
                    1. Vérifiez votre boîte mail
                  </p>
                  <p className="offmarket-merci-step-desc">
                    Un email de confirmation vient de vous être envoyé.
                  </p>
                </div>
              </div>

              <div className="offmarket-merci-step">
                <div className="offmarket-merci-step-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="offmarket-merci-step-title">
                    2. Attendez notre appel
                  </p>
                  <p className="offmarket-merci-step-desc">
                    Un conseiller vous contactera sous 48h pour qualifier
                    votre projet.
                  </p>
                </div>
              </div>

              <div className="offmarket-merci-step">
                <div className="offmarket-merci-step-icon">
                  <Lock size={18} />
                </div>
                <div>
                  <p className="offmarket-merci-step-title">
                    3. Accédez aux biens
                  </p>
                  <p className="offmarket-merci-step-desc">
                    Après validation, vous recevrez une sélection personnalisée
                    de biens Off-Market.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="offmarket-merci-actions">
              <Link href="/" className="offmarket-merci-btn-secondary">
                <Home size={16} />
                Retour à l&apos;accueil
              </Link>
              <Link href="/recherche" className="offmarket-merci-btn-primary">
                Voir les annonces publiques
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Contact */}
            <p className="offmarket-merci-contact">
              Une question ?{' '}
              <Link href="/contact" className="offmarket-link">
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}