# 🌍 Wht?Country

**What Country** is a React-based web application built with **Vite**, **Tailwind CSS**, and **TypeScript** that lets users explore detailed information about countries around the world using the [Rest Countries API](https://restcountries.com/v3.1).

---

## 🚀 Features

- 🔍 **Search by Country Name**: Find detailed information about a specific country.
- 🌐 **All Countries Overview**: Browse a complete list of countries with their flags and basic details.
- 📜 **Country Details Modal**: View in-depth information, including population, region, borders, languages, and more.
- 🎨 **Dark Mode Support**: Tailwind's dark mode ensures a seamless UI experience.

---

## 🛠 Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AbuDzarAlGhifari/country-tsx.git
   cd country-tsx
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open the app**:

   The app will be running at [http://localhost:5173](http://localhost:5173).

---

## 📦 Project Structure

```plaintext
├── public/
├── src/
│   ├── assets/                # Images, SVGs, icons
│   ├── component/             # Reusable components
│   │   ├── CardCountry.tsx    # Displays country information in a card
│   │   ├── Filter.tsx         # Country filter by region
│   │   ├── ModalDetail.tsx    # Modal for detailed country information
│   │   ├── SearchBar.tsx      # Search bar for countries
│   │   ├── SkeletonCard.tsx   # Skeleton loader for country cards
│   │   ├── ThemeToggle.tsx    # Dark/light theme toggle
│   ├── pages/                 # Pages of the application
│   │   ├── Home.tsx           # Home page for listing countries
│   ├── types/                 # TypeScript type definitions
│   │   ├── country.d.ts       # Country-related types
│   ├── utils/                 # Utility functions or API handling
│   │   ├── api.ts             # API functions for fetching data
│   │   ├── vite-env.d.ts      # Environment type definitions
│   ├── App.tsx                # Root component of the app
│   ├── index.css              # Global CSS
│   ├── main.tsx               # Application entry point
├── index.html                 # Main HTML file
├── package.json               # Project dependencies and scripts
├── postcss.config.cjs         # PostCSS configuration for Tailwind
├── README.md                  # Project documentation
├── tailwind.config.js         # Tailwind CSS configuration
```

---

## 🔧 Configuration

### API Endpoints

This project uses the [Rest Countries API](https://restcountries.com/v3.1):

- **Get all countries**: `/all`
- **Get country by name**: `/name/{name}`

Update the base API URL in `services/api.ts` if needed:

```typescript
const API_URL = 'https://restcountries.com/v3.1';
```

---

## 🎨 Styling

- **Tailwind CSS** is used for all styling.
- Customizations can be made in `tailwind.config.js`.
- Dark mode support is already integrated and switches automatically based on user preferences.

---

## 🛡️ Available Scripts

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

Feel free to contribute, suggest new features, or report issues! 🎉
