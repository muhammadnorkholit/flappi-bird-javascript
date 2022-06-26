import Bird from './game/bird.js'
import Helpers from './game/helpers.js'
import Object from './game/object.js'
import FLoor from './game/floor.js'
import Pipe from './game/pipe.js'
import GameState from './game/gameState.js'

const helpers = new Helpers()
const bg = helpers.createImage("assets/sprites/background-day.png")
const birdDown = helpers.createImage("assets/sprites/yellowbird-downflap.png")
const birdMidl = helpers.createImage("assets/sprites/yellowbird-midflap.png")
const birdUp = helpers.createImage("assets/sprites/yellowbird-upflap.png")
const birdImg = helpers.createImage("assets/sprites/bird.png")
const base = helpers.createImage("assets/sprites/base.png")
const pipeImg = helpers.createImage("assets/sprites/pipe-green.png")
const gameOverImg = helpers.createImage("assets/sprites/gameover.png")
const messageImg = helpers.createImage("assets/sprites/message.png")


const bird = new Bird(birdImg)
const object = new Object(bg)
const floor = new FLoor(base)
const pipe = new Pipe(pipeImg)
const gameState = new GameState(gameOverImg, messageImg)


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth
canvas.height = innerHeight
let spacePressed = false
let state = 0

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    object.update(ctx)
    pipe.update(ctx)
    floor.draw(ctx)
    bird.update(ctx)
    if (state === 0) {
        gameState.massage(ctx)
    } else if (state === 2) {
        gameState.gameOver(ctx)
    } else if (state === 1) {
        gameState.score(ctx)
    }
    if (bird.position.y >= floor.position.y - bird.height - 2) {
        bird.jump = 0
        pipe.spreen = 0
        bird.spreen = 0;
        spacePressed = false
        state = 2
    }
    if (spacePressed) {
        bird.jump = -5
        bird.spreen = 1
        // pipe.spreen = 1
        bird.gravity = 0.3
        state = 1
        if (bird.position.x + bird.width >= pipe.position.x - 400) {
            pipe.spreen = 1

        }
    }
    if (bird.position.x >= 500) {
        bird.spreen = 0
    }

    if (bird.position.x + bird.width >= pipe.position.x && bird.position.y >= pipe.position.y + pipe.height + pipe.gap && bird.position.x + bird.width <= pipe.position.x + pipe.width) {
        bird.spreen = 0;
        spacePressed = false
        bird.jump = 15
        pipe.spreen = 0
        state = 2

        if (bird.position.y >= floor.position.y - bird.height - 2) {
            bird.jump = 0
            pipe.spreen = 0
            bird.spreen = 0;
            spacePressed = false
            state = 2
        }
    } else if (bird.position.y <= pipe.position.y + pipe.height && bird.position.x + bird.width >= pipe.position.x && bird.position.x + bird.width <= pipe.position.x + pipe.width) {
        bird.spreen = 0;
        pipe.spreen = 0
        bird.jump = 15
        spacePressed = false
        state = 2
        if (bird.position.y >= floor.position.y - bird.height - 2) {
            bird.jump = 0
            pipe.spreen = 0
            bird.spreen = 0;
            spacePressed = false
            state = 2
        }

    } else if (bird.position.y <= 0) {
        bird.jump = 15
        bird.spreen = 0;
        pipe.spreen = 0
        spacePressed = false
        state = 2
        if (bird.position.y >= floor.position.y - bird.height - 2) {
            bird.jump = 0
            pipe.spreen = 0
            bird.spreen = 0;
            spacePressed = false
            state = 2
        }
    }



    if (pipe.position.x + pipe.width === 500) {
        gameState.Score++
    }
    requestAnimationFrame(loop)
}
loop()


window.addEventListener("keydown", ({
    keyCode
}) => {
    switch (keyCode) {
        case 32:
            spacePressed = true


            break;

        default:
            break;
    }
})


window.addEventListener("keyup", ({
    keyCode
}) => {
    switch (keyCode) {
        case 32:
            spacePressed = false
            break;

        default:
            break;
    }
})