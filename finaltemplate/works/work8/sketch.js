function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);
}

function keyPressed() {
  print("user pressed a key");
  x = random(windowWidth);
  if (x < 30) {
    x = 30;
  } else if (x > windowWidth - 30) {
    x = windowWidth - 30;

    if ((key = "backspace")) {
      background(red, green, blue);
    }
    red = random(255);
    green = random(255);
    blue = random(255);
  }

  y = random(windowHeight);

  if (y < 100) {
    y = 120;
  }
  snowman(x, y);
}

function mouseClicked() {
  snowman(mouseX, mouseY);
}

function snowman(x, y) {
  fill("white");
  circle(x, y - 30, 60);
  circle(x, y - 70, 50);
  circle(x, y - 100, 40);
  fill("black");
  circle(x + 15, y - 100, 7);
  fill("orange");
  triangle(x + 7, y - 93, x + 7, y - 100, x + 30, y - 96);

  fill("black");
  circle(x + 26, y - 30, 10);
  circle(x + 22, y - 50, 10);
  circle(x + 23, y - 70, 10);

  circle(x + 1, y - 100, 7);
}
