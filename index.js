
document.addEventListener("DOMContentLoaded", () => {
  let deckId;
  let button = document.querySelector(".button");

  fireRequest();
  button.addEventListener("click", reFireRequest);


  function fireRequest() {
    axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      // console.log("RES:::",res, "ID:::",deckId, "ID:",res.data.deck_id, res.data);
      N.B.: deckId = '' + res.data.deck_id = ${}
      return deckId = `${res.data.deck_id}`;
    })
    .then(res => {
      reFireRequest()
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }


  function reFireRequest() {
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
    .then(res => {
      // deckId = res.data.deck_id;
      let fiveCards = res;
      // showDeck(res.data.deck_id)
  // debugger
      // let info = `${res.data.deck_id}`
      console.log('CHECK HERE',res, fiveCards);
      // console.log("id:",res.data.deck_id);
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }



function showDeck(res) {
  let display = document.querySelector(".display");
  display.innerHTML = res;

  // if (!res.length) {
    // fireRequest()
  // } else {
    // reFireRequest()
  // }

}



})
