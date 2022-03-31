function removeFromArray(arr, elt) {
	arr.splice(arr.findIndex(element => elt === element), 1); //find index returns the index of the desired element and splice removes it.
}
