// Argument 
/*
    -> Given to all function by default except arrow function. 
    -> ye output me array nhi deta hai pr usko humlog array me change kr skte hai. 
*/

function add(a,b){
    console.log(arguments); 
    return a + b; 
}

console.log(add(32,32));

/* output
Arguments(2) [32, 32, callee: ƒ, Symbol(Symbol.iterator): ƒ]
64
*/

// Agr humlog required argument se jada bhi argument pass kr diya tho wah show krega. 
console.log(add(5,6,2,9,4,5,3,8,2));
/*
Arguments(9) [5, 6, 2, 9, 4, 5, 3, 8, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
11 
*/

// Creating a function with return sum of  n term 

console.log("============= N Digit Sum =================")
function nAdd(a){
    // arg = arguments 
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]); // saara arguments ko print kr dega line by line 
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(2,2,2,2,2)); // 10 

