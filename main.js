document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     1) TAGCANVAS (Skills)
  ========================== */
  const canvas = document.getElementById('skillsCanvas');
  const skillTags = document.getElementById('skillTags');

  if (canvas && skillTags) {
    // Ajusta tamaño del canvas
    const ajustarCanvas = () => {
      const ancho = Math.min(window.innerWidth * 0.9, 360);
      canvas.width = ancho;
      canvas.height = ancho;
    };
    ajustarCanvas();
    window.addEventListener('resize', ajustarCanvas);

    // Muestra las etiquetas
    skillTags.style.display = 'block';

    // Inicia TagCanvas si está disponible
    if (window.TagCanvas) {
      try {
        TagCanvas.Start('skillsCanvas', 'skillTags', {
          textColour: null,
          outlineColour: '#ffffff',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          imageScale: 2,
          imageMode: "image",
          outlineMethod: "size",
          wheelZoom: false,
          noSelect: true,
          shape: "sphere",
          freezeActive: false,
          shuffleTags: true,
          initial: [0.01, -0.01],
          decel: 0.95
        });
      } catch (e) {
        console.error("Error al iniciar TagCanvas:", e);
      }
    } else {
      console.warn('TagCanvas no está cargado (revisa el <script src="https://www.goat1000.com/tagcanvas.min.js">).');
    }
  }

  /* =========================
     2) MENÚ MÓVIL (Hamburguesa)
  ========================== */
  const toggleBtn  = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!toggleBtn || !mobileMenu) {
    console.warn('No se encontró #menuToggle o #mobileMenu. Revisa los IDs en el HTML.');
    return; // salimos, así no falla nada más
  }

  // Asegura estado inicial oculto
  mobileMenu.classList.add('hidden');

  // Abre/cierra menú
  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    toggleBtn.setAttribute('aria-expanded', String(!isHidden));
  });

  // Cierra al hacer clic en un enlace dentro del menú
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
