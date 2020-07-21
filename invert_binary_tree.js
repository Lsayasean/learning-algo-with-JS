// invert a binary tree

function invertBinaryTree(tree) {
	let queue = [tree]
	while(queue.length){
        // get first item in queue array
		let current = queue.shift()
		if(current == null){
			continue
        }
        // holds a temp value of left before be update
		let temp = current.left
		current.left = current.right
        current.right = temp
        // once we perform the swaps we push the left and right branch into queue
		queue.push(current.left)
		queue.push(current.right)
	}
}

// recursive

function invertBinaryTree(tree) {
	if(tree === null) return;
	let temp = tree.left
	tree.left = tree.right
	tree.right = temp
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
}
