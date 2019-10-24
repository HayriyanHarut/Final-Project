var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Sahara extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    taracvel() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let emptyCell = this.chooseCell(1);
        let emptyCels = this.chooseCell(2);
        let newCell = random(emptyCells.concat(emptyCell.concat(emptyCels)));
        if (newCell && this.multiply > 8) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let sahara = new Sahara(x, y);
            saharaArr.push(sahara);
            saharaHashiv++;
            this.multiply = 0;
        }
    }
}