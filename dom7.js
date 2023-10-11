/*//parentElement

var itemList = document.querySelector('#items');
console.log(itemList.parentElement);

//childnodes
console.log(itemList.children);
console.log(itemList.children[1]);

//first child
console.log(itemList.firstChild);//gives text

//first element child
console.log(itemList.firstElementChild);

//last element child
console.log(itemList.lastElementChild);

//next sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousElementSibling);
*/

//create element
//create div
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.setAttribute('title','hello div');
var newDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText);

//insert in html
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv,h1);

