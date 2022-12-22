var clrs = ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(0);
}

function draw() {
  blendMode(SCREEN);
  var clr = random(clrs);
  fill(clrs[int(frameCount / 2) % 5]);
  ellipse(mouseX, mouseY, random(0, 100));
}
