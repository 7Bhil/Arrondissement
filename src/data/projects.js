import { Palette, GraduationCap, Lightbulb, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    titre: "Accompagnement des Artistes Peintres",
    description:
      "Soutien financier et matériel aux artistes peintres locaux pour développer leur talent et promouvoir l'art dans le 1er arrondissement. Programme incluant fourniture de matériel et organisation d'expositions.",
    icone: Palette,
    couleur: "bg-purple-500",
    couleurBg: "bg-purple-50",
    couleurBorder: "border-purple-200",
    couleurText: "text-purple-700",
    categorie: "Culture",
    impact: "5 à 15 artistes soutenus",
    lien: "/projets/artistes-peintres",
    lienExterne: null,
    hasDetailPage: true,
  },
  {
    id: 2,
    titre: "Scolarité des Enfants Orphelins",
    description:
      "Prise en charge des frais de scolarité d'enfants orphelins du 1er arrondissement pour garantir leur accès à l'éducation. Un investissement dans l'avenir de notre jeunesse vulnérable.",
    icone: GraduationCap,
    couleur: "bg-blue-500",
    couleurBg: "bg-blue-50",
    couleurBorder: "border-blue-200",
    couleurText: "text-blue-700",
    categorie: "Éducation",
    impact: "10 à 50 enfants scolarisés",
    lien: "/projets/scolarite-orphelins",
    lienExterne: null,
    hasDetailPage: true,
  },
  {
    id: 3,
    titre: "Éclairage Public des Quartiers",
    description:
      "Installation et amélioration de l'éclairage public dans les quartiers prioritaires pour renforcer la sécurité et améliorer la qualité de vie des habitants. Éclairage LED économique et durable.",
    icone: Lightbulb,
    couleur: "bg-yellow-500",
    couleurBg: "bg-yellow-50",
    couleurBorder: "border-yellow-200",
    couleurText: "text-yellow-700",
    categorie: "Infrastructures",
    impact: "2 à 5 quartiers éclairés",
    lien: "/projets/eclairage-public",
    lienExterne: null,
    hasDetailPage: true,
  },
  // Nouveaux projets pour l'onglet Politique
  {
    id: 4, // On réutilise l'ID 4 pour rester cohérent
    titre: "Leadership à Double Légitimité",
    description:
      "Gouvernance unique conciliant autorité morale et pragmatisme politique. Vision rassembleuse centrée sur la paix et le bien commun pour une cohésion sociale renforcée.",
    icone: Star, // Ou 'Users' pour le rassemblement. 'Star' symbolise l'exemplarité et le leadership.
    couleur: "bg-amber-500", // Or / Amber pour signifier la valeur, l'excellence.
    couleurBg: "bg-amber-50",
    couleurBorder: "border-amber-200",
    couleurText: "text-amber-700",
    categorie: "Politique",
    impact:
      "Stratégie d'enracinement local et de crédibilité politique renforcée", // Reprise de la citation finale
    lien: "/politique",
    lienExterne: null,
    hasDetailPage: true,
  },
];

// Fonction utilitaire pour filtrer les projets par catégorie
export const getProjectsByCategory = (category) => {
  return projects.filter((project) => project.categorie === category);
};

// Objet regroupant tous les projets par catégorie
export const projectsByCategory = {
  Culture: getProjectsByCategory("Culture"),
  Éducation: getProjectsByCategory("Éducation"),
  Infrastructures: getProjectsByCategory("Infrastructures"),
  Politique: getProjectsByCategory("Politique"),
};

export default projects;
