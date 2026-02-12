# 🏦 JooBank - Modern Banking Application

A modern, responsive banking application built with React and Tailwind CSS. JooBank provides a sleek user interface for showcasing banking services, features, testimonials, and client partnerships.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Components](#components)

## 🎯 Overview

JooBank is a modern banking application that demonstrates a clean, professional UI for financial services. The application features a fully responsive design with smooth animations, gradient effects, and a component-based architecture. It showcases various banking features including rewards, security, balance transfers, billing information, and customer testimonials.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with gradient effects and smooth animations
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability
- **Hero Section**: Eye-catching landing section with discount offers and call-to-action
- **Statistics Dashboard**: Display key metrics and achievements
- **Business Features**: Showcase banking services and benefits
- **Billing & Card Management**: Information about payment methods and card deals
- **Client Testimonials**: Customer feedback and reviews section
- **Partner Showcase**: Display trusted partners and clients
- **Call-to-Action**: Engage users with strategic CTAs throughout the application

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React DOM](https://img.shields.io/badge/React_DOM-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.33.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Core Technologies

- **React 19.1.1** - Modern UI library for building user interfaces
- **React DOM 19.1.1** - React renderer for web applications
- **Vite 7.1.2** - Next-generation frontend build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **ESLint 9.33.0** - Code linting tool for maintaining code quality

### Development Tools

- **@vitejs/plugin-react** - Vite plugin for React support
- **@tailwindcss/vite** - Tailwind CSS integration with Vite
- **eslint-plugin-react-hooks** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** - ESLint plugin for React Fast Refresh

## 📁 Project Structure

```
JooBank/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar component
│   │   ├── Hero.jsx         # Hero section with discount banner
│   │   ├── Stats.jsx        # Statistics display
│   │   ├── Business.jsx     # Business features section
│   │   ├── Billing.jsx      # Billing information
│   │   ├── CardDeal.jsx     # Card deals section
│   │   ├── Testimonials.jsx # Customer testimonials
│   │   ├── Clients.jsx      # Client showcase
│   │   ├── CTA.jsx          # Call-to-action component
│   │   ├── Footer.jsx       # Footer component
│   │   └── ...              # Additional utility components
│   ├── assets/              # Images, icons, and static files
│   ├── Constants/           # Application constants and data
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   ├── style.js             # Shared style utilities
│   └── index.css            # Global styles and Tailwind configuration
├── public/                  # Public assets
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd JooBank
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Build the application for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview the production build locally |

## 🧩 Components

### Main Components

- **App.jsx** - Root component that orchestrates all sections of the application
- **Navbar** - Responsive navigation bar with mobile menu
- **Hero** - Landing section featuring discount offers and main heading
- **Stats** - Display key statistics and metrics
- **Business** - Showcase business features and benefits
- **Billing** - Billing and payment information section
- **CardDeal** - Credit card deals and offers
- **Testimonials** - Customer reviews and feedback
- **Clients** - Partner and client logos showcase
- **CTA** - Call-to-action sections for user engagement
- **Footer** - Footer with links and social media

### Styling

The application uses a combination of:
- **Tailwind CSS** utility classes for responsive design
- **Custom CSS** for gradients, animations, and special effects
- **Poppins font** from Google Fonts for typography
- **Shared style utilities** in `style.js` for consistent spacing and layouts

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient effects throughout the UI
- **Smooth Animations**: Hover effects and transitions for better UX
- **Responsive Breakpoints**: Optimized for all screen sizes
- **Modern Color Scheme**: Dark theme with accent colors
- **Typography**: Clean, readable Poppins font family

