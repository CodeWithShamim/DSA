class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLL {
  constructor(value) {
    const newNode = new Node(value);
    this.head = this.tail = newNode;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  print() {
    // let data = this.head;
    // while (data) {
    //   console.log(data.value);
    //   data = data.next;
    // }

    let data = this.tail;
    while (data) {
      console.log(data.value);
      data = data.prev;
    }
  }
}

const list1 = new DoubleLL(5);
list1.append(10);
list1.append(20);
list1.append(30);
list1.prepend(15);
list1.print();
console.log(list1);
