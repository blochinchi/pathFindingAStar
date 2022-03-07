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
let counter = 0;

function Spot(i, j) {
	this.i = i;
	this.j = j;
	this.f = 0;
	this.g = 0;
	this.h = 0;
	this.nextI = i + 1;
	this.nextJ = j + 1;
	this.neighbours = [];
	this.previous = undefined;
	this.wall = false;
	this.show = function (color) {
		fill(color);
		if (this.wall) {
			if (!checkpoints.includes(this)) {
				fill(0);
			}
		}
		noStroke();
		rect(this.i * w, this.j * h, w - 1, h - 1);
	};
	this.nextX = w * this.nextI;
	this.nextY = h * this.nextJ;
	this.x = w * this.i;
	this.y = h * this.j;

	this.mousePressed = function () {
		if (this.x < mouseX && this.y < mouseY && this.nextX > mouseX && this.nextY > mouseY) {
			let tempCurrentButton;
			if (!currentButton) {
				if (!start) {
					tempCurrentButton = "start";
				} else if (!end) {
					tempCurrentButton = "end";
				} else {
					tempCurrentButton = "wall";
				}
			}
			if (currentButton === "start" || tempCurrentButton === "start") {
				if (this !== end) {
					if (checkpoints.includes(this)) {
						removeFromArray(checkpoints, this);
					}
					openSet = [];
					start = this;
					this.wall = false;
				}
			} else if (currentButton === "end" || tempCurrentButton === "end") {
				if (this !== start) {
					if (end) {
						removeFromArray(checkpoints, end);
					}
					if (checkpoints.includes(this)) {
						removeFromArray(checkpoints, this);
					}
					end = this;
					this.wall = false;
				}
			} else if (currentButton === "wall" || tempCurrentButton === "wall") {
				if (this !== start && this !== end && !checkpoints.includes(this)) {
					if (this.wall === true) {
						this.wall = false;
						if (diagonalAllowed) {
							diagonalWallsFix(i, j, "add");
						}
					} else if (this.wall === false) {
						this.wall = true;
						if (diagonalAllowed) {
							diagonalWallsFix(i, j, "remove");
						}
					}
				}
			} else if (currentButton === "checkpoint") {
				if (this !== start && this !== end && !this.wall) {
					if (checkpoints.includes(this)) {
						removeFromArray(checkpoints, this);
					} else {
						checkpoints.push(this);
					}
				}
			}
			if (firstStart) {
				setTimeout(startAlgo);
			}
			renderEssentials();
		}
	};
}

function mousePressed() {
	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			quadGrid[i][j].mousePressed();
		}
	}
}
