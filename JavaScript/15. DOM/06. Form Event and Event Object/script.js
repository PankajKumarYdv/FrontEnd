const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const myFormData = new FormData(form); 

    for (const p of myFormData.entries()){
        console.log(p); 
    }
})