let userName = prompt('Enter your name : '); 
let userGender = prompt('Gender M/F : '); 
let userAge = +prompt('Enter your Age : ');

if (userAge >=18){
    if (userGender == 'M'){
        console.log(`You are Most welcome Mister ${userName}`); 
    }
    if (userGender == 'F'){
        console.log(`You are most welcome Miss ${userName}`);
    }
}

if (userAge < 18){
    console.log(`Sorry ${userName}, You are too young`); 
}