//implement queue using linked list
class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    // insert data to the end of the queue
    enqueue(data){
        let node = new Node(data)
        if(this.first === null){
            this.first = node
        }
        if(this.last){
            this.last.next = node
        }
        this.last = node
        this.size++
    }
    // remove data from the start of the queue
    dequeue(){
        if(this.first === null){
            return
        }
        let node = this.first
        this.first = this.first.next
        this.size--
        return node.value
    }
    // print the queue
    print(){
        let current = this.first
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    // detect if the queue is empty
    isEmpty(){
        return this.first === null
    }
    // get the size of the queue
    getSize(){
        return this.size
    }
    // get the first node in the queue
    getFirst(){
        return this.first
    }
    // get the last node in the queue
    getLast(){
        return this.last
    }
    // get the node at the given index
    getAt(index){
        let current = this.first
        let i = 0
        while(current){
            if(i === index){
                return current
            }
            current = current.next
            i++
        }
        return null
    }
}
let q = new Queue()
for(let i = 0; i <= 10; i++){
    q.enqueue(i)
}
q.print() // 0 1 2 3 4 5 6 7 8 9 10
console.log(q.getSize()) // 11
console.log(q.getFirst()) // 0
console.log(q.getLast()) // 10
console.log(q.getAt(5)) // 5
console.log(q.isEmpty()) // false
q.dequeue() // 0
q.print() // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
console.log(q.getSize()) // 10
console.log(q.getFirst()) // 1
console.log(q.getLast()) // 10
console.log(q.getAt(5)) // 5
console.log(q.isEmpty()) // false
q.dequeue() // 1
q.print() // 2, 3, 4, 5, 6, 7, 8, 9, 10