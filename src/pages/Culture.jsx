import React from "react";
import { Image } from "lucide-react";
import profile from "../assets/images/profile.jpeg";

const MoubaracouProfile = () => {
  // Configuration des données - facile à modifier/étendre
  const profileData = {
    name: "Moubaracou LATIFU",
    subtitle:
      "L'alliance de la foi et de l'action publique au service du Bloc Républicain",
    photo: profile, // Utilisation de l'importation de l'image
    tags: [
      "Chef du 1er arrondissement",
      "Conseiller municipal",
      "Président NASFAT Bénin",
    ],

    // Sections du contenu - tu peux facilement ajouter/modifier
    sections: [
      {
        id: "intro",
        type: "highlight",
        content:
          "Il est des trajectoires qui se distinguent par la singularité de leur empreinte. À Porto-Novo, Moubaracou LATIFU incarne cette nouvelle génération de leaders dont l'action conjugue spiritualité, discipline et engagement politique.",
      },
      {
        id: "leadership",
        type: "dual-cards",
        title: "Un leadership à double légitimité",
        cards: [
          {
            title: "Autorité religieuse",
            content:
              "En sa qualité de président de la section béninoise de la NASFAT, son autorité religieuse rejaillit sur sa posture politique, conférant à son leadership une double légitimité.",
            color: "blue",
          },
          {
            title: "Responsabilité politique",
            content:
              "Loin d'être un simple gestionnaire local, il se révèle comme un acteur structurant dans l'architecture politique de la capitale.",
            color: "green",
          },
        ],
      },
      {
        id: "vision",
        type: "priorities",
        title: "Une vision pragmatique du développement",
        quote:
          "La paix et l'ordre social sont les conditions premières du développement",
        priorities: [
          { name: "Sécurité publique", icon: "shield", color: "blue" },
          { name: "Assainissement urbain", icon: "heart", color: "green" },
          { name: "Éclairage public", icon: "light", color: "yellow" },
        ],
      },
      {
        id: "strategy",
        type: "text-with-list",
        title: "Une stratégie politique rassembleuse",
        content:
          "Au-delà de la gestion locale, son action révèle une stratégie politique plus vaste. En incarnant un leadership rassembleur, capable de faire dialoguer le religieux et le politique, Moubaracou LATIFU contribue à renforcer l'ancrage du Bloc Républicain dans Porto-Novo.",
        list: {
          title: "Capacités d'alliage :",
          items: [
            "Fédération des forces sociales dispersées",
            "Dialogue entre valeurs spirituelles et responsabilités institutionnelles",
            "Vecteur d'unité et de cohésion politique",
          ],
        },
      },
      {
        id: "legacy",
        type: "featured-quote",
        title: "Un modèle pour l'avenir",
        content:
          "Moubaracou LATIFU démontre que l'avenir politique de Porto-Novo et du Bénin ne saurait se réduire à de simples joutes partisanes. Il rappelle que la politique, lorsqu'elle est portée par la foi en des valeurs et le sens du bien commun, devient un instrument de transformation profonde.",
        highlight: "Un pilier d'enracinement local et de crédibilité politique",
      },
    ],

    attribution: "Le citoyen",
  };

  // Composants réutilisables pour différents types de sections
  const SectionComponents = {
    highlight: ({ content }) => (
      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
        <p
          className="text-lg text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    ),

    "dual-cards": ({ title, cards }) => (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600 rounded-full mr-4"></div>
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3
                className={`text-xl font-semibold text-${card.color}-800 mb-4`}
              >
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    priorities: ({ title, quote, priorities }) => (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-blue-600 rounded-full mr-4"></div>
          {title}
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {priorities.map((priority, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`w-16 h-16 bg-${priority.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <IconComponent icon={priority.icon} />
                </div>
                <h4 className={`font-semibold text-${priority.color}-800`}>
                  {priority.name}
                </h4>
              </div>
            ))}
          </div>
          <blockquote className="text-center text-lg italic text-gray-700 border-l-4 border-blue-600 pl-6">
            "{quote}"
          </blockquote>
        </div>
      </div>
    ),

    "text-with-list": ({ title, content, list }) => (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600 rounded-full mr-4"></div>
          {title}
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {content}
          </p>
          {list && (
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">{list.title}</h4>
              <ul className="space-y-2 text-gray-700">
                {list.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span
                      className={`w-2 h-2 bg-${
                        idx % 3 === 0
                          ? "blue"
                          : idx % 3 === 1
                          ? "green"
                          : "yellow"
                      }-600 rounded-full mt-2 mr-3 flex-shrink-0`}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    ),

    "featured-quote": ({ title, content, highlight }) => (
      <div className="bg-gradient-to-r from-blue-900 to-green-900 rounded-2xl text-white p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-lg leading-relaxed text-center mb-6">{content}</p>
        <div className="text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-lg font-semibold">"{highlight}"</span>
          </div>
        </div>
      </div>
    ),

    // Nouveau type pour ajouter du texte long avec image
    "text-with-image": ({ title, content, image, imagePosition = "left" }) => (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-green-600 rounded-full mr-4"></div>
          {title}
        </h2>
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 grid gap-8 ${
            imagePosition === "left"
              ? "md:grid-cols-[300px,1fr]"
              : "md:grid-cols-[1fr,300px]"
          }`}
        >
          {imagePosition === "left" && image && (
            <div className="order-1">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl"
              />
              {image.caption && (
                <p className="text-sm text-gray-500 mt-2 italic">
                  {image.caption}
                </p>
              )}
            </div>
          )}
          <div className={imagePosition === "left" ? "order-2" : "order-1"}>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </div>
          {imagePosition === "right" && image && (
            <div className="order-2">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl"
              />
              {image.caption && (
                <p className="text-sm text-gray-500 mt-2 italic">
                  {image.caption}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    ),
  };

  // Composant pour les icônes
  const IconComponent = ({ icon }) => {
    const icons = {
      shield: (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      heart: (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
      light: (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 10-2 0V3a1 1 0 10-2 0v1a1 1 0 10-2 0V3a1 1 0 10-2 0v7.268A2 2 0 001 12v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-1-1.732V3a1 1 0 10-2 0v1a1 1 0 10-2 0V3a1 1 0 10-2 0v1a1 1 0 10-2 0V3a1 1 0 10-2 0v1a1 1 0 10-2 0V3z" />
        </svg>
      ),
    };
    return icons[icon] || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              {profileData.photo ? (
                <img
                  src={profileData.photo}
                  alt={profileData.name}
                  className="w-64 h-64 rounded-full shadow-2xl border-4 border-white/20 object-cover"
                />
              ) : (
                <div className="w-64 h-64 bg-gray-300 rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center">
                  <span className="text-gray-600 text-sm text-center">
                    Photo de
                    <br />
                    {profileData.name}
                  </span>
                </div>
              )}
            </div>

            {/* Title and intro */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {profileData.name}
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-blue-100 font-light">
                {profileData.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {profileData.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {profileData.sections.map((section, idx) => {
          const Component = SectionComponents[section.type];
          return Component ? (
            <section key={section.id || `section-${idx}`} className="mb-16">
              <Component {...section} />
            </section>
          ) : null;
        })}

        {/* Footer Attribution */}
        <div className="text-center text-gray-500 text-sm italic">
          — {profileData.attribution}
        </div>
      </div>
    </div>
  );
};

export default MoubaracouProfile;
