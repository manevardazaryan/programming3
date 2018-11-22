var matrix = []
var m = 50
var n = 50
var side = 10;
var jermastican = Math.round(Math.random()*(49+29)-29);
var grassarr = []
var grasseaterarr = []
var predatorarr = []
var kerpar1arr = []
var kerpar2arr = []
var kerpar3arr = []
function setup() {
    for (var y = 0; y < m; y++) {
        matrix[y] = []
        for (var x = 0; x < n; x++) {
            var a = random([5, 5, 2, 1, 2, 2, 2, 4, 2, 1, 2, 6, 1, 1, 5, 0, 1, 3, 2, 2, 0, 4, 2, 3, 1, 1, 2])
            //var a = random([0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
            matrix[y][x] = a


        }
    }
        frameRate(5);   
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassarr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                grasseaterarr.push(new GrassEater(x, y, 2))
            }
            else if (matrix[y][x] == 3) {
                predatorarr.push(new Predator(x, y, 3))
            }
            else if (matrix[y][x] == 4) {
                kerpar1arr.push(new Kerpar1(x, y, 4))
            }
            else if (matrix[y][x] == 5) {
                kerpar2arr.push(new Kerpar2(x, y, 5))
            }
            else if (matrix[y][x] == 6) {
                kerpar3arr.push(new Kerpar3(x, y, 6))
            }

        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (jermastican > -30 & jermastican < 0) {
                textStyle(ITALIC);
                textSize(35);
                fill(0);
                text('cmer', 10, 30);
                if (matrix[y][x] == 1) {
                    fill(255, 255, 255);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill(191, 191, 191);
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    fill(255, 255, 229);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill(255, 229, 229);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill(229, 255, 249);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill(208, 208, 251);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill(242, 229, 255);
                    rect(x * side, y * side, side, side);
                }
            }
            else if (jermastican >0 & jermastican < 20) {
                textStyle(ITALIC);
                textSize(35);
                fill(255);
                text("garun", 10, 30);
                if (matrix[y][x] == 1) {
                    fill(12, 167, 12);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill(191, 191, 191);
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    fill(230, 255, 153);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill(255, 230, 230);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill(231, 239, 253);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill(163, 102, 255);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill(204, 230, 255);
                    rect(x * side, y * side, side, side);
                }
            }


            else if (jermastican >35 & jermastican < 50) {
                textStyle(ITALIC);
                textSize(35);
                fill(255);
                text("amar", 10, 30);
                if (matrix[y][x] == 1) {
                    fill(128, 255, 128);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill(191, 191, 191);
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    fill(255, 255, 0);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill(255, 51, 51);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill(128, 255, 255);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill(209, 179, 255);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill(240, 230, 255);
                    rect(x * side, y * side, side, side);
                }
            }

            else if (jermastican >20 & jermastican < 35) {
                textStyle(ITALIC);
                textSize(35);
                fill(255);
                text("ashun", 10, 30);
                if (matrix[y][x] == 1) {
                    fill(36, 47, 4);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill(191, 191, 191);
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 2) {
                    fill(170, 170, 9);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill(180, 0, 0);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill(0, 102, 153);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill(102, 0, 102);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill(0, 0, 102);
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }

    for (var i in grassarr) {
        grassarr[i].mul()
    }

    for (var i in grasseaterarr) {
        grasseaterarr[i].eat()
    }

    for (var i in predatorarr) {
        predatorarr[i].eat()
    }

    for (var i in kerpar1arr) {
        kerpar1arr[i].eat()
        kerpar1arr[i].mul()

    }

    for (var i in kerpar2arr) {
        kerpar2arr[i].exchange()
        kerpar2arr[i].disappear()
    }
    for (var i in kerpar3arr) {
        kerpar3arr[i].exchange()
        kerpar3arr[i].death()
    }

}