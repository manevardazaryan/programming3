class Kerpar1 extends Base{
    constructor(x, y, index) {
        super(x,y,index);
        this.hzorutyun = 0
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
        return super.chooseCell(character);
    }
    move() {
        return super.move()
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