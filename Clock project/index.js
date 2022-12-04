const Hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const Second = document.getElementById("Second");
const ampm = document.getElementById("ampm");



function updateclock(){
    let h= new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm= "PM"


    if(h>12){
        h=h-12;
        ampm="AM";
    }

    h=h<10 ? "0" + h : h;
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;
    Hour.innerText =  h
    minute.innerText =  m
    Second.innerText =  s
    ampm.innerText= ampm

    setTimeout(()=>{
     updateclock()
    },1000)
}
updateclock()