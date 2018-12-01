var matrix = []
var grassarr = []
var grasseaterarr = []
var predatorarr = []
var kerpar1arr = []
var kerpar2arr = []
var kerpar3arr = []
var m = 25
var n = 25
var side = 25;
var jermastican = Math.round(Math.random() * (50 + 30) - 30);
var socket = io.connect('http://localhost:4444');
var statistics = {
    "timestamp": "",
    "predatoreat": 0,
    "grassmul": 0,
    "kerpar1event": 0,
    "grasseatermove": 0,
    "kerpar2exchange": 0,
    "kerpar3death": 0,
    "framecount": 0
}
console.log(statistics);

function setup() {
    for (var y = 0; y < m; y++) {
        matrix[y] = []
        for (var x = 0; x < n; x++) {
            //var a = random([5, 5, 2, 1, 2, 2, 2, 4, 2, 1, 2, 6, 1, 1, 5, 0, 1, 3, 2, 2, 0, 4, 2, 3, 1, 1, 2])
            var a = random([0, 1, 0, 0, 2, 0, 0, 4, 0, 0, 5, 0, 3, 0, 0, 0, 0, 6, 0, 0])
            matrix[y][x] = a


        }
    }
    if (jermastican >= -30 & jermastican <= 0) {
        frameRate(5);
    }
    else if (jermastican >= 1 & jermastican <= 20) {
        frameRate(10);
    }
    else if (jermastican >= 36 & jermastican <= 50) {
        frameRate(18);
    }
    else if (jermastican >= 21 & jermastican <= 35) {
        frameRate(12);
    }
    noStroke()
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac')
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

function mouseClicked() {
    for (var i in grassarr) {
        grassarr[i].event()

    }
    for (var i in predatorarr) {
        predatorarr[i].event()

    }
    for (var i in grasseaterarr) {
        grasseaterarr[i].event()

    }
    for (var i in kerpar1arr) {
        kerpar1arr[i].event()

    }
    for (var i in kerpar2arr) {
        kerpar2arr[i].event()

    }
    for (var i in kerpar3arr) {
        kerpar3arr[i].event()

    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (jermastican >= -30 & jermastican <= 0) {
                textStyle(ITALIC);
                textSize(35);
                fill(0);
                text('Winter', 10, 30);
                if (matrix[y][x] == 1) {
                    fill(255, 255, 255);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill('#d9d9d9');
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
            else if (jermastican >= 1 & jermastican <= 20) {
                textStyle(ITALIC);
                textSize(35);
                fill(0);
                text("Spring", 10, 30);
                if (matrix[y][x] == 1) {
                    fill('#006600');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill('#ccffcc');
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
                    fill(128, 128, 255);
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


            else if (jermastican >= 36 & jermastican <= 50) {
                textStyle(ITALIC);
                textSize(35);
                fill(0);
                text("Summer", 10, 30);
                if (matrix[y][x] == 1) {
                    fill(128, 255, 128);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill('#ffffb3');
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

            else if (jermastican >= 21 & jermastican <= 35) {
                textStyle(ITALIC);
                textSize(35);
                fill(255);
                text("Autumn", 10, 30);
                if (matrix[y][x] == 1) {
                    fill(0, 51, 0);
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {

                    fill('#ffaa00');
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
                    fill(51, 0, 51);
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
    if (frameCount % 60 === 0) {
        statistics.timestamp = (new Date()).toString();
        statistics.framecount = frameCount;
        socket.emit("send data", statistics);
    }
}
