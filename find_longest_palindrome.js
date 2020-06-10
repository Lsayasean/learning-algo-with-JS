// given a string, find the longest palindrome inside it

function longestPalindromicSubstring(string) {
	let longest = ""
	for(let i = 0; i < string.length; i++){
		// the inner for loop goes through and create sub strings of the original string
		for(let j = 0; j < string.length; j ++){
			// creates a copy of the substring starting at the i index and ending in the j + 1, which would be the next item next to i
			let subString = string.slice(i, j+1);
			if(subString.length > longest.length && isPalindrome(subString)){
				longest = subString
			}
		}
	}
	return longest;
}

function isPalindrome(string){
	let oldString = string.split("").reverse().join("")
	if(oldString == string) return true
}