document.addEventListener('DOMContentLoaded', () => {
    const newDeckCards = async () => {
        try {
            let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deck_id = newDeck.data.deck_id
            let id = document.querySelector("#deckId")
            id.innerText = newDeck.data.deck_id
            // debugger
            let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
            //let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`)
// debugger
            let button = document.querySelector('#button')
            button.addEventListener("click", (displayCard));

            
            // debugger
        } catch (err) {
            console.log(err)
            debugger
        }
    }
            const displayCard = () => {
            let id = document.querySelector("#deckId")
            let drawCard = axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=5`)
            .then(res=>{
                    // debugger
                    return res.json()
                }
            )
            debugger
             let image = document.createElement("img")
             image.src = drawCard.data.cards[0].image 
             document.body.appendChild(image) 
            }
    newDeckCards()
})
// let drawCard = ()=>{
    //     console.log('hello')
    // }