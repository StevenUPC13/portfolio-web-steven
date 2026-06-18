# Guia de despliegue

Esta app esta construida con React + Vite. Puede desplegarse en Vercel, Netlify o servicios similares.

## Variables de entorno

Configura esta variable en el panel del hosting:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/tu_codigo
```

Esta variable no es una contrasena. Es el endpoint publico del formulario de contacto. En tu entorno local, usa el valor real dentro de `.env.local`; en produccion, copia ese mismo valor al panel del hosting.

Nunca coloques secretos reales en variables `VITE_`, porque Vite las expone en el navegador.

## Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Environment variable: `VITE_FORMSPREE_ENDPOINT`

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variable: `VITE_FORMSPREE_ENDPOINT`

## Antes de publicar

- Ejecuta `npm run build`.
- Confirma que `.env.local` no este en Git.
- Confirma que `Certificados/` y `Certificados.zip` no esten en Git.
- Revisa que los PDFs publicos en `public/certificates/pdf/` tengan marca de agua.
- Revisa que el CV publico en `public/cv/steven-marquez-cv.pdf` sea la version que quieres compartir.
