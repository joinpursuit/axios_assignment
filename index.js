document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      //debugger;
    })

    .catch(err => {
      //debugger;
    });
  let button = document.querySelector(".button");
  button.addEventListener("click", drawCards);
});
