## Project description

This is a simple responsive React + TypeScript application that simulates a basic e-commerce-like flow. It includes:

A login screen with a fake login request returning a mock token.

A private home page that fetches and displays a list of 2000 products using a public API.

A logout button to clear the session and return to the login page.

Route protection to ensure access control between public and private views.

Token management using Zustand and persisted session storage.

Infinite scroll functionality to efficiently handle large data sets.

Built with responsive UI for both mobile and desktop views.

## Technologies Used

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [React.js](https://reactjs.org/) - Library for building user interfaces
- [React Router DOM](https://reactrouter.com/) - Declarative routing for React applications
- [Sass](https://sass-lang.com/) - CSS preprocessor for more powerful stylesheets
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) - State management.
- [Vite](https://vite.dev/) - CSS preprocessor for more powerful stylesheets
- [Husky](https://typicode.github.io/husky/) - conventional commits.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running the App Locally

To run the application locally, make sure you have Node.js installed. Then execute the following command:

```bash
npm i && npm run dev
```

## Running the App for production env.

To build the application execute the following command:

```bash
npm run build
```

## Demo deployed on Vercel

- [App demo](https://examen-tenpo.vercel.app/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
