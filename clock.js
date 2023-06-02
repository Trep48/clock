let sechand=document.getElementById("sechand");
let minhand=document.getElementById("minhand");
let hrshand=document.getElementById("hrshand");

let dhr=document.querySelector(".dhrs span");
let dmin=document.querySelector(".dmin span");
let dsec=document.querySelector(".dsec span");

function time(){
    let date=new Date();
    let s=date.getSeconds();
    let m=date.getMinutes();
    let h=date.getHours();
    sechand.style.transform=`rotate(${6*s}deg)`;
    minhand.style.transform=`rotate(${6*m}deg)`;
    hrshand.style.transform=`rotate(${30*h+m/2}deg)`;
    dhr.textContent=h;
    dmin.textContent=m;
    dsec.textContent=s;
}
setInterval(time,1000);

