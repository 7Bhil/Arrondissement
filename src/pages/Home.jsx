import { Link } from "react-router-dom";
import { useState } from "react";
// Composant Banner amélioré
import Banner from "../components/Banner";
import projects from "../data/projects";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {/* Hero Section - Banner du Chef d'Arrondissement */}
      <Banner
        title="Ensemble pour un Arrondissement Prospère"
        subtitle="Chef d'Arrondissement - Bloc Républicain"
        description="Œuvrant pour le développement durable, la transparence et l'amélioration des conditions de vie de tous nos citoyens avec les valeurs républicaines."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        height="h-screen"
        textAlign="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projets"
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Découvrir nos Réalisations
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-xl"
            style={{ borderColor: "#AACDF6", color: "#AACDF6" }}
          >
            Nous Contacter
          </Link>
          <Link
            to="/a-propos"
            className="px-8 py-4 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            style={{ backgroundColor: "#AACDF6" }}
          >
            Mon Parcours
          </Link>
        </div>
      </Banner>

      {/* About Section - Présentation du Chef d'Arrondissement */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://i.imgur.com/XqxZIiY.jpeg"
                  alt="Chef d'Arrondissement"
                  className="w-full h-94 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute -bottom-4 -right-4 text-white p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  style={{ backgroundColor: "#9AC454" }}
                >
                  <p className="text-sm font-extralight">
                    El Hadj MOUBARACOU LATIFU
                  </p>
                  <p className="text-sm font-bold">Au service du peuple</p>
                  <p className="text-xs opacity-90">Depuis 2020</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Un Leadership au Service du Développement
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chers concitoyens, c'est avec un profond sens des
                responsabilités que je vous accueille sur notre plateforme
                digitale. Fort de mes années d'expérience en administration
                publique et de mon engagement politique, je mets tout en œuvre
                pour transformer notre arrondissement.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Mon approche se base sur trois piliers fondamentaux : la
                transparence dans la gestion, la participation citoyenne et le
                développement durable. Chaque décision prise vise à créer des
                opportunités concrètes pour améliorer votre quotidien.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span
                  className="px-6 py-3 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: "#AACDF6" }}
                >
                  Expérience Administrative
                </span>
                <span
                  className="px-6 py-3 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: "#AACDF6" }}
                >
                  Leadership Communautaire
                </span>
                <span
                  className="px-6 py-3 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: "#AACDF6" }}
                >
                  Vision Développement
                </span>
              </div>
              <Link
                to="/a-propos"
                className="inline-flex items-center px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: "#9AC454" }}
              >
                Découvrir mon parcours
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parti Politique - Bloc Républicain */}
      <section
        className="py-20 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: "url('https://i.imgur.com/oVvb5R8.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: "#9AC454" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                style={{ backgroundColor: "#9AC454" }}
              >
                <span className="text-white font-bold text-xl">BR</span>
              </div>
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                Bloc Républicain
              </h2>
            </div>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto drop-shadow-md">
              Membre actif du Bloc Républicain, je porte les valeurs de
              démocratie, d'égalité et de progrès social qui définissent notre
              formation politique.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Valeurs Fondamentales */}
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Valeurs Fondamentales
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 shadow-md"
                    style={{ backgroundColor: "#AACDF6" }}
                  ></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Démocratie participative :</strong> Impliquer tous
                    les citoyens dans les décisions qui les concernent
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 shadow-md"
                    style={{ backgroundColor: "#AACDF6" }}
                  ></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Justice sociale :</strong> Réduire les inégalités et
                    promouvoir l'équité pour tous
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 shadow-md"
                    style={{ backgroundColor: "#AACDF6" }}
                  ></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Développement durable :</strong> Concilier progrès
                    économique et protection de l'environnement
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 shadow-md"
                    style={{ backgroundColor: "#AACDF6" }}
                  ></div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Transparence :</strong> Une gestion ouverte et
                    responsable des affaires publiques
                  </p>
                </li>
              </ul>
            </div>

            {/* Vision Politique */}
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Notre Vision Politique
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Le Bloc Républicain s'engage pour une société plus juste et
                équitable. Nous défendons une gouvernance basée sur la
                transparence et la participation citoyenne. Notre ambition est
                de bâtir un avenir où chaque citoyen trouve sa place, où
                l'éducation et la santé sont accessibles à tous, et où le
                développement économique respecte nos valeurs culturelles et
                environnementales.
              </p>
            </div>
          </div>
          <p className="text-3xl font-extrabold text-center tracking-wide uppercase mt-10">
            <span className="text-green-600">Plus unis,</span>{" "}
            <span className="text-yellow-500">plus forts</span>{" "}
            <span className="text-red-600">pour construire le Bénin</span>
          </p>
        </div>
      </section>

      {/* Projets en Cours - Section Premium */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-8 shadow-lg">
              <svg
                className="w-6 h-6 text-blue-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
                Projets Prioritaires 2024-2025
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
              Nos Réalisations
              <br />
              <span className="text-blue-600">en Cours</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez les initiatives concrètes et ambitieuses que nous menons
              pour
              <span className="font-semibold text-blue-700">
                {" "}
                transformer notre arrondissement
              </span>{" "}
              et créer un impact durable sur la qualité de vie de tous nos
              citoyens.
            </p>
          </div>

          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((projet) => {
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

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-block">
              <Link
                to="/projets"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10 mr-3">
                  Explorer tous nos projets
                </span>
                <div className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* CSS for animations */}
        <style jsx="true">{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Activités et Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mes Activités et Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un aperçu de mes principales activités au service des citoyens de
              l'arrondissement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: "#AACDF6" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Audiences Publiques
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Rencontres mensuelles avec les citoyens pour écouter leurs
                préoccupations
              </p>
              <div className="font-bold text-lg" style={{ color: "#AACDF6" }}>
                Chaque 1er samedi
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: "#AACDF6" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-14 0H3m2 0h2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10M9 7h6m-6 4h6m-6 4h6"
                  />
                </svg>
              </div>
              <Link to="/conseils">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Conseils d'arrondissement
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Animation des conseils de quartier pour une gestion
                  participative
                </p>
                <div className="font-bold text-lg" style={{ color: "#AACDF6" }}>
                  29 quartiers
                </div>
              </Link>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: "#AACDF6" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Suivi de Projets
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Supervision directe de tous les projets de développement
              </p>
              <div className="font-bold text-lg" style={{ color: "#AACDF6" }}>
                6 projets actifs
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: "#AACDF6" }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partenariats
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Collaboration avec ONG et secteur privé pour maximiser l'impact
              </p>
              <div className="font-bold text-lg" style={{ color: "#AACDF6" }}>
                25+ partenaires
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Récentes 
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dernières Actualités
              </h2>
              <p className="text-xl text-gray-600">
                Restez informé de nos dernières réalisations et annonces
                importantes.
              </p>
            </div>
            <Link
              to="/actualites"
              className="hidden md:inline-flex items-center px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "#AACDF6" }}
            >
              Toutes les actualités
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                category={item.category}
                href={`/actualites/${item.id}`}
                className="hover:shadow-2xl transition-all duration-300"
              />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              to="/actualites"
              className="inline-flex items-center px-8 py-4 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "#AACDF6" }}
            >
              Toutes les actualités
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>*/}

      {/* Call to Action Final */}
      <section className="py-20 relative overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/eLsVFBf.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white rounded-full"></div>
        </div>

        {/* Contenu */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            Ensemble, Construisons l'Avenir de Notre Arrondissement
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Votre voix compte. Participez à nos initiatives, partagez vos idées
            et contribuons ensemble à bâtir un arrondissement moderne, prospère
            et équitable pour tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Prendre Contact
            </Link>
            <Link
              to="/"
              className="px-10 py-5 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Participer aux Audiences
            </Link>
            <Link
              to="/projets"
              className="px-10 py-5 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Soutenir nos Projets
            </Link>
          </div>
        </div>
      </section>

      {/* Modal pour les détails des projets */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div
              className="p-8 text-white rounded-t-2xl"
              style={{ backgroundColor: "#AACDF6" }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-gray-200 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-lg opacity-90">
                {selectedProject.description}
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#AACDF6" }}
                  >
                    {selectedProject.progress}%
                  </div>
                  <div className="text-gray-600 font-medium">Progression</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#AACDF6" }}
                  >
                    {selectedProject.status}
                  </div>
                  <div className="text-gray-600 font-medium">Statut</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold text-gray-700">
                    Budget Total:
                  </span>
                  <span className="font-bold text-xl text-gray-900">
                    {selectedProject.budget}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold text-gray-700">
                    Bénéficiaires:
                  </span>
                  <span
                    className="font-bold text-xl"
                    style={{ color: "#AACDF6" }}
                  >
                    {selectedProject.beneficiaires}
                  </span>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div
                  className="h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${selectedProject.progress}%`,
                    backgroundColor: "#AACDF6",
                  }}
                ></div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
