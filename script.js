document.addEventListener("DOMContentLoaded", () => {
  let deckID,
    numCards = 1,
    decksUsed = 1,
    remainingCards = document.getElementById("remainingCards"),
    messageDiv = document.querySelector(".messageDiv"),
    numDecks = document.getElementById("numDecks");
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
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/")
      // I realized that when you get a new deck, the default value for shuffled will be false so after I clicked on the "new deck" button I was getting cards that were not randomized.
      // my solution was to add "/shuffle" to the end of the API link :)
      .then(response => {
        deckID = response.data.deck_id;
        response.data.shuffled = true;
        messageDiv.innerHTML =
          "<p>You have replaced your old deck that had " +
          remainingCards.innerText +
          " card(s) with a new deck of 52 cards.</p>";
        if (remainingCards.innerText === "52") {
          messageDiv.innerHTML =
            "<p>Your old deck had 52 cards...why did you throw it away?!</p>";
        }
        setTimeout(() => {
          messageDiv.innerHTML = "";
        }, 3000);
        remainingCards.innerText = "52";
        decksUsed++;
        numDecks.innerText = decksUsed;

        while (cardContainer.firstChild) {
          cardContainer.removeChild(cardContainer.firstChild);
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
});
