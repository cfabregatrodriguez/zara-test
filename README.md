<h1>Proyecto Zara</h1>

<p>Este proyecto es una maqueta frontend inspirada en la web de Zara. Ha sido desarrollada como prueba técnica para demostrar habilidades en maquetación, animaciones y código.</p>

<hr>

<h3>Instrucciones para ejecutar el proyecto</h3>

<ol>
  <li><strong>Clonar el repositorio</strong>
    <pre><code>git clone https://github.com/cfabregatrodriguez/zara-test.git
cd zara-test</code></pre>
  </li>

  <li><strong>Instalar dependencias</strong>
    <pre><code>npm install</code></pre>
  </li>

  <li><strong>Ejecutar en modo desarrollo</strong>
    <pre><code>npm run dev</code></pre>
    <p>La aplicación se iniciará en <a href="http://localhost:xxxx">http://localhost:xxxx</a> (o en el puerto configurado por Vite).</p>
  </li>

  <li><strong>Compilar para producción</strong>
    <pre><code>npm run build</code></pre>
  </li>

  <li><strong>Previsualizar la build</strong>
    <pre><code>npm run preview</code></pre>
  </li>
</ol>

<hr>

<h3>Decisiones técnicas</h3>
<ul>
  <li><strong>Framework:</strong> Vue 3 para aprovechar la reactividad y la modularidad de componentes.</li>
  <li><strong>Build tool:</strong> Vite por su rapidez y soporte nativo de ES Modules.</li>
  <li><strong>Sass:</strong> Preprocesador CSS para estilos más organizados.</li>
  
  <li><strong>GSAP:</strong> Para animaciones complejas y ScrollTrigger.</li>
  <li><strong>Swiper:</strong> Para carruseles táctiles responsivos.</li>

  <li><strong>Diseño responsive:</strong> Media queries para una experiencia optimizada en desktop y dispositivos móviles.</li>
  <li><strong>Componentización:</strong> Se han creado componentes reutilizables como <code>ResponsiveImage</code>, <code>ScrollCarousel</code> y <code>GalleryGrid</code> para mantener un código limpio y escalable.</li>
  <li><strong>Gestión de imágenes:</strong> Carga responsiva optimizada para diferentes resoluciones.</li>
  <li><strong>Animaciones persistentes:</strong> Estrategia de refresco de ScrollTrigger para asegurar el correcto funcionamiento incluso tras el montaje dinámico de componentes.</li>
</ul>

<hr>

<h3>Componentes principales</h3>
<ul>
  <li><code>ResponsiveImage</code>: Maneja imágenes adaptadas a distintos tamaños de pantalla.</li>
  <li><code>ScrollCarousel</code>: Carrusel horizontal con soporte táctil y efectos de transición.</li>
  <li><code>GalleryGrid</code>: Galería responsiva optimizada para diferentes resoluciones.</li>
</ul>

<hr>

<h3>Tiempo dedicado</h3>
<table>
  <thead>
    <tr>
      <th style="text-align: left;">Tarea</th>
      <th style="text-align: left;">Tiempo estimado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Análisis y planteamiento</td>
      <td>~1h</td>
    </tr>
    <tr>
      <td>Maquetación y estructura básica</td>
      <td>~3h</td>
    </tr>
    <tr>
      <td>Animaciones y efectos</td>
      <td>~2h 30min</td>
    </tr>
    <tr>
      <td>Ajustes responsive y pulido final</td>
      <td>~1h 30min</td>
    </tr>
    <tr>
      <td>Revisión y pruebas finales</td>
      <td>~1h</td>
    </tr>
    <tr>
      <th>Total aproximado</th>
      <th>~9h</th>
    </tr>
  </tbody>
</table>

<hr>

<h3>Notas adicionales</h3>
<p>
  El proyecto está optimizado para ser visualmente similar a la referencia original del mockup proporcionado por Zara.<br>
  No incluye lógica backend ni gestión de datos en tiempo real.<br>
  Requiere <strong>Node.js >= 18</strong> para ejecutarse correctamente.
</p>
