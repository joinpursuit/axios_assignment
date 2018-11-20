document.addEventListener("DOMContentLoaded", () => {
  let deckId;
  // let cardsImages;
  let button = document.querySelector(".button1");
  let ptag = document.querySelector(".ptag");
  function getId() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => {
        deckId = response.data.deck_id;
        return deckId;
      });
  }

  getId();

  button.addEventListener("click", () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      // https://deckofcardsapi.com/api/deck/~deck_id~/draw/?count=5
      .then(innerResponse => {
        let cards = innerResponse.data.cards;
        if (!ptag.childNodes.length) {
          cards.forEach(card => {
            let cardsImages = card.image;
            let image = document.createElement("img");
            image.setAttribute("src", cardsImages);
            ptag.appendChild(image);
          });
        } else {
          ptag.removeChild(ptag.childNodes[0]);
        }

        // innerResponse.data.cards[0].images.png;
        // console.log(innerResponse, "innerres");
      })
      .catch(err => {
        console.log(err, "this");
      });
  });
});
