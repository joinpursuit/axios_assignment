document.addEventListener("DOMContentLoaded", () => {
 
    axios.get("https://deckofcardsapi.com/api/deck/new/").then(res => {

        let id = document.querySelector("#deckID");

        id.innerText = res.data.deck_id;
        axios.get("https://deckofcardsapi.com/api/deck/"+id.innerText+"/shuffle/")
     
    }).catch(err => {
        debugger;
    })

    let button = document.querySelector("#drawCards");

    button.addEventListener("click", () => {
        let id = document.querySelector("#deckID");
        let e = id.innerText;
        let url = "https://deckofcardsapi.com/api/deck/" + e +"/draw/?count=2";
       
        axios.get(url).then(res => {

            let deck = document.querySelector("#deck");
            res.data.cards.forEach(el => {
                let image = document.createElement("img");
                image.src = el.image;
                deck.appendChild(image);
            })
            
        })

        .catch(err => {
            debugger
        })
    })
})