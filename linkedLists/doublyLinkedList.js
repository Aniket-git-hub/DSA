// doubly linkedlist implementation in javascript
class Node {
	constructor(value, next = null, prev = null) {
		this.value = value
		this.next = next
        this.prev = null
	}
}
class doublyLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    //insert data to the start of the doubly linkedList
    insert(data){
        let current = this.head
        this.head = new Node(data, current)
        this.size++
    }
    // insert data to the end of the doubly linkedList
    append(data){
        let current = this.head
        let previous = current
        while(current){
            previous = current
            current = current.next
        }
        previous.next = new Node(data)
        this.size++
    }
    // print the doubly linkedList
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    // reverse the doubly linkedList
    reverse(){
        let current = this.head
        let previous = null
        while(current){
            let temp = current.next
            current.next = previous
            previous = current
            current = temp
        }
        this.head = previous
    }
    // delete the last node in the doubly linkedList
    deleteLast(){
        let current = this.head
        let previous = current
        while(current.next){
            previous = current
            current = current.next
        }
        previous.next = null
        this.size--
    }
 
}
let dl = new doublyLinkedList()
for(let i = 0; i <= 10; i++){
    dl.append(i)
}
dl.print()

//function to insert data in dobubly linked list in sorted order recursively and return head optimized
function sortedInsertRec(head, data){
    if(head == null) return new Node(data)
    if(head.value > data){
        let node = new Node(data)
        node.next = head
        head.prev = node
        return node
    }
    head.next = sortedInsertRec(head.next, data)
    return head
}
// interative 
function sortedInsert(head, data){
    if(head == null) return new Node(data)
    let current = head
    let previous = current
    while(current && current.value < data){
        previous = current
        current = current.next
    }
    let node = new Node(data)
    if(!current){
        previous.next = node
    }
    else{
        previous.next = node
        node.next = current
    }
    return head
}
// function to reverse a doubly linked list and return the head optimized
function reverseDoublyLinkedList(head){
    if(head == null) return null
    let current = head
    let previous = null
    while(current){
        let temp = current.next
        current.next = previous
        previous = current
        current = temp
    }
    return previous
}