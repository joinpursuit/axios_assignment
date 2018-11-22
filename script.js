document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  let body = document.querySelector('body');

  // const discard_id;
  // const shuffleDeck = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
  // const reshuffleDeck = `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`;
  // const discard = `https://deckofcardsapi.com/api/deck/${discard_id}/pile/<<pile_name>>/add/?cards=${discard_cards}`;

const getHand = (deck_id) => {
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`)
      .then(response => {
        let deck = response['data']['cards'];

          deck.forEach(card => {
            let div;
            if (div === undefined) {
              div = document.createElement('div');
              let img = document.createElement('img');
              img.src = card['image'];
                body.appendChild(div);
                div.appendChild(img);
            } else {
              clearHand();
            }
          })

    })
}

const clr_getHand = () => {
  clearHand();
  drawHand();
}

// const drawHand = () => {
//   let div = document.createElement('div');
//   let img = document.createElement('img');
//   img.src = card['image'];
//     body.appendChild(div);
//     div.appendChild(img);
// }

const clearHand = () => {
  let div = document.querySelector('div');
  if (div) {
    div.remove();
  }
}

axios
  .get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(response => {
      return response['data']['deck_id']
    }).then(deck_id => {

      button.addEventListener('click', () => {
        getHand(deck_id);

      })
    })

})
