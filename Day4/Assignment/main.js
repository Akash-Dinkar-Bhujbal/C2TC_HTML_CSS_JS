
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let usnInput = document.querySelector("#usn");
let addressInput = document.querySelector("#address");

let b1 = document.querySelector(".btn1");
b1.style.background = "red";
let b2 = document.querySelector(".btn2");
b2.style.background="blue";

let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");

let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');
var count = 0;

// function condition1() {
//   if(nameInput.value===``||emailInput.value===``||usnInput.va
//     ===``||homeaddressInput.value===``){
//     // alert(`Please enter all fields`);
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';
//     setTimeout(() => msg.remove(), 3000);
//   }
// }

b1.addEventListener("click", function(e)
{
  e.preventDefault();
  if(nameInput.value===``||emailInput.value===``||usnInput.value===``||addressInput.value===``)
  {
    console.log(`Please enter all fields`);
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);

  }else {
    count++;
    if (count===1){
      item1.textContent=`${nameInput.value} added successfully`;
    }else if (count===2){
      item2.textContent=`${nameInput.value} added successfully`;
    }else if (count===3){
      item3.textContent=`${nameInput.value} added successfully`;
    }else if (count===4){
      item4.textContent=`${nameInput.value} added successfully`;
    }else if (count===5){
      item5.textContent=`${nameInput.value} added successfully`;
    }else{
      // Create new list item with user
      let li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${usnInput.value}: ${homeaddressInput.value}`));

    // Append to ul
    userList1.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    usnInput.value = '';
    homeaddressInput.value = '';
  }

  console.log('User added')
}

  // alert("hii");

  console.log(`Submit`);
  
})
b2.addEventListener("click", (e)=>
{
  e.preventDefault();
  nameInput.value ='';
  emailInput.value = '';
  usnInput.value = '';
  addressInput.value = '';
  console.log(`Reset`);

})