class GrassEater extends Base {
    constructor(x, y, index) {
        super(x, y, index);
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
    move() {
        return super.move()
        statistics.grasseatermove++;
    }
    eat() {
        var fullCells = this.chooseCell(1);
        var newCell1 = random(fullCells);
        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = this.index;
            this.x = newX
            this.y = newY
            for (var i in grassarr) {
                if (newX == grassarr[i].x && newY == grassarr[i].y) {
                    grassarr.splice(i, 1);
                    break;
                }
            }
        }
        else { this.move() }
    }

    event() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y <= x && x > m + 1 - y || y >= x && x < m + 1 - y) {
                    matrix[y][x] = 0;
                    for (var i in grasseaterarr) {
                        if (x == grasseaterarr[i].x && y == grasseaterarr[i].y) {
                            grasseaterarr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    }
}