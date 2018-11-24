document.addEventListener('DOMContentLoaded', () => {
  let deck_id;
  let currentCardsDrawn;
  let button = document.querySelector('button');
  let body = document.querySelector('body');
  let div = document.querySelector('.divContainer');

  axios
  .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => {
     return deck_id = response.data.deck_id;

  })

  function drawCards() {
    axios
    .get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`)
    .then(response => {
      currentCardsDrawn = response.data.cards;
      console.log('temp');
      renderingCards(currentCardsDrawn);
      console.log('finished');
    })
  }

  function renderingCards(arrObj) {
    innerDiv = document.createElement('div');
    console.log('1');
    div.appendChild(innerDiv);
    arrObj.forEach(el => {
      let img = document.createElement('img');
      img.src = el.image;
      innerDiv.appendChild(img);
    })
    button.addEventListener('click', () => {
      console.log('second');
      innerDiv.remove()
      // debugger
    });
    console.log('almost finished');

  }
  button.addEventListener('click', () => {
    console.log('hiiii');
    drawCards();
    console.log('??');
  });
})
