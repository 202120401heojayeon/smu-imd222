var objs = [];

function preload() {
  img = loadImage("./images/snowman.png");
  frameRate(120);
}
function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);
}

function draw() {
  creat();
  for (let i = 0; i < objs.length; i++) {
    objs[i].move();
    objs[i].col();
    objs[i].draw();
  }

  for (let i = 0; i < objs.length; i++) {
    if (objs[i].spd <= 0) {
      objs.splice(i, 1);
    }
  }
}
function creat() {
  var w = random(width);
  var h = random(height);
  objs.push(new Circle(w, h, color(img.get(w + random(2), h + random(2)))));
}

class Circle {
  constructor(mX, mY, c) {
    this.radius = random(10);
    this.pos = createVector(mX, mY);
    this.r = red(c);
    this.g = green(c);
    this.b = blue(c);
    this.spd = 0.2;
    this.dir = random(360);
  }
  draw() {
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
  move() {
    this.spd -= this.spd * 0.1;

    this.pos.x += this.spd * this.dir;
    this.pos.y += this.spd * this.dir;
  }
  col() {
    var col = color(img.get(this.pos.x, this.pos.y));
    this.r = red(col);
    this.g = green(col);
    this.b = blue(col);
  }
}
