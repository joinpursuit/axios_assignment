document.addEventListener("DOMContentLoaded", () => {

console.log("test");
  let button = document.querySelector(".button");

  button.addEventListener("click", fireRequest)


  function fireRequest() {

    axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" //, deck_count//
  )
    .then(res => {

      showDeck(res.data.deck_id)

let info = `${res.data.deck_id}`

console.log(res, info);
console.log(info);
console.log("id:",res.data.deck_id);
      // debugger
      // return res.data.deck_id
    })
    .catch(err => {
      console.log("error: ", err);
      // debugger
      // error()
    })

  }

function showDeck(res) {
  let display = document.querySelector(".display");
  // arr.forEach(movie => {

  // display.innerHTML = res.deck_id;

  // console.log("here", typeof res.deck_id);

  display.innerHTML = res;
  // debugger

  // ul.appendChild("li")
  // })
}







})
