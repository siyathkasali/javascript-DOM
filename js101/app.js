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



const form = document.querySelector('form');

form.addEventListener('submit', runTask)


function runTask(e){
    e.preventDefault();
    const storeInput = document.getElementById('task').value;
    localStorage.setItem('name', storeInput);
}

else
