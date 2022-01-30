class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
class circularLinkedList{
    constructor(){
        this.head = null
        this.prev = null
        this.size = 0
    }
    // insert data to the start of the circular linkedList
    insert(data){
        let current = this.head
        this.head = new Node(data, current)
        this.size++
    }
    // print the circular linkedList
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    // detect cycle in the circular linkedList
    detectCycle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(slow === fast){
                return true
            }
        }
        return false
    }
}
l = new circularLinkedList()
l.insert(1)
l.insert(2)
l.insert(3)
l.insert(4)
l.insert(5)
l.print()
console.log(l.detectCycle())