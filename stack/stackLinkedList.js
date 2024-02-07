class Node{
    constructor(value){
        this.value=value;
        this.next = null;
    }
}

class stckLinkedList{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    isEmpty(){
        return this.top === null;
    }
    size(){
        return this.size;
    }
    push(value){
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    pop(){
        if(this.isEmpty()){
            return 'Underflow - stack is empty';
        }
        const popped = this.top;
        this.top = this.top.next;
        this.size--;
        return popped.value;
    }
    peek(){
        return this.top.value;
    }
    print(){
        if(this.isEmpty()){
            return 'stack is empty';
        }
        let current = this.top;
        let resultStack = '';
        while(current){
            resultStack += `${current.value}`;
            current = current.next;
        }
        console.log(resultStack);
    }
}

const stack = new stckLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.pop());

