# Portafolio Web - Steven J. Márquez Rios

Portafolio personal moderno construido con React, Vite, Tailwind CSS y Framer Motion. Presenta perfil profesional, proyectos, habilidades, experiencia académica, certificados en PDF, CV y contacto.

## Tecnologías

- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons
- tsParticles

## Comandos

```bash
npm install
npm run dev
npm run build
```

Si estás usando PowerShell y aparece un error con `npm.ps1`, usa `npm.cmd`:

```bash
npm.cmd run dev
npm.cmd run build
```

## Estructura editable

- `src/data/projects.js`: proyectos, estados, tecnologías y futuros links.
- `src/data/certificates.js`: certificados, categorías y rutas PDF.
- `src/data/skills.js`: habilidades y barras visuales.
- `src/data/experience.js`: timeline académico/profesional.
- `src/data/socialLinks.js`: correo, teléfono, WhatsApp, LinkedIn y CV.

## Certificados

Los certificados se visualizan como PDF dentro de un modal. Por seguridad, los PDFs originales sin marca de agua están ignorados por Git.

Para publicar certificados en producción, agrega versiones con marca de agua en `public/certificates/pdf/` manteniendo los mismos nombres de archivo.

Lee [SECURITY.md](./SECURITY.md) antes de subir el repositorio o desplegar.

## CV

El CV público se sirve desde `public/cv/steven-marquez-cv.pdf`. La web permite verlo en modal y descargarlo.
