class Grass extends Base {
    constructor(x, y, index) {
       super(x,y,index);
      this.multiply=0

    }
    chooseCell(character) {
       return super.chooseCell(character);
    }
    mul() {
      if (jermastican > -30 & jermastican < 0) {

         var multiply=18
    }
     else if (jermastican >0 & jermastican < 20) {
         multiply=8
     }
      else if (jermastican >35 & jermastican < 50) {
          multiply=5
      }
       else if (jermastican >20 & jermastican < 35) {
          multiply=10
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
    }

}

