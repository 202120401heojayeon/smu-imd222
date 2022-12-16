let pixel;
let x = 0;
let y = 0;
let xx = 0;
let yy = 0;
let xxx = 0;
let yyy = 0;

let img;

function preload() {
  img = loadImage("./images/lastchristmas.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function horizontal() {
  for (let i = 0; i < 20; i += 1) {
    pixel = img.get(x, y);
    fill(pixel);
    square(x, y, 20);
    x += 20;
    if (x > windowWidth) {
      x = 0;
      y += 20;
    }
  }
}

function verical() {
  for (let i = 0; i < 20; i += 1) {
    pixel = img.get(xx, yy);
    fill(pixel);
    square(xx, yy, 20);
    yy += 20;
    if (yy > windowHeight) {
      yy = 0;
      xx += 20;
    }
  }
}

function draw() {
  img.resize(width, height);

  if (keyCode === 90) {
    horizontal();
  }

  if (keyCode === 88) {
    verical();
  }
}

function mouseMoved() {
  if (keyCode === 67) {
    pixel = photo.get(mouseX, mouseY);
    fill(pixel);
    square(mouseX, mouseY, 20);
  }
}
