# Portafolio — Leidy Ferrer

Proyecto React (Vite) con el portafolio profesional.

## Cómo correrlo

1. Abre una terminal **dentro de esta carpeta** (`PortafolioLeidyFerrer`, la que tiene `package.json`).
2. Instala las dependencias:

   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```
   npm run dev
   ```

4. Abre en el navegador la dirección que muestre la terminal (normalmente `http://localhost:5173`).

## Publicarlo

Para generar la versión final lista para subir a un hosting (Netlify, Vercel, GitHub Pages, etc.):

```
npm run build
```

Esto genera una carpeta `dist/` con los archivos estáticos para publicar.

## Estructura

```
PortafolioLeidyFerrer/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    └── App.jsx   ← el componente del portafolio
```
