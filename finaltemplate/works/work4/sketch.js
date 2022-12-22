var balls = [];
var ballcolor = ["white", "salmon", "pink", "skyblue", "green"];
var colorindex = 0;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);
  angleMode(DEGREES);

  for (var i = 0; i < 200; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(60);

  for (let b of balls) {
    b.display();
    b.move();
    b.bounce();
  }

  drawSanta();
}

function changeColor() {
  colorindex = (colorindex + 1) % ballcolor.length;
  return ballcolor[colorindex];
}

function mouseClicked() {
  changeColor();
}

function keyPressed() {
  for (let b of balls) {
    if (keyCode == UP_ARROW) {
      b.xVelocity += 5;
      b.yVelocity += 5;
    }
  }
}

function Ball() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.R = random(10);
  this.d = this.R * 2;

  this.xVelocity = random(0, -2);
  this.yVelocity = random(-2, 5);

  this.display = function () {
    noStroke();
    fill(ballcolor[colorindex]);
    ellipse(this.x, this.y, this.d, this.d);
  };

  this.move = function () {
    this.x += this.xVelocity;
    this.y -= this.yVelocity;
  };

  this.bounce = function () {
    if (this.x - this.R < 0 || this.x + this.R > width) {
      this.xVelocity *= -1;
    }

    if (this.y - this.R < 0 || this.y + this.R > height) {
      this.yVelocity *= -1;
    }
  };
}

function drawSanta() {
  translate(230, 330);

  noStroke();
  fill("#E64801");
  arc(312, 34, (312 - 250) * 2, (85 - 34) * 2, 0, 180);

  fill("white");
  arc(393, 34, (393 - 374) * 2, (34 - 15) * 2, 90, 270);
  arc(393, 15, (410 - 393) * 2, (34 - 15) * 2, 0, 90);
  arc(393, 53, (410 - 393) * 2, (53 - 34) * 2, 270, 360);

  fill("#F1E6D9");
  arc(250, 157, (157 - 34) * 2, 246, 180, 0, OPEN);
  fill("#F2C2A0");
  arc(250, 157, 172, 170, 180, 270);

  fill("#F5D2B9");
  arc(250, 157, 172, 170, 270, 0);

  fill("#0072CA");
  ellipse(221, 133, 18, 18);

  fill("#0072CA");
  ellipse(279, 133, 18, 18);

  fill("#F49699");
  ellipse(165, 157, 50, 45);

  fill("#F49699");
  ellipse(335, 157, 50, 45);

  noFill();
  stroke("#F1E6D9");
  strokeWeight(37);
  arc(250, 157, 209, 209, 180, 0);

  noStroke();
  fill("white");
  arc(250, 157, 246, 246, 0, 180);

  noStroke();
  fill("#F1E6D9");
  arc(206, 202, (206 - 161) * 2, (202 - 157) * 2, 180, 270);
  arc(206, 157, (206 - 161) * 2, (202 - 157) * 2, 0, 90);

  noStroke();
  fill("#F1E6D9");
  arc(294, 157, (206 - 161) * 2, (202 - 157) * 2, 90, 180);
  arc(294, 202, (206 - 161) * 2, (202 - 157) * 2, 270, 360);

  noStroke();
  fill("#F49699");
  ellipse(250, 157, (250 - 240) * 2, (157 - 147) * 2);
}
