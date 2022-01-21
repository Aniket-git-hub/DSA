class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
class LinkedList{
	constructor(){
		this.head = null
		this.size = 0
	}
	//insert items to linkedList
	insert(data){
		let current = this.head
		this.head = new Node(data)
		this.head.next = current
	}
	insertAtTail(data){
		let current = this.head
		while(current){
			if(current == null){
				current = new Node(data)
				this.size++
				return
			}
			current = current.next
		}
	}
	print(){
		let current = this.head
		while(current != null){
			console.log(current.value)
			current = current.next
		}
	}
	delete(){
		let current = this.head
		this.head = current.next
	}
	pop(){
		let current = this.head
		let previous = current
		while(current){
			if(current.next == null) {
				previous.next = null
				this.size--
				return
			}
			current = current.next
		}
	}

}

const l = new LinkedList()
l.insert("4")
l.insert("2")
l.insert("3")
l.insert("1")
l.print()
console.log(l)

