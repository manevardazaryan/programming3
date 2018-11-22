class Predator extends Base {
    constructor(x, y, index) {
        super(x,y,index);
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
        if (jermastican > -30 & jermastican < 0) {

             var energy = 40
        }
         else if (jermastican >0 & jermastican < 20) {
             energy = 35
         }
          else if (jermastican >35 & jermastican < 50) {
              energy = 30
          }
           else if (jermastican >20 & jermastican < 35) {
             energy = 25
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
        else (this.move())
    }
}
