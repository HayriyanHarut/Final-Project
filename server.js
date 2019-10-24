var Grass = require("./modules/grass.js");
var GrassEater = require("./modules/grassEater.js");
var Predator = require("./modules/Preadator.js");
var Sahara = require("./modules/sahara.js");
var alahAkbar = require("./modules/alahAkbar.js");
var Revolutia = require("./modules/Revolutia.js");
let random = require('./modules/random');


grassArr = [];
grassEaterArr = [];
predatorArr = [];
akbarArr = [];
saharaArr = [];
revolutiaArr = [];
matrix = [];



grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
alahakbarHashiv = 0;
saharaHashiv = 0;
revolutiaHashiv = 1;


function matrixGenerator(matrixSize, grass, grassEater, predator, sahara, akbar, revolutia) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < sahara; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < akbar; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < revolutia; i++) {
        let customX = matrixSize / 2;
        let customY = matrixSize / 2;
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(24, 40, 20, 30, 10, 10, 1);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++
            }
            else if (matrix[y][x] == 4) {
                var sahara = new Sahara(x, y);
                saharaArr.push(sahara);
                saharaHashiv++
            }
            else if (matrix[y][x] == 5) {
                var akbar = new alahAkbar(x, y);
                akbarArr.push(akbar);
                alahakbarHashiv++
            }
            else if (matrix[y][x] == 6) {
                var revolutia = new Revolutia(x, y);
               revolutiaArr.push(revolutia);
                revolutiaHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "Ձմեռ"

function game() {

    exanak++;
    if (exanak <= 5) {
        weather = "Ամառ"
    } else if (exanak <= 10) {
        weather = "Աշուն"
    }else if (exanak <= 15) {
        weather = "Ձմեռ"
    }else if (exanak <= 20) {
        weather = "Գարուն"
    } else if (exanak > 20) {
        exanak = 0
    }
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].kcel();
        }
    }
    if (saharaArr[0] !== undefined) {
        for (var i in saharaArr) {
            saharaArr[i].taracvel();
        }
    }
    if (akbarArr[0] !== undefined) {
        for (var i in akbarArr) {
            akbarArr[i].akbar();
        }
    } if (revolutiaArr[0] !== undefined) {
        for (var i in revolutiaArr) {
            revolutiaArr[i].revolutia();
        }
    }


    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        grassEaterCounter: grassEaterHashiv,
        grassEaterLiveCounter: grassEaterArr.length,
        predatorCounter: predatorHashiv,
        predatorLiveCounter: predatorArr.length,
        saharaCounter: saharaHashiv,
        saharaLiveCounter: saharaArr.length,
        alahakbarCounter: alahakbarHashiv,
        alahakbarLiveCounter: akbarArr.length,
        revolutiaCounter: revolutiaHashiv,
        revolutiaLiveCounter: revolutiaArr.length,
        weather: weather
    }


    io.sockets.emit("data", sendData);

}

setInterval(game, 1000)
