function sayhi() {
  console.log("Hello");
}

function hru() {
  console.log("How are you ?");
}

sayhi();
hru();

//Using callback

function fun1(callback) {
  console.log("Inside 1st function");
  callback();
}

function fun2() {
  console.log("Inside 2nd function");
}

fun1(fun2);

// using callback with anonymous function
function anonFunc(callback) {
  console.log("Inside main Function of anonymous function.");
  callback();
}

anonFunc(function () {
  console.log("Inside Anonymous Function.");
});

// using callback with arrow function
function arrowFunc(callback) {
  console.log("Inside main function of Arrow function");
  callback();
}

arrowFunc(() => {
  console.log("Hi, From arrow Function");
});

// Validate user input
/*
function onSuccess(num1, num2) {
  console.log(num1 + num2);
}

function onFail() {
  console.log("You have pass wrong input");
  console.log("Please pass number only");
}

function getSum(num1, num2, onSuccess, onFail) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onFail();
  }
}

getSum("12", 23, onSuccess, onFail);
getSum(12, 23, onSuccess, onFail); // 35
*/

//Doing Validation with arrow function
function getSum(num1, num2, onSuccess, onFail) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    onSuccess(num1, num2);
  } else {
    onFail();
  }
}

// calling arrow function
getSum(
  23,
  34,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("you have Enter wrong input.");
    console.log("Please Pass number only");
  }
);

console.clear();

for (let i = 1; i <= 7; i++) {
  setTimeout(() => {
    const heading = document.querySelector(`.heading${i}`);
    heading.textContent = `Heading ${i}`;
  }, i * 1000);
}

console.log("Code end");
