class Kerpar1 extends Base {
    constructor(x, y, index, ser) {
        super(x, y, index);
        this.hzorutyun = 0
        this.power = 40
        this.energy = 80
        this.ser = Math.round(Math.random() * (3 - 2) + 2);
        this.directions1 = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y > x && x > m + 1 - y) {
                    this.directions1.push([x, y])
                }
            }
        }
        this.directions2 = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y < x && x > m + 1 - y) {
                    this.directions2.push([x, y])
                }
            }
        }
        this.directions3 = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (x < m + 1 - y) {
                    this.directions3.push([x, y])
                }
            }
        }
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 3, this.y],
            [this.x - 4, this.y],
            [this.x - 5, this.y],
            [this.x - 6, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x + 5, this.y],
            [this.x + 6, this.y],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 3],
            [this.x + 4, this.y - 4],
            [this.x + 5, this.y - 5],
            [this.x + 6, this.y - 6],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 4],
            [this.x + 5, this.y + 5],
            [this.x + 6, this.y + 6],
            [this.x - 2, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 4, this.y - 4],
            [this.x - 5, this.y - 5],
            [this.x - 6, this.y - 6],
            [this.x - 2, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 4, this.y + 4],
            [this.x - 5, this.y + 5],
            [this.x - 6, this.y + 6],
            [this.x - 2, this.y - 6],
            [this.x - 3, this.y - 6],
            [this.x - 4, this.y - 6],
            [this.x - 5, this.y - 6],
            [this.x - 2, this.y + 6],
            [this.x - 3, this.y + 6],
            [this.x - 4, this.y + 6],
            [this.x - 5, this.y + 6],
            [this.x + 2, this.y + 6],
            [this.x + 3, this.y + 6],
            [this.x + 4, this.y + 6],
            [this.x + 5, this.y + 6],
            [this.x + 2, this.y - 6],
            [this.x + 3, this.y - 6],
            [this.x + 4, this.y - 6],
            [this.x + 5, this.y - 6],
            [this.x + 6, this.y - 1],
            [this.x + 6, this.y - 2],
            [this.x + 6, this.y - 3],
            [this.x + 6, this.y - 4],
            [this.x + 6, this.y - 5],
            [this.x + 6, this.y + 1],
            [this.x + 6, this.y + 2],
            [this.x + 6, this.y + 3],
            [this.x + 6, this.y + 4],
            [this.x + 6, this.y + 5],
            [this.x - 6, this.y + 1],
            [this.x - 6, this.y + 2],
            [this.x - 6, this.y + 3],
            [this.x - 6, this.y + 4],
            [this.x - 6, this.y + 5],
            [this.x - 6, this.y - 1],
            [this.x - 6, this.y - 2],
            [this.x - 6, this.y - 3],
            [this.x - 6, this.y - 4],
            [this.x - 6, this.y - 5],
            [this.x, this.y - 2],
            [this.x, this.y - 3],
            [this.x, this.y - 4],
            [this.x, this.y - 5],
            [this.x, this.y - 6],
            [this.x, this.y + 2],
            [this.x, this.y + 3],
            [this.x, this.y + 4],
            [this.x, this.y + 5],
            [this.x, this.y + 6]

        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
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
    chooseCell2(character) {
        var found = [];
        for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions2[i]);
                }
            }
        }
        return found;
    }
    chooseCell3(character) {
        var found = [];
        for (var i in this.directions3) {
            var x = this.directions3[i][0];
            var y = this.directions3[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions3[i]);
                }
            }
        }
        return found;
    }
    move() {
        if (jermastican >= -30 & jermastican <= 0) {
            var fullCells = this.chooseCell(0);
        }
        else if (jermastican >= 1 & jermastican <= 20) {
            fullCells = this.chooseCell1(0);
        }
        else if (jermastican >= 36 & jermastican <= 50) {
            fullCells = this.chooseCell2(0);
        }
        else if (jermastican >= 21 & jermastican <= 35) {
            fullCells = this.chooseCell3(0);
        }
        var newCell1 = random(fullCells);
        if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = this.index;
            this.x = newX
            this.y = newY
        }
    }
    eat() {
        this.energy--
        var choosecell = this.chooseCell(2);
        var fullCells = choosecell
        var newCell = random(fullCells);
        if (newCell && this.energy <= 30) {
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
        else {
            var choosecell1 = this.chooseCell(3);
            var fullCells1 = choosecell1
            var newCell1 = random(fullCells1);
            if (newCell1 && this.energy <= 15) {
                var newX = newCell1[0];
                var newY = newCell1[1];
                matrix[this.y][this.x] = 0
                matrix[newY][newX] = this.index;
                this.x = newX
                this.y = newY
                for (var i in predatorarr) {
                    if (newX == predatorarr[i].x && newY == predatorarr[i].y) {
                        predatorarr.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                this.move();
            }
        }
    }
    mul() {
        if (this.ser == 2) {
            var emptyCells1 = this.chooseCell3(4);
            var newCell1 = random(emptyCells1)
            if (newCell1) {

                var newX1 = newCell1[0];
                var newY1 = newCell1[1];
            }
            for (var i in kerpar1arr) {
                if (kerpar1arr[i].x == newX1 && kerpar1arr[i].y == newY1 && kerpar1arr[i].ser == 3) {
                    this.multiply++;
                    var emptyCells = this.chooseCell3(1);
                    var newCell = random(emptyCells)
                    if (newCell && this.multiply >= 55) {
                        var newX = newCell[0];
                        var newY = newCell[1];
                        matrix[newY][newX] = this.index;
                        var newkerpar = new Kerpar1(newX, newY, this.index, this.ser);
                        kerpar1arr.push(newkerpar);
                        for (var i in grassarr) {
                            if (newX == grassarr[i].x && newY == grassarr[i].y) {
                                grassarr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }
    }



    event() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (x == y) {
                    matrix[y][x] = 0;
                    for (var i in kerpar1arr) {
                        if (x == kerpar1arr[i].x && y == kerpar1arr[i].y) {
                            kerpar1arr.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
        statistics.kerpar1event++;
    }
    death() {
        this.power--
        if (this.power < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in kerpar1arr) {
                if (this.x == kerpar1arr[i].x && this.y == kerpar1arr[i].y) {
                    kerpar1arr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.eat()
            this.mul()
        }
    }
}