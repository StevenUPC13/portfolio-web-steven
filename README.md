# Portafolio Web - Steven J. Marquez Rios

Portafolio personal moderno construido con React, Vite, Tailwind CSS y Framer Motion. Presenta perfil profesional, proyectos, habilidades, experiencia academica, certificados en PDF, CV y contacto.

## Tecnologias

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

Si estas usando PowerShell y aparece un error con `npm.ps1`, usa `npm.cmd`:

```bash
npm.cmd run dev
npm.cmd run build
```

## Estructura editable

- `src/data/projects.js`: proyectos, estados, tecnologias y futuros links.
- `src/data/certificates.js`: certificados, categorias y rutas PDF.
- `src/data/skills.js`: habilidades y barras visuales.
- `src/data/experience.js`: timeline academico/profesional.
- `src/data/socialLinks.js`: correo, telefono, WhatsApp, LinkedIn y CV.

## Certificados

Los certificados se visualizan como PDF dentro de un modal. La carpeta `Certificados/` se mantiene como fuente local privada, mientras que `public/certificates/pdf/` contiene las versiones publicables con marca de agua.

Lee [SECURITY.md](./SECURITY.md) antes de subir el repositorio o desplegar.

## CV

El CV publico se sirve desde `public/cv/steven-marquez-cv.pdf`. La web permite verlo en modal y descargarlo.
