document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  function getId() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        return res.data.deck_id;
      })
      .then(deckId => {
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
      });
  }

  getId();
});
