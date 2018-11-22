document.addEventListener("DOMContentLoaded", () => {
  let deckID, numCards;
  let remainingCards = document.getElementById("remainingCards");
  const drawCardsButton = document.getElementById("drawCards"),
    cardContainer = document.getElementById("cardContainer"),
    selectNum = document.getElementById("selectNum"),
    newDeck = document.getElementById("newDeck");

  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      deckID = response.data.deck_id;
    })
    .catch(err => {
      console.log(err);
    });

  drawCardsButton.addEventListener("click", () => {
    axios
      .get(
        "https://deckofcardsapi.com/api/deck/" +
          deckID +
          "/draw/?count=" +
          numCards
      )
      .then(response => {
        let drawnCards = response.data.cards;

        while (cardContainer.firstChild) {
          cardContainer.removeChild(cardContainer.firstChild);
        }

        for (let i = 0; i < drawnCards.length; i++) {
          let card = document.createElement("img");
          card.src = drawnCards[i].image;
          cardContainer.appendChild(card);
        }

        remainingCards.innerText = response.data.remaining;
      })
      .catch(err => {
        console.log(err);
      });
  });

  selectNum.addEventListener("change", event => {
    numCards = event.target.value;
  });

  newDeck.addEventListener("click", () => {
    axios
    .get("https://deckofcardsapi.com/api/deck/new/")
    .then(response => {
      deckID = response.data.deck_id;
      alert("You have replaced your old deck that had " + remainingCards.innerText + " cards with a new deck of 52 cards.")
      remainingCards.innerText = "52";
    })
  })

});
