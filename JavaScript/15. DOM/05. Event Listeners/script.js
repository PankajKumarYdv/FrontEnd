const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Card number 
let count = 1; 

// Event listener 
card.addEventListener('click',() => {
    const newCard = card.cloneNode()
    newCard.classList.remove('add-card')/* `Removing class` 
    This line will remove the 'add-card' css,
    so that out new card doesn't created as
    like the modified tag which we are designed 
    in such a way that it look lika a bottom.  
    
    */
    newCard.innerText = count++;
    container.append(newCard);
})