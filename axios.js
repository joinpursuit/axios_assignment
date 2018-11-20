document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  let select = document.querySelector(".handSize");
  let hand = document.querySelector(".hand");
  let draw = 1;
  //saved deck
  let deckid;

  //Load new deck
  function ssomething() {
    for (let i = 1; i <= 10; i++) {
      let option = document.createElement("OPTION");
      option.innerText = i;
      option.setAttribute("value", i);
      select.appendChild(option);
      console.log(select.value);
    }
  }
  select.addEventListener("change", () => {
    numofcards();
  });
  function numofcards() {
    draw = select.value;
  }
  function loadCards() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        //set deckid to res data
        deckid = res.data.deck_id;
      });
    // .catch(err => {});
  }
  //invoke function to set deck id as soon as page loads

  loadCards();
  ssomething();

  button.addEventListener("click", () => {
    drawCards();
  });

  function drawCards() {
    let cards;
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=${draw}`)
      .then(res => {
        cards = res.data.cards;

        while (hand.firstChild) {
          hand.removeChild(hand.firstChild);
        }
        cards.forEach(card => {
          let img = document.createElement("IMG");
          img.setAttribute("id", "acard");
          img.src = card.image;
          hand.appendChild(img);
        });
      });
  }
});

//load deck
//draw cards
