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
            lheight = self.height(root.left)
            rheight = self.height(root.right)
            if(lheight > rheight):
                return lheight+1
            else:
                return rheight+1
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


        
        
