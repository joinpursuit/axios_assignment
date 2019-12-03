document.addEventListener("DOMContentLoaded", () => {
    let id;

    const fetchData = (url, callback) => {
        fetch(url).then(res => {
            if(!res.ok){
                throw Error(res.statusText + " was the error.");
            }
            return res.json();
        }).then(res => {
            callback(res);
        }).catch (err => {
            console.log(err);
        })
    }

    const saveDeck = (res) => {
        id = res["deck_id"];
    }

    const drawFive = (data) => {
        for(let i = 0; i < data.cards.length; i++){
            let img = document.createElement("img");
            let src = data["cards"][i]["image"];
            img.src = src;
            document.body.appendChild(img);
        }
    }

    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    fetchData(url, saveDeck);

    let button = document.querySelector("#drawBtn");
    button.addEventListener("click", () => {
        let url = "https://deckofcardsapi.com/api/deck/" + id + "/draw/?count=5";
        fetchData(url, drawFive);
    })
    
    
})