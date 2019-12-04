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



document.addEventListener("DOMContentLoaded", () => {
    let deckId
    const fetchData = (url, callback) => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        }).then(json => {
            callback(json);
        }).catch(err => {
            console.log(err);
        })
    }
    const grabId = (data) => {
        let deckId = data.deck_id
        return deckId;
    }
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", grabId)
    
    
})