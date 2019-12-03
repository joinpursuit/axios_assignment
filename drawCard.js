document.addEventListener("DOMContentLoaded",() => {

    const fetchData = (url, callback) => {
        fetch(url).then(res => {
            if(!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        }).then(res => {
            callback(res)
        }).catch(err => {
            console.log(err)
        })
    }
    const createDeck = (data) => {
        let deck = document.querySelector('p')
        deck.innerText = data.deck_id   
    }
    const showDraw= (data)=>{
//listing cards 
       //create images of cards 
    }

    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1/", createDeck)
    let button = document.querySelector("#button");
    button.addEventListener("click", () => {
        let deck = document.querySelector("p").innerText //puts the deck in a p tag, that probably doesn't need to show
        let counter = Number(document.querySelector("#selectOption").value) //selects are necessary to select the cards in the deck
        fecthData(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${counter}`)
        
    })

})