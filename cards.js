document.addEventListener("DOMContentLoaded" , () =>{
    let button = document.querySelector("button")
    const buildDeck = async () =>{
        let display = document.querySelector("#display")
        display.innerHTML=""
        try {
            let deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
            let deck_id = deck.data.deck_id
            let p=document.createElement("p")
             p.innerText = deck_id
             p.style.display= "none"
            document.body.appendChild(p)
        } catch(err) {
            console.log(err);
        }
    }
    buildDeck()

    const drawNewCards = async () =>{
        let display = document.querySelector("#display")
        display.innerHTML=""
        try {
            let p=document.querySelector("p")
            let deck_id = p.innerText
            let numCards = 1
            let select = document.querySelector("select");
            select.addEventListener("change", (e) =>{
                return  numCards = e.currentTarget.value;
            })
            let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCards}`)
            let cardArray = drawCards.data.cards
            cardArray.forEach(card =>{
                let image = document.createElement("img")
                image.src = card.image
                display.appendChild(image)
            })
        } catch(err) {
            console.log(err);
        }
    }
    button.addEventListener("click", drawNewCards)
})