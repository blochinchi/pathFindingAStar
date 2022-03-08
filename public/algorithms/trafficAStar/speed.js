function changeSpeed(speed) {
	if (speed === "slow") {
		fr = 3;
	} else if (speed === "fast") {
		fr = 60;
	}
	algoSpeed = speed;
	frameRate(fr);
}
