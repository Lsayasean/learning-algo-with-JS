// given an array of int where each int represents a number of jump, write a function that returns a bool to check if
// whether the jumps in the array form a single cycle 

function hasSingleCycle(array) {
	// checks how many times we visit elements in the array
	let numOfVisited = 0
	
	// a constant of the first array item
	let startingIndex = 0
	
	// the current index we are on in the array
	let currentIndex = startingIndex
	
	while(numOfVisited < array.length){
		// if we started the cycle but end up at the beginning before we run through everything return false
		 if(numOfVisited > 0 && currentIndex == 0){
			 return false
		 }
		
		// increment the number of visited
		numOfVisited++;
		
		// sets new current with helper method
		currentIndex = getIndex(currentIndex, array)
	}
	
	// returns true if cycle is completed and starts at position 0
	return currentIndex == 0
}

// helper method to set new currentIndex
function getIndex(currentIndex, array){
	// what to move or jump index by
	let jumpBy = array[currentIndex]
	
	// because of a number can be larger than the array length we mod by array length to
	// get the remainder to move current index to
	let nextIndex = (currentIndex + jumpBy) % array.length
	
	if(nextIndex >= 0){
		return nextIndex
	} else {
        // this is if the current index is a negative number
        // by ading the length of array to the negative number it makes a wrap backwards
		return nextIndex + array.length
	}
}