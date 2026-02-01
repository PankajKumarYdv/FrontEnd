// Function can return another function

function outerFunction() {
  function innerFunction() {
    console.log("Hello World");
  }
  return innerFunction;
}

console.log(outerFunction());
outerFunction();
const innerFn = outerFunction();
innerFn();

// Example : Returning Selected Function for our operation
function calculator(operation) {
  if (operation == "sum") {
    function sum(a, b) {
      return a + b;
    }

    // Return sum
    return sum;
  } else if (operation == "sub") {
    function sub(a, b) {
      return a - b;
    }
    return sub;
  } else if (operation == "mul") {
    function mul(a, b) {
      return a * b;
    }
    return mul;
  } else if (operation == "div") {
    function div(a, b) {
      return a / b;
    }
    return div;
  } else {
    return "Invalid Operation";
  }
}

const sumFn = calculator("sum");
console.log(sumFn);
console.log(sumFn(8, 3));

const subFn = calculator("sub");
console.log(subFn(50, 12));
