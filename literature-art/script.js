let literature12 = document.getElementById("literature");
let text12 = document.getElementById("text");

literature12.addEventListener("mouseenter", ()=>{
    console.log("works")
    text12.style.opacity = "100%";

})
literature12.addEventListener("mouseleave", ()=>{
    text12.style.opacity = "0%";
})