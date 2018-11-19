document.addEventListener("DOMContentLoaded", () => {
  let deckId;
  let button = document.querySelector(".button1");
  function getId() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => {
        deckId = response.data.deck_id;
        return deckId;
      });
  }

  function drawCards = () => {

  }

  getId();

  button.addEventListener("click", () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      // https://deckofcardsapi.com/api/deck/~deck_id~/draw/?count=5
      .then(innerResponse => {
        console.log(innerResponse, "innerres");
      })
      .catch(err => {
        console.log(err, "this");
      });
  });
});

// response.data.deck_id

// })

/*document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button")
  button.addEventListener("click", fireRequest)

    function fireRequest() {
      let data = { title: 'Trying it out', body: "ljdsflkadsjklfjsadklfjkl" };

      axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
        .then(response => {
          debugger
          // return response.json();
        })

        .catch(err => {
          debugger
        })
    }


})*/
