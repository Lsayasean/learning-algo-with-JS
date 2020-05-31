// given a string, find the longest palindrome inside it

function longestPalindromicSubstring(string) {
	let longest = ""
	for(let i = 0; i < string.length; i++){
		for(let j = 0; j < string.length; j ++){
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