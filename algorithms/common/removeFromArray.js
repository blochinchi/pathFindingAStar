function removeFromArray(arr, elt) {
	const index = arr.findIndex(element => elt === element)
	if(index !== -1){
		arr.splice(index, 1); 
	}
	//find index returns the index of the desired element and splice removes it.
}
