document.addEventListener("DOMContentLoaded", () => {
    
    const fetchData = (url, callback) => {
        return axios.get(url).then(res => {
            return callback(res.data);
        }).catch(err => console.log(err))
    }


    const getId = (data) => {
        let p = document.querySelector("#deck");
        p.innerText = data.deck_id;
    }

    const drawCard = (data) => {
        let div = document.querySelector("#showCards");
        let ul = document.querySelector("ul");
        if(ul) {
            ul.parentNode.removeChild(ul);
        }
        ul = document.createElement("ul");
        let cards = data.cards;
        cards.forEach(card => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = card.image;
            li.appendChild(img);
            ul.appendChild(li);
        })
        div.appendChild(ul);
    }

    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", getId);
    let button = document.querySelector("#draw");
    button.addEventListener("click", () => {
        let deck = document.querySelector("#deck").innerText;
        let count = Number(document.querySelector("#drawSelect").value);
        fetchData(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${count}`, drawCard);
    })

