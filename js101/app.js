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



// REPLACE ELEMENT
// Creating an h2 Element
const newHeading = document.createElement('h2');
// Creating Id for that element
newHeading.id = 'task-title';
//New Text node and appending to newHeading
newHeading.appendChild(document.createTextNode('New Heading'));
// geting old header (h5);
const oldHeader = document.querySelector('#task-title');
// Getting parent 
const parentOfoldHeader = document.querySelector('.card-action');
// Replacing child
parentOfoldHeader.replaceChild(newHeading, oldHeader);





console.log(newHeading);