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
}
