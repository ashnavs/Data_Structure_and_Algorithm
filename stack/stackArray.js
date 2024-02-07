// class Stack{
//     constructor(){
//         this.items = [];
//     }
//     isEmpty(){
//         return this.items.length===0;
//     }
//     size(){
//         return this.items.length;
//     }
//     push(elements){
//         return this.items.push(elements);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return 'Underflow - stack is empty';
//         }
//         return this.items.pop()
//     }
//     peek(){
//       if(this.isEmpty()){
//         return 'Stack is empty';
//       }
//       return this.items[this.items.length-1]
//     }
//     print(){
//         console.log(this.items.join(' '));
//     }
//     reverse(){
//         return this.items.reverse()
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print();
// stack.reverse();
// stack.print()
// console.log(stack.peek());

// stack.pop();
// stack.print()

class Stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    push(elements){
        return this.items.push(elements);
    }
    pop(){
        if(this.isEmpty()){
            return 'UnderFlow - stack is empty'
            
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return 'Stack is empty';
        }
        return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items.join(' '));
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

// console.log(stack.peek());
// stack.print()

stack.pop();
stack.print()

console.log(stack.peek());