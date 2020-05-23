// given an array with distinct values, check to see if the array is monotonic
// monotonic means is it non increasing or non decreasing, can not be both
function isMonotonic(array) {
    // holds value of true, if either condition is false we will set to false
	let isNonDecreasing = true;
	let isNonIncreasing = true;
	for(let i = 1; i < array.length; i++){
        // if current is less than previous than we are not increasing so turn isNonDecreasing to false
		if(array[i] < array[i -1]){
			isNonDecreasing = false
        }
        // if current is greater than previous than we are not deceasing so turn isNonDecreasing to false
		if(array[i] > array[i -1]){
			isNonIncreasing = false
		}
	}
	return isNonIncreasing || isNonDecreasing
}
