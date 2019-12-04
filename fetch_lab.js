document.addEventListener("DOMContentLoaded", () => {
    let deck_id;

    const fetchData = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/") 
            deck_id = res.data.deck_id;
            let shuffled = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
            debugger
        } catch (err) {
            console.log(err);
        }
    }

    const drawFive = (deck_id) => {
        axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`)
        debugger
        
        let deck = document.querySelector("#five")
        deck.innerHTML = "";
        for(let i = 0; i < data.cards.length; i++){
            let img = document.createElement("img");
            let src = data["cards"][i]["image"];
            img.src = src;
            deck.appendChild(img);
        }
    }


    let button = document.querySelector("#drawBtn");
    button.addEventListener("click", () => {
        let url = "https://deckofcardsapi.com/api/deck/" + id + "/draw/?count=5";
        drawFive();
    })
    
    fetchData();
    drawFive()
    
})