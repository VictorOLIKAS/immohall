export type PostCategory =
  | 'residentiel'
  | 'professionnel'
  | 'investissement'
  | 'conseils'
  | 'marche';

export type Post = {
  id: number;
  slug: string;
  category: PostCategory;
  categoryLabel: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: {
    name: string;
    role: string;
    initials: string;
    color: string;
  };
  readTime: number;
  publishedAt: string;
  publishedAtLabel: string;
};

export const POSTS: Post[] = [
  {
    id: 1,
    slug: 'acheter-appartement-france-etapes',
    category: 'residentiel',
    categoryLabel: 'Résidentiel',
    title: 'Acheter un appartement en France : les étapes essentielles',
    excerpt:
      "Découvrez les principales étapes à connaître avant l'achat d'un logement, de la recherche à la signature chez le notaire.",
    content: [
      "L'achat d'un appartement est un projet de vie majeur qui mérite une préparation rigoureuse. De la définition de votre budget à la remise des clés, chaque étape compte pour éviter les mauvaises surprises.",
      "## 1. Définir son budget",
      "Avant toute chose, calculez précisément votre capacité d'emprunt. Règle générale : votre mensualité ne doit pas dépasser 35% de vos revenus nets. N'oubliez pas d'intégrer les frais annexes : frais de notaire (7-8% dans l'ancien), frais d'agence, et éventuels travaux.",
      "## 2. Obtenir son accord de prêt",
      "Une pré-approbation bancaire vous donne une crédibilité auprès des vendeurs. Elle vous permet aussi de connaître précisément le montant que vous pouvez emprunter et de négocier en position de force.",
      "## 3. Rechercher le bien idéal",
      "Utilisez les plateformes comme ImmoHall pour cibler votre recherche. Définissez vos critères par ordre de priorité : localisation, surface, nombre de pièces, étage, exposition.",
      "## 4. Visiter et analyser",
      "Ne vous contentez pas d'une visite rapide. Vérifiez l'état général, la copropriété (charges, travaux votés), le DPE, et l'environnement (bruit, transports, commerces).",
      "## 5. Faire une offre",
      "Après avoir comparé avec les biens similaires du quartier, faites une offre argumentée. Un bon agent immobilier vous aidera à trouver le juste prix.",
      "## 6. Signature du compromis",
      "Chez le notaire, vous signez le compromis de vente (ou promesse synallagmatique). Vous avez alors 10 jours de rétractation pour changer d'avis.",
      "## 7. Obtention du prêt définitif",
      "Votre banque dispose de 45 à 60 jours pour vous accorder le prêt définitif. Si elle refuse, vous récupérez votre dépôt de garantie.",
      "## 8. Signature définitive",
      "Chez le notaire, vous signez l'acte authentique et récupérez les clés. Félicitations, vous êtes propriétaire !",
    ],
    image: '/images/blog-1.jpg',
    author: {
      name: 'Julie Goud',
      role: 'Co-fondatrice',
      initials: 'JG',
      color: 'bg-navy-700',
    },
    readTime: 8,
    publishedAt: '2026-09-28',
    publishedAtLabel: 'Il y a 6 jours',
  },
  {
    id: 2,
    slug: 'fonds-commerce-verifier',
    category: 'professionnel',
    categoryLabel: 'Immobilier professionnel',
    title: 'Fonds de commerce : quels éléments vérifier ?',
    excerpt:
      "Les principaux critères à analyser avant d'acquérir un fonds de commerce, du bail commercial au chiffre d'affaires.",
    content: [
      "L'acquisition d'un fonds de commerce est une opération complexe qui nécessite une analyse approfondie. Voici les éléments à vérifier impérativement.",
      "## 1. Le bail commercial",
      "C'est le document le plus important. Vérifiez la durée restante (3-6-9 ans), les conditions de renouvellement, la possibilité de céder le bail, les charges et les clauses restrictives.",
      "## 2. Le chiffre d'affaires",
      "Demandez les 3 derniers exercices comptables. Vérifiez la cohérence avec les déclarations fiscales. Une comptabilité saine est essentielle.",
      "## 3. La clientèle",
      "Évaluez la fidélité, la saisonnalité, la dépendance à quelques gros clients. La clientèle est l'actif principal d'un fonds de commerce.",
      "## 4. Le matériel et les équipements",
      "Dressez un inventaire précis. Vérifiez l'état, la valeur résiduelle, et l'absence de matériel loué ou en leasing.",
      "## 5. Les contrats en cours",
      "Fournisseurs, assurances, abonnements, logiciels. Certains contrats ne sont pas transférables au repreneur.",
      "## 6. Les salariés",
      "Le transfert du contrat de travail est automatique. Analysez les contrats, les anciennetés, les salaires, et les éventuels contentieux.",
      "## 7. L'emplacement",
      "C'est le facteur n°1 de réussite commerciale. Étudiez le flux piéton, la visibilité, la concurrence, et les projets d'urbanisme.",
      "Faites toujours appel à un expert-comptable et un avocat spécialisé pour vous accompagner.",
    ],
    image: '/images/blog-2.jpg',
    author: {
      name: 'Omar Messaoudi',
      role: 'Fondateur & CEO',
      initials: 'OM',
      color: 'bg-orange-500',
    },
    readTime: 6,
    publishedAt: '2026-09-25',
    publishedAtLabel: 'Il y a 9 jours',
  },
  {
    id: 3,
    slug: 'analyser-investissement-immobilier',
    category: 'investissement',
    categoryLabel: 'Investissement',
    title: 'Comment analyser un investissement immobilier ?',
    excerpt:
      'Emplacement, prix, surface, rendement et potentiel du bien : les clés pour réussir son investissement locatif.',
    content: [
      "L'investissement immobilier est un excellent moyen de se constituer un patrimoine et de générer des revenus complémentaires. Encore faut-il bien analyser le projet.",
      "## 1. Calculer le rendement brut",
      "Rendement brut = (Loyer annuel / Prix d'achat) × 100. Un bon rendement brut se situe entre 6% et 10% selon la zone.",
      "## 2. Calculer le rendement net",
      "Rendement net = ((Loyer - Charges - Taxe foncière - Assurance) / Coût total) × 100. Le coût total inclut le prix d'achat + frais de notaire + travaux.",
      "## 3. Analyser l'emplacement",
      "C'est le facteur déterminant. Vérifiez la demande locative, les transports, les commerces, les écoles. Un bon emplacement garantit une faible vacance.",
      "## 4. Évaluer les charges",
      "Copropriété, taxe foncière, assurance PNO, gestion locative (6-8% des loyers), provisions pour travaux. Elles peuvent réduire significativement le rendement net.",
      "## 5. La fiscalité",
      "Plusieurs régimes existent : micro-foncier, réel, LMNP, Pinel. Chacun a ses avantages. Consultez un expert-comptable pour choisir le plus adapté.",
      "## 6. Le potentiel de revalorisation",
      "Travaux, changement d'usage, division d'un grand appartement. Un bien avec potentiel permet d'augmenter significativement la valeur à la revente.",
      "Investir demande patience et méthode. Les meilleures opportunités sont souvent celles qui demandent un peu de travail.",
    ],
    image: '/images/blog-3.jpg',
    author: {
      name: "L'Enseigne Immo",
      role: 'Team partenaire',
      initials: 'TE',
      color: 'bg-purple-600',
    },
    readTime: 7,
    publishedAt: '2026-09-20',
    publishedAtLabel: 'Il y a 14 jours',
  },
  {
    id: 4,
    slug: 'vendre-bien-au-meilleur-prix',
    category: 'conseils',
    categoryLabel: 'Conseils',
    title: 'Comment vendre son bien au meilleur prix ?',
    excerpt:
      'Estimation, mise en valeur, photos professionnelles : les secrets pour maximiser la vente de votre bien.',
    content: [
      "Vendre au meilleur prix demande de la préparation. Voici les conseils de nos experts.",
      "## 1. Faire estimer son bien",
      "Une estimation professionnelle par un agent immobilier local est essentielle. Évitez les estimations en ligne, trop imprécises. L'estimation doit se baser sur les transactions réelles du quartier.",
      "## 2. Mettre en valeur le bien",
      "Home staging, désencombrement, petites rénovations, décoration neutre. Un bien bien présenté se vend plus vite et plus cher.",
      "## 3. Photos professionnelles",
      "C'est votre vitrine. Investissez dans un photographe spécialisé en immobilier. Les photos amateur font perdre 15 à 20% de visibilité.",
      "## 4. Rédiger une annonce efficace",
      "Mettez en avant les points forts, décrivez l'environnement, soyez honnête sur les points faibles. Les acheteurs apprécient la transparence.",
      "## 5. Choisir le bon canal de diffusion",
      "Multipliez les plateformes : ImmoHall, réseaux sociaux, agences locales. Plus votre bien est visible, plus vous aurez d'offres.",
      "## 6. Négocier intelligemment",
      "Toute offre mérite une réponse. Ne rejetez pas en bloc une offre basse : elle peut être le début d'une négociation.",
    ],
    image: '/images/hero-property.jpg',
    author: {
      name: 'Julie Goud',
      role: 'Co-fondatrice',
      initials: 'JG',
      color: 'bg-navy-700',
    },
    readTime: 5,
    publishedAt: '2026-09-15',
    publishedAtLabel: 'Il y a 19 jours',
  },
  {
    id: 5,
    slug: 'marche-immobilier-2026',
    category: 'marche',
    categoryLabel: 'Marché',
    title: 'Marché immobilier 2026 : tendances et perspectives',
    excerpt:
      "Analyse des tendances actuelles du marché immobilier français et perspectives pour l'année à venir.",
    content: [
      "Le marché immobilier français connaît une transformation profonde. Tour d'horizon des grandes tendances.",
      "## 1. Stabilisation des prix",
      "Après plusieurs années de hausse, les prix se stabilisent dans la plupart des grandes villes. Certaines zones connaissent même une légère correction.",
      "## 2. Baisse des taux",
      "La BCE a entamé une baisse progressive des taux directeurs. Résultat : les taux de crédit immobilier repassent sous les 3%, redonnant du pouvoir d'achat aux acquéreurs.",
      "## 3. Reprise de la demande",
      "Cette baisse des taux relance la demande, particulièrement pour les primo-accédants et les investisseurs locatifs.",
      "## 4. Focus sur la rénovation",
      "Les biens à rénover séduisent de plus en plus. Les acheteurs cherchent à personnaliser leur futur logement et à réaliser des économies d'énergie.",
      "## 5. Essor du télétravail",
      "La généralisation du télétravail modifie les critères de choix : une pièce supplémentaire, un extérieur, une ville moyenne... Le marché s'adapte.",
      "## 6. Immobilier professionnel",
      "Les bureaux connaissent une mutation. Les espaces flexibles, les locaux mixtes, et les commerces de proximité ont le vent en poupe.",
      "Globalement, 2026 s'annonce comme une année favorable pour les projets immobiliers bien préparés.",
    ],
    image: '/images/cat-residentiel.jpg',
    author: {
      name: 'Omar Messaoudi',
      role: 'Fondateur & CEO',
      initials: 'OM',
      color: 'bg-orange-500',
    },
    readTime: 6,
    publishedAt: '2026-09-10',
    publishedAtLabel: 'Il y a 24 jours',
  },
  {
    id: 6,
    slug: 'bail-commercial-guide',
    category: 'professionnel',
    categoryLabel: 'Immobilier professionnel',
    title: 'Bail commercial : guide complet du locataire',
    excerpt:
      'Tout ce que vous devez savoir sur le bail commercial : durée, renouvellement, cession, charges et résiliation.',
    content: [
      "Le bail commercial est un contrat complexe. Voici les éléments essentiels à maîtriser.",
      "## 1. Les types de bail",
      "Bail 3-6-9 (le plus courant), bail dérogatoire (courte durée), bail précaire. Chacun a ses spécificités.",
      "## 2. La durée",
      "Le bail 3-6-9 se renouvelle par périodes de 3 ans. Le locataire peut quitter à chaque échéance triennale. Le propriétaire, lui, doit attendre 9 ans sauf clause contraire.",
      "## 3. Le loyer et ses révisions",
      "Révision annuelle (ILC ou ILAT), indexation, déplafonnement en cas de renouvellement. Anticipez les augmentations.",
      "## 4. Le dépôt de garantie",
      "Généralement 3 mois de loyer HT. Négociable. Il est restitué à la fin du bail, sous réserve de l'état des lieux.",
      "## 5. Les charges",
      "Charges locatives (entretien, réparations courantes), charges de copropriété. Le bail précise la répartition.",
      "## 6. La cession",
      "Le locataire peut céder son bail au repreneur du fonds de commerce. Le propriétaire doit être informé et peut s'y opposer dans certains cas.",
      "## 7. Le renouvellement",
      "À l'expiration du bail, le locataire a droit au renouvellement (propriété commerciale), sauf motif grave. Le propriétaire peut refuser mais doit indemniser.",
      "Maîtriser son bail commercial, c'est protéger son activité. Faites-vous accompagner par un avocat spécialisé.",
    ],
    image: '/images/cat-bureaux.jpg',
    author: {
      name: "L'Enseigne Immo",
      role: 'Team partenaire',
      initials: 'TE',
      color: 'bg-purple-600',
    },
    readTime: 9,
    publishedAt: '2026-09-05',
    publishedAtLabel: 'Il y a 29 jours',
  },
];

export const CATEGORIES = [
  { key: 'all', label: 'Tous les articles' },
  { key: 'residentiel', label: 'Résidentiel' },
  { key: 'professionnel', label: 'Immobilier professionnel' },
  { key: 'investissement', label: 'Investissement' },
  { key: 'conseils', label: 'Conseils' },
  { key: 'marche', label: 'Marché' },
] as const;

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getSimilarPosts(
  currentId: number,
  category: PostCategory,
  limit = 3
): Post[] {
  const sameCategory = POSTS.filter(
    (p) => p.id !== currentId && p.category === category
  );
  const others = POSTS.filter(
    (p) => p.id !== currentId && p.category !== category
  );
  return [...sameCategory, ...others].slice(0, limit);
}