let deckId = '';
document.addEventListener("DOMContentLoaded", () => {

console.log("test");
  let button = document.querySelector(".button");
  button.addEventListener("click", reFireRequest())


  function fireRequest() {
    axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" //, deck_count//
  )
    .then(res => {
      deckId = res.data.deck_id;
      // showDeck(res.data.deck_id)

      // let info = res.data.deck_id
      console.log("RES:::",res, "ID:::",info, "ID:",res.data.deck_id);
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }




function reFireRequest() {
  axios
  .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5` //, deck_count//
)
  .then(res => {
    let fiveCards = res;
    // showDeck(res.data.deck_id)
// debugger
    // let info = `${res.data.deck_id}`
    console.log(res, info);
    console.log("id:",res.data.deck_id);
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
