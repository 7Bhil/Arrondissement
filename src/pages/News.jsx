import React, { useState } from "react";
import {
  Calendar,
  ExternalLink,
  Users,
  GraduationCap,
  Lightbulb,
  Heart,
  Music,
  Building,
  Filter,
  Clock,
} from "lucide-react";

const ActualitesPage = () => {
  // ===== SECTION MODIFIABLE : DONNÉES DES ACTUALITÉS =====
  const actualites = [
    {
      id: 1,
      titre: "Formation de 507 Relais Communautaires pour la Santé",
      date: "2025-08-15",
      dateAffichage: "15 Août 2025",
      categorie: "Santé",
      icone: Heart,
      couleurCategorie: "bg-red-100 text-red-700",
      couleurIcone: "bg-red-500",
      resume:
        "Lancement d'un programme ambitieux de formation pour 507 relais communautaires dédiés à la promotion de la santé dans le 1er arrondissement. Cette initiative vise à renforcer le système de santé de proximité et améliorer l'accès aux soins pour tous les habitants.",
      lienExterne: null, // Remplacer par le vrai lien si disponible
      impact: "507 relais formés",
      urgent: true,
    },
    {
      id: 2,
      titre: "Soutien Continu aux Jeunes Artistes et Chanteurs Locaux",
      date: "2025-08-10",
      dateAffichage: "10 Août 2025",
      categorie: "Culture",
      icone: Music,
      couleurCategorie: "bg-purple-100 text-purple-700",
      couleurIcone: "bg-purple-500",
      resume:
        "Poursuite du programme d'accompagnement des jeunes talents artistiques du 1er arrondissement. Mise à disposition d'équipements musicaux, organisation de concerts et formations pour développer les compétences artistiques de notre jeunesse créative.",
      lienExterne: null,
      impact: "25+ artistes soutenus",
      urgent: false,
    },
    {
      id: 3,
      titre: "Nouvelle Phase de Prise en Charge des Enfants Orphelins",
      date: "2025-08-05",
      dateAffichage: "05 Août 2025",
      categorie: "Éducation",
      icone: GraduationCap,
      couleurCategorie: "bg-blue-100 text-blue-700",
      couleurIcone: "bg-blue-500",
      resume:
        "Extension du programme de prise en charge de la scolarité des enfants orphelins. Cette nouvelle phase permettra d'accompagner davantage d'enfants vulnérables dans leur parcours éducatif, garantissant ainsi leur droit à l'éducation et leur insertion sociale.",
      lienExterne: null,
      impact: "Nouveau quota d'enfants",
      urgent: false,
    },
    {
      id: 4,
      titre: "Achèvement des Travaux d'Éclairage dans 3 Nouveaux Quartiers",
      date: "2025-07-28",
      dateAffichage: "28 Juillet 2025",
      categorie: "Infrastructures",
      icone: Lightbulb,
      couleurCategorie: "bg-yellow-100 text-yellow-700",
      couleurIcone: "bg-yellow-500",
      resume:
        "Finalisation de l'installation de l'éclairage public LED dans trois quartiers prioritaires. Ces améliorations renforcent la sécurité nocturne et améliorent significativement la qualité de vie des habitants de ces zones.",
      lienExterne: null,
      impact: "3 quartiers éclairés",
      urgent: false,
    },
    {
      id: 5,
      titre: "Ouverture de Nouveaux Centres de Formation Professionnelle",
      date: "2025-07-20",
      dateAffichage: "20 Juillet 2025",
      categorie: "Formation",
      icone: Users,
      couleurCategorie: "bg-green-100 text-green-700",
      couleurIcone: "bg-green-500",
      resume:
        "Inauguration de centres de formation en couture, mécanique automobile et soudure pour l'insertion des jeunes déscolarisés. Ces centres offrent une seconde chance aux jeunes et répondent aux besoins en compétences techniques du marché local.",
      lienExterne: null,
      impact: "50+ places disponibles",
      urgent: false,
    },
    {
      id: 6,
      titre: "Inauguration de Cantines Scolaires dans 4 Établissements",
      date: "2025-07-15",
      dateAffichage: "15 Juillet 2025",
      categorie: "Éducation",
      icone: Building,
      couleurCategorie: "bg-blue-100 text-blue-700",
      couleurIcone: "bg-blue-500",
      resume:
        "Mise en service de cantines scolaires modernes dans 4 écoles publiques et privées du 1er arrondissement. Ces infrastructures améliorent les conditions d'apprentissage et luttent contre la malnutrition infantile.",
      lienExterne: null,
      impact: "4 cantines opérationnelles",
      urgent: false,
    },
  ];

  // ===== SECTION MODIFIABLE : CATÉGORIES DE FILTRAGE =====
  const categories = [
    { nom: "Toutes", couleur: "bg-gray-500" },
    { nom: "Santé", couleur: "bg-red-500" },
    { nom: "Culture", couleur: "bg-purple-500" },
    { nom: "Éducation", couleur: "bg-blue-500" },
    { nom: "Infrastructures", couleur: "bg-yellow-500" },
    { nom: "Formation", couleur: "bg-green-500" },
  ];

  // État pour le filtrage
  const [categorieActive, setCategorieActive] = useState("Toutes");

  // Filtrage des actualités
  const actualitesFiltrees =
    categorieActive === "Toutes"
      ? actualites
      : actualites.filter((actu) => actu.categorie === categorieActive);

  // Fonction pour calculer le temps écoulé
  const calculerTempsEcoule = (dateString) => {
    const date = new Date(dateString);
    const maintenant = new Date();
    const diffJours = Math.floor((maintenant - date) / (1000 * 60 * 60 * 24));

    if (diffJours === 0) return "Aujourd'hui";
    if (diffJours === 1) return "Hier";
    if (diffJours < 7) return `Il y a ${diffJours} jours`;
    if (diffJours < 30)
      return `Il y a ${Math.floor(diffJours / 7)} semaine${
        Math.floor(diffJours / 7) > 1 ? "s" : ""
      }`;
    return `Il y a ${Math.floor(diffJours / 30)} mois`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête de la page */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Actualités & Réalisations
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Suivez les dernières actions et réalisations d'
              <strong>El Hadj MOUBARACOU LATIFU</strong>, Chef du 1er
              Arrondissement de Porto-Novo, pour le développement de notre
              communauté.
            </p>
            <div className="flex items-center justify-center text-blue-100">
              <Clock className="w-5 h-5 mr-2" />
              <span>Mise à jour en temps réel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Système de filtrage */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filtrer par catégorie :</span>
            </div>
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setCategorieActive(cat.nom)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  categorieActive === cat.nom
                    ? `${cat.couleur} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm"
                }`}
              >
                {cat.nom}
              </button>
            ))}
          </div>
        </div>

        {/* Compteur d'actualités */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            <span className="font-semibold text-2xl text-gray-800">
              {actualitesFiltrees.length}
            </span>{" "}
            actualité{actualitesFiltrees.length > 1 ? "s" : ""}
            {categorieActive !== "Toutes" && (
              <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {categorieActive}
              </span>
            )}
          </p>
        </div>

        {/* Grille des actualités */}
        <div className="grid lg:grid-cols-2 gap-8">
          {actualitesFiltrees.map((actu) => {
            const IconeComponent = actu.icone;
            return (
              <article
                key={actu.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden ${
                  actu.urgent ? "ring-2 ring-red-200 ring-offset-2" : ""
                }`}
              >
                {/* Badge urgent */}
                {actu.urgent && (
                  <div className="bg-red-500 text-white px-4 py-2 text-sm font-bold">
                    🔥 ACTUALITÉ IMPORTANTE
                  </div>
                )}

                {/* En-tête de la carte */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`${actu.couleurIcone} p-3 rounded-xl text-white shadow-lg`}
                    >
                      <IconeComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${actu.couleurCategorie}`}
                      >
                        {actu.categorie}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {actu.titre}
                  </h2>

                  {/* Date et temps écoulé */}
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{actu.dateAffichage}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">
                      {calculerTempsEcoule(actu.date)}
                    </span>
                  </div>
                </div>

                {/* Contenu de l'actualité */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {actu.resume}
                  </p>

                  {/* Impact et action */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-lg ${actu.couleurCategorie
                        .replace("text-", "bg-")
                        .replace("-700", "-50")} ${
                        actu.couleurCategorie
                      } font-semibold text-sm`}
                    >
                      <div
                        className={`w-2 h-2 ${actu.couleurIcone} rounded-full mr-2`}
                      ></div>
                      {actu.impact}
                    </div>

                    {/* Bouton Lire plus */}
                    {actu.lienExterne ? (
                      <a
                        href={actu.lienExterne}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Lire plus
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <button
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-500 rounded-lg font-medium cursor-not-allowed"
                        disabled
                      >
                        Détails à venir
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section newsletter/contact */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Restez Informé des Actualités
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Ne manquez aucune actualité du 1er arrondissement. Suivez nos
            réalisations et participez au développement de votre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Nous Contacter
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Proposer un Projet
            </button>
          </div>
        </div>

        {/* Footer de la page */}
        <div className="mt-12 text-center text-gray-500">
          <p>
            Page mise à jour le <strong>21 Août 2025</strong> • Chef du 1er
            Arrondissement de Porto-Novo
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualitesPage;
