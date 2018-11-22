document.addEventListener("DOMContentLoaded", () => {
  let deck_id;
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      deck_id = res.data.deck_id;
    })
    .catch(err => {
      debugger;
    });

  let select = document.querySelector(".numCards");
  let selectNum = 1;

  select.addEventListener("change", event => {
    selectNum = parseInt(event.target.value);
    console.log(selectNum);
  });
  let button = document.querySelector(".button");
  button.addEventListener("click", event => {
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${selectNum}`
      )
      .then(res => {
        let allImages = document.querySelector(".cards");
        while (allImages.children.length) {
          allImages.removeChild(allImages.firstChild);
        }
        console.log(allImages);
        console.log(res.data.cards);
        res.data.cards.forEach(card => {
          let image = document.createElement("img");
          image.src = card.image;
          allImages.appendChild(image);
        });
      });

    console.log(deck_id);
  });
});
