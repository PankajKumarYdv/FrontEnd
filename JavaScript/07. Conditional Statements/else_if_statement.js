let number = +prompt('Enter a number (0-100): '); 

if (number >=0 && number<25){
    console.log(`${number} is in between 0 to 24`); 
}

else if(number >=25 && number < 50){
    console.log(`${number} is in between 25 to 49`);
}

else if(number >=50 && number < 75){
    console.log(`${number} is in between 50 to 74`); 
}

else if(number >=75 && number <= 100){
    console.log(`${number} is in between 75 to 100`); 
}

else{
    console.log(`${number} if out of range`)
}

