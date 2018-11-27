//practice from youtube notes:

//https://www.youtube.com/watch?v=EhsYCBQ8TuA

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
