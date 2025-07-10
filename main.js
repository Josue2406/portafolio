document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('skillsCanvas');
  const skillTags = document.getElementById('skillTags');

  if (!canvas || !skillTags || !window.TagCanvas) {
    console.warn('TagCanvas o elementos no disponibles');
    return;
  }

  // Función para ajustar tamaño del canvas al cargar y al redimensionar
  const ajustarCanvas = () => {
    const ancho = Math.min(window.innerWidth * 0.9, 360);
    canvas.width = ancho;
    canvas.height = ancho;
  };

  ajustarCanvas(); // al cargar

  window.addEventListener('resize', () => {
    ajustarCanvas(); // cuando cambia el tamaño
  });

  skillTags.style.display = 'block'; // mostrar etiquetas

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
});


document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Cierra el menú móvil al hacer clic en un enlace
const enlaces = menu.querySelectorAll('a');
enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});

});
