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

    const drawCards = async (id) => {
        try {
            let select = document.querySelector("#cardsList");
            let value = select.value
            let drawData =  await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${value}`)
            let deck = document.querySelector("#cards")
            deck.innerHTML = "";
            for(let i = 0; i < drawData.data.cards.length; i++){
                let img = document.createElement("img");
                let src = drawData.data["cards"][i]["image"];
                img.src = src;
                img.className = "zoom";
                deck.appendChild(img);
            }
            console.log(drawData.data);
        } catch (err){
            console.log(err);
        }
    }

    let button = document.querySelector("#drawBtn");
    button.addEventListener("click", () => {
        drawCards(deck_id);
    })
    
    fetchData();
})