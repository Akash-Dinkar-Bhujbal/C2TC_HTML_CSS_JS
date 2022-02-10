// var i;
// i = 

// document;
// document.firstElementChild;
// document.firstElementChild.lastElementChild;
// document.firstElementChild.firstElementChild;
// document.firstElementChild.lastElementChild.lastElementChild;
// document.firstElementChild.lastElementChild.children[5];
// document.firstElementChild.lastElementChild.children[2];
// document.firstElementChild.lastElementChild.children[3];
// document.firstElementChild.lastElementChild.children[4];
 
// console.log(i);

// var x;
// x = 

// /* For id*/
// document.getElementById("title");
// document.getElementById("list");
// /* For class*/
// document.querySelector(".btn");
// document.querySelector(".item");

// console.log(x)

// /*Javascript - widely used it querySelector*/

document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.color="red";

document.querySelector("li").style.color="red";

document.querySelector("#list .item").style.color="red";

document.querySelectorAll("#list .item")[0].style.color="red";
document.querySelectorAll("#list .item")[1].style.color="red";
document.querySelectorAll("#list .item")[2].style.color="red";
document.querySelectorAll("#list .item")[2].style.color="blue";
document.querySelectorAll("#list .item")[2].style.color="yellow";

document.querySelector("button").style.backgroundColor="red";
document.querySelector("button").style.backgroundColor="blue";

document.querySelector("h1").innerHTML="Good Morning";
document.querySelector("h1").innerHTML="Good Morning All";
document.querySelector("h1").innerHTML="Good Morning KGCE Students";

document.querySelector("h1").innerHTML="<em>Good Morning KGCE Students</em>";

document.querySelector(".item4").style.backgroundColor="red";
document.querySelector(".item5").style.backgroundColor="blue";

let item3 = document.querySelectorAll("#list .item")[2];
item3.remove();
let item4 = document.querySelector(".item4");
item4.remove();

let item1 = document.querySelectorAll("#list .item")[0];
item1.textContent = "First";
item1.textContent = "Java";

let item2 = document.querySelectorAll("#list .item")[1];
item2.textContent = "Full Stack";

let item5 = document.querySelector(".item5");
item5.textContent = "Training";

// push() -added to last
// unshift() --adds items to the list
// concat() --

// add() --X

console.log(document.getElementById("title"));
console.log(document.querySelector("h2"));