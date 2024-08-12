function mousePressed() {
	handleClick();
}

function mouseDragged() {
	handleClick();
	return false;
}

function mouseReleased() {
	mouseLocation = null;
}
