const bodyEl = document.body;
const titleEl = document.createElement("h1");
const stopBtnEl = document.createElement("button");

titleEl.textContent = "Timer"
stopBtnEl.textContent ="stop";
bodyEl.append(titleEl, stopBtnEl);

let timeout = 10;

setInterval ( () => {
  

    if(timeout ===0) {
    bodyEl.style.backgroundColor ="blue";

  
    titleEl.remove();
    } else {
    timeout--;
    titleEl.textContent = timeout;
    
   }

}, 1000);




