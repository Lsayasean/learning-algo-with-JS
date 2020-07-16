// Depth first search
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)
    // depth first search always looks to the left
		for(const child of this.children){
      // in the for loop it will run the function left to right
			child.depthFirstSearch(array)
		}
		return array
  }
}