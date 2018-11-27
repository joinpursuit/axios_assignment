//practice from youtube notes:

//https://www.youtube.com/watch?v=EhsYCBQ8TuA

//----------------------------------------
document.addEventListener("DOMContentLoaded", () => {


  let button = document.querySelector(".button");

  button.addEventListener("click", fireRequest)


  function fireRequest() {
    let data = {title: "kdjf ", body: "lakdjklf", }

    axios
    .post("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", data)
    .then(res => {
      console.log("hello", res);
      showMovies(res.deck_id)
      debugger
    })
    .catch(err => {
      debugger
      // error()
    })

  }

// function error() {
//   let h5 = document.querySelector("h5");
//   h5.innerText = "Error"
// }


function showMovies(arr) {
  let ul = document.querySelector("ul");
  arr.forEach(movie => {
    let li = document.createElement("li");
    li.innerText = movie.deck_id;
    ul.appendChild("li")
  })
}




})


//--------------------------------------

let deckId = '';
let info = '';
document.addEventListener("DOMContentLoaded", () => {

console.log("test");
  let button = document.querySelector(".button");
  // button.addEventListener("click", reFireRequest)
button.addEventListener("click", fireRequest)

  function fireRequest() {
    axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" //, deck_count//
  )
    .then(res => {
      deckId = res.data.deck_id;

      console.log("RES:::",res, "ID:::",deckId, "ID:",res.data.deck_id, res.data);

      // showDeck(res.data.deck_id)
      // let info = res.data.deck_id
      // console.log("RES:::",res, "ID:::",info, "ID:",res.data.deck_id, res.data);
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }




function reFireRequest() {
  axios
  .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5` //, deck_count//
)
  .then(res => {
    let fiveCards = res;
    // showDeck(res.data.deck_id)
// debugger
    // let info = `${res.data.deck_id}`
    console.log(res, info);
    console.log("id:",res.data.deck_id);
  })
  .catch(err => {
    console.log("error: ", err);
  })
}



function showDeck(res) {
  let display = document.querySelector(".display");
  display.innerHTML = res;

  // if (!res.length) {
    // fireRequest()
  // } else {
    // reFireRequest()
  // }

}



})
//----------------------------------------

console:
CHECK HERE
cards: Array(5)
0: {suit: "HEARTS", value: "6", code: "6H", images: {…}, image: "https://deckofcardsapi.com/static/img/6H.png"}
1: {suit: "HEARTS", value: "8", code: "8H", images: {…}, image: "https://deckofcardsapi.com/static/img/8H.png"}
2: {suit: "HEARTS", value: "5", code: "5H", images: {…}, image: "https://deckofcardsapi.com/static/img/5H.png"}
3: {suit: "CLUBS", value: "6", code: "6C", images: {…}, image: "https://deckofcardsapi.com/static/img/6C.png"}
4: {suit: "DIAMONDS", value: "9", code: "9D", images: {…}, image: "https://deckofcardsapi.com/static/img/9D.png"}

//-------------------------------------
function reFireRequest() {
  axios
  .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
  .then(res => {
    // deckId = res.data.deck_id;
    let fiveCards = res;
    // showDeck(res.data.deck_id)
// debugger
    // let info = `${res.data.deck_id}`
    console.log('CHECK HERE',res, fiveCards);
    // console.log("id:",res.data.deck_id);
  })
  .catch(err => {
    console.log("error: ", err);
  })
}
//------------------------------
N.B.: deckId = '' + res.data.deck_id = ${}
return deckId = `${res.data.deck_id}`;
//------------------------------
