class Grass extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0

    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul() {
        if (jermastican >= -30 & jermastican <= 0) {

            var multiply = 12
        }
        else if (jermastican >= 1 & jermastican <= 20) {
            multiply = 5
        }
        else if (jermastican >= 36 & jermastican <= 50) {
            multiply = 2
        }
        else if (jermastican >= 21 & jermastican <= 35) {
            multiply = 8
        }
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells)
        if (newCell && this.multiply >= multiply) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var newGrass = new Grass(newX, newY, this.index);
            grassarr.push(newGrass);
            this.multiply = 0;
        }
        statistics.grassmul++;
    }
    event() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y <= x && x > m + 1 - y || y >= x && x < m + 1 - y) {
                    matrix[y][x] = 0;
                    for (var i in grassarr) {
                        if (x == grassarr[i].x && y == grassarr[i].y) {
                            grassarr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    }
}