document.addEventListener("DOMContentLoaded", () => {
  let deckID;
  let remainingCards = document.getElementById("remainingCards");
  const button = document.getElementById("drawCards");
  const cardContainer = document.getElementById("cardContainer");

  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      deckID = response.data.deck_id;
      console.log(deckID);
      // return axios.get(
      //   "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=5"
      // );
    })
    .then(response => {
      console.log(response);
      // let drawCardsButton = document.getElementById("drawCards");
      // drawCardsButton.addEventListener("click", () => {
      //   console.log("Clicked!");
      //   debugger
      // });
    })
    .catch(err => {
      console.log(err);
    });

  let drawCardsButton = document.getElementById("drawCards");

  drawCardsButton.addEventListener("click", () => {
    axios
      .get(
        "https://deckofcardsapi.com/api/deck/" +
          deckID +
          "/draw/?count=" +
          numCards
      )
      .then(response => {
        console.log(deckID);
        console.log(response.data.cards);
        let drawnCards = response.data.cards;

        while (cardContainer.firstChild) {
          cardContainer.removeChild(cardContainer.firstChild);
        }

        for (let i = 0; i < drawnCards.length; i++) {
          let card = document.createElement("img");
          card.src = drawnCards[i].image;
          cardContainer.appendChild(card);
        }
        console.log(drawnCards[0].image);

        remainingCards.innerText = response.data.remaining;

        debugger;
      })
      .catch(err => {
        console.log(err);
      });
  });

  const selectNum = document.getElementById("selectNum");
  let numCards;

  selectNum.addEventListener("change", event => {
    numCards = event.target.value;
    console.log(numCards);
  });

  // const drawCards = () => {
  //   axios
  //     .get("https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=5")
  //     .then(response => {
  //       debugger;
  //       console.log(deckID);
  //     });
  // };
  // drawCards();
});
