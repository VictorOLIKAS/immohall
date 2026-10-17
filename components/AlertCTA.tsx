import { Mail } from 'lucide-react';

export default function AlertCTA() {
  return (
    <section className="py-10 bg-gradient-to-r from-navy-900 to-navy-700 text-white">
      <div className="container-hall">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center 
                            justify-center shrink-0">
              <Mail className="text-orange-400" size={22} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Vous ne trouvez pas encore le bien idéal ?
              </h3>
              <p className="text-white/70 mt-1 text-sm">
                Enregistrez vos critères et recevez les nouvelles opportunités correspondant à votre recherche.
              </p>
            </div>
          </div>

<form className="flex flex-col sm:flex-row gap-3">
  <input
    type="email"
    placeholder="Votre adresse e-mail"
    required
    className="flex-1 px-4 py-3 rounded-lg bg-white text-navy-900 
               placeholder:text-navy-400 
               focus:outline-none focus:ring-2 focus:ring-orange-400"
  />
  <button
    type="submit"
    className="btn-primary justify-center whitespace-nowrap"
  >
    Créer mon alerte
  </button>
</form>
        </div>
      </div>
    </section>
  );
}