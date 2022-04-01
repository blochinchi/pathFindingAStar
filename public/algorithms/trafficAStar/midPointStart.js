function midPointStart(newStartCount, removeFrom) {
	for (var i = finalPath.length - 1; i >= 0; i--) {
		if (finalPath[i] === removeFrom) {
			finalPath.splice(i, finalPath.length - i);
			break;
		}
	}
	startAlgo(newStartCount);
}
