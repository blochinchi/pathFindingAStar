const rows = 5;
const columns = 5;
const grid = new Array(columns);

var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;

function removeFromArray(arr, elt){
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] == elt){
            arr.splice(i, 1);
        }
    }
}

function Spot(i, j){
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbours = [];
    this.show = function(color){

        fill(color);
        noStroke;
        rect(this.i*w, this.j*h, w-1, h-1)
    }
    this.addNeighbours = function(grid){
        var i = this.i;
        var j = this.j;

        if(i > 0){
            this.neighbours.push(grid[i - 1][j]);
        }

        if(i < columns-1){
            this.neighbours.push(grid[i + 1][j])
        }

        if(j > 0){
            this.neighbours.push(grid[i][j - 1])
        }

        if(j < rows-1){
            this.neighbours.push(grid[i][j + 1]);
        }
    }
}

function setup(){
    createCanvas(400, 400);
    console.log("A*");

    w = width/columns;
    h = height/rows;

    for(var i = 0; i < columns; i++){
        grid[i] = new Array(rows);
    }

    for(var i = 0; i < columns; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j] = new Spot(i, j);
        }
    }

    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].addNeighbours(grid);
        }
    }

    start = grid[0][0];
    end = grid[columns - 1][rows - 1];

    openSet.push(start);
    closedSet.push(end);
}

function draw(){
    if(openSet.length > 0){
        var winner = 0;
        for(var i = 0; i < openSet.length; i++){
            if(openSet[winner].f > openSet[i].f){
                winner = i;
                console.log(i);
            }
        }

        var current = openSet[winner];

        if(current === end){
            console.log("done");
        }

        console.log(grid);

        removeFromArray(openSet, current);
        closedSet.push(current);

    } 
    else{
        console.log("no solution");
    }

    background(0);

    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show(color(255));
        }
    }

    for(var i = 0; i < closedSet.length; i++){
        closedSet[i].show(color(255, 0, 0));
    }

    for(var i = 0; i < openSet.length; i++){
        openSet[i].show(color(0, 255, 0))
    }
}