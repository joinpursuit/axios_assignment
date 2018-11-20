document.addEventListener("DOMContentLoaded", function () {


//Load Desk on Refresh
loadPage()
let cardImg = document.getElementById("cardImg")
let drawButton = document.querySelector("#drawButton")
let selNum = document.querySelector("#integer")
let output;
let drawNum = 1
drawButton.addEventListener("click",drawCards)

onetoten()
selNum.addEventListener("change",getValue)
// selNum.addEventListener("change",function (){
//     drawNum = selNum.value
// })

function getValue (){

    drawNum = selNum.value

}

function onetoten (){
    for(let i = 1; i <= 10; i++){
        let num = document.createElement("option")
        num.innerText = i
        num.value = i
        selNum.appendChild(num)
    }
}
function loadPage () {
 axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {  
         output = response.data.deck_id  
        return output
    })
    .catch(function (error) {
        debugger
    })
}
function drawCards (){
    axios
    .get(`https://deckofcardsapi.com/api/deck/${output}/draw/?count=${drawNum}`)
    .then(function (response) { 
        
        let cardDeck = response.data.cards
        // console.log(cardImg.firstChild)
        while (cardImg.firstChild) {
            cardImg.removeChild(cardImg.firstChild)
            
        }
        cardDeck.forEach(element => {
            let img = document.createElement("img")
            img.src = element.image
            cardImg.appendChild(img) 
        })
    })
}




})