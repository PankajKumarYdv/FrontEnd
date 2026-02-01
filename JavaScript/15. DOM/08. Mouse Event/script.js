const h1 = document.querySelector('h1');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Card number 
let count = 1; 

// Event listener 
card.addEventListener('touchstart',() => {

    const newCard = card.cloneNode()
    newCard.classList.remove('add-card')
    newCard.innerText = count++;
    container.append(newCard);
})
