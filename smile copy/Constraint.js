class P5Constraint {
  constructor(options) {
    this.constraint = Matter.Constraint.create(options);
    Matter.Composite.add(engine.world, this.constraint);
    // 줄 색
    this.color = "#FFFFFF";
  }
  getConstraint() {
    return this.constraint;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
  render() {
    let pointAWorld = Matter.Constraint.pointAWorld(this.constraint);
    let pointBWorld = Matter.Constraint.pointBWorld(this.constraint);
    if (this.color !== null) {
      //줄두께
      strokeWeight(3);
      stroke(this.color);
    } else noStroke();
    line(pointAWorld.x, pointAWorld.y, pointBWorld.x, pointBWorld.y);
    noStroke();
    if (this.color !== null) {
      fill(this.color);
      // 줄 연결 고리 두께
    } else noFill();
    circle(pointAWorld.x, pointAWorld.y, 0, 0);
    circle(pointBWorld.x, pointBWorld.y, 20, 20);
  }
}
