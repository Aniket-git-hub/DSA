class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}
class linkedList{
    constructor(){
        this.head = null
    }
    insert(data){
        this.head = new Node(data, this.head)
        let current = this.head
        while(current){
            if(current.next == null){
                current.next = this.head
            }
        }   
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            console.log("|")
            current = current.next
        }
    }
    
}
l = new linkedList()
l.insert(1)
l.insert(2)
l.insert(3)
l.insert(4)
l.insert(5)
l.print()
console.log(l)