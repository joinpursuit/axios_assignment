document.addEventListener("DOMContentLoaded", () => {
  axios
    .post("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", data)
    .then(response => {
      debugger;
    })

    .catch(err => {
      debugger;
    });
  let button = document.querySelector(".button");
  button.addEventListener("click", drawCards);
});
