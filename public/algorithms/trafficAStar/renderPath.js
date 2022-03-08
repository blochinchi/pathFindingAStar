function renderPath(status) {
	var tempArray = [];
	renderEssentials();
	console.log(finalPath);
	if (status === "pathComplete") {
		tempArray = finalPath[finalPath.length - 1];
		tempArray.forEach(eachNewPath => {
			finalPath.push(eachNewPath);
		});
		removeFromArray(finalPath, finalPath[finalPath.length - tempArray.length - 1]);
	}
	if (startAlgorithm) {
		for (var i = 0; i < openSet.length; i++) {
			if (!finalPath.includes(openSet[i])) {
				openSet[i].show(color(173, 216, 230));
			}
		}
	}
	for (var i = 0; i < finalPath.length; i++) {
		if (finalPath[i] !== end && finalPath[i] !== start && !checkpoints.includes(finalPath[i])) {
			finalPath[i].show(color(0, 255, 0));
		}
	}
	for (var i = 0; i < finalPath.length; i++) {
		if (i === 0) {
			renderLine(finalPath[i], null, finalPath[[i + 1]]);
		} else if (i === finalPath.length - 1) {
			renderLine(finalPath[i], finalPath[i - 1], null);
		} else {
			renderLine(finalPath[i], finalPath[i - 1], finalPath[i + 1]);
		}
	}
}

function addPath(current, foundCurrentEnd) {
	if (checkpoints.length === 1) {
		for (var i = 0; i < openSet.length; i++) {
			if (!finalPath.includes(openSet[i])) {
				openSet[i].show(color(173, 216, 230));
			}
		}
	}
	path = [];
	var temp = current;
	while (temp.previous) {
		path.push(temp);
		temp = temp.previous;
	}
	path.push(temp);
	const pathIndexes = path.length - 1;
	for (var i = pathIndexes; i >= 0; i--) {
		path.push(path[i]);
		path.splice(pathIndexes - (pathIndexes - i), 1);
	}
	if (foundCurrentEnd) {
		finalPath.push(path);
		renderPath("pathComplete");
	} else {
		if (finalPath.length > 0) {
			renderPath();
		}
		for (var i = 0; i < path.length; i++) {
			if (path[i] !== end && path[i] !== start && !checkpoints.includes(path[i])) {
				path[i].show(color(0, 255, 0));
			}
		}
		for (var i = 0; i < path.length; i++) {
			if (i === 0) {
				renderLine(path[i], null, path[[i + 1]]);
			} else if (i === path.length - 1) {
				renderLine(path[i], path[i - 1], null);
			} else {
				renderLine(path[i], path[i - 1], path[i + 1]);
			}
		}
	}
}

function renderLine(currentNode, previousNode, nextNode) {
	noFill();
	stroke(255);
	beginShape();

	if (previousNode) {
		if (previousNode.i !== currentNode.i && previousNode.j !== currentNode.j) {
			if (previousNode.i === currentNode.i + 1) {
				if (previousNode.j === currentNode.j + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX, currentNode.nextY);
				} else if (previousNode.j === currentNode.j - 1) {
					line(currentNode.x + w, currentNode.y, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			} else if (previousNode.i === currentNode.i - 1) {
				if (previousNode.j === currentNode.j + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX - w, currentNode.nextY);
				} else if (previousNode.j === currentNode.j - 1) {
					line(currentNode.x, currentNode.y, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			}
		} else {
			if (previousNode.i !== currentNode.i) {
				if (previousNode.i === currentNode.i + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX, currentNode.nextY - h / 2);
				} else if (previousNode.i === currentNode.i - 1) {
					line(currentNode.x, currentNode.y + h / 2, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			} else if (previousNode.j !== currentNode.j) {
				if (previousNode.j === currentNode.j + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX - w / 2, currentNode.nextY);
				} else if (previousNode.j === currentNode.j - 1) {
					line(currentNode.x + w / 2, currentNode.y, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			}
		}
	}
	if (nextNode) {
		if (nextNode.i !== currentNode.i && nextNode.j !== currentNode.j) {
			if (nextNode.i === currentNode.i + 1) {
				if (nextNode.j === currentNode.j + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX, currentNode.nextY);
				} else if (nextNode.j === currentNode.j - 1) {
					line(currentNode.x + w, currentNode.y, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			} else if (nextNode.i === currentNode.i - 1) {
				if (nextNode.j === currentNode.j + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX - w, currentNode.nextY);
				} else if (nextNode.j === currentNode.j - 1) {
					line(currentNode.x, currentNode.y, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			}
		} else {
			if (nextNode.i !== currentNode.i) {
				if (nextNode.i === currentNode.i + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX, currentNode.nextY - h / 2);
				} else if (nextNode.i === currentNode.i - 1) {
					line(currentNode.x, currentNode.y + h / 2, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			} else if (nextNode.j !== currentNode.j) {
				if (nextNode.j === currentNode.j + 1) {
					line(currentNode.x + w / 2, currentNode.y + h / 2, currentNode.nextX - w / 2, currentNode.nextY);
				} else if (nextNode.j === currentNode.j - 1) {
					line(currentNode.x + w / 2, currentNode.y, currentNode.nextX - w / 2, currentNode.nextY - h / 2);
				}
			}
		}
	}
	endShape();
}
