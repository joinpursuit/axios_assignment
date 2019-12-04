document.addEventListener("DOMContentLoaded", () => {
    // const shuffleCard = () => {
    //     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => {
    //         debugger
    //     if (!res.ok) {
    //             throw Error(res.statusText);
    //         }
    //         return res.json();
    //     }).then(json => {
    //         let deckId = json.deck_id;
    //         return deckId
    //     }).catch(err => {
    //         console.log(err);
    //     })
    //     const drawCard = (shufflcard) => {
    //     }
    // }

    const shuffleCard = async () => {
        let shuffled = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        let deckId = shuffled.data.deck_id;
        let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);
        debugger
        let drawn = drawCards.data.cards;
        let button = document.querySelector("#drawCards");
        button.addEventListener("click", () => {
            let ul = document.createElement("ul");
            drawn.forEach(card => {
                let li = document.createElement("li");
                let img = document.createElement("img");
                img.src = card["image"];
                li.appendChild(img)
                ul.appendChild(li);
            })
        })
        
    }
    shuffleCard();
    
    

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