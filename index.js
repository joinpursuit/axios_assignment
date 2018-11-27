document.addEventListener("DOMContentLoaded", () => {
  let deckId; //called immediately (on refresh)
  let fiveCards;

  let button = document.querySelector(".button");

  fireRequest();
  button.addEventListener("click", reFireRequest);

  function fireRequest() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        // console.log("RES:::",res, "ID:::",deckId, "ID:",res.data.deck_id, res.data);
        // N.B.: deckId = '' + res.data.deck_id = ${}
        return (deckId = res.data.deck_id);
      })
      // .then(res => {
      //   reFireRequest()
      // })
      .catch(err => {
        console.log("error: ", err);
      });
  }

  function reFireRequest() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      .then(res => {
        fiveCards = res.data.cards;
        let display = document.querySelector(".display");
        let img = document.querySelector("img")

        for (let i = 0; i < fiveCards.length; i++) {
          img.src = fiveCards[i].image;
        }

        // fiveCards.forEach(card => {
        //   img.src = card.image;
        // })
        // debugger



        // showDeck();

        // showDeck(res.data.deck_id)
        // debugger
        // let info = `${res.data.deck_id}`
        console.log("HERE", res, fiveCards);
        // console.log("id:",res.data.deck_id);
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }

  // function showDeck(res) {
  //   let display = document.querySelector(".display");
  //   let fiveCardsImage;
  //   debugger

    // fiveCards.forEach(el => {
    //   debugger;
    //   return el.images;
    // });
    // fiveCardsImage = res.data.cards;
    // display.innerHTML = res;

    // if (!res.length) {
    // fireRequest()
    // } else {
    // reFireRequest()
    // }
  // }





});
