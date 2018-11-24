document.addEventListener('DOMContentLoaded', () => {
  let deck_id;
  let currentCardsDrawn;
  let button = document.querySelector('button');
  let body = document.querySelector('body');
  let div = document.querySelector('.divContainer');
  let select = document.querySelector('select');
  let numCards = 1;

  axios
  .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => {
     return deck_id = response.data.deck_id;
  })
  .then(dropDown)

  function drawCards() {
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCards}`)
    .then(response => {
      currentCardsDrawn = response.data.cards;
      renderingCards(currentCardsDrawn);
    })
  }

  function renderingCards(arrObj) {
    innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    arrObj.forEach(el => {
      let img = document.createElement('img');
      img.src = el.image;
      innerDiv.appendChild(img);
    })
    button.addEventListener('click', () => {
      innerDiv.remove()
    });

  }

  function dropDown() {
    for (let i = 1; i <= 10; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.innerText = i;
      select.appendChild(option);
    }
  }

  select.addEventListener('change', (event) => {
    numCards = event.target.value;
  })

  button.addEventListener('click', drawCards);
})
