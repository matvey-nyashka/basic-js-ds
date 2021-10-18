const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
   return this.tree;
  }

  add(data) {
    let node = this.tree;
    if (!node) {
      return (this.tree = new Node(data))
    } else {
      function addNode(node) {
      if (data > node.data) {
        if (node.right === null) { 
          return (node.right = new Node(data))
        } else {
          return addNode(node.right)
        }
      } else if (data < node.data) {
        if (node.left === null) {
           return (node.left = new Node(data))
          } else {
           return addNode(node.left)
          }
      } else return null;
    }
    return addNode(node);
    }
  }

dataFind (tree, data){
  if (tree === null) return null;
  else if (data > tree.data) return this.dataFind(tree.right, data);
  else if (data < tree.data) return this.dataFind(tree.left, data);
  else return tree;
} 

  has(data) {
    return (this.dataFind(this.tree,data) !== null)
  }

  find(data) {
    return this.dataFind(this.tree, data);
  }

  remove(data) {
    this.root = removeNode(this.tree, data)
    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        
        let minimum = node.right;
        while (minimum.left) {
          minimum = minimum.left;
        }
        node.data = minimum.data;
        node.right = removeNode(node.right, minimum.data)
        return node;
      }
    }
  }

  min() {
    let min = this.tree;
    while (min.left !== null)
    min = min.left;
    return min.data;
  }

  max() {
    let max = this.tree;
    while (max.right !== null) 
    max = max.right;
    return max.data;
  }

}