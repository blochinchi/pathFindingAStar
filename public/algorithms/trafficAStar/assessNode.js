function assessNode() {
	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			quadGrid[i][j].g = heuristic(quadGrid[i][j], currentStart);
			quadGrid[i][j].h = heuristic(quadGrid[i][j], currentEnd);
			quadGrid[i][f].f = quadGrid[i][j].h + quadGrid[i][j].g;
		}
	}
}
