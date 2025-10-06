
// Toggle-theme
let themeToggle=document.querySelector('#themeToggle');
let pageBody=document.querySelector('#pageBody');


themeToggle.addEventListener('click',()=>{
    pageBody.classList.toggle("dark-mode");
    
})

//Character Counter

let textarea=document.getElementById('text');
let Charcount=document.getElementById('Charcount');

textarea.addEventListener('input',()=>{
let value=textarea.value;

Charcount.innerHTML=100-value.length;
if(Charcount.innerHTML<0){
    Charcount.style.color="red";
}

})

// random image 

let image=document.querySelector('#img');
let arr=[
    "images/b3.jpg",
    "images/b4.jpeg",
    "images/b5.jpg",
    "images/b6.jpeg",
    "images/bb.jpg",
    "images/mouse.jpg"];


image.addEventListener('click',()=>{
   let image = document.querySelector('#img');
let arr = [
  "images/b3.jpg",
  "images/b4.jpeg",
  "images/b5.jpg",
  "images/b6.jpeg",
  "images/bb.jpg",
  "images/mouse.jpg"
];

image.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  image.src = arr[randomIndex]; 
});
})

//Auto-Hide Notification**
let showNotification=document.querySelector('#bn');
let NotificationDiv=document.getElementById('NotificationDiv');
showNotification.addEventListener('click',()=>{
    let newOne=document.createElement('div');
    
})


