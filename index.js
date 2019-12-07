

document.addEventListener("DOMContentLoaded", () =>{
    const fecthAllCards = async () => {
       let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
       let deckId = newDeck.data.deck_id
       let drawCards = await axios.get(`https:deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
       let cardsDrawn = drawCards.data.cards
       let card1 = document.querySelector("#card1")
       let card2 = document.querySelector("#card2")
       card1.src = cardsDrawn[0].image
       card2.src = cardsDrawn[1].image
    }
    fecthAllCards()
    let button = document.querySelector(".button")
    button.addEventListener("click", () => {
        let div = document.querySelector(".div")
        div.appendChild(card1)
        div.appendChild(card2)
    })

})