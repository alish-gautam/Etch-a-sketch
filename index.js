let container=document.getElementById("container")

function cardCreate(numbers){
    
    let containerwidth=container.offsetWidth
    let cardwidth=(containerwidth/numbers)-2
    
    for(let i=1;i<=numbers;i++){

        for(let j=1;j<=numbers;j++){
            let card=document.createElement("div")
            card.classList.add("card")
            container.appendChild(card)
            card.style.width=cardwidth+"px"
            card.style.height = cardwidth + "px";
            card.addEventListener("mouseover",()=>{
                card.style.backgroundColor="black"
            })
        }
       
    }

    
}
function onButtonClick(){
    let ask=Number(prompt("Enter the grid you want:"))
    container.innerHTML=""
    cardCreate(ask)
}

document.getElementById("button").addEventListener("click",onButtonClick)

cardCreate(16)





