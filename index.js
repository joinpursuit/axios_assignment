document.addEventListener('DOMContentLoaded', () => {

  creatNewDeck();

  let remaining = 52;

  let select = document.querySelector('select');
  for (let i = 0; i <= 10; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
  }

  let numToShow = 0;

  select.addEventListener('change', (event) => {
    numToShow = event.target.value;
  });

  let button = document.querySelector('button');
  button.addEventListener('click', ()=> {

      displaycards();

      if (remaining >= numToShow) {
        remaining -= numToShow;
        let p = document.querySelector('p');
        p.innerText = `Remaining card: ${remaining} / 52`;
      } else {
        remaining = 52;
        remaining -= numToShow;
        let p = document.querySelector('p');
        p.innerText = `This Is A New Deck!
        Remaining card: ${remaining} / 52`;
      }
    });

  let remainingInfo = document.querySelector('#remainingInfo');
  let p = document.createElement('p');
  p.innerText = `Remaining card: ${remaining} / 52`;
  remainingInfo.appendChild(p);
  let savedId;

  function creatNewDeck() {
    axios
    .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
      savedId = response.data.deck_id;
    })
    .catch(err => {
      console.log(err);
    });
  }

  function displaycards() {
    axios
    .get(`https://deckofcardsapi.com/api/deck/${savedId}/draw/?count=${numToShow}`)
    .then(response => {
        let remaining = response.data.remaining;

        if (remaining >= numToShow) {
          let ol = document.querySelector('ol');
          while (ol.firstChild) {
            ol.removeChild(ol.firstChild);
          }

          for (let i = 0; i < numToShow; i++) {
            let img = document.createElement('img');
            img.src = response.data.cards[i].image;
            ol.appendChild(img);
          }

        } else {
          creatNewDeck();
        }
      });
  }

});
