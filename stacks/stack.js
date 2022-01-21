class Stack {
    constructor() {
        this.items = new Array()
        this.count = 0
    }
    push(element) {
        this.items[this.count] = element
        this.count++
    }
    print() {
        let str = ''
        for (let i = 0; i < this.count; i++) {
            str += `${this.items[i]} \n`
        }
        console.log(str)
        return str
    }
    pop() {
        if (this.count == 0) {
            return undefined
        } else {
            let deletedItem = this.items[this.count - 1]
            this.count--
            return deletedItem
        }
    }
    size() {
        return this.count
    }
    peek() {
        return this.items[this.count - 1]
    }
    clear() {
        return this.items = new Array()
    }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.print()
console.log(stack.size())
stack.pop()
stack.print()
console.log(stack.size())
console.log(stack.peek())
console.log(stack.clear())