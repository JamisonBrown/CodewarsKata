public class SumOddNumbers {
    /**
     * The sum of n consecutive numbers is defined as
     * (n+1)(n/2)
     * 
     * we may know how many numbers are in our row
     * numsInRow = ((n-1) * (n)) / 2
     * 
     * now we can calculate the first number in that row
     * firstNumInRow = 2*numsInRow+1
     *               = (n*n)-(n+1)
     * to calculate the last number in the row we take the 
     * firstNumInRow and add (2(n-1))
     * 
     * lastNumInRow = firstNumInRow + 2(n-1)
     * 
     * say we know the length of the row before our given row begins is x1
     * and the length of our given row is x2.
     * 
     * it is known that 1+3+5+....+(2k-1) = k*k where k is the length of our row
     * so we know that the sums leading up to the previous row is x1*x1
     * 
     * we want just the sum of row given so we would have the sum leading up to row k being 
     * x2*x2 and the sum leading up to row k-1 being x1*x1
     * 
     * In order to isolate just row k
     * we sum the totals up to row k and subtract the totals upto k-1
     * sumOfRowK = x2*x2 - x1*x1
     * 
     * when simplified this reduces to 
     * x1 = (n*n-n)/2 and x2 =(n*n+n)/2
     * 
     * Sum = n*n*n
     */
    public static int rowSumOddNumbers(int n){
        return n*n*n;
    }
     
}
