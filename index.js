let container=document.getElementById("container")
let divs
for(let i=1;i<=16;i++){
for (let j=1;j<=16;j++){
     divs=document.createElement("div")
    divs.textContent="Hey"
    divs.classList.add("mydivs")
    container.appendChild(divs)
}
}
// document.addEventListener("onmouseover",()=>{
//     divs.style.backgroundColor="red"
// })




