// Nested Objects
let userInfo = {
    firstName: 'Pankaj',
    lastName: 'Kumar',
    address: {
        city: 'patna',
        state:'Bihar',
    },

    hobby: 'Computer',
}

console.log(userInfo)

// Accessing those values 
console.log(userInfo.address.city);
console.log(userInfo.address.state);
