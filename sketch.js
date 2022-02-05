const rows = 15;
const columns = 15;
const grid = new Array(columns);

var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
var path;

function removeFromArray(arr, elt){
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] == elt){
            arr.splice(i, 1);
        }
    }
}

function heuristic(a, b){
    var d = abs(a.i - b.i) + abs(a.j - a.j);
    return d;
}

function Spot(i, j){
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbours = [];
    this.previous = undefined;
    this.wall = false;

    if(random(1) < 0.1){
        this.wall = true;
    }

    this.show = function(color){
        fill(color);
        if(this.wall){
            fill(0);
        }
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
    end = grid[columns-1][6];
    openSet.push(start);
}


function draw(){
    if(openSet.length > 0){
        var winner = 0;
        for(var i = 0; i < openSet.length; i++){
            if(openSet[winner].f > openSet[i].f){
                winner = i;
            }
        }

        var current = openSet[winner];

        if (current === end) {
            console.log("done");
            noLoop();
        }

        removeFromArray(openSet, current);
        closedSet.push(current);

        var neighbours = current.neighbours;
        for(var i = 0; i < neighbours.length; i++){
            var neighbour = neighbours[i];
            if(!closedSet.includes(neighbour)){
                var tempG= current.g+1;
                if (openSet.includes(neighbour)) {
                    if(neighbour.g > tempG){
                        neighbour.g = tempG;
                    }
                } else{
                    neighbour.g = tempG;
                    openSet.push(neighbour);
                }
                neighbour.previous = current;
                neighbour.h = heuristic(neighbour, end);
                neighbour.f = neighbour.g + neighbour.h;
            }
        }

    } 
    else{
    }

    background(0);

    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show(color(255));
        }
    }

    for(var i = 0; i < closedSet.length; i++){
        if (closedSet[i] !== end) {
            closedSet[i].show(color(255, 0, 0));
        }
    }

    end.show(color(255, 165, 0))

    for(var i = 0; i < openSet.length; i++){
        if(openSet[i] !== end){
            openSet[i].show(color(0, 255, 0))
        }
    }
    path = []
    var temp = current;
    path.push(temp)
    while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
    }

    for(var i = 0; i < path.length; i++){
        if(i != 0 && i!=path.length-1){
            path[i].show(color(0, 0, 255));
        }
        else{
            path[i].show(color(255, 165, 255))
        }
    }
}