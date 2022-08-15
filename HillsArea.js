/*
Problem Description
Rishik likes to draw a lot. He starts at origin and chooses a single Y ordinate of each abscissa in [1-N] given in array A and then chooses 0 for N+1. He then joins each consecutive point with a straight line and found that he has drawn a masterpiece. But, It is incomplete without coloring.

So, he wants you to tell him the area of hills that he will color.



Problem Constraints
1 <= N <= 2e5

1 <= A[i] <= 2e9



Input Format
First and only argument of input contains a single integer array A.



Output Format
Return a string denoting area of hills(with truncated/rounded down decimal).



Example Input
Input 1:

 [2, 1, 3]
Input 2:

 [10]


Example Output
Output 1:

 "6"
Output 2:

 "10"
 */

function solve(A) {
    let totalArea = 0;
    A.forEach((element, index) => {
        const prev = index === 0 ? 0 : A[index - 1];
        const areaOfRect = element >= prev ? element : prev;
        const rest = 0.5 * 1 * Math.abs(prev - element);
        totalArea = totalArea + (areaOfRect - rest);
    });
    totalArea = totalArea + (0.5 * A[A.length - 1]);
    return Math.floor(totalArea) + "";
}

let result = solve([10]);
console.log(result);