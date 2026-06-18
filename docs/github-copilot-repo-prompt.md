# Prompt para ordenar repositorios con GitHub Copilot

Usa este prompt dentro de cada repositorio de GitHub con Copilot Chat:

```text
Actua como un senior frontend/backend engineer y technical writer. Quiero que ordenes este repositorio para que se vea profesional en GitHub y sea presentable dentro de mi portafolio.

Objetivo:
- Mejorar la estructura del repositorio sin romper el proyecto.
- Crear o mejorar un README.md profesional.
- Documentar instalacion, uso local, build, deploy, tecnologias, funcionalidades, capturas y estado del proyecto.
- Mantener un estilo claro, directo y orientado a reclutadores o evaluadores tecnicos.

Tareas:
1. Analiza la estructura actual del proyecto y detecta el stack usado.
2. Propone una estructura ordenada de carpetas si hace falta, pero evita refactors innecesarios.
3. Crea o mejora README.md con estas secciones:
   - Titulo del proyecto
   - Descripcion breve
   - Demo en vivo
   - Capturas o preview
   - Tecnologias usadas
   - Funcionalidades principales
   - Arquitectura o estructura del proyecto
   - Instalacion local
   - Variables de entorno, si aplica, usando .env.example sin secretos
   - Scripts disponibles
   - Roadmap o mejoras futuras
   - Autor
4. Si falta .gitignore, agrega uno adecuado al stack.
5. Si hay variables sensibles, crea .env.example y asegura que .env.local o .env no se suban.
6. Si el proyecto tiene frontend, verifica que los comandos de desarrollo y build funcionen.
7. Si el proyecto puede desplegarse, agrega instrucciones para Vercel, Netlify, GitHub Pages o el hosting que corresponda.
8. Sugiere badges utiles para README, por ejemplo React, JavaScript, Python, Vite, Tailwind, Supabase, etc.
9. Revisa nombres de archivos, titulos y textos para que se vean profesionales.
10. Antes de cambiar codigo importante, explicame brevemente el plan y luego aplica cambios pequenos y seguros.

Contexto de portafolio:
Mi nombre es Steven J. Marquez Rios. Soy estudiante de Ingenieria de Sistemas de Informacion, enfocado en desarrollo web, UX/UI, datos, soporte TI y soluciones digitales.

No inventes datos. Si falta un link de demo, deja un placeholder claro como "Demo pendiente". Si falta una captura, crea una seccion indicando donde agregarla.
```
