// document.addEventListener("DOMContentLoaded", () => {
//   function getId() {
//     axios
//       .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//       .then(res => {
//         console.log(res);
//         debugger;
//         let deckId = res.data.deck_id;
//         axios
//           .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
//           .then(innerRes => {
//             console.log(innerRes, "this");
//           })
//           .catch(err => {
//             console.log("ERROR ERROR ERROR ERROR");
//           });
//       });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  function getId() {
    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => {
        return res.data.deck_id;
      })
      .then(deckId => {
        axios
          .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
          .then(innerRes => {
            innerRes.data.cards.forEach(cards => {
              console.log(innerRes.data.cards);
            });
          });
      });
  }

  getId();
});

// function getCards() {
//   axios
//     .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res => {
//       showCard(res.data);
//       debugger;
//     })
//     .catch(err => {
//       debugger;
//     });
// }
//
// function showCard(arr) {
//   let ul = document.querySelector('.ul');
//   arr.forEach(card => {
//     let li = document.createElement('li');
//     li.innerText = ;
//     ul.appendChild(li);
//   });
// }
//
// let button = document.querySelector('.button');
// button.addEventListener('click', () => {
//   getCards();
// });
