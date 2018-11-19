document.addEventListener("DOMContentLoaded", () => {
  //Load new deck
  //saved deck
  let deckid;
  function loadCards() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        deckid = res.data.deck_id;
        console.log(deckid);
        return res.data.deck_id;
      })
      .catch(err => {
        debugger;
      });
  }
  loadCards();
  let button = document.querySelector(".button");
  button.addEventListener("click", drawCards());

  function drawCards() {
    console.log(deckid);
  }
});

//load deck
//draw cards
