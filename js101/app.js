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


const form = document.querySelector('#task-form');
form.addEventListener('submit',runtask);
function runtask(e){
    e.preventDefault();

    // Get input from value
    const ip = document.getElementById('task').value;

    // Creating LI Element
    const newList = document.createElement('li');

    // Creating classname to LI element
    newList.className = 'collection-item';
    newList.appendChild(document.createTextNode(ip));

    // InnerLink
    const aHref = document.createElement('a');
    aHref.className='delete-item secondary-content';
    aHref.innerHTML = '<i class="material-icons">clear</i>'
    newList.appendChild(aHref);

    document.querySelector('ul.collection').appendChild(newList);
    
    document.getElementById('task').value = '';
    console.log(newList);
}