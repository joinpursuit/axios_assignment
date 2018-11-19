let $ = document;
let deck = {
  id: undefined,
  hand: [],
  remaining: 52,
};
(() => {
  axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
      deck.id = response.data.deck_id;
      deck.remaining = response.data.remaining;
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
  createAddForm();
  // createAddButton();
};

const createAddForm = ()=> {
  let content = $.querySelector('.content');
  let form = $.createElement('form');
  let select = $.createElement('select');
  let input = $.createElement('input');
  input.type = 'submit';
  input.value = 'Deal Cards';
  input.id = 'form-button';
  addOptions(select);
  addButtonListener(form);
  form.appendChild(select);
  form.appendChild(input);
  content.appendChild(form);
};

const addOptions = (select)=> {
  for (let i = 1; i <= 10; i++) {
    let option = $.createElement('option');
    option.value = i;
    option.innerText = i;
    select.appendChild(option);
  }
};

const addButtonListener = (form)=> {
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let s = $.querySelector('select');
    dealCards(s.value);
  });
};

// const createAddButton = () => {
//   let content = $.querySelector('.content');
//   let button = $.createElement('button');
//   // button.value = 'Deal Cards';
//   button.innerText = 'Deal Cards';
//   content.appendChild(button);
//   button.addEventListener('click', (e) => {
//     // e.preventDefault();
//     dealCards(5);
//   });
// };

const dealCards = (n) => {
  axios.get(`https://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=${n}`)
    .then(response => {
      deck.hand = response.data.cards;
      deck.remaining = response.data.remaining;
      return deck.hand;
    })
    .then(deckHand => {
      clearAddHand();
    })
    .catch(err => {
      console.log(err);
    });
};

const clearAddHand = () => {
  clearHand();
  addHand();
};

const clearHand = () => {
  let handContainer = $.querySelector('.hand-container');
  if (handContainer) {
    handContainer.remove();
  }
};

const addHand = () => {
  let content = $.querySelector('.content');
  let handContainer = $.createElement('div');
  handContainer.classList.add('hand-container');
  let hand = deck.hand;
  hand.forEach(card => {
    let img = $.createElement('img');
    // console.log(card, card.image);
    img.src = card.image;
    handContainer.appendChild(img);
  });
  content.appendChild(handContainer);
  updateRemaining();
};

const updateRemaining = () => {
  let h1 = $.querySelector('h1');
  h1.innerText = `Cards Remaining: ${deck.remaining}/52`;
};
