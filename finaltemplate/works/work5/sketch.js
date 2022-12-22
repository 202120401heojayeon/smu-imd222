let textNum = 25;
let size;
let mainText = [];
let targetXpos, targetYpos;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);

  colorMode(HSB);
  noFill();
  noCursor();
  textAlign(CENTER);
  if (width > height) {
    size = width / 4;
  } else if (width < height) {
    size = height / 4;
  }

  textSize(70);
  textFont("helvetica-bold");
  for (let i = 0; i < textNum; i++) {
    mainText[i] = new DelayText(0, 0, 1 / i);
  }
  mouseX = width / 2;
  mouseY = height * 0.6;
}

function draw() {
  blendMode(BLEND);
  background(0);
  targetXpos = mouseX;
  targetYpos = mouseY;
  for (let i = 0; i < textNum; i++) {
    let color = map(i, 0, textNum, 0, 360);
    stroke(color, 100, 100);
    mainText[i].display();
  }
}

class DelayText {
  constructor(textPosX, textPosY, easing) {
    this.textPosX = textPosX;
    this.textPosY = textPosY;
    this.easing = easing;
  }

  display() {
    this.dx = targetXpos - this.textPosX;
    this.dy = targetYpos - this.textPosY;
    this.vx = this.dx * this.easing;
    this.vy = this.dy * this.easing;
    this.textPosX = this.textPosX + this.vx;
    this.textPosY = this.textPosY + this.vy;
    blendMode(SCREEN);
    text("text me merry christmas", this.textPosX, this.textPosY);
  }
}

function windowResized() {
  resizeCanvas(width, height);
  if (width > height) {
    size = width / 3;
  } else if (width < height) {
    size = height * 0.6;
  }
  textSize(size);
}
