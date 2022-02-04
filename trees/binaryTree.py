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