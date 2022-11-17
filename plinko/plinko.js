var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
let plinkos = [];
let cols = 10;
let rows = 11;

let XXX = 0;
function setup() {
  createCanvas(600, 800);
  engine = Engine.create();
  world = engine.world;
  newParticle();
  var spacing = width / cols;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      let x = i * spacing;
      if (j % 2 == 1) {
        x += spacing / 2;
      }

      let y = spacing + j * spacing;
      let p = new Plinko(x, y, 5);
      plinkos.push(p);
    }
  }
}

function newParticle() {
  let p = new Particle(random(299, 301), 0, 10);
  particles.push(p);
}

function draw() {
  if (frameCount % 10 == 0) {
    newParticle();
  }
  background(51);
  Engine.update(engine);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
  }
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }
}
