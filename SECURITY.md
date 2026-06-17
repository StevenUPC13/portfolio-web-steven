# Seguridad y privacidad del portafolio

## Archivos que no deben subirse

Este proyecto ignora archivos sensibles o privados:

- `.env.local` y cualquier `.env.*`
- `Certificados/`
- `Certificados.zip`
- documentos de brief y CV fuente en la raiz
- `private/`, `node_modules/` y `dist/`

## Formulario de contacto

El endpoint de Formspree se configura en `.env.local`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/tu_codigo
```

No subas `.env.local`. En Vercel, Netlify u otro hosting, configura esa variable desde el panel de Environment Variables.

## Certificados

Los certificados visibles en internet pueden descargarse o capturarse aunque no exista un boton de descarga. Antes de publicar el sitio:

- usa versiones con marca de agua;
- oculta codigos, QR o IDs sensibles si lo consideras necesario;
- no publiques originales sin proteccion;
- manten el repositorio privado hasta terminar esa revision.

La carpeta `Certificados/` queda como fuente local privada. Solo publica en `public/certificates/pdf/` los PDFs ya revisados y protegidos con marca de agua.

## Recomendacion para GitHub

Crear el repositorio como **private** al inicio. Puedes hacerlo publico despues de:

- revisar CV y datos personales;
- reemplazar certificados por versiones con marca de agua;
- confirmar que `.env.local` no esta en Git;
- probar el formulario con variables de entorno del hosting.
