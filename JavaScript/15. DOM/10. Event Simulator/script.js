 const addCardBtn = document.querySelector('.card')
 const container = document.querySelector('.container')
 
 const 
 
 let count = 1 
 
 addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count ++
    container.append(newCard)
 })
 

