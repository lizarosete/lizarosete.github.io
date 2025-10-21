class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = 'cute.png';  
    this.width = 80;
    this.height = 80;
  }

  draw(ctx, scale = 1) {
    const w = this.width * scale;
    const h = this.height * scale;
    ctx.drawImage(this.image, this.x - w / 2, this.y - h / 2, w, h);
  }
}
