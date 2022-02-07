class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        if (this.root == null) {
            this.root = new Node(data)
        } else {
            this.root.addNode(new Node(data))
        }
    }
    // in order treversal
    inOrder() {
        this.root.inOrder()
    }
    // pre order treversal
    preOrder() {
        this.root.preOrder()
    }
    // post order treversal
    postOrder() {
        this.root.postOrder()
    }
    // height of the tree
    height() {
        return this.root.height()
    }
    // tree top view
    topView() {
        this.root.topView()
    }
    // level order treversal
    levelOrder() {
        this.root.levelOrder()
    }
}

class Node {
    constructor(data) {
        this.left = null
        this.right = null
        this.value = data
    }
    addNode(node) {
        if (node.value < this.value) {
            if (this.left == null) {
                this.left = node
            } else {
                this.left.addNode(node)
            }
        } else if (node.value > this.value) {
            if (this.right == null) {
                this.right = node
            } else {
                this.right.addNode(node)
            }
        }
    }
    inOrder() {
        if (this.left != null) this.left.inOrder()
        console.log(this.value)
        if (this.right != null) this.right.inOrder()
    }
    preOrder() {
        console.log(this.value)
        if (this.left != null) this.left.preOrder()
        if (this.right != null) this.right.preOrder()
    }
    postOrder() {
        if (this.left != null) this.left.postOrder()
        if (this.right != null) this.right.postOrder()
        console.log(this.value)
    }
    height() {
        let leftHeight = this.left == null ? 0 : this.left.height()
        let rightHeight = this.right == null ? 0 : this.right.height()
        return Math.max(leftHeight, rightHeight) + 1
    }

    topView() {
        let leftHeight = this.left == null ? 0 : this.left.height()
        let rightHeight = this.right == null ? 0 : this.right.height()
        let height = Math.max(leftHeight, rightHeight)
        let topView = []
        for (let i = 0; i <= height; i++) {
            topView.push(this.topViewAtHeight(i))
        }
        console.log(topView)
    }
    topViewAtHeight(height) {
        if (height == 0) {
            return this.value
        } else if (height > 0) {
            if (this.left != null) {
                return this.left.topViewAtHeight(height - 1)
            } else {
                return this.right.topViewAtHeight(height - 1)
            }
        }
    }
    levelOrder() {
        let queue = []
        queue.push(this)
        while (queue.length > 0) {
            let node = queue.shift()
            console.log(node.value)
            if (node.left != null) queue.push(node.left)
            if (node.right != null) queue.push(node.right)
        }
    }
}

let tree = new BinaryTree()
for (let i = 0; i < 20; i++) {
    tree.insert(Math.ceil(Math.random(1) * 200))
}
tree.inOrder()
console.log(tree.height())
tree.levelOrder()