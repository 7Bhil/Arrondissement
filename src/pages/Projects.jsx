import { useState } from "react";
import Banner from "../components/Banner";
import allProjects from "../data/allProjects";

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const statuses = ["Tous", "En cours", "Planifié", "Terminé"];
  const categories = [
    "Toutes",
    "Santé",
    "Éducation",
    "Infrastructure",
    "Social",
    "Économie",
    "Environnement",
  ];

  const filteredProjects = allProjects.filter((project) => {
    const statusMatch =
      selectedStatus === "Tous" || project.status === selectedStatus;
    const categoryMatch =
      selectedCategory === "Toutes" || project.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours":
        return "bg-blue-100 text-blue-800";
      case "Planifié":
        return "bg-yellow-100 text-yellow-800";
      case "Terminé":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress > 0) return "bg-yellow-500";
    return "bg-gray-300";
  };

  return (
    <div>
      {/* Banner */}
      <Banner
        title="Nos Projets"
        subtitle="Développement Durable"
        description="Découvrez nos projets de développement qui transforment notre arrondissement et améliorent la qualité de vie de nos citoyens."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        height="h-80"
        textAlign="center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Statistiques des projets */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {allProjects.length}
            </div>
            <div className="text-sm text-gray-600">Total Projets</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {allProjects.filter((p) => p.status === "En cours").length}
            </div>
            <div className="text-sm text-gray-600">En Cours</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {allProjects.filter((p) => p.status === "Terminé").length}
            </div>
            <div className="text-sm text-gray-600">Terminés</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {allProjects.filter((p) => p.status === "Planifié").length}
            </div>
            <div className="text-sm text-gray-600">Planifiés</div>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Statut du projet
              </label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedStatus === status
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Catégorie
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Projets ({filteredProjects.length})
          </h2>
          <div className="text-sm text-gray-500">
            {selectedStatus !== "Tous" && `Statut: ${selectedStatus} • `}
            {selectedCategory !== "Toutes" && `Catégorie: ${selectedCategory}`}
          </div>
        </div>

        {/* Liste des projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Barre de progression */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progression</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(
                          project.progress
                        )} transition-all duration-300`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Détails du projet */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Budget:</span>
                      <div className="font-medium">{project.budget}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Durée:</span>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Début:</span>
                      <div className="font-medium">{project.startDate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Fin prévue:</span>
                      <div className="font-medium">{project.endDate}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">
                          Bénéficiaires:
                        </span>
                        <div className="font-medium text-primary-600">
                          {project.beneficiaries}
                        </div>
                      </div>
                      <button className="btn-primary text-sm">
                        Plus de détails
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-500">
              Aucun projet ne correspond aux critères sélectionnés.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
