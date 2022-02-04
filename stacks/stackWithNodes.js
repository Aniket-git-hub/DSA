//create node class
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
//create stack data structure with nodes
class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
    // push the element to the stack
    push(data) {
        let node = new Node(data)
        node.next = this.top
        this.top = node
        this.size++
    }
    // pop the last element of the stack
    pop() {
        if (this.top === null) {
            return null
        }
        let node = this.top
        this.top = node.next
        this.size--
        return node.data
    }
    // peek the stack
    peek() {
        if (this.top === null) {
            return null
        }
        return this.top.data
    }
    // function to check if stack is empty or not
    isEmpty() {
        return this.top === null
    }
    // function to print the stack
    print() {
        let current = this.top
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
    // function to reverse the stack
    reverse() {
        let stack = new Stack()
        while (!this.isEmpty()) {
            stack.push(this.pop())
        }
        this.size = stack.size
        return stack
    }
    // function to check the length of the stack
    length() {
        return this.size
    }
}

let s = new Stack()
for(let i = 0; i < 10; i++){
    s.push(i) // 0 1 2 3 4 5 6 7 8 9
}
console.log("printing the stack")
s.print()
console.log(`peek: ${s.peek()}`)
console.log(`Pop: ${s.pop()}`)
console.log(`isEmpty: ${s.isEmpty()}`)
console.log(`length: ${s.length()}`)
console.log(`reverse:`)
s.reverse().print()