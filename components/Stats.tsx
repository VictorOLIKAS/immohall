import { Users, Building2, MapPin, Star } from 'lucide-react';

const STATS = [
  { icon: Users, value: '+ 15 000', label: 'Annonces immobilières' },
  { icon: Building2, value: '+ 5 000', label: 'Professionnels partenaires' },
  { icon: MapPin, value: '100 %', label: 'Partout en France' },
  { icon: Star, value: '4,8/5', label: 'Satisfaction des utilisateurs' },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-navy-100">
      <div className="container-hall">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-orange-50 
                              flex items-center justify-center mb-3">
                <Icon size={22} className="text-orange-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-navy-900">
                {value}
              </p>
              <p className="text-sm text-navy-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}