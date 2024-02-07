// class Queue{
//     constructor(){
//         this.item = [];
//     }
//     isEmpty(){
//         return this.item.length===0;
//     }
//     size(){
//         return this.item.length;
//     }
//     enqueue(elements){
//         return this.item.push(elements);
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return 'queue is empty';
//         }
//         return this.item.shift();
//     }
//     peek(){
//         if(this.isEmpty()){
//             return 'QUeue is empty'
//         }
//         return this.item[0];
//     }
//     print(){
//         console.log(this.item.join(' '));
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print()

// // queue.dequeue();
// console.log(queue.dequeue());
// queue.print()

// console.log(queue.peek());



class Queue{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    enqueue(value){
        return this.items.push(value);
    }
    dequeue(){
        if(this.isEmpty()){
            return 'queue is empty'
        }
        return this.items.shift();
    }
    peek(){
        if(this.isEmpty()){
            return 'empty'
        }
        return this.items[0];
    }
    print(){
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print()

queue.dequeue();
queue.print()

console.log(queue.peek());