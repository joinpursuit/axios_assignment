

// const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
    // debugger;
    axios.get("https://deckofcardsapi.com/api/deck/new/").then(res => {
        // debugger;
    //     if(!res.ok) {
    //         throw Error(res.statusText);
    //     }
    //     return res.json();
    // }).then(res => {
        let id = document.querySelector("#deckID");
        // id.innerText = res.deck_id;
        id.innerText = res.data.deck_id;
        axios.get("https://deckofcardsapi.com/api/deck/"+id.innerText+"/shuffle/")
        // fetch("https://deckofcardsapi.com/api/deck/"+id.innerText+"/shuffle/")
    }).catch(err => {
        debugger;
    })

    let button = document.querySelector("#drawCards");
    button.addEventListener("click", () => {
        let id = document.querySelector("#deckID");
        let e = id.innerText;
        let url = "https://deckofcardsapi.com/api/deck/" + e +"/draw/?count=2";
        // let url = "https://deckofcardsapi.com/api/deck/"+ e +"/shuffle/";
        axios.get(url).then(res => {
            // debugger;
            // if(!res.ok) {
            //     throw Error(res.statusText);
            // }
            // // debugger;
            // return res.json();
            let deck = document.querySelector("#deck");
            res.data.cards.forEach(el => {
                let image = document.createElement("img");
                image.src = el.image;
                deck.appendChild(image);
            })
        })
            // let imageURL = res.cards[0].image;
            // console.log(imageURL)
        .catch(err => {
            debugger
        })
    })
})