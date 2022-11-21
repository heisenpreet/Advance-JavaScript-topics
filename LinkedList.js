//LinkedList

//CLASS FOR CREATING LINKED LIST NODE
class linkedNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
//CLASS FOR CREATING A LINKED LIST BY JOINING THE NODES CREATED IN ABOVE NODE CONSTRUCTOR
class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}
	clear() {
		this.head = null;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}
}
//CREATING NODES BY FIRST PASSING DATA VALUES
let node1 = new linkedNode(4);
let node2 = new linkedNode(5);
let node3 = new linkedNode(6);

//PASSING WHICH NODES
node1.next = node2;
node2.next = node3;

//CREATING LINKED LIST
let list = new LinkedList(node1);

console.log(list);
