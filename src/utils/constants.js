// Configuration et constantes de l'application
export const APP_CONFIG = {
  name: 'Chef d\'Arrondissement - Site Officiel',
  description: 'Site officiel du Chef d\'Arrondissement',
  version: '1.0.0',
  author: 'Administration Arrondissement'
}

// Routes de navigation
export const ROUTES = {
  HOME: '/',
  ABOUT: '/a-propos',
  NEWS: '/actualites',
  PROJECTS: '/projets',
  CONTACT: '/contact'
}

// Catégories pour les actualités et projets
export const CATEGORIES = {
  NEWS: ['Santé', 'Éducation', 'Infrastructure', 'Social', 'Économie'],
  PROJECTS: ['Santé', 'Éducation', 'Infrastructure', 'Social', 'Économie', 'Environnement']
}

// Statuts des projets
export const PROJECT_STATUS = {
  IN_PROGRESS: 'En cours',
  PLANNED: 'Planifié',
  COMPLETED: 'Terminé'
}

// Informations de contact
export const CONTACT_INFO = {
  address: {
    street: '123 Avenue Principale',
    district: 'Arrondissement Central',
    city: 'Cotonou, Littoral',
    country: 'République du Bénin'
  },
  phone: {
    office: '+229 21 XX XX XX',
    mobile: '+229 97 XX XX XX',
    emergency: '+229 95 XX XX XX'
  },
  email: {
    general: 'contact@chef-arrondissement.bj',
    projects: 'projets@chef-arrondissement.bj',
    emergency: 'urgences@chef-arrondissement.bj'
  },
  hours: {
    weekdays: 'Lundi - Vendredi: 8h00 - 17h00',
    saturday: 'Samedi: 8h00 - 12h00',
    sunday: 'Dimanche: Fermé',
    emergency: 'Urgences: 24h/24'
  }
}

// Réseaux sociaux
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  youtube: '#'
}

// Messages d'erreur et de succès
export const MESSAGES = {
  success: {
    contactForm: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    newsletter: 'Inscription à la newsletter réussie !',
    generic: 'Opération réussie !'
  },
  error: {
    contactForm: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
    newsletter: 'Erreur lors de l\'inscription. Veuillez réessayer.',
    network: 'Erreur de réseau. Vérifiez votre connexion.',
    generic: 'Une erreur est survenue. Veuillez réessayer.'
  },
  loading: {
    sending: 'Envoi en cours...',
    loading: 'Chargement...',
    processing: 'Traitement en cours...'
  }
}