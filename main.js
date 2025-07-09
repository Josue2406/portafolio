window.addEventListener('DOMContentLoaded', () => {
  const skillTags = document.getElementById('skillTags');
  if (skillTags) skillTags.style.display = 'block';

  if (!window.TagCanvas) {
    console.log("TagCanvas no está disponible");
    return;
  }

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
      freezeDecel: false,
      dragControl: false,
      shuffleTags: true,
      initial: [0.01, -0.01],
      decel: 0.95
    });
  } catch (e) {
    console.log("Error al cargar TagCanvas", e);
  }
});
