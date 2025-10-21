class Ball {
  constructor(imageSrc) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
