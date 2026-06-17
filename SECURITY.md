# Seguridad y privacidad del portafolio

## Archivos que no deben subirse

Este proyecto ignora archivos sensibles o privados:

- `.env.local` y cualquier `.env.*`
- `Certificados/`
- `Certificados.zip`
- PDFs originales de certificados en `public/certificates/pdf/`
- documentos de brief y CV fuente en la raíz
- `private/`, `node_modules/` y `dist/`

## Formulario de contacto

El endpoint de Formspree se configura en `.env.local`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/tu_codigo
```

No subas `.env.local`. En Vercel, Netlify u otro hosting, configura esa variable desde el panel de Environment Variables.

## Certificados

Los certificados visibles en internet pueden descargarse o capturarse aunque no exista un botón de descarga. Antes de publicar el sitio:

- usa versiones con marca de agua;
- oculta códigos, QR o IDs sensibles si lo consideras necesario;
- no publiques originales sin protección;
- mantén el repositorio privado hasta terminar esa revisión.

## Recomendación para GitHub

Crear el repositorio como **private** al inicio. Puedes hacerlo público después de:

- revisar CV y datos personales;
- reemplazar certificados por versiones con marca de agua;
- confirmar que `.env.local` no está en Git;
- probar el formulario con variables de entorno del hosting.
