import { useState } from "react";
import Banner from "../components/Banner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error.text);
        setSubmitStatus("error");
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Adresse",
      details: [
        "Premier Arrondissement",
        "Porto-Novo, Ouémé",
        "République du Bénin",
      ],
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Téléphone",
      details: [
        "+229 01 97 57 96 66 (Bureau)",
        "+229 01 97 57 96 66 (Mobile)",
        "Urgences: +229 01 97 57 96 66",
      ],
    },
    {
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      details: [
        "7bhilal.chitou7@gmail.com",
        "7bhilal.chitou7@gmail.com",
        "7bhilal.chitou7@gmail.com",
      ],
    },
    {
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 8h00 - 17h30",
        "Samedi: 8h00 - 12h00",
        "Dimanche: Fermé",
        "Urgences: 24h/24",
      ],
    },
  ];

  const services = [
    {
      title: "Service État Civil",
      description: "Actes de naissance, mariage, décès",
      icon: "📋",
    },
    {
      title: "Service Urbanisme",
      description: "Permis de construire, certificats d'urbanisme",
      icon: "🏗️",
    },
    {
      title: "Service Social",
      description: "Aide sociale, programmes d'assistance",
      icon: "🤝",
    },
    {
      title: "Service Économique",
      description: "Soutien aux entreprises, marchés publics",
      icon: "💼",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <Banner
        title="Contactez-Nous"
        subtitle="Nous Sommes À Votre Écoute"
        description="N'hésitez pas à nous contacter pour toute question, suggestion ou demande d'information."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        height="h-80"
        textAlign="center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Informations de contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {info.title}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                {info.details.map((detail, idx) => (
                  <div key={idx}>{detail}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Envoyez-nous un Message
            </h2>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Votre message a été envoyé avec succès ! Nous vous répondrons
                  dans les plus brefs délais.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+229 XX XX XX XX"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="plainte">Plainte ou réclamation</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="projet">Question sur un projet</option>
                  <option value="service">Demande de service</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </div>
                ) : (
                  "Envoyer le Message"
                )}
              </button>
              {/**Message pour echec ou sucess */}
              {submitStatus === "success" && (
                <p className="text-green-600 text-center font-medium">
                  ✅ Message envoyé avec succès !
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center font-medium">
                  ❌ Une erreur est survenue, réessayez.
                </p>
              )}
            </form>
          </div>

          {/* Services et informations */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos Services
            </h2>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-2xl">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carte */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <a className="w-12 h-12 m-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1957945187996!2d2.6262793758848817!3d6.496878323470297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b5a0555555555%3A0xfe49b3d92e20fadc!2sagbokou!5e0!3m2!1sfr!2sbj!4v1755656256182!5m2!1sfr!2sbj"
                    width="550"
                    height="255"
                    style={{ borderRadius: 10 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Heures d'ouverture spéciales */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Informations Importantes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-3">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Réponse Rapide
              </h4>
              <p className="text-sm text-gray-600">
                Nous répondons à vos messages dans les 24h ouvrables
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-3">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Confidentialité
              </h4>
              <p className="text-sm text-gray-600">
                Vos informations personnelles sont protégées
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-3">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Service Personnalisé
              </h4>
              <p className="text-sm text-gray-600">
                Chaque demande est traitée avec attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
