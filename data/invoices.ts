export type InvoiceStatus = 'paid' | 'pending' | 'failed';

export type Invoice = {
  id: string;
  date: string;
  amount: number;
  description: string;
  status: InvoiceStatus;
  type: 'subscription' | 'lead';
};

export const INVOICES: Invoice[] = [
  {
    id: 'INV-2026-042',
    date: '2026-10-01',
    amount: 99,
    description: 'Abonnement Pro - Octobre 2026',
    status: 'paid',
    type: 'subscription',
  },
  {
    id: 'INV-2026-038',
    date: '2026-09-28',
    amount: 39,
    description: 'Lead commercial - Fonds de commerce boulangerie',
    status: 'paid',
    type: 'lead',
  },
  {
    id: 'INV-2026-035',
    date: '2026-09-20',
    amount: 19,
    description: 'Lead résidentiel - Appartement 4 pièces Lyon',
    status: 'paid',
    type: 'lead',
  },
  {
    id: 'INV-2026-031',
    date: '2026-09-01',
    amount: 99,
    description: 'Abonnement Pro - Septembre 2026',
    status: 'paid',
    type: 'subscription',
  },
  {
    id: 'INV-2026-028',
    date: '2026-08-15',
    amount: 39,
    description: 'Lead commercial - Local Toulouse',
    status: 'paid',
    type: 'lead',
  },
  {
    id: 'INV-2026-025',
    date: '2026-08-01',
    amount: 99,
    description: 'Abonnement Pro - Août 2026',
    status: 'paid',
    type: 'subscription',
  },
];

export function getBillingStats() {
  const total = INVOICES.filter((i) => i.status === 'paid').reduce(
    (sum, i) => sum + i.amount,
    0
  );
  const thisMonth = INVOICES.filter(
    (i) => i.date.startsWith('2026-10') && i.status === 'paid'
  ).reduce((sum, i) => sum + i.amount, 0);
  const leadsTotal = INVOICES.filter(
    (i) => i.type === 'lead' && i.status === 'paid'
  ).reduce((sum, i) => sum + i.amount, 0);

  return { total, thisMonth, leadsTotal, invoiceCount: INVOICES.length };
}