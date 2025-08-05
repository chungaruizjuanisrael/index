# Control de Empleados

Proyecto en React + TailwindCSS para gestionar empleados y asistencias.

Además se incluye un panel de administración estático en `admin-panel/index.html` construido solo con HTML, CSS y JavaScript. Todo el código está unificado en un único archivo, totalmente responsive para utilizarse tanto en dispositivos móviles como en equipos de escritorio. La exportación de asistencias desde este panel incluye también el área del empleado.

El dashboard del panel refleja en tiempo real los empleados activos por área, las asistencias del día y el total de personas en lista negra.

## Desarrollo

```bash
npm install
npm run dev
```

Los datos se almacenan en `localStorage` y pueden migrarse a un backend en el futuro.

