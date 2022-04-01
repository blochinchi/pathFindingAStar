function startAlgo(count, limitValue) {
	firstStart = true;
	if (start && end && firstStart) {
		if (!count) {
			if (count !== 0) {
				finalPath = [];
			}
			count = 0;
		}
		if (!limitValue) {
			countLimit = null;
		}
		console.log("started");
		openSet = [];
		openSet.push(start);
		closedSet = [];
		path = [];
		startAlgorithm = true;
		counter = count;
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
	limit = null;
	renderEssentials();
	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			quadGrid[i][j].f = 0;
			quadGrid[i][j].g = 0;
			quadGrid[i][j].h = 0;
			quadGrid[i][j].previous = null;
		}
	}
}
