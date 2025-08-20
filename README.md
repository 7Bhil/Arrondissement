# Site Officiel du Chef d'Arrondissement

Un site web moderne et responsive développé avec React, Vite et TailwindCSS pour présenter les activités, projets et services d'un chef d'arrondissement.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide et moderne
- **React Router Dom** - Navigation côté client
- **TailwindCSS** - Framework CSS utilitaire
- **Yarn** - Gestionnaire de paquets

## 📦 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- Yarn (version 1.22.22 recommandée)

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone <url-du-repository>
cd chef-arrondissement-site
```

2. **Installer les dépendances**
```bash
yarn install
```

3. **Configurer les variables d'environnement**
```bash
# Créer un fichier .env à la racine du projet
cp .env.example .env
```

4. **Démarrer le serveur de développement**
```bash
yarn dev
```

Le site sera accessible sur `http://localhost:3000`

## 🛠️ Scripts Disponibles

```bash
# Démarrer le serveur de développement
yarn dev

# Construire pour la production
yarn build

# Prévisualiser la version de production
yarn preview

# Vérifier le code avec ESLint
yarn lint
```

## 📁 Structure du Projet

```
src/
├── assets/          # Ressources statiques (images, icons, etc.)
├── components/      # Composants réutilisables
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   └── Banner.jsx
├── pages/          # Pages de l'application
│   ├── Home.jsx
│   ├── About.jsx
│   ├── News.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── contexts/       # Contextes React pour la gestion d'état
│   └── AppContext.jsx
├── services/       # Services API et logique métier
│   └── api.js
├── utils/          # Fonctions utilitaires
│   ├── constants.js
│   └── helpers.js
├── App.jsx         # Composant principal
├── main.jsx        # Point d'entrée de l'application
└── index.css       # Styles globaux avec TailwindCSS
```

## 🎨 Fonctionnalités

### Pages Disponibles

- **Accueil** (`/`) - Bannière du chef d'arrondissement, services, actualités récentes
- **À Propos** (`/a-propos`) - Mission, vision, équipe, historique
- **Actualités** (`/actualites`) - Liste des actualités avec filtres par catégorie
- **Projets** (`/projets`) - Projets en cours, planifiés et terminés avec détails
- **Contact** (`/contact`) - Formulaire de contact, informations pratiques

### Composants Réutilisables

- **Header** - Navigation responsive avec menu mobile
- **Footer** - Informations de contact et liens utiles
- **Card** - Composant pour afficher actualités et projets
- **Banner** - Bannière héroïque avec image de fond

### Fonctionnalités Avancées

- Design responsive (mobile, tablette, desktop)
- Navigation fluide avec React Router
- Gestion d'état centralisée avec Context API
- Formulaires interactifs avec validation
- Système de notifications
- Thème clair/sombre (préparé)
- Support multilingue (préparé)

## 🎯 Configuration TailwindCSS

Le projet utilise une configuration TailwindCSS personnalisée avec :

- Palette de couleurs `primary` et `secondary`
- Classes utilitaires personnalisées (`.btn-primary`, `.btn-secondary`)
- Police personnalisée (Inter)
- Breakpoints responsive

## 📱 Responsive Design

Le site est entièrement responsive avec :

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Configuration Vite

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

## 📈 Déploiement

### Build de Production

```bash
yarn build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Déploiement sur Netlify

1. Connecter le repository GitHub à Netlify
2. Configurer les paramètres :
   - Build command: `yarn build`
   - Publish directory: `dist`
3. Variables d'environnement si nécessaire

### Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

## 🌍 Variables d'Environnement

Créer un fichier `.env` avec :

```env
VITE_API_URL=http://localhost:3001/api
VITE_SITE_NAME="Chef d'Arrondissement"
VITE_CONTACT_EMAIL=contact@chef-arrondissement.bj
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Conventions de Code

- Utiliser ESLint pour la consistance du code
- Nommer les composants en PascalCase
- Utiliser des noms descriptifs pour les variables et fonctions
- Commenter les fonctions complexes
- Suivre les bonnes pratiques React (hooks, état, props)

## 🐛 Résolution de Problèmes

### Erreurs Communes

1. **Port déjà utilisé**
```bash
# Changer le port dans vite.config.js ou
yarn dev --port 3001
```

2. **Erreurs de dépendances**
```bash
# Supprimer node_modules et yarn.lock puis réinstaller
rm -rf node_modules yarn.lock
yarn install
```

3. **Problèmes TailwindCSS**
```bash
# Vérifier que PostCSS est configuré correctement
# Redémarrer le serveur de développement
```

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :

- Email: dev@chef-arrondissement.bj
- GitHub Issues: [Créer un issue](https://github.com/username/repo/issues)

---

**Développé avec ❤️ pour servir la communauté**