function setup() {
	blockColumns = Math.round(windowWidth / 100);
	blockRows = Math.round(windowHeight / 100);
	var canvas = createCanvas(windowWidth, windowHeight * 0.8);
	canvas.position((windowWidth - width) / 2, windowHeight - height);
	canvas.parent("algoHolder");
	w = width / blockColumns;
	h = height / blockRows;
	for (var i = 0; i < blockColumns; i++) {
		quadGrid[i] = new Array(blockRows);
	}

	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			quadGrid[i][j] = new Spot(i, j);
		}
	}

	addNeighbours();

	renderEssentials();
}

function draw() {
	line(0, 0, 0, windowHeight);
	line(0, 0, windowWidth, 0);
	stroke(0);
	strokeWeight(2);
	if (startAlgorithm) {
		aStarAlg();
	}
}
