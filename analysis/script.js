let analysis12 = document.querySelector(".analysis-one");
let line12 = document.querySelector(".line-one");
let text12 = document.querySelector(".text");


analysis12.addEventListener("mouseenter", ()=>{
    console.log("works")
    text12.style.opacity = "100%";
     line12.style.opacity = "100%";
    

})
analysis12.addEventListener("mouseleave", ()=>{
    text12.style.opacity = "0%";
    line12.style.opacity = "0%";
})


let analysis13 = document.querySelector(".analysis-two");
let text13 = document.querySelector(".text-two");
let text14 = document.querySelector(".text-two-middle");
let text15 = document.querySelector(".text-two-end");
let text16 = document.querySelector(".line-two-body");


analysis13.addEventListener("mouseenter", ()=>{
    console.log("works")
    text13.style.opacity = "100%";
    text14.style.opacity = "100%";
    text15.style.opacity = "100%";
    text16.style.opacity = "100%";
    

})
analysis13.addEventListener("mouseleave", ()=>{
    text13.style.opacity = "0%";
    text14.style.opacity = "0%";
    text15.style.opacity = "0%";
    text16.style.opacity = "0%";
})




let analysis3 = document.querySelector(".analysis-three");
let line3 = document.querySelector(".line-three-body");
let text3 = document.querySelector(".text-three");
let text4 = document.querySelector(".text-three-middle");

analysis3.addEventListener("mouseenter", ()=>{
    console.log("works")
    text3.style.opacity = "100%";
    text4.style.opacity = "100%";
     line3.style.opacity = "100%";
    

})
analysis3.addEventListener("mouseleave", ()=>{
    text3.style.opacity = "0%";
    text4.style.opacity = "0%";
     line3.style.opacity = "0%";
})


let analysis4 = document.querySelector(".analysis-four");
let line4 = document.querySelector(".line-four-body");
let text5 = document.querySelector(".text-four");

analysis4.addEventListener("mouseenter", ()=>{
    console.log("works")
    text5.style.opacity = "100%";
  
     line4.style.opacity = "100%";
    

})
analysis4.addEventListener("mouseleave", ()=>{
    text5.style.opacity = "0%";
  
    line4.style.opacity = "0%";
})