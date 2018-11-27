document.addEventListener("DOMContentLoaded", () => {

let button = document.querySelector(".button")
let oldId = ""
let picked = []
let innerCards = null;
let numCards = 0; ;

button.addEventListener("click", getCards)
newDeck()
  function newDeck() {
    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then ((response) => {
        oldId = response.data.deck_id;
      })
      .catch((error) => {
        console.log(error);
      });
    }

    let select = document.querySelector("select")
    select.addEventListener("change", (event) => {
      numCards = event.target.value
    })

    function getCards() {
      axios
      .get(`https://deckofcardsapi.com/api/deck/${oldId}/draw/?count=${numCards}`)
      .then ((response) => {
        picked = response.data.cards
        img(picked)
      })
      .catch((error) => {
        console.log(error)
      })
    }

      function img(array) {
        let cards = document.querySelector(".cards")
        if (innerCards !== null) {
          innerCards.remove()
        }
        innerCards = document.createElement("div")
        innerCards.classList.add("innerCards")
        cards.appendChild(innerCards)

        for (let i=0; i < array.length; i++) {
          let image = document.createElement("img")
          image.src = array[i].image
          innerCards.appendChild(image)
        }
      }

})
