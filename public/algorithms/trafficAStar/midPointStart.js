function midPointStart(location) {
	startAlgo(location);
	for (var k = finalPath.length - 1; k >= 0; k--) {
		if (finalPath[k] === checkpoints[location - 1]) {
			finalPath.splice(k, finalPath.length - 1 - k);
			break;
		}
	}
	renderEssentials();
}
