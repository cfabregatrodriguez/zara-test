Proyecto Zara Este proyecto es una maqueta frontend basada en la web de Zara. Ha sido desarrollada como prueba técnica para demostrar habilidades en maquetación, animaciones y gestión de componentes.

<h3>Instrucciones para ejecutar el proyecto</h3>
Clonar el repositorio

git clone <URL_DEL_REPOSITORIO> cd <NOMBRE_DEL_PROYECTO> Instalar dependencias

npm install Ejecutar en modo desarrollo

npm run dev La aplicación se iniciará en http://localhost:5173 (o el puerto configurado por Vite).

Compilar para producción

npm run build Previsualizar la build

npm run preview

<h3>Decisiones técnicas tomadas</h3>

Framework: Se utilizó Vue 3 con Composition API para aprovechar la reactividad avanzada y la modularidad de componentes.

Gestor de paquetes: Vite como herramienta de build por su rapidez y soporte nativo de ES Modules.

Animaciones: Implementadas con GSAP y ScrollTrigger para conseguir efectos suaves y controlados al hacer scroll.

<h3>Componentización</h3>

Se crearon componentes reutilizables como ResponsiveImage, ScrollCarousel y GalleryGrid para mantener la estructura limpia y escalable.

Se pasó información dinámica mediante props para mayor flexibilidad.

Responsive Design: Se aplicaron media queries para una experiencia adaptada tanto en desktop como en mobile.

Gestión de imágenes: Las imágenes se cargan de forma responsiva para optimizar el rendimiento en diferentes resoluciones.

Scroll restoration y animaciones: Se aplicó una estrategia de refresco de ScrollTrigger para asegurar que las animaciones funcionen incluso al abrir en pestañas nuevas o tras el montaje dinámico de componentes.

<h3>Tiempo dedicado</h3>

Análisis y planteamiento: ~1h

Maquetación y estructura básica: ~3h

Animaciones y efectos: ~2h 30min

Ajustes responsive y pulido: ~1h 30min

Revisión y pruebas finales: ~1h

Total aproximado: ~9h

<h3>Notas adicionales</h3>
El proyecto está optimizado para ser visualmente similar a la referencia original de Zara Origins, pero no incluye lógica backend ni gestión de datos en tiempo real.

Requiere Node.js >= 18 para ejecutarse correctamente.
