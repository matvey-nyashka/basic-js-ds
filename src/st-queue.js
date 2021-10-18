const { ListNode } = require('../extensions/index.js');

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
    this.array = null;
  }

  getUnderlyingList() {
    return this.array;
  }

  enqueue(element) {
    let current = this.array;

    if (!current) {
      this.array = new ListNode(element);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(element);
    }
  }

  dequeue() {
    let a = this.array;
    this.array = this.array.next;
    return a.value;
  }
}
