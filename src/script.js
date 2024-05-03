var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    rotation: dets.rotation,
    scale: dets.scale,
    duration: 0.5,
    ease: "elastic.out(1, 0.3)",
  });
});
