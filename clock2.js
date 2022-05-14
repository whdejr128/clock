const go = document.querySelector('#go');
const stop = document.querySelector('#stop');
let timer = 0;

function getTime(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
document.querySelector('#time').innerHTML=`${hours}:${minutes}:${seconds}`;
}

go.onclick=function(){
if(timer==0){
timer = setInterval(getTime,1000);
}

}

stop.onclick=function(){
clearInterval(timer);
timer = 0;
}


