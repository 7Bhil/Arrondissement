import { useState } from "react";
import {
  User,
  Heart,
  Users,
  Calendar,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react";

export default function ChefArrondissementPage() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Formation de 507 Relais Communautaires",
      subtitle: "Un engagement fort en faveur de la santé communautaire",
      date: "12-23 Août 2025",
      description:
        "La Direction Départementale de la Santé de l'Ouémé a procédé au lancement solennel de la formation de cinq cent sept (507) relais communautaires, un dispositif inédit destiné à renforcer la sensibilisation, la prévention et l'éducation sanitaire.",
      details: [
        "Formation dispensée du 12 au 17 et du 18 au 23 Août 2025",
        "Salle de conférence du Premier Arrondissement de Porto-Novo",
        "Initiative d'envergure pour la consolidation du système de santé de proximité",
        "Supervision éclairée d'El Hadj MOUBARACOU LATIFU",
      ],
      stats: {
        participants: 507,
        duree: "12 jours",
        impact: "Communautaire",
      },
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Campagne de Salubrité",
      subtitle: "Rendre mon cadre de vie propre",
      date: "Initiative continue",
      description:
        "Mobilisation des habitants, élus et acteurs locaux autour d'une vision partagée d'un cadre urbain plus propre, plus vert et plus vivant.",
      details: [
        "Engagement des quartiers et conseillers municipaux",
        "Actions de sensibilisation communautaire",
        "Vision inclusive du développement urbain",
        "Fédération des citoyens autour d'objectifs communs",
      ],
      stats: {
        participants: "Tous les quartiers",
        duree: "Permanente",
        impact: "Urbain",
      },
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Sensibilisation au Don de Sang",
      subtitle: "Mobilisation pour la santé publique",
      date: "Actions régulières",
      description:
        "Sensibilisation active aux enjeux de santé publique, notamment la promotion du don de sang volontaire auprès des populations.",
      details: [
        "Campagnes de sensibilisation ciblées",
        "Partenariat avec les structures de santé",
        "Mobilisation communautaire",
        "Promotion de la solidarité sanitaire",
      ],
      stats: {
        participants: "Population locale",
        duree: "Continue",
        impact: "Sanitaire",
      },
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src="/public/Photo1.jpeg"
                    alt="Moubaracou Latifu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Moubaracou Latifu
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Le Pilier Dynamique du Premier Arrondissement
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Porto-Novo, Bénin</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-indigo-600" />
                Un Leadership Inclusif au Service du Développement
              </h2>

              {/* Image de la formation des relais communautaires */}
              <div className="mb-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/public/Photo2.jpeg"
                    alt="Formation des 507 relais communautaires"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-white text-sm font-medium">
                        Formation de 507 Relais Communautaires
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Engagé et respecté,{" "}
                  <strong className="text-indigo-600">Moubaracou Latifu</strong>{" "}
                  incarne la figure clé de la gouvernance locale à Porto-Novo,
                  capitale administrative du Bénin. En tant que chef du premier
                  arrondissement, il œuvre sans relâche pour l'amélioration de
                  la qualité de vie des populations à travers des initiatives
                  majeures.
                </p>

                <p>
                  Porteur d'un dynamisme exemplaire, il mobilise habitants, élus
                  et acteurs locaux autour des campagnes de salubrité{" "}
                  <em className="text-purple-600 font-medium">
                    "Rendre mon cadre de vie propre"
                  </em>
                  et sensibilise activement aux enjeux de santé publique tels
                  que le don de sang.
                </p>

                <p>
                  Son action inclusive fédère les quartiers, les conseillers
                  municipaux et les citoyens dans une vision partagée d'un cadre
                  urbain plus propre, plus vert et plus vivant. Moubaracou
                  Latifu demeure ainsi un acteur incontournable, alliant
                  pragmatisme et ambition pour faire de Porto-Novo une ville
                  modèle de développement.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white sticky top-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/30">
                  <div className="w-full h-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-2xl font-bold">ML</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Moubaracou Latifu</h3>
                <p className="text-indigo-100 mb-6">
                  Chef du Premier Arrondissement
                  <br />
                  Porto-Novo
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Leadership Communautaire</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Engagement Social</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Vision de Développement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projets & Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les principales initiatives menées sous la supervision
              éclairée de Moubaracou Latifu pour le développement du Premier
              Arrondissement
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  activeProject === project.id ? "ring-4 ring-indigo-500" : ""
                }`}
                onClick={() =>
                  setActiveProject(
                    activeProject === project.id ? null : project.id
                  )
                }
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex-shrink-0 mb-6 lg:mb-0">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${
                          index === 0
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                            : index === 1
                            ? "bg-gradient-to-r from-green-500 to-emerald-600"
                            : "bg-gradient-to-r from-red-500 to-pink-600"
                        }`}
                      >
                        {project.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-lg text-indigo-600 font-medium mb-2">
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar className="w-5 h-5" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {project.stats.participants}
                          </div>
                          <div className="text-sm text-blue-800">
                            Participants
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {project.stats.duree}
                          </div>
                          <div className="text-sm text-green-800">Durée</div>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            {project.stats.impact}
                          </div>
                          <div className="text-sm text-purple-800">Impact</div>
                        </div>
                      </div>

                      {activeProject === project.id && (
                        <div className="bg-gray-50 rounded-xl p-6 animate-fadeIn">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Détails de l'initiative :
                          </h4>
                          <ul className="space-y-2">
                            {project.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={() =>
                          setActiveProject(
                            activeProject === project.id ? null : project.id
                          )
                        }
                        className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
                      >
                        {activeProject === project.id
                          ? "Voir moins"
                          : "Voir plus de détails →"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Un Acteur Incontournable du Développement Local
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Moubaracou Latifu demeure un leader qui allie pragmatisme et
            ambition pour faire de Porto-Novo une ville modèle de développement,
            témoignant de son engagement indéfectible pour l'épanouissement de
            ses administrés.
          </p>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 italic">
              "La supervision éclairée et l'engagement actif d'El Hadj
              MOUBARACOU LATIFU se présentent comme la preuve tangible que le
              développement local trouve toute sa force dans le leadership
              responsable et la vision humaniste des acteurs de proximité."
            </p>
            <p className="text-gray-500 mt-4">- Maxime LOGBO, Journaliste</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
