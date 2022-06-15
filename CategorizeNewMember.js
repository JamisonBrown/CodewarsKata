/**
     * pairs is an array of pairs
     * pairs = [(18,20),(45, 2),(61, 12), (37, 6), (21, 21), (78, 9)]
     * 
     * the first number of each pair is the member's age
     * the second number of each pair is the member's handicap
     * 
     * Sort members into 2 groups, Senior and Open
     * 
     * to be senior the member must be older than 55 and have a handicap > 7
     * 
     * handicaps range from -2 to 26
     */
 function openOrSenior(members){
    const result = [];

    for(let i = 0; i < members.length; i++){
        let pair = members[i];
        
        let age = pair[0];
        let handicap = pair[1];

        if(age >= 55 && handicap > 7){
            result.push("Senior");
        }
        else{
            result.push("Open");
        }
    }
    return result;
}
    