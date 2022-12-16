let pegSize = 6;
let ballRadius = 15;
// let  Bodies = Matter.Bodies;
// let Bodies = Matter.Bodies;
let w = 800;
let h = 750;
let countX = 10;
let countY = 14;
let walls = [];

const { Bodies, Body, Composite, Engine, Events, World } = Matter;

let canvas;
let engine;

function createWalls(thickness) {
  //벽 길이, 벽 색상
  let walls = [
    new P5Rect(width * 0.5, 0, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#f24444"),
    new P5Rect(width * 0.5, height, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#f23ff"),
    new P5Rect(width, height * 0.5, thickness, height, {
      isStatic: true,
    }).setStrokeColor("#fffff"),
    new P5Rect(0, height * 0.5, thickness, height, {
      isStatic: true,
    }).setStrokeColor("#fffff"),
  ];
  walls.forEach((wall) => matterBodies.push(wall));
  return walls;
}

function setup() {
  //   walls = createWalls(50);

  engine = Engine.create();
  Engine.run(engine);

  Events.on(engine, "collisionStart", collisionStart);

  canvas = createCanvas(700, 600);

  let offsetX = (0.5 / countX) * w;
  let offsetY = (0.5 / countY) * h + 50;

  for (let y = 0; y < countY; y++) {
    for (let x = 0; x < countX - (y % 2) ? -1 : 0; x++) {
      addCircle({
        x: (x / countX) * w + offsetX * (!(y % 2) ? 1 : 2),
        y: (y / countY) * h * (2 / 3) + offsetY,
        r: pegSize,
        options: {
          isStatic: true,
          label: "peg",
        },
      });
    }
  }
}

function addBody(...bodies) {
  World.add(engine.world, ...bodies);
}

function removeBody(...bodies) {
  World.remove(engine.world, ...bodies);
}

function addCircle({ x = 0, y = 0, r = 10, options = {} } = {}) {
  let body = Bodies.circle(x, y, r, options);
  addBody(body);
  return body;
}

function draw() {
  background(150);

  if (!(frameCount % 20)) {
    addCircle({
      x: random(w * 0.1, w * 0.9),
      y: -10,
      r: ballRadius,
      options: {
        restitution: 0.8,
        torque: random(-0.05, 0.05),
        label: "ball",
      },
    });
  }

  translate(width / 10 - w / 5, 0);

  let bodies = Composite.allBodies(engine.world);

  //   fill(100);
  //   noStroke();
  //   text(`${bodies.filter((n) => !n.isStatic).length} (${bodies.length})`, 4, 20);

  bodies.forEach((n, i) => {
    let render = n.render;
    if (!render.visible) {
      return;
    }
    fill(render.fillStyle);
    stroke(render.strokeStyle);
    strokeWeight(render.lineWidth);
    if (["peg", "ball"].includes(n.label)) {
      ellipse(n.position.x, n.position.y, n.circleRadius * 2);

      // if(n.label === 'peg') {
      // 	Body.setPosition(n, {
      // 			x: n.position.x + cos(i + frameCount / 60) / 10,
      // 			y: n.position.y
      // 		});
      // }
    } else {
      beginShape();
      n.vertices.forEach(({ x, y, isInternal }) => vertex(x, y));
      endShape(CLOSE);
    }

    if (!n.isStatic) {
      if (n.position.y > height * 2) {
        removeBody(n);
      }
    }
  });
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function collisionStart({ pairs }, timestamp, source, name) {
  // { activeContacts, bodyA, bodyB, collision, contacts,
  // friction, frictionStatic, id, inverseMass, isActive,
  // isSensor, restitution, separation, slop, timeCreated,
  // timeUpdated }

  pairs.forEach(({ bodyA, bodyB }) => {
    [bodyA, bodyB].forEach((body) => {
      if (body.label === "ball") {
        // body.render.lineWidth += 1;
      } else if (body.label === "peg") {
        // let circleRadius = min(pegSize, max(1, body.circleRadius - 1));
        // Body.set(body, { circleRadius });
        // Body.scale(body, 0.5, 0.5);
      }
    });
  });
}
