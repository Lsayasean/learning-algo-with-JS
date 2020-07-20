// Given a non-empty string of lowercase letters and a non-negative integer represending a key
// Implement caesars cipher encryptor 

function caesarCipherEncryptor(string, key) {
    let newLetters = [];
    
	let newKey = key % 26;
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
	for(const letter of string){
		newLetters.push(getNewLetter(letter, newKey, alphabet))
	}
	return newLetters.join("")
}

function getNewLetter(letter, key, alphabet){
    let newLetterCode = alphabet.indexOf(letter) + key
    // We mod by 26 so that we never over exend ourselsves outside of 26, so that once its over 26 it will start back at 1
	return alphabet[newLetterCode % 26]
}
