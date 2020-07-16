/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // to solve this, think of the order that the code runs in.  If the one over writes the other we lose that value 
var reverseList = function(head) {
    if(head == null) return head
    let prev = null
    while(head){
        let nextOne = head.next
        head.next = prev
        prev = head
        head = nextOne
    }
    return prev
};