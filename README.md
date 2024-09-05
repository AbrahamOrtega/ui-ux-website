# UI/UX Website

Este es un proyecto [Next.js](https://nextjs.org/) y [Tailwindcss](https://tailwindcss.com/) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Comenzando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

```plaintext
.eslintrc.json
.gitignore
.next/
app/
  components/
  globals.css
  layout.tsx
  page.tsx
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
public/
  assets/
README.md
tailwind.config.ts
tsconfig.json
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### [`npm run dev`]

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta [`build`]
Empaqueta React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm run start`

Inicia el servidor en modo de producción.

## Despliegue en Vercel

La forma más fácil de desplegar una aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.
