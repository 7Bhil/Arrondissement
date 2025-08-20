import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import newsItems from "../data/newItems";
import projects from "../data/projects";

const Home = () => {
  return (
    <div>
      {/* Banner du Chef d'Arrondissement */}
      <Banner
        title="Ensemble pour un Arrondissement Prospère"
        subtitle="Chef d'Arrondissement"
        description="Œuvrant pour le développement durable et l'amélioration des conditions de vie de tous nos citoyens."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        height="h-[70vh]"
        textAlign="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projets" className="btn-primary">
            Découvrir nos Projets
          </Link>
          <Link
            to="/contact"
            className="btn-secondary bg-white text-gray-900 hover:bg-gray-100"
          >
            Nous Contacter
          </Link>
        </div>
      </Banner>

      {/* Message du Chef d'Arrondissement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Message du Chef d'Arrondissement
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Chers concitoyens, c'est avec un grand honneur que je vous
                accueille sur le site officiel de notre arrondissement.
                Ensemble, nous construisons un avenir meilleur pour nos familles
                et nos communautés.
              </p>
              <p className="text-gray-600 mb-8">
                Mon engagement est de servir avec transparence, efficacité et
                dévouement. Chaque projet que nous menons vise à améliorer votre
                quotidien et à créer des opportunités pour tous.
              </p>
              <Link to="/a-propos" className="btn-primary">
                En savoir plus
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1341347262/photo/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-table-for-meeting-in-office.jpg?s=612x612&w=0&k=20&c=Gb1cE6mv7uT4rkWHqdC-9il3XB_gFIIcx8Y8iELvaus="
                alt="Chef d'Arrondissement"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">
                  Au service de la communauté
                </p>
                <p className="text-xs">Depuis 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services et Réalisations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Domaines d'Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les principaux secteurs dans lesquels nous œuvrons pour
              améliorer la qualité de vie dans notre arrondissement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Éducation
              </h3>
              <p className="text-gray-600">
                Construction et rénovation d'écoles, programmes de formation
                pour les jeunes.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Santé
              </h3>
              <p className="text-gray-600">
                Amélioration de l'accès aux soins de santé, centres de santé
                communautaires.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Infrastructure
              </h3>
              <p className="text-gray-600">
                Développement des routes, éclairage public, assainissement et
                eau potable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Récentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Actualités Récentes
              </h2>
              <p className="text-gray-600">
                Restez informé de nos dernières réalisations et initiatives.
              </p>
            </div>
            <Link to="/actualites" className="btn-primary">
              Voir toutes les actualités
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projets en Cours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Projets en Cours
              </h2>
              <p className="text-gray-600">
                Découvrez nos initiatives pour le développement de
                l'arrondissement.
              </p>
            </div>
            <Link to="/projets" className="btn-primary">
              Voir tous les projets
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                className="border-l-4 border-primary-500"
              >
                <div className="flex items-center justify-between mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "En cours"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                  <Link
                    to="/projets"
                    className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Participez au Développement de Notre Arrondissement
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Votre participation est essentielle. Rejoignez-nous dans nos
            initiatives communautaires et contribuez à bâtir un avenir meilleur
            ensemble.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100"
            >
              Nous Contacter
            </Link>
            <Link
              to="/projets"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
            >
              Découvrir nos Projets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
