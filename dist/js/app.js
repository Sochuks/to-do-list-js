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
        newItem.style.background = 'hsla(184, 100%, 94%, 1)'
        newItem.innerHTML = `
        <p class="text-base py-2 font-semibold">
                        ${input.value}
                    </p>
                    <div class="item-btn">
                        <i class="bx bx-check-circle"></i>
                        <i class="bx bx-x"></i>
                    </div>
        `
        task.appendChild(newItem);
        input.value = "";
    }else{
        alert("Please Input a Task!")
    }
})

// delete task from list
task.addEventListener('click', (e) => {
    if (e.target.classList.contains("bx-x")){
        e.target.parentElement.parentElement.remove();
    }
})

// Mark task completed
task.addEventListener('click', (e) => {
    if(e.target.classList.contains("bx-check-circle")){
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})