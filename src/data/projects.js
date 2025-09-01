import { Palette, GraduationCap, Lightbulb } from "lucide-react";

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
    // Liens vers différentes pages
    lien: "/projets/artistes-peintres", // lien principal
    lienExterne: null, // si tu veux un lien externe
    hasDetailPage: true, // pour savoir si le projet a une page détaillée
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
    lien: "/culture",
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
];

export default projects;
