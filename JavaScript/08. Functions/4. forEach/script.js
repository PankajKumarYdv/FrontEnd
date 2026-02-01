// For Each loop 
const cars = ['BMW', 'Ferrari', 'Mustang', 'Dodge', 'Lamborghini', 'Pagani', 'Mclaren']

// take another function as a argument 
console.log('========> Normal Function <============')
cars.forEach(function(car){
    console.log(car) // Print all the elements 
})


// Doing same with arrow function 
console.log('========> Arrow Function <============')
cars.forEach((car) =>{
    console.log(car)
})

/*
forEach is a higher order function bz it accept another function as an argument. 
NOTE : forEach me se koi value bhi return krte hai agr tho yeh undefine return krta hai
bz ye function return krne k liya nhi print krne k liya bnaya gaya hai. uss me koi change 
k hum print krwa skte hai `undefine` print nhi krega. 

To fix this problem we use `map` method. 
*/