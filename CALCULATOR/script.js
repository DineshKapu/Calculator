const A = document.querySelector(".text");
const B = document.querySelectorAll(".val");
const C= document.querySelector(".AC");
const D = document.querySelector(".DEL");
const E = document.querySelector(".equal");


B.forEach((val)=>{
    val.addEventListener("click",()=>{
        A.value += val.value ;
    })
})


C.addEventListener("click",()=>{
    A.value = "";
})


D.addEventListener("click",()=>{
    A.value = A.value.slice(0,-1);
})

E.addEventListener("click",()=>{
    try{
        A.value = eval(A.value);
    }catch(e){
        alert(e);
    }
})