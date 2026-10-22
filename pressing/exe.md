# EXE — Prompt d'implémentation Top Pressing (Antigravity)

Tu es un développeur front-end senior spécialisé en sites vitrines animés haut de gamme. Lis d'abord `briefing.md` (source de vérité du contenu), puis implémente **tout le site** en suivant ce document à la lettre.

---

## 0. Règles absolues

1. Contenu : uniquement celui de `briefing.md`. Ne jamais mentionner la France ni « incubateur n°1 ». L'entreprise est **togolaise**.
2. Langue du site : **français**.
3. Code propre, typé (TypeScript strict), composants réutilisables, aucun `any`.
4. Toutes les animations doivent être **fluides, subtiles et premium**, jamais gadget. Pas d'animation qui bloque la lecture.
5. Respecter `prefers-reduced-motion` : si activé, désactiver GSAP/Motion/typewriter/marquee et afficher le contenu statique.
6. Mobile-first, responsive parfait de 360px à 1920px.
7. Aucune image cassée : utiliser un composant `SafeImage` avec fallback (dégradé + icône Lucide).
8. Les images fournies par Eric sont dans `/public/images/` (voir arborescence dans le briefing).
9. À la fin, `npm run build` doit passer sans erreur ni warning bloquant.

---

## 1. Installation

```bash
npx create-next-app@latest top-pressing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd top-pressing
npm i daisyui@latest swiper gsap @gsap/react motion lucide-react clsx
```

- Tailwind CSS **v4** : configuration CSS-first dans `src/app/globals.css` (pas de `tailwind.config.js`).
- DaisyUI 5 via `@plugin "daisyui"` dans `globals.css`.
- Polices avec `next/font/google` : **Sora** (titres) et **Inter** (texte).

---

## 2. Arborescence

```
src/
  app/
    layout.tsx            (polices, metadata, SmoothScroll, WhatsAppFloat)
    page.tsx              (assemble toutes les sections)
    globals.css           (thème DaisyUI, utilitaires, marquee keyframes)
  components/
    layout/   Navbar.tsx  Footer.tsx  WhatsAppFloat.tsx  ScrollProgress.tsx
    sections/ Hero.tsx  Stats.tsx  Partners.tsx  Services.tsx  Packs.tsx
              Process.tsx  Training.tsx  Hotels.tsx  Realisations.tsx
              Products.tsx  About.tsx  Testimonials.tsx  Faq.tsx
              Booking.tsx  FinalCta.tsx
    ui/       Typewriter.tsx  Counter.tsx  Marquee.tsx  Reveal.tsx
              BeforeAfter.tsx  SafeImage.tsx  SectionTitle.tsx  MagneticButton.tsx
  hooks/      useReducedMotion.ts  useWhatsApp.ts
  lib/        content.ts (TOUT le contenu du briefing, typé)  gsap.ts (registerPlugin)
```

Tout le texte vit dans `lib/content.ts`, les composants ne contiennent aucun texte en dur.

---

## 3. Design system (thème DaisyUI)

Définir un thème custom `toppressing` (clair uniquement) dans `globals.css` :

- primary `#0B3A6F` · secondary `#22B8CF` · accent `#F5A524` · neutral `#0F172A`
- base-100 `#FFFFFF` · base-200 `#F4F7FA` · base-300 `#E3EAF1`
- `--radius-box: 1.25rem` · `--radius-field: 0.75rem`

Règles de style :
- Titres Sora, gras, tracking serré ; texte Inter.
- Cartes : `rounded-2xl`, ombre douce, bordure `base-300`, hover : élévation + léger tilt.
- Navbar et cartes premium : glassmorphism léger (`backdrop-blur`, fond blanc/70).
- Sections alternent fond blanc / `base-200`, avec séparateurs en vague SVG ou diagonales discrètes.
- Dégradés bleu → cyan pour les sections sombres (Hero overlay, Process, CTA final).
- Boutons : `btn btn-accent` pour CTA principal, `btn btn-outline` pour secondaire, arrondis, avec effet magnétique (voir §5).

---

## 4. Configuration globale des animations

### 4.1 GSAP
`lib/gsap.ts` :
- `gsap.registerPlugin(ScrollTrigger, useGSAP)`.
- Exporter `gsap`, `ScrollTrigger`.
- Dans **chaque** composant animé : utiliser `useGSAP(() => {...}, { scope: ref })` pour le nettoyage automatique. Jamais de `useEffect` brut avec GSAP.
- Utiliser `gsap.matchMedia()` pour séparer desktop / mobile et `prefers-reduced-motion`.
- Défauts : `ease: "power3.out"`, durée 0.8–1.1 s.

### 4.2 Motion
- Import : `import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react"`.
- Utilisé pour : hover/tap des cartes et boutons, menu mobile, modals, accordion FAQ (contenu), transitions de filtres, barre de progression de scroll, éléments flottants.

### 4.3 Répartition (ne pas mélanger sur le même élément)
- **GSAP** : timelines complexes, ScrollTrigger, compteurs, parallax, pin, stagger de grilles, intro du hero.
- **Motion** : micro-interactions, layout animations, AnimatePresence, drag.
- Ne jamais animer la même propriété d'un même élément avec les deux.

### 4.4 Smooth scroll
Ajouter **Lenis** (`npm i lenis`) branché sur GSAP ticker pour un défilement fluide, synchronisé avec ScrollTrigger. Désactivé si `prefers-reduced-motion`.

### 4.5 Performance
- Animer uniquement `transform` et `opacity`. `will-change` ponctuel.
- Pas d'animation de `width/height/top/left`.
- `next/image` partout, `priority` uniquement sur la 1re slide du hero.
- Composants animés en `"use client"`, sections statiques en Server Components quand possible.

---

## 5. Composants UI transversaux

### `Typewriter` (autowrite)
- Composant maison (pas de dépendance), props : `words: string[]`, `typeSpeed`, `deleteSpeed`, `pause`.
- Tape, pause, efface, passe au mot suivant, en boucle. Curseur clignotant `|` (animation CSS).
- Accessibilité : `aria-label` avec la phrase complète, texte animé en `aria-hidden`.
- Reduced motion : afficher le premier mot, sans animation.

### `Counter`
- Compteur GSAP déclenché par ScrollTrigger (`once: true`), de 0 à la valeur, `snap` entier, suffixe `+`.

### `Marquee`
- CSS pur : deux copies du contenu en `flex`, `@keyframes marquee` en `translateX(0 → -50%)`, boucle infinie linéaire.
- Props : `speed`, `direction`, `pauseOnHover`. Bords en dégradé (mask) pour fondu.
- Reduced motion : défilement horizontal manuel.

### `Reveal`
- Wrapper Motion : `initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}}`, props `delay`, `direction`.

### `MagneticButton`
- Le bouton suit légèrement le curseur (Motion `useMotionValue` + `useSpring`), retour élastique au départ. Desktop uniquement (`pointer: fine`).

### `BeforeAfter`
- Slider de comparaison avant/après : deux images superposées, poignée draggable (Motion drag horizontal ou `input range`), clip-path animé. Fonctionne au tactile.

### `SafeImage`
- Wrapper `next/image` avec `onError` → fallback.

---

## 6. Sections : spécification détaillée

### 6.1 Navbar
- Fixe, transparente sur le hero, **devient glass blanc avec ombre** après 40px de scroll (transition douce).
- Logo à gauche, liens centrés : Accueil · Services · Packs · Réalisations · À propos · FAQ. Bouton **Réservation** (accent) à droite.
- Lien actif surligné via ScrollTrigger (scroll-spy), soulignement animé (Motion `layoutId`).
- Mobile : bouton burger → menu plein écran avec `AnimatePresence`, liens en stagger depuis le bas.
- Navbar se masque au scroll vers le bas, réapparaît vers le haut.
- `ScrollProgress` : fine barre cyan en haut qui suit la progression (Motion `useScroll`).

### 6.2 Hero (section la plus soignée)
- Hauteur `100svh`. **Carousel Swiper plein écran** avec 3 slides (`EffectFade`, `Autoplay` 6 s, `pagination` personnalisée en barres, `loop`).
  - Slide 1 : création de pressing · Slide 2 : blanchisserie hôtelière · Slide 3 : machines & packs.
  - Image de fond avec overlay dégradé bleu foncé, et effet **Ken Burns** (zoom lent 1 → 1.08) sur la slide active.
- Contenu au premier plan (fixe, au-dessus du Swiper) :
  - Sur-titre : « Expertise & Accompagnement » (petit, capitales, tracking large, trait cyan).
  - **Titre autowrite** : « Blanchisserie pro » fixe, puis mot tapé en boucle : `haute performance.` / `clé en main.` / `pour les hôtels.` / `pour votre pressing.`
  - Sous-titre : une phrase sur la création de pressing, la formation et les équipements.
  - 2 boutons : **DÉCOUVRIR NOS SOLUTIONS** (accent, magnétique) et **Lancer mon projet** (outline blanc).
  - 2 mini-badges flottants : « 500+ clients satisfaits » et « 10+ pressings créés » avec animation flottante douce (Motion `y: [0,-10,0]` en boucle, décalés).
- **Intro GSAP au chargement** (timeline) : overlay qui se retire, sur-titre fade, titre en `stagger` lettre par lettre (ou ligne par ligne avec masque `overflow-hidden` + `yPercent: 100 → 0`), sous-titre, boutons, badges.
- Indicateur « Scroll » en bas avec petite souris animée.
- Parallax : l'image de fond bouge plus lentement que le scroll (ScrollTrigger `scrub`).
- Reduced motion : slide 1 statique, texte complet affiché.

### 6.3 Stats
- Bandeau chevauchant le bas du hero (marge négative), carte glass blanche.
- 3 `Counter` : **500+ Clients satisfaits**, **10+ Pressings créés**, **3 Hôtels partenaires**. Icône Lucide pour chacun, séparateurs verticaux.

### 6.4 Partners (marquee)
- Titre : « Ils nous font confiance ».
- `Marquee` infini avec **Hôtel Sarakawa**, **Hôtel Lébènè**, **Hôtel du 2 Février** (logo si dispo, sinon badge élégant avec icône `Hotel`). Répéter les éléments pour remplir la largeur. Logos en niveaux de gris → couleur au hover. Pause au hover.

### 6.5 Services
- Titre « Nos Solutions Complètes » + sous-titre du briefing.
- Grille 3 colonnes desktop / 2 tablette / 1 mobile, **6 cartes**.
- Animation GSAP ScrollTrigger : cartes entrent en **stagger** (`y: 60 → 0`, `opacity`, 0.12 s entre chaque).
- Hover (Motion) : carte monte de 8 px, icône tourne légèrement, bordure en dégradé, flèche « Détails → » glisse à droite.
- Chaque carte : icône Lucide dans pastille dégradée, titre, description, lien « Détails → ». Clic → ouvre un **modal** (Motion `AnimatePresence`) avec description détaillée et bouton « Demander ce service » (pré-remplit le formulaire).

### 6.5 bis Packs de démarrage
- **Swiper** : `slidesPerView` 1.1 mobile / 2 tablette / 3 desktop, `spaceBetween`, `centeredSlides` sur mobile, `Pagination` + `Navigation` (flèches stylées), `Autoplay` lent avec pause au hover.
- 3 cartes DaisyUI : **Starter / Pro / Premium**, la carte **Pro** mise en avant (badge « Populaire », légèrement agrandie, bordure accent).
- Liste de ce qui est inclus avec icônes `Check` (équipement, installation, formation, stock initial), prix « Sur devis ».
- Bouton « Demander ce pack » → scroll vers le formulaire avec le service pré-sélectionné.

### 6.6 Process (De l'idée au Succès)
- Fond dégradé bleu foncé, texte blanc.
- Timeline **verticale sur mobile, horizontale sur desktop**.
- GSAP ScrollTrigger avec `scrub` : une ligne cyan se **dessine** au fil du scroll, chaque étape (01 → 04) s'illumine et apparaît quand la ligne l'atteint (numéro géant en filigrane, qui compte de 00 à 0X).
- **Desktop** : section **pinnée** (`pin: true`) pendant que les 4 étapes se révèlent successivement, puis le scroll reprend.
- CTA final : « LANCER MON PROJET AUJOURD'HUI » (accent, magnétique).

### 6.7 Training (Formation)
- Layout 2 colonnes : image avec cadre décalé + texte.
- Liste des modules (lavage, détachage, repassage vapeur, accueil client, gestion du pressing) avec icônes, apparition en stagger.
- Image : parallax léger. Petit badge flottant « Formation pratique ».

### 6.8 Hotels (blanchisserie hôtelière)
- Bloc B2B contrasté : titre, 3 avantages (qualité maîtrisée, volumes réguliers, délais tenus), mention des 3 hôtels partenaires.
- Un chiffre animé (ex. « jusqu'à 100 kg/jour » issu des réalisations).
- CTA « Demander un devis hôtel ».

### 6.9 Réalisations
- Filtres **Tous / Avant-Après / Équipements** (boutons DaisyUI `join`), animation de réorganisation de grille avec Motion `layout` + `AnimatePresence`.
- Grille masonry/3 colonnes. Cartes avec image, catégorie en badge, titre, description ; hover : zoom image + overlay dégradé + texte qui monte.
- Les cartes « Avant-Après » ouvrent un **modal** contenant `BeforeAfter`.
- Phrase finale : « Chaque installation est unique et personnalisée. »

### 6.10 Products (Boutique / Vente & Consommables)
- **Swiper** (`freeMode`, `slidesPerView: auto`) de cartes produits : machines à laver, sécheuses, fers et centrales vapeur, lessives, détachants, accessoires.
- Pas de panier : bouton « Demander un devis » → formulaire pré-rempli.

### 6.11 About
- Titre « Qui sommes-nous réellement ? ».
- 2 colonnes : texte (Accompagnement & Solutions Clés en Main, Vision Future & Expansion Régionale) + collage d'images avec parallax à vitesses différentes.
- Pastilles de valeurs avec icônes, apparition en stagger.

### 6.12 Testimonials
- **Swiper** `EffectCoverflow` ou slider centré, `Autoplay`, pagination. Carte : guillemets, texte, nom, structure, 5 étoiles. 3 témoignages de départ (`// TODO: remplacer`).

### 6.13 FAQ
- **Accordion DaisyUI** (`collapse collapse-plus`, un seul ouvert à la fois), les 8 questions du briefing.
- Animation d'ouverture fluide (Motion `height: auto`), icône + qui tourne.
- Bloc final « Vous avez une autre question spécifique ? » avec bouton **CONTACTER UN EXPERT** → WhatsApp.

### 6.14 Booking (Réservation)
- Carte glass avec le formulaire : Nom / Structure, WhatsApp direct, Service (select), Détails (textarea).
- Validation côté client (champs requis, numéro valide) avec messages d'erreur animés.
- Bouton **VALIDER & ENVOYER SUR WHATSAPP** : construit le message (nom, service, détails) et ouvre `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` dans un nouvel onglet. Petit état de chargement + succès animé (coche).
- Le service peut être pré-sélectionné par les boutons « Demander ce pack / service / devis ».

### 6.15 Final CTA
- Bandeau dégradé avec formes flottantes (bulles de savon / bulles d'eau en SVG animées lentement). Titre : « Prêt à lancer votre pressing ? » + bouton WhatsApp.

### 6.16 Footer
- Fond bleu très foncé. Logo, texte (version togolaise du briefing), navigation (Services, Réservations, Contact), réseaux sociaux, © 2026 Laundry Solutions Group. Tous droits réservés.
- Apparition du footer en révélation (GSAP).

### 6.17 WhatsAppFloat
- Bouton rond fixe en bas à droite avec animation de pulsation douce, tooltip « Une question ? », apparaît après 2 s (Motion).

---

## 7. Détails d'animation à respecter (récapitulatif)

| Élément | Techno | Effet |
|---------|--------|-------|
| Titre hero | Typewriter maison | Autowrite en boucle |
| Intro hero | GSAP timeline | Révélation par masque, stagger |
| Fond hero | Swiper fade + CSS | Ken Burns, parallax scrub |
| Compteurs | GSAP + ScrollTrigger | 0 → valeur au scroll |
| Cartes services | GSAP stagger + Motion hover | Entrée échelonnée, hover lift |
| Process | GSAP pin + scrub | Ligne qui se dessine, étapes révélées |
| Packs / Produits / Témoignages | Swiper | Carousels autoplay, navigation |
| Partenaires | Marquee CSS | Défilement infini, pause hover |
| Réalisations | Motion layout | Filtre animé, modal, avant/après |
| FAQ | DaisyUI + Motion | Accordion fluide |
| Navbar | Motion + scroll | Glass au scroll, hide/show, burger animé |
| Boutons CTA | Motion spring | Effet magnétique |
| Scroll global | Lenis | Défilement fluide |

---

## 8. SEO, accessibilité, qualité

- `metadata` complète dans `layout.tsx` (title, description, Open Graph, `lang="fr"`, `themeColor`).
- JSON-LD `LocalBusiness` (Top Pressing, Lomé, Togo).
- Titres hiérarchisés (un seul `h1`), `alt` sur toutes les images, focus visible, contrastes AA, navigation clavier (menu, modals avec `Escape`).
- Favicon + `og:image`.
- Variables d'environnement : `NEXT_PUBLIC_WHATSAPP_NUMBER` dans `.env.local` et `.env.example`.

---

## 9. Déroulé de travail attendu

1. Initialiser le projet, thème DaisyUI, polices, `lib/content.ts`.
2. Composants UI (`Typewriter`, `Counter`, `Marquee`, `Reveal`, `MagneticButton`, `BeforeAfter`, `SafeImage`).
3. Layout (Navbar, Footer, WhatsAppFloat, ScrollProgress, Lenis).
4. Sections dans l'ordre : Hero → Stats → Partners → Services → Packs → Process → Training → Hotels → Realisations → Products → About → Testimonials → Faq → Booking → FinalCta.
5. Vérifier responsive (360 / 768 / 1280 / 1920), reduced motion, et la console (aucune erreur, aucun warning d'hydratation).
6. `npm run build` puis `npm run lint`.

## 10. Livrable final

- Projet Next.js complet, prêt à déployer sur Vercel.
- Message de fin : liste des fichiers créés, variables d'environnement à renseigner, et éléments marqués `TODO` (images manquantes, packs, témoignages, numéro WhatsApp à confirmer).
