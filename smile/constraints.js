let Engine = Matter.Engine,
  Render = Matter.Render,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// create engine
let engine;

// add mouse control
let mouse;

let canvas;

let matterBodies = [];
let matterConstraints = [];

let walls = [];
let colors = ["#ececd1", "#76d7ea", "#69be94"];

function createWalls(thickness) {
  //벽 길이, 벽 색상
  let walls = [
    new P5Rect(width * 0.5, 0, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#fffff"),
    new P5Rect(width * 0.5, height, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#fffff"),
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
  let dom = document.getElementById("sketch");
  canvas = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );
  canvas.parent("sketch");
  engine = Engine.create();
  world = engine.world;

  Matter.Runner.run(engine);

  //벽 두께
  walls = createWalls(50);

  // add damped soft global constraint
  //도형 위치, 크기, 폴리건수
  let body1 = new P5Polygon(500, 200, 7, 40);
  matterBodies.push(body1);
  let constraint1 = new P5Constraint({
    pointA: { x: 400, y: 290 },
    bodyB: body1.getBody(),
    pointB: { x: -1, y: -1 },
    // 0이 많아질수록 늘어짐
    stiffness: 0.001,
    //0이 적어질수록 탄성이 적어짐
    damping: 0.005,
  });
  matterConstraints.push(constraint1);

  let body2A = new P5Polygon(250, 150, 1, 35);
  matterBodies.push(body2A);
  let body3A = new P5Polygon(550, 150, 1, 35);
  matterBodies.push(body3A);

  let body4A = new P5Polygon(240, 300, 4, 50);
  matterBodies.push(body4A);
  let body5A = new P5Polygon(260, 350, 4, 50);
  matterBodies.push(body5A);
  let body6A = new P5Polygon(290, 438, 4, 50);
  matterBodies.push(body6A);
  let body7A = new P5Polygon(370, 438, 4, 50);
  matterBodies.push(body7A);
  let body8A = new P5Polygon(430, 438, 4, 50);
  matterBodies.push(body8A);
  let body11A = new P5Polygon(510, 438, 4, 50);
  matterBodies.push(body11A);
  // let body8A = new P5Polygon(480, 400, 4, 50);
  // matterBodies.push(body8A);
  let body9A = new P5Polygon(550, 300, 4, 50);
  matterBodies.push(body9A);
  let body10A = new P5Polygon(530, 370, 4, 50);
  matterBodies.push(body10A);

  matterBodies
    .filter((body) => !walls.includes(body))
    .forEach((body) => {
      body.setFillColor(colors[Math.floor(random(colors.length))]);
    });

  //   // console.log(matterBodies);
  console.log(constraint1);

  // console.log(constraint7.getConstraint().bodyA.position.x);

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });
  //중력
  gravity = engine.gravity;
  gravity.x = 0;
  gravity.y = 0;

  Composite.add(world, mouseConstraint);
}

function draw() {
  background(44, 44, 44);
  Engine.update(engine);
  matterBodies.forEach((body) => {
    body.render();
  });

  matterConstraints.forEach((constraint) => constraint.render());
}
