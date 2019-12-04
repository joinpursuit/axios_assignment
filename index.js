document.addEventListener("DOMContentLoaded", () => {

    const fetchData = (url, callback) => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then(res => {
            callback(res)
        })
        .catch(err => {
            console.log(err)
        })
    
    }
    
    const deckId = (data) => {
        let p = document.createElement("p")
        p.innerText = data.deck_id
    }
    let select = document.querySelector("select")
    for(let i = 0; i <= 10; i++){
        let option = document.createElement("option")
        option.innerText = i
        select.appendChild(option)
    }
    const drawCard = (data) => {
        let count = document.querySelector("select")
        let numCards = count.value
        let div = document.querySelector("#cards")
        let cards = data.cards
        for(let i = 0; i <= cards.length; i++){
        let img = document.createElement("img")
        let src = cards["cards"][i]["image"]
        
        img.src = src
        div.appendChild(img)
    }
}
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", deckId)
    
    let button = document.querySelector("button")
    button.addEventListener("click", () => {
            fetchData(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${numCards}`, drawCard)
        })

        fetchData()
}) 