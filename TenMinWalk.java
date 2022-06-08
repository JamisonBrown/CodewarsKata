public class TenMinWalk {
    public static boolean isValid(char[] walk) {
      // Insert brilliant code here
      
      //in order to get back to our starting position, 
      //the number of northern steps must be cancelled out 
      //by the number of southern steps.
      // the same goes for eastern and western steps
      //so long as these numbers cancell out
      //the order they are taken does not matter
      //there must also be 10 letters in walk[] for the solution to be valid
      //other wise the walk will be too long or too short
      if(walk.length != 10){
        return false;
      }
      else{
        //traverse walk[] and keep track of number of n,s,w,e
        int northSteps = 0;
        int southSteps = 0;
        int eastSteps = 0;
        int westSteps = 0;
        
        for(int i = 0; i < 10; i++){
          //count number of 'n' found
          if(walk[i] == 'n'){
            northSteps ++;
          }
          //count number of 's' found
          else if(walk[i] == 's'){
            southSteps ++;
          }
          //count number of 'e' found
          else if(walk[i] == 'e'){
            eastSteps ++;
          }
          //count number of 'w' found
          else{
            westSteps ++;
          }
        } // end for loop counting letters
        
        if(northSteps != southSteps && eastSteps != westSteps){
          return false;
        }
        else if(northSteps == southSteps && eastSteps != westSteps){
          return false;
        }
        else if(northSteps != southSteps && eastSteps == westSteps){
          return false;
        }
        return true;
      }
    }
  }