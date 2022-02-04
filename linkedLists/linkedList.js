class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}
	//insert data to the start of the linkedList
	insert(data) {
		let current = this.head
		this.head = new Node(data, current)
		this.size++
	}
	//insert data to the end of the linkedList
	// steps to insert data to the end of the linkedList
	// 1. find the last node in the linkedList
	// 2. insert data to the end of the linkedList
	append(data) {
		let current = this.head
		let previous = current
		while (current) {
			previous = current
			current = current.next
		}
		previous.next = new Node(data)
		this.size++
	}
	//print the linkedList
	print() {
		let current = this.head
		while (current) {
			console.log(current.value)
			current = current.next
		}
	}
	// delete the last node in the linkedList
	deleteLast() {
		let current = this.head
		let previous = current
		while (current.next) {
			previous = current
			current = current.next
		}
		previous.next = null
		this.size--
	}
	// delete the first node in the linkedList
	deleteFirst() {
		this.head = this.head.next
		this.size--
	}
	// delete the node at the given index
	deleteAt(index) {
		if (index === 0) {
			this.deleteFirst()
			return
		}
		let current = this.head
		let previous = current
		let count = 0
		while (count < index) {
			previous = current
			current = current.next
			count++
		}
		previous.next = current.next
		this.size--
	}
	// find the node at the given index
	findAt(index) {
		let current = this.head
		let count = 0
		while (count < index) {
			current = current.next
			count++
		}
		return current
	}
	// find the last node in the linkedList
	findLast() {
		let current = this.head
		while (current.next) {
			current = current.next
		}
		return current
	}
	// find the middle node in the linkedList
	findMiddle() {
		let current = this.head
		let previous = current
		let count = 0
		while (count < this.size / 2) {
			previous = current
			current = current.next
			count++
		}
		return previous
	}
	// find the median node in the linkedList
	findMedian() {
		let current = this.head
		let previous = current
		let count = 0
		while (count < this.size / 2) {
			previous = current
			current = current.next
			count++
		}
		return (current.value + previous.value) / 2
	}
	// find the kth node from the end of the linkedList
	findKthFromEnd(k) {
		let current = this.head
		let count = 0
		while (count < k) {
			current = current.next
			count++
		}
		let previous = current
		while (current) {
			current = current.next
			previous = previous.next
		}
		return previous
	}
	// find the kth node from the start of the linkedList
	findKthFromStart(k) {
		let current = this.head
		let count = 0
		while (count < k) {
			current = current.next
			count++
		}
		return current
	}
	// find the kth node from the middle of the linkedList
	findKthFromMiddle(k) {
		let current = this.head
		let count = 0
		while (count < this.size / 2) {
			current = current.next
			count++
		}
		let previous = current
		while (count < k) {
			current = current.next
			count++
		}
		return previous
	}
	// reverse the linkedList
	reverse() {
		let current = this.head
		let previous = null
		while (current) {
			let next = current.next
			current.next = previous
			previous = current
			current = next
		}
		this.head = previous
	}
	// reverse the linkedList in groups of k
	reverseK(k) {
		let current = this.head
		let previous = null
		let count = 0
		while (count < k) {
			let next = current.next
			current.next = previous
			previous = current
			current = next
			count++
		}
		this.head = previous
		this.reverseK(k)
	}
	// return the length of the linkedList
	length() {
		return this.size
	}
	// return the middle node of the linkedList
	middle() {
		let current = this.head
		let previous = current
		let count = 0
		while (count < this.size / 2) {
			previous = current
			current = current.next
			count++
		}
		return previous
	}
	// return the vlaue of node at given position from the tail
	getNthFromTail(n) {
		let current = this.head
		let count = 0
		while (current) {
			current = current.next
			count++
		}
		let position = count - n
		current = this.head
		while(position > 0) {
			current = current.next
			position--
		}
		return current.value
	}
}

const l = new LinkedList()
for (let i = 0; i < 10; i++) {
	l.insert(i)
}
l.print()
console.log(l.getNthFromTail(3))





// function to insert data to the end of the linkedList when the head is provided and return the head
function insertAtEnd(head, data) {
	let current = head
	while (current.next) {
		if (current.next === null) {
			current.next = new Node(data)
			return head
		}
		current = current.next
	}
	current.next = new Node(data)
	return head
}
// function to insert data at head of the linkedlist when provided with the head and return the head
function insertAtHead(head, data) {
	let newHead = new Node(data)
	newHead.next = head
	return newHead
}
// function to insert data a specific index of the linkedList when provided with the head, index and data and return the head
function insertAtIndex(head, index, data) {
	let current = head
	let previous = current
	let count = 0
	while (count < index) {
		previous = current
		current = current.next
		count++
	}
	let newNode = new Node(data)
	previous.next = newNode
	newNode.next = current
	return head
}

// function to delete the last node of the linkedList when provided with the head and return the head
function deleteLast(head) {
	let current = head
	let previous = current
	while (current.next) {
		previous = current
		current = current.next
	}
	previous.next = null
	return head
}
// function to delete the node at the given index of the linkedList when provided with the head and index and return the head
function deleteAtIndex(head, index) {
	if (index === 0) {
		head = head.next
		return head
	}
	let current = head
	let previous = current
	let count = 0
	while (count < index) {
		previous = current
		current = current.next
		count++
	}
	previous.next = current.next
	return head
}
// function to reverse the linkedlist when head is provided and return the head
function reverse(head) {
	let current = head
	let previous = null
	while (current) {
		let next = current.next
		current.next = previous
		previous = current
		current = next
	}
	return previous
}
// function to print linkedlist data in reverse order when head is provided and return the head in recursion
//complete function for all test cases
function printReverse(head) {
	if (head.next) {
		printReverse(head.next)
	}
	console.log(head.value)
}
// function to print node value of the linkedlist when head is provided and return the head
function print(head) {
	let current = head
	while (current !== null) {
		console.log(current.value)
		current = current.next
	}
	return head
}
// function to compare two linkedlists when head1 and head2 are provided and return the boolean value
// with recursion
function compare(head1, head2) {
	if (head1 === null && head2 === null) {
		return true
	}
	if (head1 === null || head2 === null) {
		return false
	}
	if (head1.value !== head2.value) {
		return false
	}
	return compare(head1.next, head2.next)
}


//function to merge two linkedlist in sorted order when head1 and head2 are provided and return the head which passes all test cases
function merge(head1, head2) {
	if (head1 == null) return head2
	if (head2 == null) return head1
	if (head1.data < head2.data){
		head1.next = mergeTwoSortedLinkedList(head1.next, head2)
		return head1
	} 
	head2.next = merge(head1, head2.next)
 	return head2
}

//function to get the value of node at the given position from the tail of the linkedlist when head is provided and return the value
function getValueAtPositionFromTail(head, position) {
	let current = head
	let count = 0
	while (current) {
		count++
		current = current.next
	}
	current = head
	while (count > position) {
		current = current.next
		count--
	}
	return current.value
}

//function to delete the duplicate value nodes from the sorted linked list
function deleteDuplicate(head) {
	let current = head
	while (current) {
		let next = current.next
		while (next && next.data === current.data) {
			next = next.next
		}
		current.next = next
		current = next
	}
	return head
} 

// function to detect cycle in the linkedlist when head is provided and return the boolean value
function detectCycle(head) {
	if(head === null) return false
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			return true
		}
	}
	return false
}

// function to find the merge point of linkedlist when head1 and head2 are provided and return the value of the node
function findMergePoint(head1, head2) {
	if(head1 === null || head2 === null) return null
	let current1 = head1
	let current2 = head2
	while (current1 && current2) {
		if (current1 === current2) {
			return current1.value
		}
		current1 = current1.next
		current2 = current2.next
	}
	return -1
}
//