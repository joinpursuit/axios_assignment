document.addEventListener("DOMContentLoaded",() => {

    const fecthData = (url, callback) => {
        debugger
        fetch(url).then(res => {
            if(!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        }).then(res => {
            callback(res)
            debugger
        }).catch(err => {
            console.log(err)
        })
    }
    const createDeck = (data) => {
        
        let deck = document.querySelector('p')
        deck.innerText = data.deck_id   
    }
    draw(){
        
    }
   
    
    fecthData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1/", createDeck)
    let button = document.querySelector("button");
    button.addEventListener("click", () => {
        let url = "https://deckofcardsapi.com/api/deck/~deck_id~/draw/?count=5"
        let deck = document.querySelector("p").innerText
        let counter = Number(document.querySelector("#selectOption").value)
        fecthData(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${counter}`)
        draw()
    })
    let url = "https://deckofcardsapi.com/api/deck/new/"
})