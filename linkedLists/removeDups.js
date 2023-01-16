class Node {
    constructor(val, next = null) {
        this.data = val
        this.next = next
    }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(12)
let e = new Node(3)

a.next = b
b.next = c
c.next = d
d.next = e

console.log(a)


const removeDups = (head) => {
    let current = head
    while (current != null) {
        let runner = current
        while (runner.next != null) {
            if (runner.next.data != current.data) {
                console.log(runner.next)
                runner.next = runner.next.next
            } else {
                runner = runner.next
            }
        }
        current = current.next
    }
} 

removeDups(a)

console.log(a)

