
//create a class called EvenNOdd in java
//creat an array of numbers


class EvenNOdd {
    public static void main(String args[])
    {

// initialise your even one odd number and give them a value

        int arr[] = { 1, 2, 3, 4, 5, 6 };
        int even = 0, odd = 0;
 
        // Loop to find even, odd sum
//all arau sues .length method
//I++ increment by 1

        for (int i = 0; i < arr.length; i++) {
//% Calculates the reminder of the division
            if (i % 2 == 0)
                even += arr[i];
            else
                odd += arr[i];
        }
 
        System.out.println("Even index positions sum: " + even);
        System.out.println("Odd index positions sum: " + odd);
    }
}
