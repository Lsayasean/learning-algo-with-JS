// implementing getting the Nth fibonacci number with a hash table so we do not exceed the memory

function getNthFib(n, memory) {
    // memory to hold the nth number 
	memory = {
		1: 0,
		2: 1
	}
	if(n in memory){
        // if the Nth number is in the hash table return so we do not run it again
		return memory[n]
	} else {
        // if the Nth number is not in the hash table, update the hash table 
		memory[n] = getNthFib(n -1, memory) + getNthFib(n - 2, memory)
		return memory[n]
	}
}