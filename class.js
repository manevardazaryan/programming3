class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells)
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var newGrass = new Grass(newX, newY, this.index);
            grassarr.push(newGrass);
            this.multiply = 0;
        }
    }

}


class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = []
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found
    }
    move() {
        this.energy--;
        var fullCells = this.chooseCell(0);
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
        this.energy--;
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
        else (this.move())
    }
}

class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = []
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found
    }
    move() {
        this.energy--;
        var fullCells = this.chooseCell(0);
        var newCell = random(fullCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = this.index;
            this.x = newX
            this.y = newY

        }
    }
    eat() {
        var fullCells = this.chooseCell(2);
        var newCell = random(fullCells);
        if (newCell) {
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
        else (this.move())
    }
}





class Kerpar1 {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.hzorutyun = 0
        this.multiply = 0
        this.power = 40
        this.energy = 80
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found
    }
    move() {
        var fullCells = this.chooseCell(0);
        var newCell = random(fullCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = this.index;
            this.x = newX
            this.y = newY
        }
    }



    eat() {
        this.energy--
            var fullCells = this.chooseCell(2);
            var newCell = random(fullCells);
            if (newCell && this.energy <=30) {
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
                var fullCells1 = this.chooseCell(3);
                var newCell1 = random(fullCells1);
                if (newCell1  && this.energy <=15) {
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
        this.multiply++;
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells)
        if (newCell && this.multiply >= 80) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var newkerpar = new Kerpar1(newX, newY, this.index);
            kerpar1arr.push(newkerpar);
            for (var i in grassarr) {
                if (newX == grassarr[i].x && newY == grassarr[i].y) {
                    grassarr.splice(i, 1);
                    break;
                }
            }
        }
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
        else{
            this.eat()
            this.mul()
        }
    }
}





class Kerpar2 {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0
        this.power = 40
        this.energy = 0
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found
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
        if (newCell && this.energy>=55) {
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
        if (newCell && this.energy>=60) {
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
    }
    mul() {
        
        this.multiply++
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells)
        if (newCell && this.multiply >= 150) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;
            var newkerpar = new Kerpar2(newX, newY, this.index);
            kerpar2arr.push(newkerpar);
        }
        else{
            this.eat()
        }
    }
    eat(){
        var fullCells = this.chooseCell(2);
            var newCell = random(fullCells);
            if (newCell && this.energy>=70) {
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
        else{
            this.exchange()
            this.disappear()
        }
    }

}