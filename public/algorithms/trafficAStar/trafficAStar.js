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
                if(checkpoints.includes(this)){
                    removeFromArray(checkpoints, this);
                }
                if(this !== end){
                    start = this;
                    start.wall = false;
                    openSet.push(start);
                    renderEssentials();
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
                        end = quadGrid[i][j];
                        this.wall = false;
                        renderEssentials();
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
        if(openSet.length > 0){
            var chosen = 0;
            for(var i = 0; i < openSet.length; i++){
                if(openSet[chosen].f > openSet[i].f){
                    chosen = i;
                }
            }

            var current = openSet[chosen];

            if (current === end) {
                console.log("done");
                firstStart = true
                startAlgorithm = false;
                finalPath.shift();
                finalPath.push(path);
            }

            removeFromArray(openSet, current);
            closedSet.push(current);

            var neighbours = current.neighbours;
            for(var i = 0; i < neighbours.length; i++){
                var neighbour = neighbours[i];
                if(!closedSet.includes(neighbour) && !neighbour.wall){
                    if(current.i != neighbour.i && current.j != neighbour.j){
                        var tempG= current.g+(Math.sqrt(2));
                    }
                    else{
                        var tempG= current.g+1;
                    }
                    var newPath = false
                    if (openSet.includes(neighbour)) {
                        if(neighbour.g > tempG){
                            neighbour.g = tempG;
                            newPath = true;
                        }
                    } else{
                        neighbour.g = tempG;
                        newPath = true;
                        openSet.push(neighbour);
                    }
                    if(newPath){
                        neighbour.previous = current;
                        neighbour.h = heuristic(neighbour, end);
                        neighbour.f = neighbour.g + neighbour.h;
                    }
                }
            }
            renderPath();
        } 
        else{
            console.log("no solution");
            firstStart = true;
            startAlgorithm = false;
            console.log(path);
            path = [];
            renderEssentials();
            console.log(quadGrid);
        }
        function renderPath(){ 
            renderEssentials();

            path = []
            var temp = current;
            path.push(temp)
            while (temp.previous) {
                path.push(temp.previous);
                temp = temp.previous;
            }
            finalPath.shift();
            finalPath.push(path);

            finalPath.forEach(function(eachPath){
                for(var i = 0; i < eachPath.length; i++){
                    if(i != 0 && i!=eachPath.length-1){
                        eachPath[i].show(color(0, 255, 0));
                    }
                }

                noFill();
                stroke(255);
                beginShape();
                for(var i = 0; i < eachPath.length; i++){
                    vertex(eachPath[i].i * w + w/2, eachPath[i].j * h + h/2)
                }
                endShape();

            })
        }
        console.log(finalPath);
        console.log(checkpoints);
    }
}

function mousePressed(){
    for (var i = 0; i < blockColumns; i++) {
        for (var j = 0; j < blockRows; j++) {
            quadGrid[i][j].mousePressed();
        }
    }
}