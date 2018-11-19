document.addEventListener("DOMContentLoaded", () => {

    function deckId() {
        axios
          .get("https://deckofcardsapi.com/api/deck/new/shuffle/?count=1")
          .then(response => {
              let deckID = response.data.deck_id;
            debugger;
          })
          .catch(err => {
            debugger;
          })
      };
      console.log(deckId());
      

    // function getCards() {
    //     axios
    //     .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
    //     debugger
    //     // .then(newcards => {
    //     //     let cDraw = response.data.cards.0
    //     //     debugger;
    //     // })
    //     // .catch(err => {
    //     // debugger;
    //     // });
    // }      
    // console.log(getCards())

    // let button = document.querySelector(".shuffle")
    // button.addEventListener("click", (deckId))
})


// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
// axios
// .get("https://deckofcardsapi.com/api/deck/deckId/draw/?count=2")
// .then(response => {
//     debugger;
// })


// axios
// .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
// debugger
// .then(response => {
//     let cards = response.
//     debugger;
// })
// .catch(err => {
// debugger;
// });