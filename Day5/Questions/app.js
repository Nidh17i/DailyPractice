/** Select the `<h1>` using `getElementById` and change its text to 
`"Hello Interns!"`.
* Select the `<p>` using `querySelector` and change its 
text color to `"blue"`.*/

let h = document.getElementById('title');
h.innerText = "Hello Interns!"

let p = document.querySelector('.desc');
p.style.color = "blue";

/**Task:**

* Change the content to `"New Content Loaded"`.
* Add a red border (`2px solid red`) using JavaScript.*/

let box = document.getElementById('box');
box.textContent = "New Content Loaded";

box.style.border = '2px solid red';

let intern = document.querySelector('#internList');

/* Dynamically create a `<li>` element with text `"Intern 1"`.
* Append it to an existing `<ul id="internList">`.*/

let li = document.createElement('li');
li.textContent = 'Intern 1';
intern.appendChild(li);

//Remove the `<li>` with id `"removeMe"

let remove = document.getElementById('removeMe');
remove.remove();

//When the button is clicked, change the `<p>` 
//text to `"Button was clicked!"`.

let btn = document.querySelector('#clickMe');
let output = document.querySelector('#output');

let event = btn.addEventListener('click', function () {
    output.innerText = "Button Was clicked!"


})
// When the mouse hovers over the box, change its background color to `"green"`.
// When the mouse leaves, change it back to `"gray"`.

let hoverbox=document.getElementById('hoverBox');
hoverbox.addEventListener('mouseenter',()=>{
    hoverbox.style.backgroundColor='green';

})
hoverbox.addEventListener('mouseleave',()=>{
    hoverbox.style.backgroundColor='black';

})


let username=document.getElementById('username');
let submit=document.getElementById('submit');
let errorMsg=document.getElementById('errorMsg')
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(username.value.trim() !==""){
        errorMsg.innerHTML="Form submitted!"
        errorMsg.style.color="green";

    }else{
        errorMsg.innerHTML="Username is required";
        errorMsg.style.color='red';
    }
})

// Validate that email contains `"@"`.
//  If not, show `"Invalid email format"`.
//  Otherwise log `"Valid email"`.

let emailForm=document.getElementById('emailForm');
let email=document.getElementById('email');
let emailError=document.getElementById('emailError');

emailForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(email.value.includes('@')){
        emailError.innerHTML ='Valid email';
        emailError.style.color='green';

    }
    else{
        emailError.innerHTML='Invalid email format';
        emailError.style.color='red';
    }
})



let countDown=document.getElementById('countDown');
let startbtn=document.getElementById('startbtn');

startbtn.addEventListener('click',()=>{
    let count=10;
    let intervalId;

    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        count--;
        if(count>=0)
        countDown.innerHTML=count;
    else{
        countDown.innerHTML='Time Out!'
    }

    },1000);
})





// let data = document.querySelector('#data');

// let button = document.querySelector('#b');

// button.addEventListener('click', () => {
//    let value=data.value;
//    console.log(value);
   

// })

// data.addEventListener('input',()=>{
//     console.log(data.value);
// })
