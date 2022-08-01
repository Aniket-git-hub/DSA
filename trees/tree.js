
// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// The pseudocode is as following:

// Initialize current node to dummy head of the returning list.
// Initialize carry to 00.
// Loop through lists l1l1 and l2l2 until you reach both ends and crarry is 00.
// Set xx to node l1l1's value. If l1l1 has reached the end of l1l1, set to 00.
// Set yy to node l2l2's value. If l2l2 has reached the end of l2l2, set to 00.
// Set sum = x + y + carrysum=x + y + carry.
// Update carry = sum / 10carry = sum / 10.
// Create a new node with the digit value of(sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
// Advance both l1l1 and l2l2.
// Return dummy head's next node.

var addTwoNumbers = function (l1, l2) {
	let current = new ListNode(0);
	let carry = 0;
	let sum = 0;
	let x = 0;
	let y = 0;
	let node = current;
	while (l1 || l2) {
		if (l1) {
			x = l1.val;
			l1 = l1.next;
		} else {
			x = 0;
		}
		if (l2) {
			y = l2.val;
			l2 = l2.next;
		} else {
			y = 0;
		}
		sum = x + y + carry;
		carry = Math.floor(sum / 10);
		node.next = new ListNode(sum % 10);
		node = node.next;
	}
	if (carry) {
		node.next = new ListNode(carry);
	}
	return current.next;
};


// test cases
const l1 = new ListNode(2, new ListNode(4, new ListNode(9)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
console.log(addTwoNumbers(l1, l2))



















