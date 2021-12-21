import Zdog from "zdog";

// Made with Zdog

// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdogcanvas",
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: "#636",
});

// update & render
// illo.updateRenderGraph();

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
// start animation
animate();