document.addEventListener("DOMContentLoaded", () =>{
    
    const fetchData = async () => {
        try {
            let shuffleDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            let deck_id = shuffleDeck.data.deck_id
            let button = document.querySelector("#btm")
            button.addEventListener("click", () => {
                drawCard(deck_id)
            })
        } catch(err) {
            console.log(err)
            debugger
        }
        
    }
    
    const drawCard = async (deck_id) => {
        try {
            let drawCard = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`
                );
            let p = document.querySelector("#getCard")
            p.innerText = drawCard.data.cards
        } catch(err) {
            console.log(err)
            debugger
        }
    }



    // const getId = (data) => {
    //     firstId = data.deck_id
    // }

    // fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", getId)
    // let div = document.querySelector("shuffleDeck")
   
    // const drawCards = (firstId) => {
    //     let numCards = 0;
    //     let p = document.querySelector("#getCard")
    //     numCards = event.target.value
    //     p.innerText(numCards)
    // }

        fetchData()

})

