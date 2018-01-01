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
