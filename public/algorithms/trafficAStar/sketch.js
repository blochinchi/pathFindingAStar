let blockRows;
let blockColumns;
const quadGrid = new Array(blockColumns);
var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
var path;
let startAlgorithm = false;
let firstStart = false;
let checkpoints = [];
let finalPath = [];
let initialized = false;
let currentEnd;
let currentStart;
let current;

function Spot(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.nextI = i+1;
    this.nextJ = j+1;
    this.neighbours = [];
    this.previous = undefined;
    this.wall = false;
    this.show = function (color) {
        fill(color);
        if (this.wall) {
            fill(0);
        }
        noStroke();
        rect(this.i * w, this.j * h, w - 1, h - 1);
    };

    this.mousePressed = function(){
        let nextX = w*this.nextI;
        let nextY = h*this.nextJ;
        let x = w*this.i;
        let y = h*this.j
        if(x < mouseX && y < mouseY && nextX > mouseX && nextY > mouseY){
            let tempCurrentButton;
            if(!currentButton){
                if(!start){
                    tempCurrentButton = "start";
                }
                else if(!end){
                    tempCurrentButton = "end";
                }
                else{ 
                    tempCurrentButton = "wall";
                }
            }
            if(currentButton === "start" || tempCurrentButton === "start"){
                if(this !== end){
                    if(checkpoints.includes(this)){
                        removeFromArray(checkpoints, this);
                    }
                    openSet = [];
                    start = this;
                    this.wall = false;
                    renderEssentials();
                    if(firstStart){
                        startAlgo();
                    }
                }

            }
            else if(currentButton === "end" || tempCurrentButton === "end"){
                if(this !== start){
                    if(end){
                        removeFromArray(checkpoints, end);
                    }
                    if(checkpoints.includes(this)){
                        removeFromArray(checkpoints, this);
                    }
                    end = this;
                    this.wall = false;
                    renderEssentials();
                    if(firstStart){
                        startAlgo();
                    }
                }
            }
            else if(currentButton === "wall" || tempCurrentButton === "wall"){
                if(this !== start && this !== end && !checkpoints.includes(this)){
                    if(this.wall === true){
                        this.wall = false;
                        renderEssentials();
                        if(diagonalAllowed){
                            diagonalWallsFix(i, j, "add");
                        }
                        if(firstStart){
                            startAlgo();
                        }
                    }
                    else if(this.wall === false){
                        this.wall = true
                        renderEssentials();
                        if(diagonalAllowed){
                            diagonalWallsFix(i, j, "remove");
                        }
                        if(firstStart){
                            startAlgo();
                        }
                    }
                }
            }
            else if(currentButton === "checkpoint"){
                if(this !== start && this !== end && !this.wall){
                    if(checkpoints.includes(this)){
                        removeFromArray(checkpoints, this);
                    }
                    else{
                        checkpoints.push(this);
                    }
                    if(firstStart){
                        startAlgo();
                    }
                    renderEssentials();
                }
            }
        }
    }
}

function setup(){
    blockColumns = Math.round(windowWidth/100);
    blockRows = Math.round(windowHeight/100);
    var canvas = createCanvas(windowWidth, windowHeight*0.8);
    canvas.position((windowWidth - width) / 2, windowHeight - height);
    canvas.parent('algoHolder');
    w = width/blockColumns;
    h = height/blockRows;

    for(var i = 0; i < blockColumns; i++){
        quadGrid[i] = new Array(blockRows);
    }

    for(var i = 0; i < blockColumns; i++){
        for(var j = 0; j < blockRows; j++){
            quadGrid[i][j] = new Spot(i, j);
        }
    }

    addNeighbours();

    renderEssentials();
}

function draw(){
    line(0, 0, 0, windowHeight);
    line(0, 0, windowWidth, 0);
    stroke(0)
    strokeWeight(2)
    if(startAlgorithm){
        aStarAlg();
    }
}

function mousePressed(){
    for (var i = 0; i < blockColumns; i++) {
        for (var j = 0; j < blockRows; j++) {
            quadGrid[i][j].mousePressed();
        }
    }
}