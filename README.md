# Mon Portfolio

Ce projet est un portfolio moderne développé avec React, TypeScript et Vite, utilisant les dernières technologies web pour une expérience utilisateur optimale.

[disponible en ligne](https://rurueuh.fr/)

## 🚀 Technologies Utilisées

- **React 19** - Bibliothèque UI moderne
- **TypeScript** - Pour un code typé et plus robuste
- **Vite** - Outil de build ultra-rapide
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Pour des animations fluides
- **React Router DOM** - Gestion du routage
- **Shadcn/UI** - Composants UI réutilisables

## 🛠️ Prérequis

- Node.js (version LTS recommandée)
- npm

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/rurueuh/my-portfolio.git
cd my-portfolio
```

2. Installez les dépendances :
```bash
npm install
```

## 🚀 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run preview` - Prévisualise la version de production

## 🏗️ Structure du Projet

```
my-portfolio/
├── public/          # Fichiers statiques
├── src/             # Code source
├── components.json  # Configuration des composants
├── tailwind.config.js # Configuration Tailwind
├── vite.config.ts   # Configuration Vite
└── tsconfig.json    # Configuration TypeScript
```

## ⚙️ Configuration ESLint

Le projet utilise une configuration ESLint avancée avec :
- Support TypeScript
- Règles React spécifiques
- Vérification de type activée

Pour étendre la configuration ESLint, modifiez le fichier `eslint.config.js`.

## 🎨 Personnalisation

### Tailwind CSS

Le projet utilise Tailwind CSS pour le styling. La configuration peut être modifiée dans :
- `tailwind.config.js`
- `components.json` pour les composants shadcn/ui

### TypeScript

La configuration TypeScript est répartie dans plusieurs fichiers :
- `tsconfig.json` - Configuration de base
- `tsconfig.app.json` - Configuration spécifique à l'application
- `tsconfig.node.json` - Configuration pour l'environnement Node.js

---

Développé avec ❤️ en utilisant React + TypeScript + Vite
