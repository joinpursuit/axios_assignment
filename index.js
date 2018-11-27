document.addEventListener("DOMContentLoaded", () => {
  let deckId; //called immediately (on refresh)
  let fiveCards;

  let button = document.querySelector(".button");
  let select = document.querySelector("select")
  fireRequest();
  selectTagFilling();

  button.addEventListener("click", reFireRequest);
  select.addEventListener("change", getMoreCards);

  function fireRequest() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        // console.log("RES:::",res, "ID:::",deckId, "ID:",res.data.deck_id, res.data);
        // N.B.: deckId = '' + res.data.deck_id = ${}
        return (deckId = res.data.deck_id);
      })
      .catch(err => {
        console.log("error: ", err);
      });
  }

  function reFireRequest() {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
      .then(res => {
        fiveCards = res.data.cards;
        let display = document.querySelector(".display");

        //----------------------------
        // 1. remove firstChild until display is empty. then append a new set of images.
        //----------------------------
        while (display.firstChild) {
          display.removeChild(display.firstChild)
        }
        // debugger

        fiveCards.forEach(card => {
          let img = document.createElement("img")
          img.src = card.image;
          display.appendChild(img)
        })

        //----------------------------------
        // 2. replace the old display with the new div:
        // ---------------------------------
        // let div = document.createElement("div");
        // div.classList.add("display");
        //
        // fiveCards.forEach(card => {
        //   let img = document.createElement("img")
        //   img.src = card.image;
        //   div.appendChild(img)
        // })
        //
        // document.body.replaceChild(div, display);

        //---------------------------------------
        // 3. remove() and appendChild() vs replaceChild
        //--------------------------------------
        let div = document.createElement("div");
        div.classList.add("display");

        fiveCards.forEach(card => {
          let img = document.createElement("img")
          img.src = card.image;
          div.appendChild(img)
        })

        display.remove();
        document.body.appendChild(div);
        // document.body.replaceChild(div, display);

        //------------------------------------
          console.log("HERE",res, "five",fiveCards);
        })
        .catch(err => {
          console.log("error: ", err);
        });
    }

    function selectTagFilling() {
      let select = document.querySelector("select");
      for (let i = 1; i <= 10; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerText = i;
        select.appendChild(option);
      }
    }

    // document.addEventListener("change", () => {
    //   let option = document.querySelector("option")
    //   let numCards = option.value;
    // })

    function getMoreCards() {

    }







});
