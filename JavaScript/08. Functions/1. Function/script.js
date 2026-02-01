// **************** questions on function *********************

// Reverse Number
/*
function reverse(num){
    num = ''+num ;
    reversed_num = ''
    let i = num.length-1;
    for (i; i>=0;i--){
        reversed_num += num[i]
    }
    return reversed_num;
}

num = 32243;
console.log(reverse(num));

*/

// Solved solution 
/*
function reverseNumber(num){
    num += ''; 
    return num.split('').reverse().join('');
}

num = 32243;
console.log(reverseNumber(num));
*/


// Check Palindrome 

function checkPalindrome(letter){
    let letterLength = letter.length;
    let middleTerm = Math.floor(letterLength/2);
    let leftPointer = 0
    let rightPointer = letterLength - 1

    for ( ; leftPointer < middleTerm; leftPointer ++){
        if (letter[leftPointer] == letter[rightPointer]){
            rightPointer -= 1;
        }
        else{
            return 'not a palindrome'
        }
    }
    return 'Is a Palindrom'

}

letter = 'nuRsEsrun'.toLowerCase();
console.log(`${letter} ${checkPalindrome(letter)}`);