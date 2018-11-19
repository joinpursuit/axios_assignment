let $ = document;
let deck = {
    id: undefined,
    hand: [],
  };
(() => {
  axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
      deck.id = response.data.deck_id;
    })
    .catch(err => {
      console.log(err);
    });
})();

$.addEventListener('DOMContentLoaded', () => {
  loadDeck();
});

const loadDeck = () => (new Promise(resolve => (deckLoading())));

const deckLoading = () => (deck.id ? deckLoaded() : window.requestAnimationFrame(deckLoading));

const deckLoaded = () => {
  let h1 = $.querySelector('h1');
  h1.innerText = 'Deck Loaded';
  createAddButton();
};

const createAddButton = () => {
  let content = $.querySelector('.content');
  let button = $.createElement('button');
  // button.value = 'Deal Cards';
  button.innerText = 'Deal Cards';
  content.appendChild(button);
  button.addEventListener('click', (e)=> {
    // e.preventDefault();
    dealCards(5);
  });
};

const dealCards = (n) => {
  axios.get(`https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=${n}`)
    .then(response => {
      deck.hand = response.data.cards;
      console.log(deck.hand);
    })
    .catch(err => {
      console.log(err);
    });
};
