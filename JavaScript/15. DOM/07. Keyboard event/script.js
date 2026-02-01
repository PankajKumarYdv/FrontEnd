const h1 = document.querySelector('h1'); 
document.addEventListener('keydown', (e) => {
    console.log(e); // show full detail of of keyevent. 
    console.log('Code : ',e.code);
    console.log('Key value : ',e.key);
})

