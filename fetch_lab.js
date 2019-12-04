document.addEventListener("DOMContentLoaded", () => {
    let deck_id;

    const fetchData = async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/") 
            deck_id = res.data.deck_id;
            let shuffled = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
        } catch (err) {
            console.log(err);
        }
    }

    const drawFive = async (id) => {
        try {
            let drawCards =  await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=5`)
            debugger
            let deck = document.querySelector("#five")
            deck.innerHTML = "";
            for(let i = 0; i < drawCards.data.cards.length; i++){
                let img = document.createElement("img");
                let src = drawCards.data["cards"][i]["image"];
                img.src = src;
                deck.appendChild(img);
            }
        } catch (err){
            console.log(err);
        }
        
    }


    let button = document.querySelector("#drawBtn");
    button.addEventListener("click", () => {
        drawFive(deck_id);
    })
    
    fetchData();
    
})