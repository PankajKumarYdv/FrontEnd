let userInput = 232;

switch(true){
    case userInput >= 0 && userInput < 10:{
            console.log(`${userInput} is 1 digit number`); 
            break;
        }
    // you can also define case in ()
    case (userInput >= 10 && userInput < 100):{
        console.log(`${userInput} is 2 digit number`);
        break;
    }

    case userInput >= 100 && userInput < 1000:{
        console.log(`${userInput} is 3 digit number`); 
        break;
    }

    default:{
        console.log(`${number} is larger than 3 digit`);
    }
}