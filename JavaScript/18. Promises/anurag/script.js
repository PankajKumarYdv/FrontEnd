// Syntax
const p = new Promise((resolve, reject) => {
  //   resolve();
  // or
  //   reject();
});

// Example
const e = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});

// using resolver with setTimeOut;
const time = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Time Completed");
  }, 4000); // it will resolve after 4sec
});

// using Promise with event listener
const resolveBtn = document.querySelector(".promiseBtn");
const btn = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });
});
