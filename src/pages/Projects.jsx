import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  GraduationCap,
  Lightbulb,
  Wrench,
  Building,
  Music,
  Filter,
  X,
} from "lucide-react";

const Projects = () => {
  // ===== SECTION MODIFIABLE : DONNÉES DES PROJETS =====
  const projets = [
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
    },
    {
      id: 4,
      titre: "Formation Professionnelle des Jeunes",
      description:
        "Insertion des enfants déscolarisés dans des centres de formation professionnelle (couture, mécanique auto, soudure). Programme complet d'apprentissage et d'insertion socio-économique.",
      icone: Wrench,
      couleur: "bg-green-500",
      couleurBg: "bg-green-50",
      couleurBorder: "border-green-200",
      couleurText: "text-green-700",
      categorie: "Jeunesse",
      impact: "20 à 100 jeunes formés",
    },
    {
      id: 5,
      titre: "Construction de Cantines Scolaires",
      description:
        "Aide financière et technique pour la construction de cantines dans les écoles publiques et privées. Amélioration des conditions d'apprentissage et lutte contre la malnutrition infantile.",
      icone: Building,
      couleur: "bg-red-500",
      couleurBg: "bg-red-50",
      couleurBorder: "border-red-200",
      couleurText: "text-red-700",
      categorie: "Éducation",
      impact: "1 à 3 cantines construites",
    },
    {
      id: 6,
      titre: "Promotion des Jeunes Chanteurs",
      description:
        "Soutien aux jeunes talents musicaux du 1er arrondissement à travers des formations, des équipements et l'organisation d'événements culturels. Valorisation du patrimoine musical local.",
      icone: Music,
      couleur: "bg-indigo-500",
      couleurBg: "bg-indigo-50",
      couleurBorder: "border-indigo-200",
      couleurText: "text-indigo-700",
      categorie: "Culture",
      impact: "5 à 10 artistes accompagnés",
    },
  ];

  // ===== SECTION MODIFIABLE : CATÉGORIES DE FILTRAGE =====
  const categories = [
    { nom: "Tous", couleur: "bg-gray-500" },
    { nom: "Culture", couleur: "bg-purple-500" },
    { nom: "Éducation", couleur: "bg-blue-500" },
    { nom: "Infrastructures", couleur: "bg-yellow-500" },
    { nom: "Jeunesse", couleur: "bg-green-500" },
  ];

  // État pour le filtrage
  const [categorieActive, setCategorieActive] = useState("Tous");

  // Filtrage des projets
  const projetsFiltres =
    categorieActive === "Tous"
      ? projets
      : projets.filter((projet) => projet.categorie === categorieActive);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projets & Réalisations
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mx-auto rounded-full mb-8"></div>

          {/* Texte d'introduction */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              <strong>El Hadj MOUBARACOU LATIFU</strong>, Chef du 1er
              Arrondissement de Porto-Novo, s'engage quotidiennement pour le
              développement local et l'amélioration des conditions de vie de ses
              concitoyens.
            </p>
            <p className="text-lg text-gray-500">
              Découvrez ses principales réalisations dans les domaines de
              l'éducation, de la culture, des infrastructures et de
              l'accompagnement de la jeunesse.avec
            </p>
          </div>
        </div>

        {/* Système de filtrage */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filtrer par :</span>
          </div>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setCategorieActive(cat.nom)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                categorieActive === cat.nom
                  ? `${cat.couleur} text-white shadow-lg transform scale-105`
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.nom}
              {categorieActive === cat.nom && cat.nom !== "Tous" && (
                <X className="w-4 h-4 ml-2 inline" />
              )}
            </button>
          ))}
        </div>

        {/* Affichage du nombre de projets */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Au moins
            <span className="font-semibold text-2xl text-gray-800">
              {" "}
              {projetsFiltres.length}
            </span>{" "}
            projet{projetsFiltres.length > 1 ? "s" : ""} dont:
            {categorieActive !== "Tous" && (
              <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {categorieActive}
              </span>
            )}
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetsFiltres.map((projet) => {
            const IconeComponent = projet.icone;
            return (
              <div
                key={projet.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${projet.couleurBorder} border-2 overflow-hidden group`}
              >
                {/* En-tête de la carte */}
                <div
                  className={`${projet.couleurBg} p-6 relative overflow-hidden`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`${projet.couleur} p-4 rounded-xl text-white shadow-lg`}
                    >
                      <IconeComponent className="w-8 h-8" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${projet.couleurText} bg-white shadow-sm`}
                    >
                      {projet.categorie}
                    </span>
                  </div>

                  {/* Effet décoratif */}
                  <div
                    className={`absolute -bottom-6 -right-6 w-24 h-24 ${projet.couleur} opacity-10 rounded-full`}
                  ></div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {projet.titre}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {projet.description}
                  </p>

                  {/* Impact/Statistique */}
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${projet.couleurBg} ${projet.couleurText} font-semibold text-sm`}
                  >
                    <div
                      className={`w-2 h-2 ${projet.couleur} rounded-full mr-2`}
                    ></div>
                    {projet.impact}
                  </div>
                </div>

                {/* Barre de couleur en bas */}
                <div className={`h-1 ${projet.couleur}`}></div>
              </div>
            );
          })}
        </div>

        {/* Section statistiques globales */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Impact Global</h3>
            <p className="text-blue-100">
              Ensemble des réalisations du Chef d'Arrondissement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-blue-100">Projets Majeurs</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Bénéficiaires Directs</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-blue-100">Secteurs d'Impact</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Engagement Local</div>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous souhaitez en savoir plus sur ces projets ou proposer une
            collaboration ?
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Nous Contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
