let curX;
let curY;
let charW = 20.0;
let itemW = 30.0;
const width = 30 * itemW;
const height = 20 * itemW;
let barriers = [];
let player;

const board = [
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false
    ],
    [
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false
    ],
    [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false
    ]
];

class Player {
    constructor(x, y, it) {
        this.x = x;
        this.y = y;
        this.vec = createVector(0, 0);
        this.it = it;
        this.bounce = 0;
        this.score = 0;
    }

    update() {
        if (this.it) {
            this.x += this.vec.x;
            this.y += this.vec.y;
            this.score += 1;
        }
    }

    intersectsPlayer(player) {
        let blockX = player.x * itemW;
        let blockY = player.y * itemW;

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
        } else {
            return false;
        }
    }

    intersect() {
        const posX =
            this.vec.heading() < 0
                ? Math.floor(this.x / itemW)
                : Math.round(this.x / itemW);
        const posY =
            this.vec.heading() < 0
                ? Math.floor(this.y / itemW)
                : Math.round(this.y / itemW);

        let boardPos;

        try {
            return !board[posX][posY];
        } catch {
            return true;
        }
    }

    draw() {
        if (this.it) {
            fill(255, 255, 0);
        } else {
            fill(255);
        }
        //One possible bug is caught bouncing between two walls
        if (this.it && this.intersect() && this.bounce == 0) {
            this.bounce = 30;
            this.vec.normalize();
            this.vec.mult(-1);
        }
        if (this.bounce == 0) {
            this.vec.set(mouseX - this.x, mouseY - this.y);
            this.vec.mult(1 / 35);
            this.update();
            rect(this.x, this.y, charW, charW);
        } else {
            this.bounce = this.bounce - 1;
            this.update();
            rect(this.x, this.y, charW, charW);
        }
    }

    tag(player) {
        let playerBlock = { x: player.x / itemW, y: player.y / itemW };
        if (this.it && this.intersectsPlayer(playerBlock)) {
            //This runs into problems when you run head on into other player
            this.vec.normalize();
            this.vec.mult(-3);
            this.update();
            rect(this.x, this.y, charW, charW);
            player.it = true;
            this.it = false;
        }
    }
}

function setup() {
    //Initialize players
    player1 = new Player(40, 40, true);
    player2 = new Player(width - 200, 300, false);
    canvas = createCanvas(width, height);
    background(50);
    noStroke();
}

function draw() {
    background(50);
    fill(255);

    // draw barriers
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (!board[x][y]) {
                rect(x * itemW, y * itemW, itemW, itemW);
            }
        }
    }

    //Draw player and calculate movement
    player1.draw();
    player2.draw();

    // draw player's scores
    fill(255);
    text(player1.score, 50, 50);
    text(player2.score, width - 75, 50);

    player1.tag(player2);
    player2.tag(player1);
    //line(mouseX, 0, mouseX, 100);
}
