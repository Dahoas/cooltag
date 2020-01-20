let curX;
let curY;
let itemW = 40;
const width = 1100;
const height = 600;
let barriers = [];
let player;

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }
    intersects(block) {
        // from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        let blockX = block.x * 40;
        let blockY = block.y * 40;
        let shift = 5;

        if (
            blockX <= this.x &&
            this.x <= blockX + itemW &&
            blockY <= this.y &&
            this.y <= blockY + itemW
        ) {
            this.x = this.x + shift;
            this.y = this.y + shift;
        } else if (
            blockX <= this.x + itemW &&
            this.x + itemW <= blockX + itemW &&
            blockY <= this.y &&
            this.y <= blockY + itemW
        ) {
            this.x = this.x - shift;
            this.y = this.y + shift;
        } else if (
            blockX <= this.x &&
            this.x <= blockX + itemW &&
            blockY <= this.y + itemW &&
            this.y + itemW <= blockY + itemW
        ) {
            this.x = this.x + shift;
            this.y = this.y - shift;
        } else if (
            blockX <= this.x + itemW &&
            this.x + itemW <= blockX + itemW &&
            blockY <= this.y + itemW &&
            this.y + itemW <= blockY + itemW
        ) {
            this.x = this.x - shift;
            this.y = this.y - shift;
        }
    }
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBlock(min, max) {
    return Math.round(randomNum(min, max) / 40);
}

function offscreen() {
    if (this.y < -40 || this.y > height + 40) return true;
    else return false;
}

function setup() {
    player = new Player(40, 40);
    canvas = createCanvas(width, height);
    background(50);
    noStroke();
    curX = 50;
    curY = 50;

    for (let i = 0; i < 8; i++) {
        randomX = randomBlock(0, width);
        randomY = randomBlock(0, height);
        let blocks = [{ x: randomX, y: randomY }];

        for (let j = 0; j < 4; j++) {
            randomDir = randomNum(0, 3);
            let nextX = randomX;
            let nextY = randomY;

            switch (randomDir) {
                case 0:
                    nextX = randomX + 1;
                case 1:
                    nextX = randomX - 1;
                case 2:
                    nextY = randomY + 1;
                case 3:
                    nextY = randomY - 1;
            }
            randomX = nextX;
            randomY = nextY;
            blocks.push({ x: nextX, y: nextY });
        }
        barriers.push(blocks);
    }
}

function draw() {
    background(50);
    fill(255);

    let vec = createVector(mouseX - player.x, mouseY - player.y);
    vec.normalize();
    vec.mult(5);

    // draw barriers
    for (const barrier of barriers) {
        for (const block of barrier) {
            rect(block.x * itemW, block.y * itemW, itemW, itemW);
            player.intersects(block);
        }
    }

    let newX = player.x + vec.x;
    let newY = player.y + vec.y;

    rect(newX, newY, itemW, itemW);

    player.update(newX, newY);

    //line(mouseX, 0, mouseX, 100);
}
