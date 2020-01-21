let curX;
let curY;
let itemW = 40;
const width = 1100;
const height = 600;
let barriers = [];
let player;

class Player {
    constructor(x, y, it) {
        this.x = x;
        this.y = y;
        this.it = it;
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        rect(x, y, itemW, itemW);
    }
    intersects(block) {
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
            return true;
        } else if (
            blockX <= this.x + itemW &&
            this.x + itemW <= blockX + itemW &&
            blockY <= this.y &&
            this.y <= blockY + itemW
        ) {
            this.x = this.x - shift;
            this.y = this.y + shift;
            return true;
        } else if (
            blockX <= this.x &&
            this.x <= blockX + itemW &&
            blockY <= this.y + itemW &&
            this.y + itemW <= blockY + itemW
        ) {
            this.x = this.x + shift;
            this.y = this.y - shift;
            return true;
        } else if (
            blockX <= this.x + itemW &&
            this.x + itemW <= blockX + itemW &&
            blockY <= this.y + itemW &&
            this.y + itemW <= blockY + itemW
        ) {
            this.x = this.x - shift;
            this.y = this.y - shift;
            return true;
        }
        else{
            return false;
        }
    }

    intersect(){
        let flag = false;
        for (const barrier of barriers) {
            for (const block of barrier) {
                if(this.intersects(block)){
                    flag = true;
                }
            }
        }
        return flag;
    }

    draw(){
        let vec = createVector(mouseX - this.x, mouseY - this.y);
        vec.normalize();
        vec.mult(5);
        let newX = this.x + vec.x;
        let newY = this.y + vec.y;
        if(this.it && !this.intersect()){
            this.update(newX, newY);
        }
        else{
            this.update(this.x,this.y);
        }
    }

    tag(player){
        let block = {x : player.x/40, y : player.y/40};
        if(this.it && this.intersects(block)){
            player.it = true;
            this.it = false;
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
    //Initialize players
    player1 = new Player(40,40,true);
    player2 = new Player(1000,500,false);
    canvas = createCanvas(width, height);
    background(50);
    noStroke();
    curX = 50;
    curY = 50;

    //Initialize barriers
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

    // draw barriers
    for (const barrier of barriers) {
        for (const block of barrier) {
            rect(block.x * itemW, block.y * itemW, itemW, itemW);
        }
    }

    //Draw player and calculate movement
    player1.draw();
    player2.draw();
    player1.tag(player2);
    player2.tag(player1);
    //line(mouseX, 0, mouseX, 100);
}
