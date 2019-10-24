var LiveForm = require("./LiveForm");


module.exports = class Revolutia extends LiveForm {
    revolutia() {
        if (predatorArr.length <= 0 ) {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 0;
                }
            }
            grassArr = [];
            grassEaterArr = [];
            akbarArr = [];
            saharaArr = [];
            revolutiaArr = [];
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 6;
                }
                
            }
            
        }
    }
}
