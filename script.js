// variables
let root = document.querySelector(':root');
let container = document.querySelector('.container');
let newTaskInput = document.getElementById('new_task_input');
let taskForm = document.getElementById('new_task_form');
let taskList = document.getElementById('tasksLists');
let taskBtns = document.querySelectorAll('.task_check_btn');
let themeBtn = document.querySelector('.btn-theme-toogle');

// Do this when we submit the form
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let newtaskInputdeger = taskForm.elements.new_task_input;

    addTask(newtaskInputdeger.value);

    //Reset input value to empty
    newtaskInputdeger.value = '';
    container.classList.remove('empty_task_list');
});

// To add task in list

function addTask(newTask) {

    // Create li element and set its class
    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task_item');

    // Create checkbox element and set its type and class

    const newCheckBtn = document.createElement('div');
    newCheckBtn.setAttribute('class', 'task_check_btn');

    // Create span element and set its class and add new task input

    const newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'task_bio');
    // Put value of input in it
    newTaskBio.innerText = newTask; // putting value of input in the lie

    // append (insert) li tag in Ul
    tasksLists.appendChild(newTaskItem);

    //append (insert) checkbox in li
    newTaskItem.appendChild(newCheckBtn);

    //append (insert) newTask in li
    newTaskItem.appendChild(newTaskBio);

    // Run this function when task is completed or checkbox is checked
    onTaskComplete(newCheckBtn);

}


//To remove the completed task

function onTaskComplete(btns) {
    btns.addEventListener('click', function(element) {
        var parents = element.target.parentElement;
        parents.classList.add('task-completed');
        // Now we delete taht tast which we have slided out
        setTimeout(() => {
            // Removing Parent Element of checkbox which is Li in 0.5s
            parents.remove();
        }, 400);

        if (tasksLists.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add('empty_task_list')
            }, 800);
        }
    })
}



// dark mode

themeBtn.addEventListener('click', function() {


    let DarkTheme = themeBtn.classList.toggle('dark')

    if (DarkTheme) {
        root.style.setProperty('--theme-transition', '1s')
        root.style.setProperty('--primary-color', '#080351')
        root.style.setProperty('--secondary-color', 'rgb(248, 252, 255)')
        root.style.setProperty('--text-color', '#252525')
        root.style.setProperty('--task-color', 'aliceblue')
        root.style.setProperty('--footer-color', '#040035')
        root.style.setProperty('--theme-btn', `url('assets/light-theme-btn.svg')`)
        root.style.setProperty('--container-bg', `url('./assets2/Dark-empty.svg')`)
        root.style.setProperty('--filter', 'invert()')
        root.style.setProperty('--heading-color', 'aliceblue')
    } else {
        root.style.setProperty('transition', '1')
        root.style.setProperty('--primary-color', 'rgb(248, 252, 255)')
        root.style.setProperty('--secondary-color', '#080351')
        root.style.setProperty('--text-color', '#252525')
        root.style.setProperty('--task-color', 'rgb(221, 239, 255)')
        root.style.setProperty('--footer-color', '#080351')
        root.style.setProperty('--theme-btn', `url('assets/dark-toogle-btn2.svg')`)
        root.style.setProperty('--container-bg', `url('./assets2/Light-empty.svg')`)
        root.style.setProperty('--heading-color', '#252525')
    }
})