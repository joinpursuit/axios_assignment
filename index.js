document.addEventListener("DOMContentLoaded", () => {
  let myP = document.querySelector(".myP");
  let deck_id;
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")

    .then(res => {
      deck_id = res.data.deck_id;
    })
    .catch(err => {
      debugger;
    });
  let button = document.querySelector(".button");
  button.addEventListener("click", event => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`)
      .then(res2 => {
        let allImages = document.querySelectorAll("img");
        console.log(allImages);
        res2.data.cards.forEach(card => {
          let image = document.createElement("img");
          image.src = card.image;
          if (allImages.length === 0) {
            document.body.appendChild(image);
          } else {
            image.removeChild(image.childNodes[0]);
          }
        });
      });

    console.log(deck_id);
  });
});
