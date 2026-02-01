// First method
/*
fetch("https://dummyjson.com/ip").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});*/

// second method
const userIp = document.querySelector(".ip");
const userAgent = document.querySelector(".userAgent");

fetch("https://dummyjson.com/ip")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    userIp.innerHTML = `Your IP : ${data.ip}`;
    userAgent.innerHTML = `Your Browser Info : ${data.userAgent}`;
  });
