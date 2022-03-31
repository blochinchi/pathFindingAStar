function addWalls() {
	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			if (Math.random() < randomWall / 100) {
				if (quadGrid[i][j] !== start && quadGrid[i][j] !== end) {
					quadGrid[i][j].wall = true;
				}
			} else {
				quadGrid[i][j].wall = false;
			}
		}
	}
	if (firstStart) {
		startAlgo();
	}
	renderEssentials();
}
