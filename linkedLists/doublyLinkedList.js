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