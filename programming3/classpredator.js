class Predator extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 50;
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

        this.getNewCoordinates()
        return super.chooseCell(character);

    }
    move() {
        return super.move();
    }
    eat() {
        if (jermastican >= -30 & jermastican <= 0) {

            var energy = 35
        }
        else if (jermastican >= 1 & jermastican <= 20) {
            energy = 30
        }
        else if (jermastican >= 36 & jermastican <= 50) {
            energy = 25
        }
        else if (jermastican >= 21 & jermastican <= 35) {
            energy = 20
        }
        var fullCells = this.chooseCell(2);
        var newCell = random(fullCells);
        if (newCell & this.energy <= energy) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = this.index;
            this.x = newX
            this.y = newY
            for (var i in grasseaterarr) {
                if (newX == grasseaterarr[i].x && newY == grasseaterarr[i].y) {
                    grasseaterarr.splice(i, 1);
                    break;
                }
            }
        }
        else { this.move() }
        statistics.predatoreat++;
    }
    event() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y <= x && x > m + 1 - y || y >= x && x < m + 1 - y) {
                    matrix[y][x] = 0;
                    for (var i in predatorarr) {
                        if (x == predatorarr[i].x && y == predatorarr[i].y) {
                            grasseaterarr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    }
}
