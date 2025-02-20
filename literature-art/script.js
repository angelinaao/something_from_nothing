let literature12 = document.querySelector(".literature");
let text12 = document.querySelector(".text");
let text13 = document.querySelector(".text-bottom");
let line13 = document.querySelector(".line-body");

literature12.addEventListener("mouseenter", ()=>{
    console.log("works")
    text12.style.opacity = "100%";
    text13.style.opacity = "100%";
    line13.style.opacity = "100%";
})
literature12.addEventListener("mouseleave", ()=>{
    text12.style.opacity = "0%";
    text13.style.opacity = "0%";
    line13.style.opacity = "0%";
})




let art12 = document.querySelector(".art");
let text14 = document.querySelector(".text-two");
let text15 = document.querySelector(".text-two-middle");
let text16 = document.querySelector(".text-two-next");
let text17 = document.querySelector(".text-two-then");
let text18 = document.querySelector(".text-two-final");
let line14 = document.querySelector(".line-body-two");

art12.addEventListener("mouseenter", ()=>{
    console.log("works")
    text14.style.opacity = "100%";
    text15.style.opacity = "100%";
    text16.style.opacity = "100%";
    text17.style.opacity = "100%";
    text18.style.opacity = "100%";
    line14.style.opacity = "100%";
})
art12.addEventListener("mouseleave", ()=>{
    text14.style.opacity = "0%";
    text15.style.opacity = "0%";
    text16.style.opacity = "0%";
    text17.style.opacity = "0%";
    text18.style.opacity = "0%";
    line14.style.opacity = "0%";
})