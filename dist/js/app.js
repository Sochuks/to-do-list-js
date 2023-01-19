// get input from index
let input = document.querySelector('.enter-input');
let addBtn = document.querySelector('.add-list');
let task = document.querySelector('.task');

// disable list form btn 
input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0 ){
        addBtn.classList.add('active');
} else{
    addBtn.classList.remove('active');
}
})

// add items to task
addBtn.addEventListener('click', ()  =>{
    if (input.value.trim() !==0){

        // create new task
        newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        
        `
    }
})