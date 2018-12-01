class Kerpar3 extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 0;
        this.power = 70;
        this.directions = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if ((x - 12) * (x - 12) + (y - 12) * (y - 12) >= 10 * 10) {
                    this.directions.push([x, y])
                }
            }
        }
        this.directions1 = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if ((x - 12) * (x - 12) + (y - 12) * (y - 12) <= 10 * 10) {
                    this.directions1.push([x, y])
                }
            }
        }
    }
    chooseCell(character) {
        return super.chooseCell(character);

    }
    chooseCell1(character) {
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
    }
    move() {
        return super.move();
    }
    exchange() {
        if (jermastican >= -30 & jermastican <= 0) {
            var fullCells = this.chooseCell1(2);
        }
        else if (jermastican >= 1 & jermastican <= 20) {
            var fullCells = this.chooseCell1(3);
        }
        else if (jermastican >= 36 & jermastican <= 50) {
            var fullCells = this.chooseCell1(1);
        }
        else if (jermastican >= 21 & jermastican <= 35) {
            var fullCells = this.chooseCell1(4);
        }
        this.energy++
        var newCell = random(fullCells);
        if (newCell && this.energy >= 35) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 0;
            this.x = newX
            this.y = newY
            for (var i in grasseaterarr) {
                if (newX == grasseaterarr[i].x && newY == grasseaterarr[i].y) {
                    grasseaterarr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move()
        }
    }
    event() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y <= x && x > m + 1 - y || y >= x && x < m + 1 - y) {
                    matrix[y][x] = 0;
                    for (var i in kerpar3arr) {
                        if (x == kerpar3arr[i].x && y == kerpar3arr[i].y) {
                            kerpar3arr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    }
    death() {
        this.power--
        if (this.power < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in kerpar3arr) {
                if (this.x == kerpar3arr[i].x && this.y == kerpar3arr[i].y) {
                    kerpar3arr.splice(i, 1);
                    break;
                }
            }

        }

        statistics.kerpar3death++;
    }
}