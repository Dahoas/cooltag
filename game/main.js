const express = require("express");
const request = require("request");
const path = require("path");
const sqrl = require("squirrelly");
const { uuid } = require("uuidv4");
const app = express();
const port = 3000;

app.set("view engine", "squirrelly");
app.set("views", "./views");

let playerQueue = [];
let startedGames = {};

app.use("/static", express.static("static"));

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname + "/templates/index.html"))
);

// player has been added to the queue and is waiting for another player to join
app.get("/join/:id", (req, res) => {
    let found = undefined;
    // find the p1 (player waiting will always be p1 in a game)
    for (const gameId in startedGames) {
        const game = startedGames[gameId];
        if (game.p1 === req.params.id) {
            found = game;
            break;
        }
    }

    if (found !== undefined && found.game) {
        res.redirect(`/game/${found.game}/player/${found.p1}`);
    } else {
        res.render("lobby", {
            player: req.params.id
        });
    }
});

// join the server, add the player to the queue or create a new game if there
// is already a player ready
app.get("/join", (req, res) => {
    const player = uuid();
    playerQueue.push(player);

    if (playerQueue.length >= 2) {
        const newGame = uuid();
        const p2 = playerQueue.pop();
        const p1 = playerQueue.pop();
        const gameObj = {
            game: newGame,
            p1: p1,
            p2: p2,
            p1x: 50,
            p1y: 50,
            p2x: 500,
            p2y: 300
        };
        startedGames[newGame] = gameObj;
        res.redirect(`/game/${newGame}/player/${p2}`);
    } else {
        res.render("lobby", {
            player: player
        });
    }
});

// get the information needed by the script to run the game
app.get("/game/:id/player/:pid/json", (req, res) => {
    res.json(startedGames[req.params.id]);
});

// start a game (requires two players)
app.get("/game/:id/player/:pid", (req, res) => {
    res.render("game", {
        player: req.params.pid,
        game: req.params.id
    });
    // res.sendFile(path.join(__dirname + "/templates/game.html"));
});

//
app.post("/game/:id/player/:pid/x/:x/y/:y", (req, res) => {
    console.log("got post", req.params.x, req.params.y);
    if (startedGames[req.params.id].p1 === req.params.pid) {
        startedGames[req.params.id].p1x = req.params.x;
        startedGames[req.params.id].p1y = req.params.y;
    } else {
        startedGames[req.params.id].p2x = req.params.x;
        startedGames[req.params.id].p2y = req.params.y;
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
