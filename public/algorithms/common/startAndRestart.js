function startAlgo() {
	if (!start || !end) {
		alert("please choose a start and ending point");
	} else {
		console.log("restarted");
		openSet = [];
		openSet.push(start);
		closedSet = [];
		path = [];
		startAlgorithm = true;
		firstStart = true;
		finalPath = [];
		counter = 0;
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
	setup();
}
