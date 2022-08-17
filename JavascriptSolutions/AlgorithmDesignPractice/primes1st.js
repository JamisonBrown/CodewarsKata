function sortOrders(orderList){

    var output = [];

    //make data more manageable by splitting orderlist orders into arrays of strings

    for(let i=0; i < orderList.length -1; i++){
        let order = orderList[i];
        
        if(order.length >=2){ //possibly a prime package
            if(order[1].charCodeAt(0) >= 97 || order[1].charCodeAt(0) <= 122){ //prime package
                output.push(order);
            }
        }
    }
    return output;


}

console.log(sortOrders(["4", "mi2 jog mid pet", "wz3 34 54 398"]));