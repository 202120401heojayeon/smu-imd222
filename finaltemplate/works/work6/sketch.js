let ns = 600;
let strokeW = 20;
let p = [];
let img;

function preload() {
  img = loadImage("./images/merry.png");
}

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);

  let ratio = max(width / img.width, height / img.height);
  img.resize(img.width * ratio, img.height * ratio);

  for (let i = 0; i < 1000; i++) p[i] = new Particle();
}

function draw() {
  for (const i of p) {
    i.update();
    i.display();
  }
}

class Particle {
  constructor() {
    this.init();
    this.sp = 200 / ns;
    let length = random(10, 30);
    this.maxFc = length / this.sp;
  }

  init() {
    this.x = random(width);
    this.y = random(height);
    this.fc = 0;
    let c = img.get(
      img.width / 2 + this.x - width / 2,
      img.height / 2 + this.y - height / 2
    );
    this.col = color(c);
    this.col.setAlpha(50);
  }

  update() {
    let angle = noise(this.x / ns, this.y / ns) * TAU * ns;
    let dir = createVector(cos(angle), sin(angle));
    this.x += dir.x * this.sp;
    this.y += dir.y * this.sp;
    this.fc++;
    if (this.fc > this.maxFc) this.init();
  }

  display() {
    noStroke();
    fill(this.col);
    circle(
      this.x,
      this.y,
      strokeW * (0.25 + noise(this.x / ns, this.y / ns) * 0.5)
    );
  }
}
