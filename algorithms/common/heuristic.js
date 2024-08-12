function heuristic(a, b) {
	var xDistance = Math.abs(a.i - b.i);
	var yDistance = Math.abs(a.j - b.j);
	if (!diagonalAllowed) {
		return xDistance + yDistance;
		//number of nodes in between the start and end nodes.
	} else {
		return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
		//pythagoras
	}
}
