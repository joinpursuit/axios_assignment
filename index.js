document.addEventListener("DOMContentLoaded", () => {

  let button = document.querySelector(".button");
  let cardArea = document.querySelector(".cardImgs")
  let deckID = null;
  let cardArr = null;
  let cardImgArea = null;

  let select = document.querySelector(".numCards");
  let selectNum = 0;

  select.addEventListener("change", (event) => {
    selectNum = parseInt(event.target.value)
    console.log(selectNum);
  })

  button.addEventListener("click", getDeck);

  function getDeck() {
    let shuffle = axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => {
        deckID = response.data.deck_id;
      })
      .then( () => {
        getCards();
      })
      .catch(err => {
        console.log("OH-OH! ERROR"+err);
      })
  }

  function getCards() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${selectNum}`)
      .then(response => {
        cardArr = response.data.cards;
      })
      .then(() => {
        if (cardImgArea !== null) {
          cardImgArea.remove();
        }

        cardImgArea = document.createElement('div');
        cardImgArea.classList.add('innerCards')
        cardArea.appendChild(cardImgArea);

        cardArr.forEach( (cardObj) => {
          let img = document.createElement('img');
          img.setAttribute("src",cardObj.image);
          cardImgArea.appendChild(img);
        })

      })
      .catch(err => {
        console.log("OH-NO! ERROR"+err);
      })
  }

})
