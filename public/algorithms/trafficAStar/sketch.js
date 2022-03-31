function setup() {
	frameRate(fr);
	// blockColumns = Math.floor(window.innerWidth / w);
	// blockRows = Math.floor((window.innerHeight * 0.8) / h);
	var canvas = createCanvas(blockColumns * w, blockRows * h);
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
	line(0, 0, 0, windowHeight);
	line(0, 0, windowWidth, 0);
	stroke(0);
	strokeWeight(2);
	if (algoSpeed === "instant") {
		while (startAlgorithm) {
			aStarAlg();
		}
	} else if (startAlgorithm) {
		aStarAlg();
	}
}
