let snowflakes = [];

let pX;
let pY;

pX = 150;
pY = 320;

let pSpeed;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);
}

function draw() {
  fill(255);
  background(0, 128, 0);
  let t = frameCount / 60;
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }

  noStroke();
  fill(16, 59, 29);

  rect(130, 330, 10, 450);
  rect(130, 770, 600, 10);
  rect(820, 320, 10, 450);
  rect(220, 320, 600, 10);

  rect(330, 370, 150, 5);
  rect(280, 370, 100, 5);
  rect(730, 370, 50, 5);

  rect(380, 420, 150, 5);
  rect(780, 420, 50, 5);

  rect(330, 470, 150, 5);
  rect(730, 470, 50, 5);

  rect(280, 520, 150, 5);
  rect(780, 520, 50, 5);

  rect(180, 570, 100, 5);
  rect(330, 570, 100, 5);
  rect(730, 570, 50, 5);

  rect(140, 620, 100, 5);
  rect(380, 620, 105, 5);

  rect(180, 670, 100, 5);
  rect(330, 670, 150, 5);
  rect(680, 670, 50, 5);
  rect(780, 670, 50, 5);

  rect(130, 720, 100, 5);
  rect(330, 720, 250, 5);

  rect(180, 370, 5, 200);

  rect(230, 320, 5, 200);

  rect(280, 370, 5, 400);

  rect(330, 370, 5, 100);
  rect(330, 570, 5, 150);

  rect(380, 620, 5, 50);

  rect(480, 470, 5, 150);

  rect(530, 320, 5, 50);
  rect(530, 330, 5, 355);

  rect(580, 370, 5, 355);

  rect(630, 420, 5, 350);

  rect(680, 370, 5, 355);

  rect(730, 670, 5, 110);
  rect(730, 370, 5, 250);

  rect(780, 570, 5, 100);

  fill(255, 0, 0);

  rect(pX, pY, 20, 20);

  if (pX + 20 >= 330 && pX <= 330 + 150 && pY + 20 >= 370 && pY <= 370 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 280 && pX <= 280 + 100 && pY + 20 >= 370 && pY <= 370 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 730 && pX <= 730 + 50 && pY + 20 >= 370 && pY <= 370 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 380 && pX <= 380 + 150 && pY + 20 >= 420 && pY <= 420 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 380 && pX <= 380 + 50 && pY + 20 >= 420 && pY <= 420 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 330 && pX <= 330 + 150 && pY + 20 >= 470 && pY <= 470 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 730 && pX <= 730 + 50 && pY + 20 >= 470 && pY <= 470 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 280 && pX <= 280 + 150 && pY + 20 >= 520 && pY <= 520 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 780 && pX <= 780 + 50 && pY + 20 >= 520 && pY <= 520 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 180 && pX <= 180 + 100 && pY + 20 >= 570 && pY <= 570 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 330 && pX <= 330 + 100 && pY + 20 >= 570 && pY <= 570 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 730 && pX <= 730 + 50 && pY + 20 >= 570 && pY <= 570 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 140 && pX <= 140 + 100 && pY + 20 >= 620 && pY <= 620 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 380 && pX <= 380 + 105 && pY + 20 >= 620 && pY <= 620 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 180 && pX <= 180 + 100 && pY + 20 >= 670 && pY <= 670 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 330 && pX <= 330 + 150 && pY + 20 >= 670 && pY <= 670 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 680 && pX <= 680 + 50 && pY + 20 >= 670 && pY <= 670 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 780 && pX <= 780 + 50 && pY + 20 >= 670 && pY <= 670 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 130 && pX <= 130 + 100 && pY + 20 >= 720 && pY <= 720 + 5) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 330 && pX <= 330 + 250 && pY + 20 >= 720 && pY <= 720 + 5) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 180 && pX <= 180 + 5 && pY + 20 >= 370 && pY <= 370 + 200) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 230 && pX <= 230 + 5 && pY + 20 >= 320 && pY <= 320 + 200) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 280 && pX <= 280 + 5 && pY + 20 >= 370 && pY <= 370 + 400) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 330 && pX <= 330 + 5 && pY + 20 >= 370 && pY <= 370 + 100) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 330 && pX <= 330 + 5 && pY + 20 >= 570 && pY <= 570 + 150) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 380 && pX <= 380 + 5 && pY + 20 >= 620 && pY <= 620 + 50) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 480 && pX <= 480 + 5 && pY + 20 >= 470 && pY <= 470 + 150) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 530 && pX <= 530 + 5 && pY + 20 >= 320 && pY <= 320 + 50) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 530 && pX <= 530 + 5 && pY + 20 >= 330 && pY <= 330 + 355) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 580 && pX <= 580 + 5 && pY + 20 >= 370 && pY <= 370 + 355) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 630 && pX <= 630 + 5 && pY + 20 >= 420 && pY <= 420 + 350) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 680 && pX <= 680 + 5 && pY + 20 >= 370 && pY <= 370 + 355) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 730 && pX <= 730 + 5 && pY + 20 >= 670 && pY <= 670 + 110) {
    pX = 150;
    pY = 320;
  }
  if (pX + 20 >= 730 && pX <= 730 + 5 && pY + 20 >= 370 && pY <= 370 + 250) {
    pX = 150;
    pY = 320;
  }

  if (pX + 20 >= 780 && pX <= 780 + 5 && pY + 20 >= 570 && pY <= 570 + 100) {
    pX = 150;
    pY = 320;
  }
}

function keyPressed() {
  background(100);
  if (keyCode == RIGHT_ARROW) {
    pX = pX + 10;
  }
  if (keyCode == LEFT_ARROW) {
    pX = pX - 10;
  }
  if (keyCode == UP_ARROW) {
    pY = pY - 10;
  }
  if (keyCode == DOWN_ARROW) {
    pY = pY + 10;
  }
}

function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}
