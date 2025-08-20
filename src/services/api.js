/**
 * Service API pour les appels HTTP
 */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

// Configuration par défaut pour fetch
const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Fonction utilitaire pour les requêtes HTTP
const fetchWithConfig = async (url, options = {}) => {
  const config = {
    ...defaultOptions,
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Services pour les actualités
export const newsService = {
  // Récupérer toutes les actualités
  getAll: () => fetchWithConfig("/news"),

  // Récupérer une actualité par ID
  getById: (id) => fetchWithConfig(`/news/${id}`),

  // Récupérer les actualités par catégorie
  getByCategory: (category) => fetchWithConfig(`/news?category=${category}`),

  // Récupérer les actualités récentes
  getRecent: (limit = 5) =>
    fetchWithConfig(`/news?limit=${limit}&sort=date_desc`),

  // Créer une nouvelle actualité (admin)
  create: (newsData) =>
    fetchWithConfig("/news", {
      method: "POST",
      body: JSON.stringify(newsData),
    }),

  // Mettre à jour une actualité (admin)
  update: (id, newsData) =>
    fetchWithConfig(`/news/${id}`, {
      method: "PUT",
      body: JSON.stringify(newsData),
    }),

  // Supprimer une actualité (admin)
  delete: (id) =>
    fetchWithConfig(`/news/${id}`, {
      method: "DELETE",
    }),
};

// Services pour les projets
export const projectService = {
  // Récupérer tous les projets
  getAll: () => fetchWithConfig("/projects"),

  // Récupérer un projet par ID
  getById: (id) => fetchWithConfig(`/projects/${id}`),

  // Récupérer les projets par statut
  getByStatus: (status) => fetchWithConfig(`/projects?status=${status}`),

  // Récupérer les projets par catégorie
  getByCategory: (category) =>
    fetchWithConfig(`/projects?category=${category}`),

  // Récupérer les projets en cours
  getInProgress: () => fetchWithConfig("/projects?status=En cours"),

  // Créer un nouveau projet (admin)
  create: (projectData) =>
    fetchWithConfig("/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
    }),

  // Mettre à jour un projet (admin)
  update: (id, projectData) =>
    fetchWithConfig(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(projectData),
    }),

  // Supprimer un projet (admin)
  delete: (id) =>
    fetchWithConfig(`/projects/${id}`, {
      method: "DELETE",
    }),
};

// Services pour les contacts
export const contactService = {
  // Envoyer un message de contact
  sendMessage: (messageData) =>
    fetchWithConfig("/contact", {
      method: "POST",
      body: JSON.stringify(messageData),
    }),

  // S'inscrire à la newsletter
  subscribeNewsletter: (email) =>
    fetchWithConfig("/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),

  // Se désinscrire de la newsletter
  unsubscribeNewsletter: (email) =>
    fetchWithConfig("/newsletter/unsubscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),
};

// Services pour les statistiques
export const statsService = {
  // Récupérer les statistiques générales
  getGeneral: () => fetchWithConfig("/stats/general"),

  // Récupérer les statistiques des projets
  getProjects: () => fetchWithConfig("/stats/projects"),

  // Récupérer les statistiques démographiques
  getDemographics: () => fetchWithConfig("/stats/demographics"),
};

// Services pour l'upload de fichiers
export const uploadService = {
  // Upload d'une image
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    return fetch(`${API_BASE_URL}/upload/image`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  },

  // Upload d'un document
  uploadDocument: async (file) => {
    const formData = new FormData();
    formData.append("document", file);

    return fetch(`${API_BASE_URL}/upload/document`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  },
};

// Service d'authentification (pour l'administration)
export const authService = {
  // Connexion
  login: (credentials) =>
    fetchWithConfig("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  // Déconnexion
  logout: () =>
    fetchWithConfig("/auth/logout", {
      method: "POST",
    }),

  // Vérifier le token
  verifyToken: () => fetchWithConfig("/auth/verify"),

  // Rafraîchir le token
  refreshToken: () =>
    fetchWithConfig("/auth/refresh", {
      method: "POST",
    }),
};

// Export par défaut avec tous les services
export default {
  news: newsService,
  projects: projectService,
  contact: contactService,
  stats: statsService,
  upload: uploadService,
  auth: authService,
};
