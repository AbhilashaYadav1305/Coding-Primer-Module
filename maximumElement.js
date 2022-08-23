const  solve = (A, B) => {
    let foundB = false;
    let a = 0;
    for(let i = 0; i <= A.length; i++){
        if(A[i] > B) a++;
        if(A[i] === B) foundB = true;
    }
    return foundB ? a : -1
}

const result = solve([1,2,3,4,5,6], 3);
console.log(result)