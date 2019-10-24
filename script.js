function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];

    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');
    let saharaCountElement = document.getElementById('saharaCount');
    let saharaLiveCountElement = document.getElementById('saharaLiveCount');
    let alahakbarCountElement = document.getElementById('alahakbarCount');
    let alahakbarLiveCountElement = document.getElementById('alahakbarLiveCount');
    let revolutiaCountElement = document.getElementById('revolutiaCount');
    let revolutiaLiveCountElement = document.getElementById('revolutiaLiveCount');


    socket.on("data", drawCreatures);
   
 
   
    function drawCreatures(data) {



        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;
        saharaCountElement.innerText = data.saharaCounter;
        saharaLiveCountElement.innerText = data.saharaLiveCounter;
        alahakbarCountElement.innerText = data.alahakbarCounter;
        alahakbarLiveCountElement.innerText = data.alahakbarLiveCounter;
        revolutiaCountElement.innerText = data.revolutiaCounter;
        revolutiaLiveCountElement.innerText = data.revolutiaLiveCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "Ամառ"){
                        fill("#0b6b00");
                    }else if (data.weather == "Աշուն"){
                        fill("#14c400");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#109c00");
                    }else if (data.weather == "Գարուն"){
                        fill("#18ed00");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    if(data.weather == "Ամառ"){
                        fill("#c7e300");
                    }else if (data.weather == "Աշուն"){
                        fill("#829400");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#9db300");
                    }else if (data.weather == "Գարուն"){
                        fill("#6e7d00");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#cacaca');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "Ամառ"){
                        fill("#6e0000");
                    }else if (data.weather == "Աշուն"){
                        fill("#ff0000");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#c90000");
                    }else if (data.weather == "Գարուն"){
                        fill("#910000");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "Ամառ"){
                        fill("#0055cc");
                    }else if (data.weather == "Աշուն"){
                        fill("#00429e");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#003278");
                    }else if (data.weather == "Գարուն"){
                        fill("#006aff");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "Ամառ"){
                        fill("#000000");
                    }else if (data.weather == "Աշուն"){
                        fill("#383838");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#919191");
                    }else if (data.weather == "Գարուն"){
                        fill("#6e6e6e");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 6) {
                    if(data.weather == "Ամառ"){
                        fill("#8a0079");
                    }else if (data.weather == "Աշուն"){
                        fill("#ed00ce");
                    }else if (data.weather == "Ձմեռ"){
                        fill("#69005c");
                    }else if (data.weather == "Գարուն"){
                        fill("#b800a1");
                    }
                    rect(j * side, i * side, side, side);
                }
            }
        }    
    }
}