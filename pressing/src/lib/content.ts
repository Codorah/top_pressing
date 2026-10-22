// ============================================================
// lib/content.ts — Source unique de vérité du contenu
// Top Pressing — Blanchisserie pro haute performance (Togo)
// ============================================================

export const SITE = {
  name: "Top Pressing",
  group: "Laundry Solutions Group",
  country: "Togo",
  city: "Lomé",
  baseline: "Blanchisserie pro haute performance.",
  heroSurtitle: "Expertise & Accompagnement",
  whatsappEnv: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "22890000000",
  footerText:
    "Top Pressing — Votre expert en blanchisserie haute performance et partenaire des porteurs de projet pressing au Togo.",
  copyright: "© 2026 Laundry Solutions Group. Tous droits réservés.",
};

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Packs", href: "#packs" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#apropos" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",
    alt: "Création de pressing professionnel",
    theme: "Création de Pressing",
  },
  {
    id: 2,
    image: "/images/hero/hero-2.jpg",
    alt: "Blanchisserie hôtelière professionnelle",
    theme: "Blanchisserie Hôtelière",
  },
  {
    id: 3,
    image: "/images/hero/hero-3.jpg",
    alt: "Machines à laver professionnelles",
    theme: "Machines & Packs",
  },
];

export const HERO_TYPEWRITER_WORDS = [
  "haute performance.",
  "clé en main.",
  "pour les hôtels.",
  "pour votre pressing.",
];

export const HERO_SUBTITLE =
  "Nous accompagnons les porteurs de projet dans la création de leur pressing, la formation de leur personnel et la fourniture d'équipements professionnels.";

export const STATS = [
  { value: 500, suffix: "+", label: "Clients satisfaits", icon: "Users" },
  { value: 10, suffix: "+", label: "Pressings créés", icon: "Building2" },
  { value: 3, suffix: "", label: "Hôtels partenaires", icon: "Hotel" },
];

export const PARTNERS = [
  {
    id: "sarakawa",
    name: "Hôtel Sarakawa",
    logo: "/images-logo-partenaires/hotel_sarakawa_lome_logo.jpg",
  },
  {
    id: "lebene",
    name: "Hôtel Lébènè",
    logo: "/images-logo-partenaires/lebene.jpg",
  },
  {
    id: "2fevrier",
    name: "Hôtel du 2 Février",
    logo: "/images-logo-partenaires/2f.png",
  },
];

export const SERVICES = [
  {
    id: "creation",
    icon: "Rocket",
    title: "Création de Pressing",
    shortDesc:
      "Accompagnement de A à Z dans le lancement de votre activité de blanchisserie.",
    fullDesc:
      "Nous prenons en charge l'intégralité de votre projet : étude de faisabilité, choix du local, sélection des équipements, aménagement, formation du personnel et suivi post-lancement. Une solution clé en main pour démarrer en toute sérénité.",
  },
  {
    id: "blanchisserie",
    icon: "Hotel",
    title: "Blanchisserie Pro",
    shortDesc:
      "Services dédiés aux grands hôtels, écoles et institutions avec une qualité maîtrisée.",
    fullDesc:
      "Nous gérons la blanchisserie de vos établissements hôteliers ou institutionnels avec rigueur et régularité. Qualité constante, délais maîtrisés, volumes adaptés à votre activité.",
  },
  {
    id: "formations",
    icon: "GraduationCap",
    title: "Formations Pratiques",
    shortDesc:
      "Programmes complets pour porteurs de projet et personnel opérationnel.",
    fullDesc:
      "Nos formations terrain couvrent : techniques de lavage, détachage, repassage vapeur, accueil client, gestion d'un pressing. Incluses dans les packs ou en option pour l'achat de matériel seul.",
  },
  {
    id: "machines",
    icon: "Waves",
    title: "Vente de Machines",
    shortDesc:
      "Machines professionnelles : laveuses, sécheuses, fers, centrales vapeur, tables.",
    fullDesc:
      "Nous commercialisons une gamme complète d'équipements professionnels de blanchisserie : machines à laver industrielles, sécheuses, fers et centrales vapeur haute précision, tables de repassage. Garantie et SAV inclus.",
  },
  {
    id: "consommables",
    icon: "Package",
    title: "Vente & Consommables",
    shortDesc:
      "Produits de blanchisserie et accessoires pour un fonctionnement sans interruption.",
    fullDesc:
      "Lessives professionnelles, détachants, produits d'entretien, emballages et accessoires. Réapprovisionnement régulier pour maintenir votre pressing en activité sans rupture de stock.",
  },
  {
    id: "commandes",
    icon: "ShoppingCart",
    title: "Commande de Marchandises",
    shortDesc:
      "Top Pressing commande les marchandises pour le compte des clients.",
    fullDesc:
      "Vous n'avez pas le temps de gérer vos approvisionnements ? Nous prenons en charge la commande et la livraison de vos marchandises professionnelles. Un service clé en main pour vous concentrer sur votre cœur de métier.",
  },
];

export const PACKS = [
  {
    id: "starter",
    name: "Starter",
    popular: false,
    features: [
      "Équipement de base (laveuse + sécheuse)",
      "Installation complète",
      "Formation de 2 jours",
      "Stock initial de démarrage",
    ],
    price: "Sur devis",
    cta: "Demander ce pack",
    service: "Pack Starter",
  },
  {
    id: "pro",
    name: "Pro",
    popular: true,
    features: [
      "Équipement complet (laveuse, sécheuse, fer, vapeur)",
      "Installation & aménagement",
      "Formation de 5 jours",
      "Stock initial premium",
      "Suivi 3 mois",
    ],
    price: "Sur devis",
    cta: "Demander ce pack",
    service: "Pack Pro",
  },
  {
    id: "premium",
    name: "Premium",
    popular: false,
    features: [
      "Équipement industriel haute gamme",
      "Aménagement & décoration",
      "Formation complète (10 jours)",
      "Stock initial + réapprovisionnement 6 mois",
      "Suivi & accompagnement 1 an",
    ],
    price: "Sur devis",
    cta: "Demander ce pack",
    service: "Pack Premium",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Étude & Budget",
    desc: "Analyse de votre zone d'implantation et définition du budget prévisionnel de votre futur pressing.",
    icon: "Search",
  },
  {
    num: "02",
    title: "Installation",
    desc: "Aménagement de l'espace et fourniture de tous les équipements professionnels (machines, tables, fers).",
    icon: "Wrench",
  },
  {
    num: "03",
    title: "Formation Staff",
    desc: "Formation pratique de votre personnel aux techniques modernes de lavage, repassage et accueil client.",
    icon: "GraduationCap",
  },
  {
    num: "04",
    title: "Lancement",
    desc: "Inauguration de votre activité avec un stock initial de produits et consommables pour démarrer sereinement.",
    icon: "Rocket",
  },
];

export const TRAINING_MODULES = [
  { icon: "Waves", label: "Techniques de lavage professionnel" },
  { icon: "Zap", label: "Détachage & traitement des tissus" },
  { icon: "Wind", label: "Repassage vapeur haute précision" },
  { icon: "Smile", label: "Accueil client & relation commerciale" },
  { icon: "BarChart2", label: "Gestion opérationnelle du pressing" },
];

export const HOTEL_ADVANTAGES = [
  {
    icon: "Star",
    title: "Qualité maîtrisée",
    desc: "Processus rigoureux pour un linge impeccable à chaque livraison.",
  },
  {
    icon: "RefreshCw",
    title: "Volumes réguliers",
    desc: "Capacité adaptée à vos besoins, jusqu'à 100 kg/jour.",
  },
  {
    icon: "Clock",
    title: "Délais tenus",
    desc: "Engagements contractuels respectés selon les volumes convenus.",
  },
];

export const REALISATIONS = [
  {
    id: "pressing-royal",
    category: "avant-apres",
    title: "Pressing Royal — Lomé",
    desc: "Transformation d'un local vide en pressing industriel complet.",
    before: "/images/realisations/pressing-royal-avant.jpg",
    after: "/images/realisations/pressing-royal-apres.jpg",
    image: "/images/realisations/pressing-royal-apres.jpg",
  },
  {
    id: "centrale-vapeur",
    category: "equipements",
    title: "Centrale Vapeur Pro",
    desc: "Installation de fers industriels haute précision.",
    image: "/images/realisations/centrale-vapeur.jpg",
  },
  {
    id: "hotel-blanchisserie",
    category: "realisations",
    title: "Hôtel — Blanchisserie interne",
    desc: "Mise en place de la blanchisserie interne (100 kg/jour).",
    image: "/images/realisations/hotel-blanchisserie.jpg",
  },
  {
    id: "pressing-etoile",
    category: "avant-apres",
    title: "Pressing Étoile",
    desc: "Optimisation de l'espace de repassage et stockage.",
    before: "/images/realisations/pressing-etoile-avant.jpg",
    after: "/images/realisations/pressing-etoile-apres.jpg",
    image: "/images/realisations/pressing-etoile-apres.jpg",
  },
];

export const PRODUCTS = [
  { id: "laveuse", icon: "Waves", name: "Machines à laver", desc: "Laveuses industrielles toutes capacités" },
  { id: "secheuse", icon: "Wind", name: "Sécheuses", desc: "Sécheuses à tambour haute performance" },
  { id: "fer", icon: "Zap", name: "Fers & Vapeur", desc: "Fers et centrales vapeur professionnels" },
  { id: "table", icon: "LayoutPanelLeft", name: "Tables de repassage", desc: "Tables ergonomiques et stables" },
  { id: "lessive", icon: "FlaskConical", name: "Lessives Pro", desc: "Produits haute performance" },
  { id: "detachant", icon: "Droplets", name: "Détachants", desc: "Gamme complète anti-taches" },
  { id: "accessoires", icon: "Package", name: "Accessoires", desc: "Tous vos consommables pressing" },
];

export const ABOUT_POINTS = [
  {
    icon: "HandshakeIcon",
    title: "Accompagnement & Solutions Clés en Main",
    desc: "De l'idée à l'ouverture, nous sommes à vos côtés à chaque étape. Étude, installation, formation, suivi : vous n'êtes jamais seul.",
  },
  {
    icon: "Globe",
    title: "Vision Future & Expansion Régionale",
    desc: "Basés à Lomé, nous développons notre réseau de partenaires pressing à travers tout le Togo et visons l'expansion régionale en Afrique de l'Ouest.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Grâce à Top Pressing, j'ai pu ouvrir mon pressing en seulement 3 semaines. L'accompagnement était exceptionnel, de l'étude du local jusqu'à la formation de mon équipe.",
    name: "Kofi Amedzro", // TODO: remplacer
    structure: "Pressing Étoile",
    city: "Lomé",
  },
  {
    id: 2,
    text: "Nos hôtels travaillent avec Top Pressing depuis 2 ans. La qualité du linge est constante et les délais toujours respectés. Un partenaire de confiance.",
    name: "Mawuena Segbefia", // TODO: remplacer
    structure: "Hôtel Lébènè",
    city: "Lomé",
  },
  {
    id: 3,
    text: "La formation reçue était très pratique et concrète. En quelques jours, mon personnel maîtrisait toutes les techniques. Je recommande vivement.",
    name: "Adjoa Dossou", // TODO: remplacer
    structure: "Pressing Royal",
    city: "Atakpamé",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Quel est le budget minimum pour lancer un pressing ?",
    a: "Cela dépend de la taille et de l'équipement souhaités. Notre Pack Starter permet de démarrer avec un investissement accessible. Devis gratuit sur simple demande.",
  },
  {
    q: "Proposez-vous la livraison des équipements à l'intérieur du pays ?",
    a: "Oui, nous livrons dans tout le Togo. Les conditions et délais sont précisés lors de l'établissement du devis.",
  },
  {
    q: "La formation du personnel est-elle obligatoire ?",
    a: "Fortement recommandée pour assurer la qualité de vos prestations. Elle est incluse dans tous nos packs. Optionnelle en cas d'achat de matériel seul.",
  },
  {
    q: "Quels sont vos délais pour la blanchisserie hôtelière ?",
    a: "Les délais sont adaptés au volume convenu avec chaque établissement et formalisés dans le contrat de prestation.",
  },
  {
    q: "Fournissez-vous les produits de nettoyage après le lancement ?",
    a: "Oui, nous assurons le réapprovisionnement régulier en produits et consommables pour que votre pressing ne soit jamais en rupture.",
  },
  {
    q: "Vos machines sont-elles garanties ?",
    a: "Oui, toutes nos machines sont couvertes par une garantie et un service après-vente. Les conditions varient selon le modèle — précisées à l'achat.",
  },
  {
    q: "Pouvez-vous commander les marchandises à ma place ?",
    a: "Oui, nous gérons l'approvisionnement pour vous. Vous passez commande, nous nous occupons du reste.",
  },
  {
    q: "Vous avez une autre question spécifique ?",
    a: "Contactez directement l'un de nos experts via WhatsApp. Nous répondons rapidement à toutes vos questions.",
    isCtaQuestion: true,
  },
];

export const BOOKING_SERVICES = [
  "Création Pressing A-Z",
  "Blanchisserie Pro",
  "Formation Staff",
  "Machines à laver",
  "Équipements & Produits",
  "Commande de marchandises",
  "Pack Starter",
  "Pack Pro",
  "Pack Premium",
];

export const SOCIAL_LINKS = [
  { platform: "Facebook", icon: "Facebook", href: "#" },
  { platform: "Instagram", icon: "Instagram", href: "#" },
  { platform: "WhatsApp", icon: "MessageCircle", href: "#" },
];
