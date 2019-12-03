document.addEventListener("DOMContentLoaded", () => {
    let something = document.querySelector("#deck");
    fetch("https://deckofcardsapi.com/api/deck/new/").then(res => {
        if(!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    }).then(res => {
        let id = document.querySelector("#deckID")
        id.innerText = res.deck_id;
    }).catch(err => {
        debugger;
    })

    let button = document.querySelector("#drawCards");
    button.addEventListener("click", () => {
        let id = document.querySelector("#deckID");
        let e = id.innerText;
        let url = "https://deckofcardsapi.com/api/deck/" + e +"/draw/?count=1"
        console.log(url)
        fetch(url).then(res => {
            if(!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        }).then(res => {
            let imageURL = res.cards
            console.log(imageURL)
        }).catch(err => {
            debugger;
        })
    })
})