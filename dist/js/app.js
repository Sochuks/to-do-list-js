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
        newItem.classList.add('item', 'shadow');
        newItem.innerHTML = `
        <p class="text-base font-semibold">
                        ${input.value}
                    </p>
                    <div class="item-btn">
                        <i class="bx bx-pencil">0</i>
                        <i class="bx">X</i>
                    </div>
        `
        task.appendChild(newItem);
        input.value = "";
    }else{
        alert("Please Input a Task!")
    }
})