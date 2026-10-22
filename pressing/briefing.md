# BRIEFING — Refonte du site Top Pressing

> Site actuel : https://top-pressing-c.vercel.app/
> Objectif : reconstruire le site en version **plus professionnelle, moderne, dynamique et interactive**.

---

## 1. Identité de l'entreprise

- **Nom** : Top Pressing
- **Structure** : Laundry Solutions Group
- **Pays** : Togo (entreprise **togolaise**, basée à Lomé)
- **Positionnement** : expert en blanchisserie professionnelle haute performance, qui accompagne les porteurs de projet dans la création de leur pressing, leur vend le matériel, les forme, et fournit les consommables.
- **Baseline** : « Blanchisserie pro haute performance. »
- **Sur-titre hero** : « Expertise & Accompagnement »

### À SUPPRIMER absolument
- Toute mention « incubateur n°1 de start-ups Pressing **en France** ». L'entreprise est togolaise. Ne jamais citer la France.
- Le sous-titre « Incubateur Pro » dans le logo.

### Nouveau texte de footer
« Top Pressing — Votre expert en blanchisserie haute performance et partenaire des porteurs de projet pressing au Togo. »

---

## 2. Chiffres clés (à conserver)

- **500+** Clients satisfaits
- **10+** Pressings créés
- **3** Hôtels partenaires (ajout)

---

## 3. Services (6)

1. **Création de Pressing** : accompagnement de A à Z dans le lancement de l'activité de blanchisserie.
2. **Blanchisserie Pro** : services dédiés aux **grands hôtels**, écoles et institutions, avec une qualité maîtrisée.
3. **Formations Pratiques** : programmes complets pour porteurs de projet et **personnel opérationnel** (formation des employés des clients dans le domaine du pressing).
4. **Vente de Machines à laver** : machines professionnelles (laveuses, sécheuses, fers, centrales vapeur, tables).
5. **Vente & Consommables** : produits de blanchisserie et accessoires pour un fonctionnement sans interruption.
6. **Commande de marchandises** : Top Pressing commande les marchandises pour le compte des clients (approvisionnement clé en main).

---

## 4. Packs de démarrage (nouveau)

Packs pour « démarrer ton pressing » : équipement + installation + formation + stock initial.
- Prévoir 3 niveaux : **Starter**, **Pro**, **Premium**.
- Contenu et prix : **« Sur devis »** par défaut (à remplacer si Eric fournit les détails).
- Chaque pack a un bouton « Demander ce pack » qui pré-remplit le formulaire de réservation WhatsApp.

---

## 5. Méthode « De l'idée au Succès » (4 étapes)

| # | Titre | Description |
|---|-------|-------------|
| 01 | Étude & Budget | Analyse de votre zone d'implantation et définition du budget prévisionnel de votre futur pressing. |
| 02 | Installation | Aménagement de l'espace et fourniture de tous les équipements professionnels (machines, tables, fers). |
| 03 | Formation Staff | Formation pratique de votre personnel aux techniques modernes de lavage, repassage et accueil client. |
| 04 | Lancement | Inauguration de votre activité avec un stock initial de produits et consommables pour démarrer sereinement. |

CTA : « Lancer mon projet aujourd'hui »

---

## 6. Partenaires (marquee)

Partenariat blanchisserie avec :
- **Hôtel Sarakawa**
- **Hôtel Lébènè**
- **Hôtel du 2 Février**

Affichés en **marquee infini** (logos si fournis, sinon noms en typographie stylée).

---

## 7. Réalisations

Filtres : **Tous / Avant-Après / Équipements**

| Catégorie | Titre | Description |
|-----------|-------|-------------|
| Avant-après | Pressing Royal — Lomé | Transformation d'un local vide en pressing industriel complet. |
| Équipements | Centrale Vapeur Pro | Installation de fers industriels haute précision. |
| Réalisations | Hôtel (blanchisserie interne) | Mise en place de la blanchisserie interne (100 kg/jour). |
| Avant-après | Pressing Étoile | Optimisation de l'espace de repassage et stockage. |

Phrase de clôture : « Chaque installation est unique et personnalisée. »

> Ces réalisations sont des contenus de départ. Eric fournira des images réelles : les remplacer dans `/public/images/realisations/`.

---

## 8. À propos

- Titre : « Qui sommes-nous réellement ? »
- Points clés :
  - Accompagnement & solutions clés en main
  - Vision future & expansion régionale
- Images : « Lavage vêtements » (ambiance atelier)

---

## 9. FAQ (accordion)

1. **Quel est le budget minimum pour lancer un pressing ?** : dépend de la taille et de l'équipement ; un pack Starter permet de démarrer, devis gratuit sur demande.
2. **Proposez-vous la livraison des équipements à l'intérieur du pays ?** : oui, livraison possible dans tout le Togo (conditions sur devis).
3. **La formation du personnel est-elle obligatoire ?** : fortement recommandée, incluse dans les packs ; optionnelle en achat de matériel seul.
4. **Quels sont vos délais pour la blanchisserie hôtelière ?** : adaptés au volume convenu avec chaque établissement ; précisés dans le contrat.
5. **Fournissez-vous les produits de nettoyage après le lancement ?** : oui, réapprovisionnement régulier en produits et consommables.
6. **Vos machines sont-elles garanties ?** *(ajout)* : oui, garantie et service après-vente selon le modèle.
7. **Pouvez-vous commander les marchandises à ma place ?** *(ajout)* : oui, nous gérons l'approvisionnement pour vous.
8. **Vous avez une autre question spécifique ?** : bouton « Contacter un expert » → WhatsApp.

> Réponses rédigées comme base : à valider par le client.

---

## 9 bis. Témoignages (ajout)

3 témoignages de départ (nom, structure, ville, texte court). Contenu fictif temporaire à remplacer, à marquer `// TODO: remplacer`.

---

## 10. Formulaire de réservation

- Titre : « Projet Pressing ? » / « Réservation »
- Champs : **Nom / Structure**, **WhatsApp direct**, **Service** (select), **Détails du service** (textarea)
- Options du select : Création Pressing A-Z · Blanchisserie Pro · Formation Staff · Machines à laver · Équipements & Produits · Commande de marchandises · Pack Starter / Pro / Premium
- Bouton : « VALIDER & ENVOYER SUR WHATSAPP » → ouvre `https://wa.me/<numéro>?text=<message encodé>`
- **Numéro WhatsApp** : variable d'environnement `NEXT_PUBLIC_WHATSAPP_NUMBER`.
  - ⚠ Le numéro actuel du site commence par +86 (indicatif Chine) : **à confirmer avec le client** avant mise en ligne.

---

## 11. Navigation

- Navbar : Accueil · Services · Packs · Réalisations · À propos · FAQ + bouton **Réservation**
- Footer : Services · Réservations · Contact · réseaux sociaux ; © 2026 Laundry Solutions Group. Tous droits réservés.

---

## 12. Direction visuelle

- Style : propre, premium, confiance, ambiance « laverie professionnelle ».
- Palette proposée (ajustable selon le logo) : bleu profond `#0B3A6F`, cyan `#22B8CF`, blanc, gris clair `#F4F7FA`, accent or/orange `#F5A524` pour les CTA.
- Typographies : **Poppins** ou **Sora** (titres), **Inter** (texte), via `next/font`.
- Coins arrondis, ombres douces, glassmorphism léger sur navbar et cartes.
- Mode : clair uniquement.

---

## 13. Images

Eric fournira certaines images. Convention de rangement :

```
/public/images/
  logo.svg
  hero/hero-1.jpg  hero-2.jpg  hero-3.jpg
  services/...
  packs/...
  realisations/pressing-royal-avant.jpg / -apres.jpg ...
  partenaires/sarakawa.png  lebene.png  2-fevrier.png
  apropos/lavage.jpg
```

Si une image manque : placeholder propre (dégradé + icône Lucide), jamais d'image cassée.

---

## 14. Stack technique

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + **DaisyUI**
- **Swiper** (carousels)
- **GSAP** + ScrollTrigger (+ `@gsap/react`)
- **Motion** (ex Framer Motion)
- Autowrite / Typewriter sur le hero
- Lucide React (icônes)
- Marquee partenaires

---

## 15. Critères de réussite

- Rendu professionnel et moderne, cohérent sur mobile, tablette et desktop
- Animations fluides (60 fps), jamais bloquantes
- Tout le contenu ci-dessus présent
- Aucune mention de la France / incubateur n°1
- Formulaire → WhatsApp fonctionnel
- Score Lighthouse mobile > 85
