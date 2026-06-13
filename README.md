# Manifesting

> ⚠️ **Starter scaffold.** El repo solo tenía un README genérico; esto es una base
> que ya compila y tiene pruebas, sobre la que se construye la app real.

## Qué hace (por ahora)

Utilidades puras para una app de afirmaciones diarias:

- `addAffirmation(lista, texto)` → agrega una afirmación con id secuencial
  (función pura, devuelve una nueva lista).
- `affirmationOfTheDay(lista, fecha?)` → elige la "afirmación del día" de forma
  determinista (la misma fecha siempre da la misma).

**Propósito previsto** (según el nombre): app para manifestar ideas y metas
mediante afirmaciones. Esto es el primer ladrillo de la lógica.

## Para quién es

Base para una librería/app de afirmaciones y metas en TypeScript.

## Instalación

```bash
git clone https://github.com/giopark4444-commits/Manifesting.git
cd Manifesting
npm install
```

## Ejemplo de uso

```ts
import { addAffirmation, affirmationOfTheDay } from "./src/index";

let lista = addAffirmation([], "Hoy avanzo con calma");
lista = addAffirmation(lista, "Termino lo que empiezo");
affirmationOfTheDay(lista); // una del día, determinista
```

## Pruebas

```bash
npm test          # vitest run
npm run test:watch
```

## Stack

TypeScript · Vitest.
