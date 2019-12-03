document.addEventListener("DOMContentLoaded", () =>{
    const fetchData = (url, callback) => {
        fetch(url).then(res => {
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        }).then(res => {
            debugger
            callback(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const getId = (data) => {
        let p = document.createElement("p")
        div.appendChild(p)
        p.innerText = data.deck_id
    }

    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", getId)
    let div = document.querySelector("shuffleDeck")
    let ul = document.createElement("ul")
    div.appendChild(ul)
    let li = document.createElement("li")
    ul.appendChild(li)
    const drawCards = (data) => {
        let output = []
        let cards = data.deck_id
        for(let key in cards) {
            cards
        }
    }

    





})