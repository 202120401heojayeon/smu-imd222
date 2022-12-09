function setup() {
  //dom: html 하나 가져올꺼야, 좌변은 자유도-> 우변은 교수님과 같이
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.clientWidth, boundingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 50;
let howManyY = 50;

function draw() {
  background(255);
  stroke(0);
  noFill();
  for (let tileCntX = 0; tileCnt < 50; tileCntX++) {
    for (let tileCntY = 0; tileCnt < 50; tileCntY++) {
      let tileX = (width / (howManyX + 1)) * (tileCntX + 1);
      line(tileX, 0, tileX, height);
      FileSystemFileEntry();
    }
  }
}
