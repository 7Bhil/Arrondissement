/**
 * Utilitaires et fonctions d'aide pour l'application
 */

// Formater une date en français
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Formater une date relative (ex: "il y a 2 jours")
export const formatRelativeDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return 'Hier'
  if (diffDays <= 7) return `Il y a ${diffDays} jours`
  if (diffDays <= 30) return `Il y a ${Math.ceil(diffDays / 7)} semaines`
  return formatDate(dateString)
}

// Tronquer un texte
export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Slugifier un string (pour les URLs)
export const slugify = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9 -]/g, '') // Supprimer les caractères spéciaux
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-') // Supprimer les tirets multiples
    .trim('-') // Supprimer les tirets en début/fin
}

// Valider un email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Valider un numéro de téléphone béninois
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+229|00229)?[0-9]{8}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Formater un numéro de téléphone
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(?:\+?229)?(\d{2})(\d{2})(\d{2})(\d{2})$/)
  if (match) {
    return `+229 ${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }
  return phone
}

// Générer un ID aléatoire
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Debounce function pour les recherches
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Scroll vers un élément
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Copier du texte dans le presse-papiers
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback pour les anciens navigateurs
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    return true
  }
}

// Vérifier si on est sur mobile
export const isMobile = () => {
  return window.innerWidth < 768
}

// Obtenir la couleur d'un statut
export const getStatusColor = (status) => {
  const colors = {
    'En cours': 'bg-blue-100 text-blue-800',
    'Planifié': 'bg-yellow-100 text-yellow-800',
    'Terminé': 'bg-green-100 text-green-800',
    'Urgent': 'bg-red-100 text-red-800',
    'En attente': 'bg-gray-100 text-gray-800'
  }
  return colors[status] || 'bg-gray-100 text-gray-800'
}

// Calculer le pourcentage de progression
export const calculateProgress = (current, total) => {
  if (total === 0) return 0
  return Math.round((current / total) * 100)
}

// Formater un nombre avec des espaces pour les milliers
export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Obtenir l'initiale d'un nom pour les avatars
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
}