class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let a = new Node("1")
let b = new Node("2")
let c = new Node("3")
let d = new Node("4")

a.next = b
b.next = c
c.next = d

function traverse(head){
    let current = head;
    while(current != null){
        console.log(current.value)
        current = current.next
    }
}
traverse(a)

