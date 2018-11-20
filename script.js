document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button")

  let deck = {
    id: '',
    cards: [],
    remaining: 52
  }

  // const discard_id;
  // const shuffleDeck = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
  // const reshuffleDeck = `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`;
  // const discard = `https://deckofcardsapi.com/api/deck/${discard_id}/pile/<<pile_name>>/add/?cards=${discard_cards}`;

    const fireRequest = () => {

      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
          deck['id'] = response['data']['deck_id']
          debugger
        })

        .catch(err => {
          debugger
        })
    }

    button.addEventListener("click", () => {

      axios
      .get(`https://deckofcardsapi.com/api/deck/${deck['id']}/draw/?count=2`)
      console.log(fireRequest(`https://deckofcardsapi.com/api/deck/${deck['id']}/draw/?count=2`));

      // console.log(drawCards);
    })


})
