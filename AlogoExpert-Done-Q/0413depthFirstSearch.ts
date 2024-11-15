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
    // for (const child of this.children) {
    //   child.depthFirstSearch(array);
    // }
    this.children.forEach((childNode: Node) =>
      childNode.depthFirstSearch(array)
    );
    //Node is data type, childNode is a variable
    return array;
  }
}
//time complexity: O(v + e) v is the number of vertices, e is the number of edges
//space is O(v)