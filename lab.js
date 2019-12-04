document.addEventListener("DOMContentLoaded", () => {

    const fetchAllCards = async () => {
        try{
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
            let deck_id = res.data.deck_id 
            let shuffled = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
            let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`);
            console.log(drawCards.data.cards)
        }
        catch(err) {
            console.log(err)
            debugger
        }
    }
    let button = document.querySelector("button")
    button.addEventListener("click", async () => {
        let arr = await fetchAllCards().then((res) => {
            return [res]
        })
        arr.forEach((card) => {
            debugger
            let img = document.createElement("img").setAttribute("src", card["image"])
            document.body.appendChild(img)
        })
    })

    // fetchAllCards()
})