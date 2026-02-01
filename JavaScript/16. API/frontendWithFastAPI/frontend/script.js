console.log("Hello, Developer");
let userNameElement = document.querySelector(".name"); 

let userName; 
fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(json => {
        userName = json.name;   
        // userNameElement.innerHtml(); 
      })