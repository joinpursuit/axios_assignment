document.addEventListener("DOMContentLoaded", () => {
  let ul = document.querySelector(".myul");
  function getCards(res) {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${res}/draw/?count=5`)
      .then(res => {
        res.data.cards.forEach(card => {
          let img = document.createElement("img");
          img["src"] = card.image;
          ul.appendChild(img);
        });
      });
  }

  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
      return res.data.deck_id;
    })
    .then(deckId => {
      let button = document.querySelector(".mybutton");
      button.addEventListener("click", () => {
        getCards(deckId);
        if (ul.childNodes.length > 0) {
          ul.innerHTML = "";
        }
      });
    });
});
// function showMovies(arr) {
//   let ul = document.querySelector(".myul");
//   arr.forEach(movie => {
//     let li = document.createElement("li");
//     li.innerText = movie.title;
//     ul.appendChild(li);
//   });
// }

// button.addEventListener("click", () => {
//   showCards();
// });
// button.addEventListener("click", fireRequest);
