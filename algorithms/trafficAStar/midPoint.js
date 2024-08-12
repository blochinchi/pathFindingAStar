function midPointStart(newStartCount, removeFrom) {
	for (var i = finalPath.length - 1; i >= 0; i--) {
		if (finalPath[i] === removeFrom) {
			finalPath.splice(i, finalPath.length - i);
			break;
		}
	}
	startAlgo(newStartCount);
}

function midPointEnd(newStartCount, removeFrom) {
	var removeUntilIndex;
	if (removeFrom !== start) {
		removeFrom = finalPath.findIndex(elt => elt === removeFrom);
		removeUntilIndex = finalPath.findIndex(elt => elt === checkpoints[removeFrom + 1]);
	} else {
		removeFrom = 0;
		removeUntilIndex = finalPath.findIndex(elt => elt === checkpoints[0]);
	}
	console.log(removeFrom, removeUntilIndex - removeFrom);
	finalPath.splice(removeFrom, removeUntilIndex - removeFrom);
	countLimit = 1;
	startAlgo(newStartCount, true);
}
