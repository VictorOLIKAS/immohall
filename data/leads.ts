export type LeadStatus = 'new' | 'unlocked' | 'locked' | 'paid';

export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  listingSlug: string;
  listingTitle: string;
  listingType: string;
  createdAtLabel: string;
  status: LeadStatus;
  isTeam?: boolean;
  price?: number;
  budget?: string;
};

export const LEADS: Lead[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    email: 'marie.dubois@email.com',
    phone: '06 12 34 56 78',
    message: "Bonjour, je suis très intéressée par cet appartement. Pourrais-je visiter cette semaine ?",
    listingSlug: 'appartement-4p-lyon-6',
    listingTitle: 'Appartement 4 pièces lumineux',
    listingType: 'Appartement · Vente',
    createdAtLabel: 'Il y a 3 h',
    status: 'unlocked',
    isTeam: true,
    budget: '480 000 €',
  },
  {
    id: 2,
    name: 'Pierre Martin',
    email: 'p.martin@entreprise.fr',
    phone: '06 98 76 54 32',
    message: "Nous cherchons un plateau de bureaux pour notre équipe. Disponible pour une visite ?",
    listingSlug: 'plateau-bureaux-bordeaux',
    listingTitle: 'Plateau de bureaux 180 m²',
    listingType: 'Bureaux · Vente',
    createdAtLabel: 'Il y a 20 h',
    status: 'unlocked',
    isTeam: true,
    budget: '600 000 €',
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    email: 'sophie.b@email.com',
    phone: '06 55 44 33 22',
    message: "Bonjour, je souhaite débloquer les coordonnées de ce prospect.",
    listingSlug: 'fonds-commerce-marseille',
    listingTitle: 'Fonds de commerce boulangerie',
    listingType: 'Commerce · Fonds',
    createdAtLabel: 'Il y a 1 j',
    status: 'locked',
    price: 39,
  },
  {
    id: 4,
    name: 'Ahmed El Amrani',
    email: 'ahmed.elamrani@email.com',
    phone: '06 22 33 44 55',
    message: "Intéressé par la villa. Le prix est-il négociable ?",
    listingSlug: 'maison-piscine-ain',
    listingTitle: 'Villa contemporaine avec piscine',
    listingType: 'Maison · Vente',
    createdAtLabel: 'Il y a 2 j',
    status: 'paid',
    price: 19,
    budget: '850 000 €',
  },
  {
    id: 5,
    name: 'Isabelle Rousseau',
    email: 'i.rousseau@email.com',
    phone: '06 77 88 99 00',
    message: "Bonjour, je cherche un appartement 2 pièces dans le 11e. Toujours disponible ?",
    listingSlug: 'appartement-2p-paris-11',
    listingTitle: 'Appartement 2 pièces rénové',
    listingType: 'Appartement · Vente',
    createdAtLabel: 'Il y a 5 h',
    status: 'unlocked',
    isTeam: true,
    budget: '430 000 €',
  },
];

export function getDashboardStats() {
  const total = LEADS.length;
  const unlockedLeads = LEADS.filter(
    (l) => l.status === 'unlocked' || l.status === 'paid'
  ).length;
  const revenue = LEADS.filter(
    (l) => l.price && l.status === 'paid'
  ).reduce((sum, l) => sum + (l.price || 0), 0);

  return {
    totalLeads: total,
    unlockedLeads,
    revenue,
    conversionRate: 62,
    activeListings: 12,
  };
}