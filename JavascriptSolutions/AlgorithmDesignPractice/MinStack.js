/**
 * a min stack does push, pop, top, and get min in 0(1) time
 * 
 * the smallest number in the stack should always be at the top of the stack
 */

class MinStack{

    minStack;
    min;

    //implement stack using an array
    constructor(){
        this.minStack = []; //DS that stack operations will be performed on
        this.min = Number.MAX_VALUE;  // default min value;
    }
   
    /**
     * push places a new item onto the stack
     * 
     * if that new item is less than the current top of the stack.
     * make that item the new min
     */

    push(x){
        if(this.minStack.length < 1){
            this.minStack.push(x);
            this.min = x;
       }
       else{
            if(x < this.min){
                this.minStack.push(x);
                this.min = x;
            }
            else if(x == this.min){
                this.minStack.push(x);
            }
            else{
                this.minStack.pop();
                this.minStack.push(x);
                this.minStack.push(this.min);
            }
       }
    }


    /**
     * pop removes the top element from the stack and returns it
     * 
     */

    pop(){
        if(this.minStack.length < 1){
            return [];
        }
        else{
            let popped = this.minStack[this.minStack.length-1];
            
            this.min = this.minStack[this.minStack.length-2];

            this.minStack.length -= 1;

            return popped;
        }
    }

    /**
     * top returns the top element of the stack
     * 
     */

    top(){
       if(this.minStack.length < 1){
            return [];
       }
       else{
            return this.minStack[this.minStack.length-1];
       }
    }

    /**
     * getMin returns the minimumValue within the stack
     */
    getMin(){
        return this.min;
    }
}

var minStack = new MinStack();

minStack.push(-3);

minStack.push(0);

minStack.push(-2);

console.log(minStack.getMin());

console.log(minStack.top());
console.log(minStack.pop());
console.log(minStack);
