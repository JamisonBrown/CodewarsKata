/**
 * score a throw according to these rules
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
 * Always be given an array with 5 six-sided dice values.

  Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

 * these are the values that have been rolled
 */

 /**
  * this function counts the number of occurences for each
  * number in dice and scores the game according to the rules
  * 
  */

//  function score(dice){
//     // put each number into a map and use the value as a counter
//     var throwMap = new Map();
    
//     for(let i=0; i < dice.length; i++){
//         let count = 0;
//         if(!throwMap.has(dice[i])){
//             throwMap.set(dice[i], ++count);
//         }
//         else{
//             throwMap.set(dice[i], throwMap.get(dice[i]) + 1);
//         }
//     }

//     //apply the rules of the game to the results stored in throwMap
//     var totalScore = 0;
//     for(let j=0; j < dice.length; j++){
//         if(throwMap.get(dice[j]) == 3 || throwMap.get(dice[j]) == 6){
//             switch(dice[j]){
//                 case 2:
//                     totalScore += (throwMap.get(dice[j])/3) * 200;
//                     break;
//                 case 3:
//                     totalScore += (throwMap.get(dice[j])/3) * 300;
//                     break;
//                 case 4:
//                     totalScore += (throwMap.get(dice[j])/3) * 400;
//                     break;
//                 case 5:
//                     totalScore += (throwMap.get(dice[j])/3) * 500;
//                     break;
//                 case 6:
//                     totalScore += (throwMap.get(dice[j])/3) * 600;
//                     break;
//                 default:
//                     totalScore += (throwMap.get(dice[j])/3) * 1000;
//                     break;
//             }
//         }
//         else{
//             switch(dice[j]){
//                 case 1:
//                     totalScore += (throwMap.get(dice[j]) % 3) * 100;
//                     break;
//                 case 5:
//                     totalScore += (throwMap.get(dice[j]) % 3) * 50;
//                     break;
//                 default:
//                     totalScore +=0;
//             }
//         }
//     }
//     return totalScore;
//  }

function score(dice) {
    var total = 0;
    for (let i = 1; i <= 6; i++) {
      var counter = dice.filter((n) => n === i);
      if (counter.length >= 3) 
        total += (i == 1 ? 1000 : i * 100);
      if (i === 1) 
        total += (counter.length % 3) * 100;
      if (i === 5)
        total += (counter.length % 3) * 50;
    }
    return total;
  }

 console.log(score([1,1,1,3,1]));
