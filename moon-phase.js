export class MoonPhase {
  constructor(size) {
    this.size = size;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.size, this.size);

    this.ctx.beginPath();
    this.ctx.ellipse(this.size/2, this.size/2, this.size/4, this.size/2, 0, -Math.PI / 2, Math.PI / 2);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.ellipse(this.size/2, this.size/2, this.size/2, this.size/2, Math.PI / 4, 0, 2 * Math.PI);
    this.ctx.stroke();


  }
}

window.onload = () => {
  new MoonPhase(500);
}