// given an array and a to move integer, find all to move integer in array and move it to the end of array in place

function moveElementToEnd(array, toMove) {
    // pointers
	let left = 0
	let right = array.length -1
	while(left < right){
        // moves right pointer over if last element in array in the to move number
        // add checker for edge case
		while(left < right && array[right] === toMove){
			right--;
        }
        // perform swaps on array in place
		if(array[left] === toMove){
			const temp = array[right]
			array[right] = array[left]
			array[left] = temp
		}
		left++
	}
	return array
}