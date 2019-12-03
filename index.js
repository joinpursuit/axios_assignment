document.addEventListener("DOMContentLoaded", () => {
    
    let div = document.createElement("div")
    div.id = "cards"

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
    const drawCard = (data) => {
        let div = document.querySelector("#cards")
        let cards = data.cards
        cards.forEach(card => {
            let li = document.createElement("li")
            let img = document.createElement("img")
            img.src = card.image
            li.appendChild(img)
            ol.appendChild(li)
        })
        div.appendChild(ol)
    }
    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", deckId)
    let select = document.querySelector("select")
    for(let i = 0; i <= 10; i++){
        let option = document.createElement("option")
        option.innerText = i
        select.appendChild(option)
    }
    
    let button = document.querySelector("button")
    button.addEventListener("click", () => {
        let deck = document.querySelector("p")
        let numCards = Number(document.querySelector("#select").value)
            fetchData(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${numCards}`, drawCard)
        })
}) 