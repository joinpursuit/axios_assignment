document.addEventListener("DOMContentLoaded", () => {
  function getId(deckId) {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      .then(innerRes => {
        innerRes.data.cards.forEach(card => {
          let img = document.createElement("img");
          img["src"] = card.image;
          document.body.appendChild(img);
          console.log(innerRes.data.cards);
        });
      });
  }

  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      return res.data.deck_id;
    })

    .then(deckId => {
      let button = document.querySelector(".button");
      button.addEventListener("click", () => {
        getId(deckId);
      });
    });
});
