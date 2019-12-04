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
        fetch("https://deckofcardsapi.com/api/deck/"+id.innerText+"/shuffle/")
    }).catch(err => {
        debugger;
    })

    let button = document.querySelector("#drawCards");
    button.addEventListener("click", () => {
        let id = document.querySelector("#deckID");
        let e = id.innerText;
        let url = "https://deckofcardsapi.com/api/deck/" + e +"/draw/?count=5";
        // let url = "https://deckofcardsapi.com/api/deck/"+ e +"/shuffle/";
        fetch(url).then(res => {
            if(!res.ok) {
                throw Error(res.statusText);
            }
            // debugger;
            return res.json();
        }).then(res => {
            let deck = document.querySelector("#deck");
            res.cards.forEach(el => {
                
                let image = document.createElement("img");
                image.src = el.image;

                deck.appendChild(image);
            })
            // let imageURL = res.cards[0].image;
            // console.log(imageURL)
        }).catch(err => {
            debugger
        })
    })
})