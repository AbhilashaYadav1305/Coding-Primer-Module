/**Q1. Teams
Unsolved
Given a string A, A is made up of 0's and 1's. Break A into substrings such that , all broken substrings have equal number of 1's and 0's.

Find and return maximum number of substrings in which A can be broken.

The only argument given is string A.
Output Format

Find and return maximum number of substrings in which A can be broken.
Constraints

1 <= length of A <= 10^5
A will always have equal number of 0's and 1's
For Example

Input 1:
    A = "011100"
Output 1:
    2
Explanation 1:
    "01" + "1100"

Input 2:
    A = "00011011"
Output 2:
    1
Explanation 2:
    "00011011"
*/

function solve(A) {
    let a = 0;
    let countOfZeros = 0;
    let countOfOnes = 0;
    A.split("").forEach((element, index) => {
        element === "0" ? countOfZeros++ : countOfOnes++;
        if (countOfZeros === countOfOnes && countOfOnes && countOfZeros) {
            a++;
            countOfOnes = 0;
            countOfZeros = 0;
        }
    })
    return a;
}

let result = solve("01010110");
console.log(result);