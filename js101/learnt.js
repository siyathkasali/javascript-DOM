let string;

console.table();
console.error();
console.warn();
Date();
String();
Number();
parseInt();
parseFloat();
toFixed();
// (typeof)

Math.random;
Math.PI;
Math.abs;
Math.min;
Math.max;
Math.E;
Math.ceil();
Math.floor();

// string length
string.concat();
string.toUpperCase();
string.toLpperCase();
string.indexOf();
string.LastindexOf();
string.charAt();
string.charAt(length - 1);


// Arrays

push();
pop();
shift();
unshift();
indexOf();
splice();
sort();
sort(function(x,y){
  return x-y;
});
sort(function(x,y){
  return y-x;
});
find();
reverse();

// Dates

let today = new Date();

let bDay = new Date('11/19/1992');
let val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

bDay.setDate(13);
bDay.setMonth(11);
bDay.setHours(12);
bDay.setMinutes(23);
bDay.setSeconds(11);
document.querySelector('h1').innerHTML = bDay; 


alert();
prompt();
confirm();

window.scrollY;
window.scrollX;
window.innerHeight;
window.innerWidth;
window.outerHeight;
window.outerWidth;

location.port;
location.hostname;
location.href;
location.origin;
location.reload();
location.href = 'http://google.com'
// Get the link ? values like ?id=123&name=siyath
location.search 
// Negitive values
history.go(-1)

window.navigator;


// DOM

document;
document.all;
document.URL;
document.body;
document.head;
document.doctype;
document.domain;
document.characterSet;
document.contentType;


document.forms;
document.forms[0];
document.forms[0].id;
document.forms[0].className;
document.forms[0].method;
document.forms[0].action;

document.links;
document.links[0].id;
document.links[0].className;
document.links[0].classList;
document.links[0].classList[0];

document.images;

document.scripts;
document.scripts[0].getAttribute('src');



// Selectors

const storeThis = document.getElementById();
// Styling
storeThis.style.background = 'red';

// Change Text
storeThis.textContent = 'Hello world';
storeThis.innerText = '';
storeThis.innerHTML = '';

document.querySelector('#id');
document.querySelector('.class');
document.querySelector('h1');

document.querySelector('ul li').style.color = 'red';
document.querySelector('li:last-child').style.background = 'green';
document.querySelector('li:nth-child(2)').style.background = '#4g4g43';
document.querySelector('li:nth-child(3)').textContent = 'Hello world';


// Mulitple Selectors
document.getElementsByClassName();
document.querySelector('ul').getElementsByClassName('li');

document.querySelectorAll();

// Node List [Array]
document.querySelectorAll('li:nth-child(odd)');





// Traversing DOM

let val;

const item = document.querySelector('ul');
const itemList = document.querySelector('li');

// Child Nodes
val = item.childNodes;
val = item.childNodes[0];

// Children
val = item.children;
val = item.children[1].textContent = 'hello';

//Childeren of children
val = item.children[0].children[0].children;
val = item.children[0].id = 'test-id';


// // firstChild
val = item.firstChild;
val = item.firstElementChild;

// Last Child
val = item.lastChild;
val = item.lastElementChild;

// Count child elment
val = item.childElementCount;

// Get Parent Item
val = itemList.parentNode;
val = itemList.parentElement;
val = itemList.parentElement.parentElement;

// get nextsibling
val = itemList.nextSibling;
val = itemList.nextElementSibling;
val = itemList.nextElementSibling.nextElementSibling;
val = itemList.nextElementSibling.nextElementSibling.previousElementSibling;

//Previos sibling
val = itemList.previousSibling;
val = itemList.previousElementSibling;


console.log(val);




//Adding Items


const li = document.createElement('li');

// Adding class
li.className='collection-item';

//Adding ID
li.id = 'new-item';

// adding attribute
li.setAttribute('title', 'Some title');

const link = document.createElement('a');
link.className = 'delete-item secondary-content';

link.innerHTML = '<i class="material-icons">clear</i>';

li.appendChild(link);
// Creating text node and adding inside li
li.appendChild(document.createTextNode('hello world'));

// appending to ul

document.querySelector('ul.collection').appendChild(li);
console.log(li);




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


// REMOVING CHILD

const lis = document.querySelectorAll('li');
const item = document.querySelector('ul');

// Remove element
// lis[2].remove();

// Remove child of a parent
item.removeChild(lis[1]);

// CLASS & ATTR
const firstLi = document.querySelector('li');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList[0];
// Add classList
link.classList.add('new-class');
// Remove Class List
link.classList.remove('new-class');

// Adding new attributes
val = link.getAttribute('href');
// Set Attributes
val = link.setAttribute('href', 'https://google.com');
// has attributes (Check any attributs are there)
val = link.hasAttribute('test-atrr');
// remove Attr
val = link.removeAttribute('new-attr');
console.log(val);




// EVENT LISTNER

const eventList = document.querySelector('.clear-tasks');
eventList.addEventListener('click', (e)=>{
    e.preventDefault();
    let val = e.type;
    val = e.clientX;
    val = e.clientY;
    val = e.timeStamp;
    val = e.offsetX;
    val = e.offsetY;
    console.log(val);
})


// OTHER EVENTS

const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click Function
// clearBtn.addEventListener('click', runEvent);
// // Mouse Down
// clearBtn.addEventListener('mousedown',runEvent);
// // Mouse UP
// clearBtn.addEventListener('mouseup',runEvent);
// onMouse over
// card.addEventListener('mouseover', runEvent);
// // Mouse Out
// card.addEventListener('mouseout',runEvent);
// // Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// // MouseLeave
// card.addEventListener('mouseleave', runEvent);
// mouse move
card.addEventListener('mousemove', runEvent);

// Double Click
clearBtn.addEventListener('dblclick', runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
    document.body.style.background = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;
}









// INPUT EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const output = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// Submit
// form.addEventListener('submit', runTask);

//keydown 
// taskInput.addEventListener('keydown', runTask);


//keyup 
// taskInput.addEventListener('keyup', runTask);


//keypress
// taskInput.addEventListener('keypress', runTask);

// focus
// taskInput.addEventListener('focus', runTask);

// Blur
// taskInput.addEventListener('blur', runTask);

// cut
// taskInput.addEventListener('cut', runTask);

// Paste
// taskInput.addEventListener('paste', runTask);

// input
// taskInput.addEventListener('input', runTask);

// Select Options
select.addEventListener('change', runTask);



function runTask(e){
    
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);
    // // Getting input by typing
    // output.textContent = `${e.target.value}`

    // // Get userinput with submit
    // console.log(taskInput.value);
    // // e.preventDefault();
}




// EVENT BUBBLING
// const selectUl = document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('UL');
// });

// const selectcardcontent = document.querySelector('.card-content').addEventListener('click', ()=>{
//     console.log('Card Content');
// })

// const selectCard = document.querySelector('.card').addEventListener('click',()=>{
//     console.log('Card class');
// });

// const selectCol = document.querySelector('.col').addEventListener('click', ()=>{
//     console.log('column');
// });


// EVENT dELIGATION

// const selectClass = document.querySelector('.delete-item');
// selectClass.addEventListener('click', removeItem);

document.body.addEventListener('click', removeItem);    

function removeItem(e){
    // console.log(e.target)
    // console.log('Delete Item');
    // if(e.target.parentElement.className  === 'delete-item secondary-content'){
    //     console.log('Hola');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('Hola');
        e.target.parentElement.parentElement.remove();
    }
    
}