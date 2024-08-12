function setup() {
	frameRate(fr);
	var canvas = createCanvas(blockColumns * w + 1, blockRows * h + 1);
	canvas.position((windowWidth - width) / 2, windowHeight - height);
	canvas.parent("algoHolder");
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
	if (startAlgorithm) {
		aStarAlg();
	}
}
