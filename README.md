# Infinity Currency

Ett React-projekt byggt med Vite och TypeScript.

## Krav

- [Node.js](https://nodejs.org/) (version 18 eller senare)
- npm (följer med Node.js)

## Kom igång

1. **Installera beroenden:**

   ```bash
   npm install
   ```

2. **Starta utvecklingsservern:**

   ```bash
   npm run dev
   ```

   Öppna [http://localhost:5173](http://localhost:5173) i webbläsaren.

3. **Bygg för produktion:**

   ```bash
   npm run build
   ```

4. **Förhandsgranska produktion:**

   ```bash
   npm run preview
   ```

## Projektstruktur

```
├── public/          # Statiska filer
├── src/
│   ├── App.tsx      # Huvudkomponent
│   ├── App.css
│   ├── main.tsx     # Applikationsentry
│   ├── index.css    # Globala stilar
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Tillgängliga kommandon

| Kommando | Beskrivning |
|----------|-------------|
| `npm run dev` | Startar utvecklingsservern med hot reload |
| `npm run build` | Bygger appen för produktion |
| `npm run preview` | Förhandsgranskar produktionsbyggen |
| `npm run lint` | Kör ESLint |
