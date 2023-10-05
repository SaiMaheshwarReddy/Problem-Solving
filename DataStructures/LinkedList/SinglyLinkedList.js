class Node {
    constructor(val){
        this.next = null;
        this.value = this.value;
    }

}
export class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null
    }

    push(val){
        const node = new Node(val)
        if(length === 0){
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node
        }
        length++
        return this
    }
}