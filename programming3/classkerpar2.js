class Kerpar2 extends Base {
    constructor(x, y, index, multiply) {
        super(x, y, index, multiply);
        this.power = 50;
        this.energy = 0;
        this.ser = Math.round(Math.random() * (3 - 2) + 2);
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
            [this.x, this.y - 4],
            [this.x, this.y + 4],
            [this.x + 1, this.y - 4],
            [this.x + 2, this.y - 4],
            [this.x + 3, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 1, this.y - 4],
            [this.x - 2, this.y - 4],
            [this.x - 3, this.y - 4],
            [this.x - 4, this.y - 4],
            [this.x + 1, this.y + 4],
            [this.x + 2, this.y + 4],
            [this.x + 3, this.y + 4],
            [this.x + 4, this.y + 4],
            [this.x - 1, this.y + 4],
            [this.x - 2, this.y + 4],
            [this.x - 3, this.y + 4],
            [this.x - 4, this.y + 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y],
            [this.x - 4, this.y - 1],
            [this.x - 4, this.y - 2],
            [this.x - 4, this.y - 3],
            [this.x - 4, this.y + 1],
            [this.x - 4, this.y + 2],
            [this.x - 4, this.y + 3],
            [this.x + 4, this.y - 1],
            [this.x + 4, this.y - 2],
            [this.x + 4, this.y - 3],
            [this.x + 4, this.y + 1],
            [this.x + 4, this.y + 2],
            [this.x + 4, this.y + 3],
            [this.x, this.y + 7],
            [this.x, this.y - 7],
            [this.x + 7, this.y],
            [this.x - 7, this.y],
            [this.x - 1, this.y + 7],
            [this.x - 2, this.y + 7],
            [this.x - 3, this.y + 7],
            [this.x - 4, this.y + 7],
            [this.x - 5, this.y + 7],
            [this.x - 6, this.y + 7],
            [this.x - 7, this.y + 7],
            [this.x + 1, this.y + 7],
            [this.x + 2, this.y + 7],
            [this.x + 3, this.y + 7],
            [this.x + 4, this.y + 7],
            [this.x + 5, this.y + 7],
            [this.x + 6, this.y + 7],
            [this.x + 7, this.y + 7],
            [this.x - 1, this.y - 7],
            [this.x - 2, this.y - 7],
            [this.x - 3, this.y - 7],
            [this.x - 4, this.y - 7],
            [this.x - 5, this.y - 7],
            [this.x - 6, this.y - 7],
            [this.x - 7, this.y - 7],
            [this.x + 1, this.y - 7],
            [this.x + 2, this.y - 7],
            [this.x + 3, this.y - 7],
            [this.x + 4, this.y - 7],
            [this.x + 5, this.y - 7],
            [this.x + 6, this.y - 7],
            [this.x + 7, this.y - 7],
            [this.x - 7, this.y + 1],
            [this.x - 7, this.y + 2],
            [this.x - 7, this.y + 3],
            [this.x - 7, this.y + 4],
            [this.x - 7, this.y + 5],
            [this.x - 7, this.y + 6],
            [this.x - 7, this.y - 1],
            [this.x - 7, this.y - 2],
            [this.x - 7, this.y - 3],
            [this.x - 7, this.y - 4],
            [this.x - 7, this.y - 5],
            [this.x - 7, this.y - 6],
            [this.x + 7, this.y + 1],
            [this.x + 7, this.y + 2],
            [this.x + 7, this.y + 3],
            [this.x + 7, this.y + 4],
            [this.x + 7, this.y + 5],
            [this.x + 7, this.y + 6],
            [this.x + 7, this.y - 1],
            [this.x + 7, this.y - 2],
            [this.x + 7, this.y - 3],
            [this.x + 7, this.y - 4],
            [this.x + 7, this.y - 5],
            [this.x + 7, this.y - 6]

        ];

    }




    chooseCell(character) {

        this.getNewCoordinates()
        return super.chooseCell(character);
    }


    move() {
        var fullCells = this.chooseCell(1);
        var newCell = random(fullCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 1
            matrix[newY][newX] = this.index;
            this.x = newX
            this.y = newY
        }
    }


    disappear() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells)
        if (newCell && this.energy >= 30) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 0;
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in kerpar1arr) {
                if (newX == kerpar1arr[i].x && newY == kerpar1arr[i].y) {
                    kerpar1arr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move()
        }
    }


    exchange() {
        this.energy++
        var fullCells = this.chooseCell(3);
        var newCell = random(fullCells);
        if (newCell && this.energy >= 60) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2;
            this.x = newX
            this.y = newY
            for (var i in predatorarr) {
                if (newX == predatorarr[i].x && newY == predatorarr[i].y) {
                    predatorarr.splice(i, 1);
                    break;
                }

                var newgrasseater = new GrassEater(newX, newY, 2);
                grasseaterarr.push(newgrasseater);
            }
        }
        else {
            this.mul()
        }
        statistics.kerpar2exchange++;
    }
    mul() {

        if (jermastican >= 36 & jermastican <= 50) {
            var multiply = 35
        }
        else if (jermastican >= 21 & jermastican <= 35) {
            multiply = 30
        }
        else {
            multiply = 25
        }
        if (this.ser == 2) {
            var emptyCells1 = this.chooseCell(5);
            var newCell1 = random(emptyCells1)
            if (newCell1) {
                var newX1 = newCell1[0];
                var newY1 = newCell1[1];
            }
            for (var i in kerpar2arr) {
                if (kerpar2arr[i].x == newX1 && kerpar2arr[i].y == newY1 && kerpar2arr[i].ser == 3) {
                    this.multiply++
                    var emptyCells = this.chooseCell(0);
                    var newCell = random(emptyCells)
                    if (newCell && this.multiply >= multiply) {
                        var newX = newCell[0];
                        var newY = newCell[1];
                        matrix[newY][newX] = this.index;
                        var newkerpar = new Kerpar2(newX, newY, this.index);
                        kerpar2arr.push(newkerpar);
                    }
                    else {
                        this.eat()
                    }
                    break;
                }
            }
        }
    }


    eat() {
        if (jermastican >= -30 & jermastican <= 0) {

            var energy = 35
        }
        else if (jermastican >= 1 & jermastican <= 20) {
            energy = 30
        }
        else {
            energy = 25
        }
        var fullCells = this.chooseCell(2);
        var newCell = random(fullCells);
        if (newCell && this.energy > energy) {
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
    }
    event() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y <= x && x > m + 1 - y || y >= x && x < m + 1 - y) {
                    matrix[y][x] = 0;
                    for (var i in kerpar2arr) {
                        if (x == kerpar2arr[i].x && y == kerpar2arr[i].y) {
                            kerpar2arr.splice(i, 1);
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
            for (var i in kerpar2arr) {
                if (this.x == kerpar2arr[i].x && this.y == kerpar2arr[i].y) {
                    kerpar2arr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.exchange()
            this.disappear()
        }
    }

}