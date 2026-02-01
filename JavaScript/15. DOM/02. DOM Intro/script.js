/* What is DOM ? 


 */

// getElementsByTagName 
// document.getElementsByTagName('img')


// document.getElementsByClassName('css-image')

// document.getElementById('css-id-image');


// querySelector 
/*
=> select the first matched and stop.  It doesn't select more than one. 
=> select as css selector does. 
=> We can select by using any selector which we use in css. 
*/
// const cssImage1 = document.querySelector('.className') // class selector 
// const cssImage2 = document.querySelector('#className') // class id



// querySelectorAll()
/*
It select all whether it is class or id. 
return in Nodelist. It support forEach.
*/
// const cssImage = document.querySelectorAll('.className');



// let js_image = document.querySelector(".js-image");


// attribute Selector 



// Makeing array of all urls
/*
const imagesUrl = [
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://5.imimg.com/data5/SELLER/Default/2023/7/330483018/UU/FJ/LO/6461830/nature-wallpaper-500x500.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg',
]
*/
// selecting all image elements. 
// const allImages = document.querySelectorAll('img'); 

// changing image by selecting the element using indexing. 
/*
allImages[0].src = imageUrl[0]
allImages[1].src = imageUrl[1]
allImages[2].src = imageUrl[2]
*/

// using for loop 
/*
for (let i = 0; i <3; i++){
    allImages[i].src = imageUrl[i]
}
*/

// for Each 
/*
allImages.forEach((image, i) => {
    image.src = imagesUrl[i]
})
*/

/*

let intro = document.querySelector(".intro");
console.log(intro.innerHTML) // print all html code. 
intro.innerHTML = "<h1> Pankaj <br> Kumar </h1>";
console.log(intro.innerText) // It Only print the text. 
// intro.innerText = "Hello Pankaj, How are you." // change the previous values with the given one. 

console.log(intro.textContent) // It Only print the text as like innerText but it print the row data which had written on the server. It also show element which is hidden by CSS. 

*/

// getAttribute and setAttribute 
/*
Attribute : The Extra detail which we give in our opening tag, that is call attribute
ex : class, id , href, style etc. 
We have to give the value of these attributes. 
we can create our own attribute, like 
<h1 class = "heading" style = {color : red} xyz = "abc"> Pankaj Kumar </h1> 
here, xyz is a attribute with "abc" as its' value. 

we can also use attribute selector to add css on that or js. 
css 
[xyz] {
    color : red; 
}
*/
// In html : <h1 class = "hero test" intro = "test" >Hello Pankaj. </h1>

// getAttribute 
let selectingClass = document.querySelector(".intro").getAttribute('class') 
console.log(selectingClass); // hero test

let intro = document.querySelector(".intro").getAttribute('intro') 
console.log(intro); // test


// setAttribute 
// we can set our own attribute. 
let setAttr = document.querySelector('h1').setAttribute('title','Pankaj kumar')
// title -> attribute name ; 'Pankaj Kumar' -> attribute value. 