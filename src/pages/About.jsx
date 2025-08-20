import Banner from "../components/Banner";
import achievements from "../data/achievements";
import teamMembers from "../data/teamMembers";

const About = () => {
  return (
    <div>
      {/* Banner */}
      <Banner
        title="À Propos de Nous"
        subtitle="Notre Mission"
        description="Découvrez notre vision, notre mission et notre engagement envers le développement de notre arrondissement."
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        height="h-96"
        textAlign="center"
      />

      {/* Mission et Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Servir notre communauté avec dévouement, transparence et
                efficacité en mettant en œuvre des politiques et projets qui
                améliorent la qualité de vie de tous nos citoyens.
              </p>
              <p className="text-gray-600 mb-8">
                Nous nous engageons à promouvoir le développement durable,
                l'inclusion sociale et la participation citoyenne dans tous nos
                programmes et initiatives.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Développement des infrastructures de base
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Amélioration de l'accès à l'éducation et à la santé
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Promotion de l'entrepreneuriat et de l'emploi
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Faire de notre arrondissement un modèle de développement
                participatif, durable et inclusif, où chaque citoyen peut
                s'épanouir et contribuer au bien-être collectif.
              </p>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Nos Valeurs
                </h3>
                <ul className="space-y-2 text-primary-800">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Transparence et bonne gouvernance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Participation citoyenne</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Équité et justice sociale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Développement durable</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Innovation et excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Réalisations en Chiffres
            </h2>
            <p className="text-lg text-gray-600">
              Des résultats concrets au service de notre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe expérimentée et dévouée, engagée pour le développement
              de notre arrondissement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-600">
              Un parcours de développement et de service communautaire
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-8">
              <div className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      2020 - Prise de Fonction
                    </h3>
                    <p className="text-gray-600">
                      Début du mandat avec l'engagement de transformer
                      l'arrondissement en un modèle de développement
                      participatif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      2021-2022 - Premiers Projets
                    </h3>
                    <p className="text-gray-600">
                      Lancement des premiers grands projets d'infrastructure et
                      mise en place des programmes sociaux prioritaires.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      2023-2024 - Expansion
                    </h3>
                    <p className="text-gray-600">
                      Extension des services à tous les quartiers et
                      renforcement de la participation citoyenne dans la prise
                      de décision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      2025 - Consolidation
                    </h3>
                    <p className="text-gray-600">
                      Consolidation des acquis et lancement de nouveaux projets
                      ambitieux pour l'avenir de notre arrondissement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
