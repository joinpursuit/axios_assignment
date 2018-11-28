document.addEventListener("DOMContentLoaded", () => {
  let deckID
  const shuffleCards = () => {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      deckID = res.data.deck_id;
    }).catch(err => {
       debugger // "Card missing"
    })
  };

    let div = document.querySelector("div");
    let cards
    let url
    let numCards = 1;
  const drawCards = () => {
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numCards}`)
    .then(res => {
      cards = res.data.cards;
      cards.forEach(card => {
        url = card.image;
        let img = document.createElement("img");
        img.setAttribute("src", url)
        img.style.paddingTop = "5px";
        // img.style.display = "table"
        div.appendChild(img);
      })
    })
  };

  for(let i = 1; i <= 10; i++){
    let opt = document.createElement('option');
    opt.innerText = i;
    opt.value = i;
    let select = document.querySelector(".select"); // here..
    select.appendChild(opt); // I need this line inside to have accept to(opt) variable
    select.addEventListener("change", event =>{ //
      numCards = event.target.value
    });
  };

  const replaceCards =()=>{
    while (div.firstChild) {
     div.removeChild(div.firstChild)
    }
  }

  shuffleCards();
  let play = document.querySelector(".play");
  play.addEventListener("click", drawCards);
  play.addEventListener("click", replaceCards)
  play.style.background = "lightgreen";
});
