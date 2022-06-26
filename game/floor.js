export default class FLoor {
    constructor(image) {
        this.position = {
            x: 0,
            y: 600
        }
        this.width = innerWidth
        this.height = 300
        this.image = image
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);

    }
}