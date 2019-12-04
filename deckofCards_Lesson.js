document.addEventListener("DOMContentLoaded", () => {
    debugger
    const fetchAllCards = () => {
        fetch("https://deckofcardsapi.com/api/deck/new/").then(res => {  //can take an object {} argument 
            if(!res.ok){
                throw Error(`You got an error: ${res.statusText}`)
            }
            return res.json()
        }).then(res => {
            let deckId = res.deck_id
            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`).then(res => {
                if(!res.ok){
                    throw Error(`Did not Shuffle: ${res.statusText}`)
                }
                return res.json()
            }).then( res => {
                let deck_id = res.deck_id
                fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`).then(res => {
                    if(!res.ok){
                        throw Error(`Did not Shuffle: ${res.statusText}`)
                    }
                    return res.json()
                }).then(res => {
                    debugger
                    //returns json object
                })
            })
        }).catch(err => {
        }) 
    }
    fetchAllCards()
})
