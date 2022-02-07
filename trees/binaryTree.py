import queue
from turtle import right


class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None
class binaryTree:
    def __init__(self):
        self.root = None
    def insert(self,data):
        if(self.root == None):
            self.root = Node(data)
        else:
            self.insertNode(data,self.root)
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

    #height of binary tree
    def height(self,root):
        if(root == None):
            return 0
        else:
            l = 1 + self.height(root.left)
            r = 1 + self.height(root.right)
            return l > r ? l : r
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


        
        
#external function to find height of binary tree with ternay operator

def height(root):
    if(root == None):
        return 0
    else:
        l = 1 + height(root.left)
        r = 1 + height(root.right)
        if(l > r):
            return l
        else:
            return r