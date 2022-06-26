export default class Object {
    constructor(image) {
        this.position = {
            x: 0,
            y: 0
        }
        this.image = image;
        this.frame = 1
        this.width = innerWidth
        this.height = image.height + 200
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    update(ctx) {
        this.draw(ctx)
        this.width *= this.frame
    }
}