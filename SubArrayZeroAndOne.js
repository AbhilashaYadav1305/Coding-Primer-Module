function solve (A){
    let a = [];
   for( let i = 0; i <= A.length; i++){
    let lastVal = "";
    for( let j = i; j < A.length; j++){
            if( i === j ) {
                a.push(A[j]);
                lastVal = A[j];
            } else {
                a.push(lastVal + A[j]);
                lastVal += A[j];
            }
    }
   }
   return a;
}
function solveWithoutStorage (A){
    let count = 0;
   for( let i = 0; i <= A.length; i++){
    let lastVal = "";
    let countOfZeros = 0;
    let countOfOnes = 0;
    for( let j = i; j < A.length; j++){        
            if( i === j ) {
                lastVal = A[j];
                A[j] === "0" ? countOfZeros ++ : countOfOnes ++;
            } else {
                lastVal += A[j];
                A[j] === "0" ? countOfZeros ++ : countOfOnes ++;
            }
            if(countOfOnes === countOfZeros)
                count++;
           }
    } 
   return count;
}
const retval = solveWithoutStorage("00011011")
console.log(retval);