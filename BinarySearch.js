/* 
Binary search algorithm Imlementation -
Time complexity of a linear search is 2^n
Time complexity of a binary search is log n base 2
Things to note - 
1. Always applicable for a sorted array.
2. Applys on monotonically increasing or decreasing graphs if plotted over given array.
*/

const input = [1, 8, 12, 32, 45];
const number = 32;

const binarysearch = (low, high, input, number) => {
    let mid = Math.floor(low + ((high - low) / 2));
    if (high >= low) {
        if (number === input[mid]) {
            return mid;
        } else {
            if (number > input[mid]) {
                low = mid + 1;
            } else if (number < input[mid]) {
                high = mid - 1;
            }
           return binarysearch(low, high, input, number);
        }
    } else {
        return -1;
    }
}

const result = binarysearch(0, input.length - 1, input, number);
console.log(result);