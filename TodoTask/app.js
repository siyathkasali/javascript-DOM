// const alert = document.getElementById('task-form');
// alert.addEventListener('submit', alertMessage);

// function alertMessage(e){
//     e.preventDefault();
//     console.log(e.target.value.filter);
// }

// const items = document.getElementsByClassName('collection-item');
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// // items[0].style.background = 'green';
// // console.log(items[0]);

// const lis = document.getElementsByTagName('li');

// const convertArray = Array.from(lis);
// convertArray.reverse();

// convertArray.forEach(function(li,index){
//     console.log(li);
//     li.innerText = `${index}: Hello`;
// });

// const items = document.querySelectorAll('ul.collection li.collection-item');

// const liOdd = document.querySelectorAll('li:nth-child(odd)');


// liOdd.forEach(function(li,index){
//     li.style.background = 'red';
//     li.style.color = 'white';
// })

// Set localStorage
// localStorage.setItem('name','Bhasidh');
// localStorage.setItem('age',29);
// // Set SeesionStorage
// sessionStorage.setItem('name','siyath');

// // Remove Item 
// // localStorage.removeItem('name');

// // Clear all Items
// // localStorage.clear();

// const data = localStorage.getItem('name');
// const data2 = localStorage.getItem('age');

// console.log(data, data2);


const form = document.getElementById('task-form');
const ul = document.querySelector('.collection');
const ip = document.getElementById('task');
const filter = document.getElementById('filter')
const clear = document.querySelector('.clear-tasks');


function loadEvents(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit', runFunc);
    clear.addEventListener('click', clearTask);
    ul.addEventListener('click', removeTask);
    filter.addEventListener('keyup', filterFunc);
}

loadEvents();

function runFunc(e){
    e.preventDefault();
    
    if(ip.value === ''){
        alert('please enter a valid task');
    }else{
    // Creating an element
    const li = document.createElement('li');
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(ip.value));
    
    const link = document.createElement('a');
    link.className = 'delete-item  secondary-content';
    link.innerHTML = '<i class="material-icons">clear</i>';

    li.appendChild(link);
    
    ul.appendChild(li);

    // Store in localstorage
    localStorageFunc(ip.value);

    ip.value = '';
    }
}

// Localstorage function

function localStorageFunc(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Remove Single task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure')){
            e.target.parentElement.parentElement.remove();
            // Remove from localStorage
            removeFromLS(e.target.parentElement.parentElement);
        }
        
    }
}

// Remove from local storage
function removeFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    // console.log(taskItem); 
}

// Clear task
function clearTask(){
    // ul.innerHTML = '';
        while(ul.firstChild){
            ul.removeChild(ul.firstChild);
        }
        clearAllfromLocalStorage();
}

// // claering all from local storage
function clearAllfromLocalStorage(){
    localStorage.clear();
}

// Filter func

function filterFunc(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach((function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        }else{
            task.style.display = 'none'
        }
    }))
    
}

// Load tasks from DOM function
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task)=>{
           
    // Creating an element
    const li = document.createElement('li');
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(task));
    
    const link = document.createElement('a');
    link.className = 'delete-item  secondary-content';
    link.innerHTML = '<i class="material-icons">clear</i>';

    li.appendChild(link);
    
    ul.appendChild(li);
    
})
}