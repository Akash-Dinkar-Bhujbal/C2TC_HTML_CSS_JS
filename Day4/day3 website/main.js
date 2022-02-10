// console.log(document.querySelector(".item1"));

let item = document.querySelector(".item1");
item.innerHTML="Hello";

let button = document.querySelector(".btn");
button.style.background="red";

// button.addEventListener("click",(e)=>
// {
// 	console.log("click");
// 	// e.preventDefault();
// });

// Keyboard Event
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

nameInput.addEventListener("input",e=>
{
	document.querySelector(".container").append(nameInput.value);
});

emailInput.addEventListener("input",e=>
{
	document.querySelector(".container").append(emailInput.value);
});

// function onSubmit(e){
// 	e.preventDefault();
// }

// console.log(nameInput.value);
// console.log(emailInput.value);

// let myform = document.querySelector("#my-form");
// myform.addEventListener('submit',onSubmit());

// let msg = document.querySelector(".msg");
// if(nameInput.value === ''|| emailInput.value === ''){
// 	msg.classList.add('error');
// 	msg.innerText='Please enter all fields';
// 	// setTimeout(()=> msg.remove(),3000);
// }


// if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add(`error`);
//     msg.innerHTML = `Please enter all fields`;
// }else{
// 	console.log(`Success`);
// }

// let userList = document.querySelector("#users");


//   if(nameInput.value === '' || emailInput.value === '')
//   {
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';
//     setTimeout(() => msg.remove(), 3000);
//   }
//   else
//   {
//     // Create new list item with user
//     let li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Append to ul
//     userList.appendChild(li);
//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }



