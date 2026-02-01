const name = "pankaj";

// Producing promise
// Fried Rice Promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (name == "pankaj") {
    resolve("Welcome Pankaj");
  } else {
    reject("You are not authenticated user.");
  }
});

//Consuming Promise
/*
friedRicePromise.then(
  // jab promise resolve hoga
  (data) => {
    console.log(data);
  },
  // jab promise resolve nhi hoga.
  (error) => {
    console.log(error);
  }
);
// .then ka first function resolve ka data lega aur 2nd function reject ka.

*/

// using .then .catch .finally for resolve reject and execute in both
friedRicePromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Program Ended");
  });

// Function return promise
function promiseInFunction() {
  let number = 32;
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve("Number is even");
    } else {
      reject("Number is Odd");
    }
  });
}

// Consuming the above function
promiseInFunction()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise with setTimeout
function promiseWithSetTimeout() {
  return new Promise((resolve, reject) => {
    const status = false;
    setTimeout(() => {
      if (status) {
        resolve("You are welcome");
      } else {
        reject("Not Allowed");
      }
    }, 2000);
  });
}

// Consuming that function
promiseWithSetTimeout()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// promise chaining

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "tball";
    return value;
  })
  .then((value) => {
    console.log(value);
    value += " game";
    return value;
  })
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log(value); // undefined : bz we don't return any value in the above then
  });
