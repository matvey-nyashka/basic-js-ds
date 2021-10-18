const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.array = [];
  }

  getUnderlyingList() {
    return this.array.reverse().reduce((value, current) => {
      if (value) {
        const node = new ListNode(current);
        node.next = value;
        return node;
      }
        return new ListNode(current);
      }, null);
  }

  enqueue(element) {
    this.array.push(element);
  }

  dequeue() {
    
    return this.array.shift();
  }
}
