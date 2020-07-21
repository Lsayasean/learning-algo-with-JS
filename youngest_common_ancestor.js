// youngest common ancestor algo
// given 3 inputs of an ancestor tree class that has an ancestor property pointing to their youngest ancestor
// the first input is the top ancestor, the other 2 are are descendant.  Find the youngest common ancestor
// example me and my cousins youngest ancestor will be our grandma

// this algorithm is solved by finding the depth of each ancester
// moving the ancestor to an even level
// then move them both up the same time until they are equal to each other

class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // first we need to get the depth of each descendant
    let depthOne = getDescendantDepth(descendantOne, topAncestor)
    let depthTwo = getDescendantDepth(descendantTwo, topAncestor)

    // level the depth so we can move them up the same time and we run the code based on which is greater
    // we run which is greater because they have more levels to go up before we are even 

    if (depthOne > depthTwo) {
        return backTrack(descendantOne, descendantTwo, depthOne - depthTwo)
    } else {
        return backTrack(descendantTwo, descendantOne, depthTwo - depthOne)
    }
}

function getDescendantDepth(descendat, topAncestor) {
    // start depth off at 0, and increment as we move up until we hit the top ancestor
    let depth = 0
    while (descendat !== topAncestor) {
        depth++
        descendat = descendat.ancestor
    }
    return depth
}

// takes lower descendant , higher descendant, and the differnce in the 2 descendants
function backTrack(lowerDescendant, higherDescendant, difference) {
    // even the depth with a while loop
    while (difference > 0) {
        lowerDescendant = lowerDescendant.ancestor
        difference--
    }
    while (lowerDescendant !== higherDescendant) {
        lowerDescendant = lowerDescendant.ancestor
        higherDescendant = higherDescendant.ancestor
    }
    return lowerDescendant
}