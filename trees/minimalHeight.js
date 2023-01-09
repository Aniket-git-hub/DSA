class TreeNode{
    constructor(value) {
        this.value = value 
        this.left = null
        this.right = null
    }
}

// Given a sorted(increasing order) array with unique integer elements, write an algorithm to create a binary search
// tree with minimal height

let arr = [1, 6, 8, 12, 67, 76, 88, 0976, 1223]

const main = (arr) => {
    return createMinimalBST(arr, 0, arr.length - 1)
}

const createMinimalBST = (arr, start, end) => {
    if (end < start) {
        return null
    }
    let mid = Math.round((start + end) / 2) 
    let n = new TreeNode(arr[mid])
    n.left = createMinimalBST(arr, start, mid - 1)
    n.right = createMinimalBST(arr, mid + 1, end)
    return n
}

console.log(main(arr))