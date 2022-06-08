public class FindOdd{
    public static int findIt(int[] A){
        int odd = 0; //the number that is in the array an odd number of times

        //for each number in the given array A
        for(int number : A){
            // XOR (exponent also) when a number is XOR'd with itself an odd number of times,
            // the result is the number itself. This will give us the integer that appears an odd number of times.
            odd ^= number;
        }
        return odd;
    }
}
