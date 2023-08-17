let container=document.getElementById("container")

function cardCreate(rows,columns){

    let containerwidth=container.offsetWidth
    let cardwidth=(containerwidth/columns)
    
    for(let i=1;i<=rows;i++){

        for(let j=1;j<=columns;j++){
            let card=document.createElement("div")
            card.classList.add("card")
            container.appendChild(card)
            card.style.width=cardwidth+"px"
        }
       
    }

    
}
let rows=10
let columns=10
cardCreate(rows,columns)





