function aStarAlg() {
	if (!initialized) {
		initialize();
	}
	if (openSet.length > 0) {
		var chosen = 0;
		for (var i = 0; i < openSet.length; i++) {
			if (openSet[chosen].h >= openSet[i].h && openSet[chosen].f >= openSet[i].f) {
				chosen = i;
			}
		}

		current = openSet[chosen];
		removeFromArray(openSet, current);
		closedSet.push(current);

		if (current === currentEnd) {
			initialized = false;
			counter = counter + 1;
			if (currentEnd === end) {
				console.log("done");
				startAlgorithm = false;
				counter = 0;
			}
			addPath(current, true);
		} else {
			var neighbours = current.neighbours;
			for (var i = 0; i < neighbours.length; i++) {
				var neighbour = neighbours[i];
				if (!closedSet.includes(neighbour) && !neighbour.wall) {
					if (current.i !== neighbour.i && current.j !== neighbour.j) {
						var tempG = current.g + 1.4142135623730951;
					} else {
						var tempG = current.g + 1;
					}
					var newPath = false;
					if (openSet.includes(neighbour)) {
						if (neighbour.g > tempG) {
							neighbour.g = tempG;
							newPath = true;
						}
					} else {
						neighbour.g = tempG;
						newPath = true;
						openSet.push(neighbour);
					}
					if (newPath) {
						neighbour.previous = current;
						neighbour.h = heuristic(neighbour, currentEnd);
						neighbour.f = neighbour.g + neighbour.h;
					}
				}
			}
			addPath(current, false);
		}
	} else {
		console.log("no solution");
		startAlgorithm = false;
		console.log(path);
		path = [];
		renderEssentials();
		console.log(quadGrid);
		initialized = false;
		counter = 0;
	}
}

function initialize() {
	console.log("initialized");
	openSet = [];
	path = [];
	closedSet = [];
	if (counter === 0) {
		currentStart = start;
		currentEnd = checkpoints[counter];
	} else if (counter < checkpoints.length) {
		currentStart = checkpoints[counter - 1];
		currentEnd = checkpoints[counter];
	} else {
		return null;
	}
	openSet.push(currentStart);
	initialized = true;
	if (checkpoints.length > 1) {
		for (var i = 0; i < blockColumns; i++) {
			for (var j = 0; j < blockRows; j++) {
				quadGrid[i][j].f = 0;
				quadGrid[i][j].g = 0;
				quadGrid[i][j].h = 0;
				quadGrid[i][j].previous = null;
			}
		}
	}
}
