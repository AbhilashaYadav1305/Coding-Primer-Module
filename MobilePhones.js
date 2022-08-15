/*Problem Description
Little pony is going to buy some mobile phones for his friends. As there many models available in the market at different prices, He is confused and wants to know the maximum distinct models of a mobile phone he can buy for his friends, given that he has a total X amount of money.

You are given an array A of size N. denoting the size of prices of different models. The array is sorted based on prices in increasing order. You are given another array B of size Q denoting the queries. In i'th query, you need to tell the maximum distinct models of mobile phones he can buy with B[i] money.

Problem Constraints
1 <= N, Q <= 105
1 <= A[i] <= 104
1 <= B[i] <= 109

Input Format
The 1st argument of the input is the array A.
The 2nd argument of the input is the array B containing the description of the queries.

Output Format
Your function should return the answer to all queries in an array (in the same order they were asked in the input).

Example Input
Input 1:

A: [3, 4, 4, 6] B: [6, 4, 10, 12]

Example Output
Output 1:

 [3, 1, 2, 0]
*/


//return a array of integers
function solve (A, B) {
    let sum = 0;
    let result = [];
    const prefixSum = A.map((element) => {
        sum = sum + element;
        return sum})
    result = B.map(element => {
        let high = prefixSum.length - 1;
        let low = 0;
        let total = 0;
        while(high >= low){
            const mid = Math.floor(low + ((high - low)/2));
            if(element === prefixSum[mid]){
                return 1;
            } else {
                if(element > prefixSum[mid]){
                    total = mid + 1;
                    low = mid + 1;
                } else if (element < prefixSum[mid]) {
                    high = mid - 1;
                }
            }
        }
        return total;
    });
    return result;
}

const result = solve([3, 4, 6, 7],[44, 3, 10, 12]);
console.log(result)