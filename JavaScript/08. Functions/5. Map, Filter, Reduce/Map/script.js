const cars = ['BMW', 'Ferrari', 'Mustang', 'Dodge', 'Lamborghini', 'Pagani', 'Mclaren']

// map 
const capitalCars = cars.map((car) => {
    console.log(car) // print krega cars ko 
    return car.toUpperCase() // return krega upper case me cars ko as a array. 
})

// Arrow ko print krne k liya function ko variable me store krna pdega. 
console.log(capitalCars) // Return krega array 

