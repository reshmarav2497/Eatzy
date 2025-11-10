# Eatzy — Food Delivery Demo

Eatzy is a small demo food-delivery app built to showcase a responsive React frontend, reusable UI components, and a simple project structure you can extend with cart logic, authentication, and a backend API.

This README explains how to run, build, and extend the project and includes quick deployment suggestions you can add to your resume or portfolio.

---

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm start
```

Open http://localhost:1234 in your browser (Parcel's default).

3. Build for production

```powershell
npm run build
```

Build output will be placed in the `dist/` folder.

---

## Pages / Routes (frontend)

- `/` — Home (restaurant listing rendered by `MainComp` and `RestCard`).
- `/about` — About (app description).
- `/contact` — Contact (contact form & details).

Make sure routes are wired in `src/App.js` and that `react-router-dom` is installed.

---

## Project structure (high-level)

- `index.html` — root HTML file
- `package.json` — scripts & dependencies
- `src/App.js` — app root (where routing is configured)
- `src/components/` — UI components
- `src/utils/` — constants and mockData
- `src/App.css` — styling

---

## Wireframe
![alt text](image.png)
