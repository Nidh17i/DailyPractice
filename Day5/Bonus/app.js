
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
    NotificationDiv.innerText="This is a notification";
    NotificationDiv.style.color='red';
    setTimeout(()=>{
      NotificationDiv.innerText="";

    },5000);
    
})

// stopWatch
let stopwatch=document.getElementById('stopwatch');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

let mm=0;
let ss=0;
let mints=0;

let intervalId;

function timer(){
  mm++;
  if(mm==100){
    mm=0;
    ss++;
    if(ss==60){
      ss=0;
      mints++;

    }
  }
  let msecString = mm < 10 ? `0${mm}` : mm;
    let secsString = ss < 10 ? `0${ss}` : ss;
    let minsString = mints < 10 ? `0${mints}` : mints;
    

    stopwatch.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}
start.addEventListener('click',()=>{
  if(intervalId !=null){
    clearInterval(intervalId);
  }
  intervalId=setInterval(timer,10);

})
stop.addEventListener('click',()=>{
  clearInterval(intervalId);
})
reset.addEventListener('click',()=>{
  clearInterval(intervalId);
  stopwatch.innerText=`00:00:00`;
  mm=ss=mints=0


})

//  Click Counter with Reset

let Counter=document.getElementById('counter');
let inc=document.getElementById('inc');
let count=0;
inc.addEventListener('click',()=>{
  count++;
  Counter.innerText=count;

})
function Rset(){
  count=0;
  Counter.innerText=count;
}
setInterval(Rset,10000);


 //Typewritereffect
 let para=document.querySelector('#para');
 let text="Welcome to DOM Practice!";

 let letter=0;
 let interval=setInterval(()=>{
  para.textContent=para.textContent+text[letter];
  letter++;
  if(letter==text.length){
    clearInterval(interval)
  }
 },1000);

 // Mouse.tracker

 let tracker=document.getElementById('mouse');

document.addEventListener('mousemove', function(event) {
      const x = event.clientX; // horizontal position
      const y = event.clientY; // vertical position
      tracker.textContent = `X: ${x}, Y: ${y}`;
    });