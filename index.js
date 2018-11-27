document.addEventListener("DOMContentLoaded", () => {
  let deckId;
  // let cardsImages;
  let button = document.querySelector(".button1");
  let ptag = document.querySelector(".ptag");
  let select = document.querySelector(".selectClass");
  let testDiv = document.querySelector(".test1");
  let numCard;
  function getId() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => {
        deckId = response.data.deck_id;
        return deckId;
      });
  }
  //loop start
  for (let i = 0; i <= 10; i++) {
    let option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);
    select.addEventListener("change", event => {
      numCard = event.target.value;
      console.log(numCard, "this");
    });
  }
  //loop end
  console.log(numCard, "outside looop");

  getId();

  button.addEventListener("click", () => {
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numCard}`
      )
      // .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      // https://deckofcardsapi.com/api/deck/~deck_id~/draw/?count=5
      .then(innerResponse => {
        let cards = innerResponse.data.cards;
        while(ptag.firstChild) {
          ptag.removeChild(ptag.firstChild)
        }
        if (!ptag.childNodes.length) {
          cards.forEach(card => {
            let cardsImages = card.image;
            let image = document.createElement("img");
            image.setAttribute("src", cardsImages);
            ptag.appendChild(image);
          });
          // })
        // } else {
        //   // document.ptag.replaceChild(ptag)
        //
        //   ptag.removeChild(ptag.childNodes[0]);
        }

        // innerResponse.data.cards[0].images.png;
        // console.log(innerResponse, "innerres");
      })
      .catch(err => {
        console.log(err, "this");
      });
  });
});
