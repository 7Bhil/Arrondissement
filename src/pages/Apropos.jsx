import React from "react";
import { Heart, GraduationCap, Palette, Building } from "lucide-react";
import image1 from "../assets/images/image1.jpg";

const Apropos = () => {
  // ===== SECTION MODIFIABLE : DONNÉES DU CHEF D'ARRONDISSEMENT =====
  const chefData = {
    name: "El Hadj Moubaracou LATIFU",
    title: "Chef du 1er Arrondissement de Porto-Novo",
    // Remplacer par l'URL de la vraie photo
    photo: image1,
    biography: [
      "Leader engagé pour le développement local du 1er arrondissement de Porto-Novo, El Hadj Moubaracou LATIFU œuvre quotidiennement pour l'amélioration des conditions de vie de ses concitoyens.",
      "Son action se concentre particulièrement sur le soutien à la santé communautaire, à l'éducation, à la culture et à l'insertion des jeunes dans la société.",
      "Parmi ses réalisations concrètes : le financement de cantines scolaires, l'accompagnement d'artistes locaux, l'amélioration de l'éclairage des quartiers et l'insertion des enfants dans des centres de formation professionnelle.",
    ],
    quote: " Plus unis, plus forts pour construire le Bénin ",
  };

  // ===== SECTION MODIFIABLE : VALEURS ET BADGES =====
  const values = [
    {
      label: "Solidarité",
      icon: Heart,
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      label: "Éducation",
      icon: GraduationCap,
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      label: "Culture",
      icon: Palette,
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      label: "Développement local",
      icon: Building,
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">À propos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Contenu principal - Layout responsive */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Photo et informations de base */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            {/* Photo du chef d'arrondissement */}
            <div className="relative">
              <img
                src={chefData.photo}
                alt={`Photo de ${chefData.name}`}
                className="w-64 h-64 rounded-full object-cover shadow-2xl ring-4 ring-white"
              />
              {/* Effet de décoration */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full opacity-20"></div>
            </div>

            {/* Nom et titre */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {chefData.name}
              </h3>
              <p className="text-xl text-gray-600 font-medium">
                {chefData.title}
              </p>
            </div>

            {/* Badges des valeurs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <span
                    key={index}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${value.color} transition-transform hover:scale-105`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {value.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Colonne droite : Biographie et citation */}
          <div className="space-y-8">
            {/* Biographie */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">
                Son engagement
              </h4>
              <div className="space-y-4">
                {chefData.biography.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Citation inspirante */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 text-4xl font-serif leading-none">
                  "
                </div>
                <div>
                  <blockquote className="text-xl italic text-gray-700 mb-4">
                    {chefData.quote}
                  </blockquote>
                  <cite className="text-gray-600 font-medium">
                    — {chefData.name}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section statistiques ou réalisations (optionnelle) */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <p className="text-gray-600">Années d'engagement</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <p className="text-gray-600">Projets réalisés</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
            <p className="text-gray-600">Familles accompagnées</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
