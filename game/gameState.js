export default class GameState {
    constructor(image1, image2, image3) {
        this.position = {
            x: 1000,
            y: 200
        }
        this.width = 100
        this.height = 100
        this.image1 = image1
        this.image2 = image2
        this.image3 = image3
        this.Score = 0
    }
    gameOver(ctx) {
        ctx.drawImage(this.image1, innerWidth / 2 - this.width, this.position.y, this.image1.width, this.height)
    }
    massage(ctx) {
        ctx.drawImage(this.image2, innerWidth / 2 - this.width, this.position.y, this.image2.width, this.image2.height)
    }
    score(ctx) {
        ctx.lineWidth = 2
        ctx.fillStyle = "#fff"
        ctx.font = "3rem Teko";
        ctx.fillText(this.Score, innerWidth / 2, 70)
        ctx.strokeText(this.Score, innerWidth / 2, 70)
    }
}