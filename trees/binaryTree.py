from math import ceil
import queue
from random import random
class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None

class binaryTree:
    def __init__(self):
        self.root = None
    #inserts a node in binary tree
    def insert(self,data):
        if(self.root == None):
            self.root = Node(data)
        else:
            self.insertNode(data,self.root)
    #inserts a node in binary search tree
    def insertNode(self,data,node):
        if(data < node.data):
            if(node.left == None):
                node.left = Node(data)
            else:
                self.insertNode(data,node.left)
        else:
            if(node.right == None):
                node.right = Node(data)
            else:
                self.insertNode(data,node.right)

    #preOrder treversal of binary tree print data in one line
    def preOrder(self,root):
        if(root != None):
            print(root.data,end=" ")
            self.preOrder(root.left)
            self.preOrder(root.right)

    #postOrder treversal of binary tree print data in one line
    def postOrder(self,root):
        if(root != None):
            self.postOrder(root.left)
            self.postOrder(root.right)
            print(root.data,end=" ")

    #inOrder treversal of binary tree print data in one line
    def inOrder(self,root):
        if(root != None):
            self.inOrder(root.left)
            print(root.data,end=" ")
            self.inOrder(root.right)

    # level order traversal of binary tree
    def levelOrder(self,root):
        queue = []
        queue.append(root)
        while(len(queue) > 0):
            node = queue.pop(0)
            print(node.data,end=" ")
            if(node.left != None):
                queue.append(node.left)
            if(node.right != None):
                queue.append(node.right)

    def height(self,root):
        add = 0
        if root.left:
            add = 1 + self.height(root.left)
        if root.right:
            add = 1 + self.height(root.right)
        return add

#create a binary tree
tree = binaryTree()
#inserting nodes in binary tree using insertNode() method
# inserting 10 nodes using loop
for i in range(10):
    tree.insert( ceil(random() * 100) )
#preOrder treversal
print("PreOrder Traversal of binary tree is:")
tree.preOrder(tree.root)
print()
#postOrder treversal
print("PostOrder Traversal of binary tree is:")
tree.postOrder(tree.root)
print()
#inOrder treversal
print("InOrder Traversal of binary tree is:")
tree.inOrder(tree.root)
print()
#level order traversal
print("LevelOrder Traversal of binary tree is:")
tree.levelOrder(tree.root)
print()
#height of binary tree
print("Height of binary tree is:")
print(tree.height(tree.root))
print()

