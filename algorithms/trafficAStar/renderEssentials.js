function renderEssentials(current) {
	background(0);
	for (var i = 0; i < blockColumns; i++) {
		for (var j = 0; j < blockRows; j++) {
			quadGrid[i][j].show(color(255));
		}
	}

	checkpoints.forEach(function (checkpoint) {
		checkpoint.show(color(23, 162, 184));
	});

	if (end) {
		end.show(color(255, 165, 0));
	}

	if (start) {
		start.show(color(0, 0, 255));
	}
}
