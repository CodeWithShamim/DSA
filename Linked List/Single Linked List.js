class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    let node = new Node(data);
    // this.head = this.tail = node;
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  insert(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
}

const obj1 = new LinkedList(10);
obj1.insert(20);
obj1.insert(30);
console.log(obj1);
