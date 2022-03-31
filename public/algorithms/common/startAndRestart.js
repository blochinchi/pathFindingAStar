function startAlgo() {
	firstStart = true;
	if (start && end && firstStart) {
		console.log("started");
		openSet = [];
		openSet.push(start);
		closedSet = [];
		path = [];
		startAlgorithm = true;
		finalPath = [];
		counter = 0;
		initialized = false;
		removeFromArray(checkpoints, end);
		checkpoints.push(end);
		for (var i = 0; i < blockColumns; i++) {
			for (var j = 0; j < blockRows; j++) {
				quadGrid[i][j].previous = null;
			}
		}
		renderEssentials();
	}
}

function clearBoard() {
	solution = false;
	openSet = [];
	closedSet = [];
	path = [];
	startAlgorithm = false;
	firstStart = false;
	start = null;
	end = null;
	checkpoints = [];
	finalPath = [];
	counter = 0;
	setup();
}
