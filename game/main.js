let curX;
let curY;
let charW = 20.0;
let itemW = 30.0;
const width = 1100.0;
const height = 600.0;
let barriers = [];
let player;

class Player {
    constructor(x, y, it) {
        this.x = x;
        this.y = y;
        this.vec = createVector(0,0)
        this.it = it;
        this.bounce = 0;
    }

    update() {
        if(this.it){
            this.x += this.vec.x;
            this.y += this.vec.y;
        }
    }

    intersects(block) {
        let blockX = block.x * itemW;
        let blockY = block.y * itemW;

        if (
            blockX <= this.x &&
            this.x <= blockX + charW &&
            blockY <= this.y &&
            this.y <= blockY + itemW
        ) {
            return true;
        } else if (
            blockX <= this.x + charW &&
            this.x + charW <= blockX + itemW &&
            blockY <= this.y &&
            this.y <= blockY + itemW
        ) {
            return true;
        } else if (
            blockX <= this.x &&
            this.x <= blockX + itemW &&
            blockY <= this.y + charW &&
            this.y + charW <= blockY + itemW
        ) {
            return true;
        } else if (
            blockX <= this.x + charW &&
            this.x + charW <= blockX + itemW &&
            blockY <= this.y + charW &&
            this.y + charW <= blockY + itemW
        ) {
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
        //One possible bug is caught bouncing between two walls
        if(this.it && this.intersect() && this.bounce == 0){
            this.bounce = 30;
            this.vec.normalize();
            this.vec.mult(-1);
        }
        if(this.bounce == 0){
            this.vec.set(mouseX-this.x,mouseY-this.y);
            this.vec.mult(1/35);
            this.update();
            rect(this.x,this.y,charW,charW);
        }
        else{
            this.bounce = this.bounce - 1;
            this.update();
            rect(this.x,this.y,charW,charW);
        }
    }

    tag(player){
        let block = {x : player.x/itemW, y : player.y/itemW};
        if(this.it && this.intersects(block)){
            //This runs into problems when you run head on into other player
            this.vec.normalize();
            this.vec.mult(-3);
            this.update();
            rect(this.x,this.y,charW,charW);
            player.it = true;
            this.it = false;
        }
    }

}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBlock(min, max) {
    return Math.round(randomNum(min, max) / itemW);
}

function offscreen() {
    if (this.y < -itemW || this.y > height + itemW) return true;
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
    for (let i = 0; i < 25; i++) {
        randomX = randomBlock(0, width);
        randomY = randomBlock(0, height);
        let blocks = [{ x: randomX, y: randomY }];

        for (let j = 0; j < 5; j++) {
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
