function startAlgo(count, limitValue) {
	firstStart = true;
	if (start && end && firstStart) {
		if (!count) {
			if (count !== 0) {
				finalPath = [];
			}
			count = 0;
		}
		console.log('started');
		openSet = [];
		openSet.push(start);
		closedSet = [];
		path = [];
		startAlgorithm = true;
		counter = count;
		initialized = false;
		removeFromArray(checkpoints, end);
		checkpoints.push(end);
		if (!limitValue) {
			countLimit = checkpoints.length;
		} else {
			countLimit = limitValue;
		}
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
	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			quadGrid[i][j].f = 0;
			quadGrid[i][j].g = 0;
			quadGrid[i][j].h = 0;
			quadGrid[i][j].wall = false;
			quadGrid[i][j].previous = null;
		}
	}
	renderEssentials();
}
