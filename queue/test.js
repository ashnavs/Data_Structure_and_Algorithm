class Node{
    constructor(value){
         this.value = value;
         this.next = null;
    }
};
class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    isEmpty(){
        return this.front === null;
    }
    getSize(){
        return this.size;
    }
    enqueue(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.front = node;
        }else{
            this.rear.next = node;
        }

        this.rear = node;

    }
    dequeue(){
        if(this.isEmpty()){
            return 'empty'
        }
        const removed = this.front;
        this.front = this.front.next;
        removed.next = null;
        this.size--;
        return removed.value;
    }
    print(){
        if(this.isEmpty()){
            return 'empty'
        }
        let curr = this.front;
        let listValue = '';
        while(curr){
            listValue +=`${curr.value}`;
            curr = curr.next
        }
        console.log(listValue);
    }
    peek(){
        return this.front.value;
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30);
queue.print()

queue.dequeue();
queue.print()

console.log(queue.peek());