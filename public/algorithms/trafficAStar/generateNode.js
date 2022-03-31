function Spot(i, j) {
	this.i = i;
	this.j = j;
	this.g = 0;
	this.h = 0;
	this.f = this.g + this.h;
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
		rect(i * w + 1, j * h + 1, h - 1, w - 1);
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
				if (this === start) {
					start = null;
					removeFromArray(checkpoints, this);
					startAlgorithm = false;
				} else if (this !== end) {
					if (checkpoints.includes(this)) {
						removeFromArray(checkpoints, this);
					}
					openSet = [];
					start = this;
					this.wall = false;
				}
			} else if (currentButton === "end" || tempCurrentButton === "end") {
				if (this === end) {
					end = null;
					removeFromArray(checkpoints, this);
					startAlgorithm = false;
				} else if (this !== start) {
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
				if (this === start || this === end || checkpoints.includes(this)) {
					return;
				}
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
			} else if (currentButton === "checkpoint") {
				if (this === start || this === end) {
					return;
				}
				if (checkpoints.includes(this)) {
					removeFromArray(checkpoints, this);
				} else {
					checkpoints.push(this);
				}
				this.wall = false;
			}
			if (firstStart) {
				startAlgo();
			}
			renderEssentials();
		}
	};
}
