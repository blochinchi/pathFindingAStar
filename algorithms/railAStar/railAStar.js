const rows = 20;
const columns = 20;
const grid = new Array(columns);
var openSet = [];
var closedSet = [];
var start;
var end;
var w, h;
var path;

function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbours = [];
  this.previous = undefined;
  this.wall = false;

  if (random(1) < 0.3) {
    this.wall = true;
  }

  this.show = function (color) {
    if (this.wall) {
      fill(0);
      noStroke();
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
  };

  this.addNeighbours = function (grid) {
    var i = this.i;
    var j = this.j;

    if (i > 0) {
      this.neighbours.push(grid[i - 1][j]);
    }

    if (i < columns - 1) {
      this.neighbours.push(grid[i + 1][j]);
    }

    if (j > 0) {
      this.neighbours.push(grid[i][j - 1]);
    }

    if (j < rows - 1) {
      this.neighbours.push(grid[i][j + 1]);
    }

    if (i > 0 && j > 0) {
      this.neighbours.push(grid[i - 1][j - 1]);
    }

    if (i < columns - 1 && j > 0) {
      this.neighbours.push(grid[i + 1][j - 1]);
    }

    if (i < columns - 1 && j < rows - 1) {
      this.neighbours.push(grid[i + 1][j + 1]);
    }

    if (i > 0 && j < rows - 1) {
      this.neighbours.push(grid[i - 1][j + 1]);
    }
  };
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('algoHolder');  
  console.log("A*");
  w = width / columns;
  h = height / rows;

  for (var i = 0; i < columns; i++) {
    grid[i] = new Array(rows);
  }

  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
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
  start.wall = false;
  end.wall = false;

  openSet.push(start);
}

function draw() {
  if (openSet.length > 0) {
    var chosen = 0;
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[chosen].f > openSet[i].f) {
        chosen = i;
      }
    }

    var current = openSet[chosen];

    if (current === end) {
      console.log("done");
      noLoop();
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    var neighbours = current.neighbours;
    for (var i = 0; i < neighbours.length; i++) {
      var neighbour = neighbours[i];
      if (!closedSet.includes(neighbour) && !neighbour.wall) {
        if(current.i !== neighbour.i && current.j !== neighbour.j){
          var tempG= current.g+(Math.sqrt(2));
        }
        else{
          var tempG= current.g+1;
        }
        var newPath = false;
        if (openSet.includes(neighbour)) {
          if (neighbour.g > tempG) {
            neighbour.g = tempG;
            newPath = true;
          }
        } else {
          neighbour.g = tempG;
          newPath = true;
          openSet.push(neighbour);
        }
        if (newPath) {
          neighbour.previous = current;
          neighbour.h = heuristic(neighbour, end);
          neighbour.f = neighbour.g + neighbour.h;
        }
      }
    }
  } else {
    console.log("no solution");
    noLoop();
    return;
  }

  background(255);

  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  for (var i = 0; i < closedSet.length; i++) {
    if (closedSet[i] !== end) {
      closedSet[i].show(color(255, 0, 0));
    }
  }

  end.show(color(255, 165, 0));

  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  noFill();
  stroke(255, 0, 255);
  strokeWeight(w / 2);
  beginShape();
  for (var i = 0; i < path.length; i++) {
    vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
  }
  endShape();
}