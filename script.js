var matrix = []
var m = 50
var n = 50
var side = 10;
var grassarr = []
var grasseaterarr = []
var predatorarr = []
var kerpar1arr = []
var kerpar2arr = []
function setup() {
    for(var y=0;y<m;y++){
        matrix[y]=[]
        for(var x=0;x<n;x++){
            var a = random([5,5,2,1,2,2,2,4,2,1,2,2,1,1,5,0,1,3,2,2,0,4,2,3,1,1,2])
            matrix[y][x]=a

          
        }
    }
    frameRate(20);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
         
            if (matrix[y][x] == 1) {
                grassarr.push(new Grass(x, y, 1))
            }
            else  if(matrix[y][x]==2){
               grasseaterarr.push(new GrassEater(x,y,2))
           }
            else if(matrix[y][x]==3){
              predatorarr.push(new Predator(x,y,3))
              }
             else if(matrix[y][x]==4){
             kerpar1arr.push(new Kerpar1(x,y,4))
              }
              else if(matrix[y][x]==5){
             kerpar2arr.push(new Kerpar2(x,y,5))
              }
           
           } 
        }
    }


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            else if(matrix[y][x]==2){
               fill("yellow");
               rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==3){
               fill("red");
               rect(x * side, y * side, side, side);
            }
             else if(matrix[y][x]==4){
               fill("#312ffe");
               rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==5){
               fill("#580245");
               rect(x * side, y * side, side, side);
            }
              
        }
    }
    for(var i in grassarr){
        grassarr[i].mul()
    }

    for(var i in grasseaterarr){
        grasseaterarr[i].eat()
    }
  
     for(var i in predatorarr){
        predatorarr[i].eat()
    }

    for(var i in kerpar1arr){
        kerpar1arr[i].eat()
        kerpar1arr[i].mul()
       
    }

     for(var i in kerpar2arr){
        kerpar2arr[i].exchange()
        kerpar2arr[i].disappear()
    }
  
}