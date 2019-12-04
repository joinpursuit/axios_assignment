document.addEventListener("DOMContentLoaded", () => {

    const shuffleCard = () => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => {
            debugger
        if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        }).then(json => {
            let deckId = json.deck_id;
            return deckId
        }).catch(err => {
            console.log(err);
        })
        
        
        const drawCard = (shufflcard) => {
            
        }
    }


    

})

