export default class Pipe {
    constructor(image) {
        this.position = {
            x: 600,
            y: 0
        }
        this.gap = 200
        this.width = 70;
        this.height = 300
        this.image = image
        this.spreen = 0;
        this.velocity = 0.6

    }
    draw(ctx) {
        for (let index = 1; index <= 3; index++) {
            ctx.drawImage(this.image, this.position.x * index, this.position.y - Math.floor(Math.random() ), this.width, this.height)
            ctx.drawImage(this.image, this.position.x * index, this.position.y + this.gap + this.height, this.width, this.height)
        }
    }
    update(ctx) {
        this.draw(ctx)
        this.position.x -= this.spreen
    }
}