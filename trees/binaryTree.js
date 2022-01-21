class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(data){
        if(this.root == null){
            this.root = new Node(data)
        }else{
            this.root.addNode(new Node(data))
        }
    }
    traverse(){
        this.root.traverse()
    }
}

class Node{
    constructor(data){
        this.left = null
        this.right = null
        this.value = data
    }
    addNode(node){
        if(node.value < this.value){
            if(this.left == null){
                this.left = node
            }else{
                this.left.addNode(node)
            }
        }else if (node.value > this.value){
            if(this.right == null){
                this.right = node
            }else{
                this.right.addNode(node)
            }
        }
    }
    traverse(){
        if(this.left != null) this.left.traverse()
        console.log(this.value)
        if(this.right != null) this.right.traverse()
    }
}

let tree = new BinaryTree()

for(let i = 0; i < 20; i++){
    tree.insert(Math.ceil(Math.random(1) * 200))
}

tree.traverse()
console.log(tree)
