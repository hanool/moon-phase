export class MoonPhase {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = document.body.clientWidth / 2;
    this.canvas.height = document.body.clientWidth / 2;

    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);

    // draw full moon
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.canvas.width / 2,
      this.canvas.width / 2,
      this.canvas.width / 2,
      this.canvas.width / 2,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
    this.ctx.fillStyle = "#ff0";
    this.ctx.fill();

    // draw hidden half side
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.ellipse(
      this.canvas.width / 2,
      this.canvas.width / 2,
      this.canvas.width / 2,
      this.canvas.width / 2,
      0,
      -Math.PI / 2,
      Math.PI / 2,
      true
    );
    this.ctx.fill();

    // draw hidden ellipse side
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.canvas.width / 2,
      this.canvas.width / 2,
      this.canvas.width * (60 / 180),
      this.canvas.width / 2,
      0,
      -Math.PI / 2,
      Math.PI / 2
    );
    this.ctx.fill();
  }
}

window.onload = () => {
  new MoonPhase(1200);
};
