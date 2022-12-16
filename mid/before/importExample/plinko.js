let pegSize = 14;
let ballRadius = 6;

let w = 750;
let h = 600;
let countX = 10;
let countY = 14;

const { Bodies, Body, Composite, Engine, Events, World } = Matter;

let canvas;
let engine;

function setup() {
  engine = Engine.create();
  Engine.run(engine);

  Events.on(engine, "collisionStart", collisionStart);

  canvas = createCanvas(windowWidth, windowHeight);

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
  background(0);

  if (!(frameCount % 40)) {
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

  translate(width / 2 - w / 2, 0);

  let bodies = Composite.allBodies(engine.world);

  fill(255);
  noStroke();
  text(`${bodies.filter((n) => !n.isStatic).length} (${bodies.length})`, 4, 20);

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

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
