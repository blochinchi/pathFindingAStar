function mousePressed() {
	if (mouseY > 0) {
		for (var i = 0; i < blockColumns; i++) {
			for (var j = 0; j < blockRows; j++) {
				quadGrid[i][j].mousePressed();
			}
		}
	}
}
