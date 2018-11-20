document.addEventListener("DOMContentLoaded", () => {
  // function getMovies() {
// function getId(){
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        return res.data.deck_id
      })
      .then(deckId => {
        let button = document.querySelector(".mybutton");
        button.addEventListener("click", () => {
          axios
          .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
          .then(res2 => {
            res2.data.cards.forEach(card => {
              let img = document.createElement("img");
              img.src = card.image;
              document.body.appendChild(img)
              
            })

          })
        });


      })
    })

    // console.log(deckId)

  //
  // function drawFiveCards() {
  //   // getId()
  //   axios
  //   .get("https://deckofcardsapi.com/api/deck/new/draw/?count=5")
  //   .then(res => {
  //     document.body.appendChild(res)
  //   })
  //   .catch(err => {
  //   })
    // let ul = document.querySelector(".myul");
    // arr.forEach(movie => {
    //   let li = document.createElement("li");
    //   li.innerText = movie.title;
    //   ul.appendChild(li);
    // });
  // }


// });
