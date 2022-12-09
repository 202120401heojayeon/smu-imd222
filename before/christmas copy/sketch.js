let img;
let step;

function preload() {
  img = loadImage("lastchristmas.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  ellipseMode(CENTER);
  step = createSlider(5, 50, 7, 1);
  step.position(width / 2, height / 2);
}

function draw() {
  let stepSlider = step.value();

  for (let x = 0; x < img.width - 1; x += stepSlider) {
    for (let y = 0; y < img.height - 1; y += stepSlider) {
      // noprotect
      let c = img.get(x, y);
      noStroke();
      fill(color(c));
      circle(x, y, stepSlider);
    }
  }
}
