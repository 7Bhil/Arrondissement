import { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import allNews from "../data/allNews";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const categories = [
    "Toutes",
    "Santé",
    "Éducation",
    "Infrastructure",
    "Social",
    "Économie",
  ];

  const filteredNews =
    selectedCategory === "Toutes"
      ? allNews
      : allNews.filter((item) => item.category === selectedCategory);

  const featuredNews = allNews.find((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <div>
      {/* Banner */}
      <Banner
        title="Actualités"
        subtitle="Restez Informé"
        description="Découvrez nos dernières réalisations, événements et initiatives pour le développement de l'arrondissement."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        height="h-80"
        textAlign="center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Article vedette */}
        {selectedCategory === "Toutes" && featuredNews && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">À la Une</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full font-medium">
                    {featuredNews.category}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">
                    {featuredNews.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredNews.description}</p>
                <button className="btn-primary self-start">
                  Lire la suite
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grille des actualités */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "Toutes"
                ? "Toutes les Actualités"
                : `Actualités - ${selectedCategory}`}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredNews.length} article{filteredNews.length > 1 ? "s" : ""}
            </div>
          </div>

          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  date={item.date}
                  category={item.category}
                  href={`/actualites/${item.id}`}
                  className="hover:transform hover:scale-105 transition-all duration-300"
                />
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
                Aucune actualité trouvée
              </h3>
              <p className="text-gray-500">
                Il n'y a pas d'actualités dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Restez Informé de Nos Actualités
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir les dernières
            actualités et mises à jour sur les projets de développement de notre
            arrondissement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button className="btn-primary whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
