public class CatYearsDogYears{
    public static int[] humanYearsCatYearsDogYears(final int humanYears){
        int catYears=0;
        int dogYears=0;

        for(int i=1; i <= humanYears; i++){
            if(i == 1 ){
                catYears = catYears + 15;
                dogYears = dogYears + 15;
            }
            else if(i == 2){
                catYears = catYears + 9;
                dogYears = dogYears + 9;
            }
            else{
                catYears = catYears + 4;
                dogYears = dogYears + 5;
            }
        }
        return new int[]{humanYears,catYears,dogYears};
    }
}