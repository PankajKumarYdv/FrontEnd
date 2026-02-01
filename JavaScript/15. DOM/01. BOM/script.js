/* 
setTimeout(() => {
    // location.reload()
    location.replace('https://google.com')
},20000)

*/


/* 
console.log(`your browser resolution is ${innerHeight} X ${innerWidth}`); 
console.log(`your Screen resolution is ${outerHeight} X ${outerWidth}`);
*/


/*

webSites = [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://javascript.info/",
    "https://www.w3schools.com/js/",
    "https://stackoverflow.com/questions/tagged/javascript",
    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    "https://www.geeksforgeeks.org/javascript/",
    "https://www.tutorialspoint.com/javascript/index.htm",
    "https://eloquentjavascript.net/",
    "https://codeacademy.com/learn/introduction-to-javascript",
    "https://dev.to/t/javascript"
];

for (i in webSites){
    // console.log(webSites[i])
    open(webSites[i],'','resizable');
}

*/

addEventListener("click",(e)=>{
    window.open('https://google.com','myPopup','height=400, width=400');
});

