export default class Bird {
    constructor(image) {
        this.position = {
            x: 100,
            y: 300
        }
        this.width = 40;
        this.height = 50;
        this.gravity = 0
        this.jump = 0
        this.image = image;

        this.frame = 0;
        this.spreen = 0;
        this.frames = 0;
        this.currentImage = this.image
        this.currentCrop = 100

    }

    draw(ctx) {
        ctx.save()
        ctx.drawImage(this.currentImage, 0, this.currentCrop * this.frame, 100, 100, this.position.x, this.position.y, this.width, this.height);
        ctx.restore()
    }
    update(ctx) {
        this.draw(ctx)
        this.frames++
        // this.currentImage = this.images[this.frame]
        this.frame += this.frames % 10 == 0 ? 1 : 0;
        if (this.frame >= 3) {
            this.frame = 0
        }
        this.position.y += this.jump
        this.position.x += this.spreen
        this.jump += this.gravity



    }
}