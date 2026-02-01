// Arrow Function 

// 1. Method
const square = (num)=>{
    return num * num 
}

// calling
console.log(square(12)) // 144



// 2. Method 
const add = (num1,num2) => num1 + num2 
// calling 
console.log(add(50,50)) // 100 `This is called implective Return bz it does not have `return` method.`

/*
    1. Mostly used in callback function. 
 */


// using arrow function with setTimeout()    
setTimeout(() => {
    console.log('Hey, Pankaj');
}, 2000)  // 2s k baad execute ho jyega. 


// using it with math.random function 
const random = () => Math.random()
console.log(random()); // 0.037701086470160905


// Recommended way 
const random2 = () => (
    Math.floor(Math.random()*10) + 1 
)
console.log(random2());  // 7