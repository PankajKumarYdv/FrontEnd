console.log("Code started");
setTimeout(() => {
  console.log("Inside setTimeout");
  function sayhi() {
    console.log("Hello");
  }
  setTimeout(sayhi, 0);
}, 2000);

for (let i = 1; i < 10000; i++) {
  console.log("Hello");
}
console.log("Code end");
