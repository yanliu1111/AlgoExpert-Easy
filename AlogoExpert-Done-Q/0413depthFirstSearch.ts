export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  //addChild is a method that adds a node to the children array
  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }
  depthFirstSearch(array: string[]) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
