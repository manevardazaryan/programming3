class Grass extends Base {
    constructor(x, y, index) {
       super(x,y,index);
      this.multiply=0

    }
    chooseCell(character) {
       return super.chooseCell(character);
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

