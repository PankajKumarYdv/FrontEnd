let userDetails = {
  firstName: "Pankaj",
  lastName: "Kumar",
  age: 23,
  gender: "Male",
};


// Creating Object
let carOwnerInfo = {
    'car-Num' : 'BR01432',
    'OwnerDetails' : 'Pankaj Kumar',
    registrationDate : '25/12/2004',
    price : 700000,
}


// Accessing Objects data
console.log(carOwnerInfo['car-Num']);
console.log(carOwnerInfo['OwnerDetails']); 
// console.log(carOwnerInfo[registrationDate]); // Error 
console.log(carOwnerInfo.registrationDate);
console.log(carOwnerInfo.price);



// Setting KEY name by user.

let userAdditionalDetails = prompt('Enter key of your details : ','Not Mention'); 
  
let userDatabase = {
  [userAdditionalDetails]:  '',
}; 

userDatabase[userAdditionalDetails] = prompt('Discription...'); 

let view = prompt('View them')
if (view == 'yes'){
  console.log('Executed');
  console.log(userDatabase[userAdditionalDetails]);
};