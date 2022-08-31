/**
 * List Node defines a node for a Linked List
 */
class ListNode{
   constructor(data){
        this.data = data;
        this.next = null;
   }
   
}


/**
 * a linked list is a collection of nodes 
 * linked together via pointers. 
 * If there is nothing in the list, head is null
 */
class LinkedList{
    constructor(head = null){
        this.head = head;
        
    }
    


    /**********************Methods that add to a Linked List***************** */
    //write a method that adds a new item to the front of a list
    /**
     * 
     * @param {*} data 
     */
     insertFront(data){
        let newNode = new ListNode(data);

        newNode.next = this.head;
        
        this.head = newNode;

        //this.size++;
    }


    

    //method that adds an item to the end of a linked list
    insertBack(data){
        var newNode = new ListNode(data);

        var last = this.head;

        while(last.next != null){
            last = last.next;
        }
        
        last.next = newNode;
        //this.size++;
    }


    //method that adds to any index within the list
    addAt(data, index){
        var newNode = new ListNode(data);

        var count = 0; // if there is nothing in the list count. Im using 0 index


        if(this.head == null){
            this.head = newNode;
            return;
        }

        if(index >= this.size){
            console.log(`This aint it chief`);
            return;
        }

        var tempNode = this.head;

        while(tempNode != null){
            if(index == 0){
                this.insertFront(newNode);
                return;
            }
            
            if(count == index -1){
                newNode.next = tempNode.next;
                tempNode.next = newNode;
                return;
            }

            tempNode = tempNode.next;
            count++;

        }
        //this.size++;
    }



/*******************Methods to delete items from a Linked List*************** */

    //delete from the beginning of a linked list
    deleteFirst(){
        this.head = this.head.next;
        //this.size--;
    }

    //removes the last element from the linked list
    deleteLast(){
        var tempNode = this.head;

        //traverse to the end of the lis = nu
        while(tempNode.next.next != null){
            tempNode = tempNode.next;
        }
        tempNode.next = null;
        //this.size--;
    }

    /**
     * deletes the node at the given index
     * @param {*} index 
     */
    deleteNth(index){

        if(this.head == null){
            console.log(`can not delete from empty list`);
            return;
        }

        if(index > this.size || index < 0){
            console.log(`out of range`);
            return;
        }

        var count = 0;
        var temp = this.head;

        if(index == 0 && this.size == 1){
            this.head = null;
            return;
        }

        while(temp.next != null){
            if(index == 0){
                this.deleteFirst();
                return;
            }

            if(count == index - 1){
                temp.next = temp.next.next;
            }

            temp = temp.next;
            count++;
        }

        //traverse to node before index
        //t//his.size--;
    }


/***************Searching a Linked List***************** */

    //contains returns true if a list contains an element and false otherwise
    contains(key){
        //traverse the linked list comparing node data to the key given
        //if there are no matches return false otherwise return true
        var travelNode = this.head;

        while(travelNode != null){
            if(key == travelNode.data){
                return true;
            }
            travelNode = travelNode.next;
        }
        return false;
    }

    //getItem(index) returns the data stored at the given index
    getItemAtIndex(index){
        //traverse the array counting steps when the number of steps taken = index return the value stored at that node
        var travelNode = this.head;
        var count = 0;
        if(index > this.size -1 ){
            console.log(`out of range`);
        }
        else{
            while(count != index){
                travelNode = travelNode.next;
                count++;
            }
        }
        return travelNode.data;
    }

    //returns the node at a given index
    getNodeAtIndex(index){
        var travelNode = this.head;
        var count = 0;
        if(index > this.size -1 ){
            console.log(`out of range`);
        }
        else{
            while(count != index){
                travelNode = travelNode.next;
                count++;
            }
        }
        return travelNode;
    }



    

/******************* Miscellaneous helper methods *************************** */
    /**This getter method returns the head of a Linked List */
    
    //write a method that calculates the size of a linked list
    get size(){
        var pointer = this.head;

        var count=0;

        while(pointer != null){
            count++;
            pointer = pointer.next;
            
        }
        return count;
    }

    //print contents of a linked list
    printList(){
        var currentNode = this.head;
        if(currentNode == null){
            console.log('empty');
        }

        while(currentNode != null){   
            if(currentNode.next == null){
                console.log(`${currentNode.data} --#`);
            }
            else{
                console.log(`${currentNode.data} -->`);
            }
            currentNode = currentNode.next;
        }
        
    }
}

/**************Function Definitions ****************** */

    
    /********sorting a linked list********** */
    //sort a linked list in ascending order
    //merge sort
    //recursively split a list into its smaller lists of size one
    //sort the list my merging the sublists back together in order
    function mergeSortLinkedList(list){
        //Base Case: if a list is singleton or null return the list
        if(list.head == null || list.head.next == null){
            return list.head;
        }
        //otherwise
        //split a list in half using its midpoint
        let mid = list.getNodeAtIndex(Math.floor(list.size/2)-1); //middle node
        let rightStart = mid.next;//element next to the middle node
        mid.next = null;//break the connection between mid and rightStart

        let left = new LinkedList(list.head); // new list containing only the contents of the left half of the list
        let right = new LinkedList(rightStart);// new list containing only the contents of the right half of the list

        //recursively run mergeSortLinkedList
        return result = merge(mergeSortLinkedList(left), mergeSortLinkedList(right));        
    }

    //compare values in both lists,
    //combine them together in ascending order
    //returns a list
    function merge(leftHead, rightHead){
       var result = new LinkedList();
       var resPoint = result.head;

       var leftPoint = leftHead;
       var rightPoint = rightHead;

       while(leftPoint != null && rightPoint != null){
            let tempData = null;

            if(leftPoint.data <= rightPoint.data){
                tempData = leftPoint.data;
                leftPoint = leftPoint.next;
            }
            else{
                tempData = rightPoint.data;
                rightPoint = rightPoint.next;
            }

            //put smaller value in result list
            if(result.head == null){
                result.head = new ListNode(tempData);
                resPoint = result.head;
            }
            else{
                resPoint.next = new ListNode(tempData);
                resPoint = resPoint.next;
            }
       }
       //exit while loop when either list pointer is null

        resPoint.next = leftPoint;
        while(resPoint.next != null){
            resPoint = resPoint.next;
            
        }
        resPoint.next = rightPoint;
        return result.head;
    }
    

/********************Test Area***************************** */

//until I start writing unit tests this will have to do.

//create and populate list
var list = new LinkedList();

list.insertFront(5);
list.insertBack(3);
list.insertBack(7);
list.insertFront(4);
list.insertBack(13);
list.insertBack(1);

list.printList();


var result = mergeSortLinkedList(list);

var sortedList = new LinkedList(result);

sortedList.printList();