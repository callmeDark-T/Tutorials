class Node {
next: Node | null = null;

  constructor(public data: number){}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
  }
}